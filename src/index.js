let _ = require("lodash")
let vile = require("@brentlintner/vile")

const ALL_OUTDATED_GEM_LINES = /\*\s.*/ig
const OUTDATED_GEM_NAME = /\*\s+([^\s]*)/
const INSTALLED_VERSION = /installed\s+([^\,\)]*)(\,|\))/
const LATEST_VERSION = /newest\s+([^\,\)]*)(\,|\))/
const REQUESTED_VERSION = /requested\s+([^\,\)]*)(\,|\))/

let bundler_outdated = () =>
  vile.spawn("bundle", { args: [ "outdated" ] })

let parse = (regex, text_line) => {
  let m = text_line.match(regex)
  return m && m.length > 1 ? m[1] : "?"
}

let vile_issue = (text_line) => {
  let name = parse(OUTDATED_GEM_NAME, text_line)
  let current = parse(INSTALLED_VERSION, text_line)
  let latest = parse(LATEST_VERSION, text_line)
  let requested = parse(REQUESTED_VERSION, text_line)
  let signature = `bundler-outdated::${name}::${current}::${latest}`
  let message = `${latest} > ${current}`
  if (requested != "?") message += ` (requested: ${requested})`

  return vile.issue({
    type: vile.DEP,
    path: "Gemfile",
    title: `${name} is outdated`,
    message: message,
    signature: signature,
    dependency: {
      name: name,
      current: current,
      latest: latest
    }
  })
}

let parse_notices = (outdated_text) =>
  outdated_text.match(ALL_OUTDATED_GEM_LINES) || []

let into_issues = (outdated_text) =>
  _.map(parse_notices(outdated_text), vile_issue)

let punish = (plugin_config) =>
  bundler_outdated().then(into_issues)

module.exports = {
  punish: punish
}
