"use strict";

var _ = require("lodash");
var vile = require("@forthright/vile");

var ALL_OUTDATED_GEM_LINES = /\*\s.*/ig;
var OUTDATED_GEM_NAME = /\*\s+([^\s]*)/;
var INSTALLED_VERSION = /installed\s+([^\,\)]*)(\,|\))/;
var LATEST_VERSION = /newest\s+([^\,\)]*)(\,|\))/;
var REQUESTED_VERSION = /requested\s+([^\,\)]*)(\,|\))/;

var bundler_outdated = function bundler_outdated() {
  return vile.spawn("bundle", { args: ["outdated"] });
};

var parse = function parse(regex, text_line) {
  var m = text_line.match(regex);
  return m && m.length > 1 ? m[1] : "?";
};

var vile_issue = function vile_issue(text_line) {
  var name = parse(OUTDATED_GEM_NAME, text_line);
  var current = parse(INSTALLED_VERSION, text_line);
  var latest = parse(LATEST_VERSION, text_line);
  var requested = parse(REQUESTED_VERSION, text_line);
  var signature = "bundler-outdated::" + name + "::" + current + "::" + latest;
  var message = latest + " > " + current;
  if (requested != "?") message += " (requested: " + requested + ")";

  return vile.issue({
    type: vile.DEP,
    path: "Gemfile",
    title: name + " is outdated",
    message: message,
    signature: signature,
    dependency: {
      name: name,
      current: current,
      latest: latest
    }
  });
};

var parse_notices = function parse_notices(outdated_text) {
  return outdated_text.match(ALL_OUTDATED_GEM_LINES) || [];
};

var into_issues = function into_issues(spawn_data) {
  var outdated_text = _.get(spawn_data, "stdout", "");
  return _.map(parse_notices(outdated_text), vile_issue);
};

var punish = function punish(plugin_config) {
  return bundler_outdated().then(into_issues);
};

module.exports = {
  punish: punish
};