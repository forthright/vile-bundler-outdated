Promise = require "bluebird"

issues = [
  {
    path: "Gemfile",
    title: "foo is outdated",
    message: "2.2.1 > 1.5.0 (requested: ~> 1.5.0)",
    type: "dependency",
    dependency: {
      name: "foo",
      current: "1.5.0",
      latest: "2.2.1"
    }
    signature: "bundler-outdated::foo::1.5.0::2.2.1"
  }
  {
    path: "Gemfile",
    title: "capybara is outdated",
    message: "2.6.2 > 2.5.0",
    type: "dependency",
    dependency: {
      name: "capybara",
      current: "2.5.0",
      latest: "2.6.2"
    }
    signature: "bundler-outdated::capybara::2.5.0::2.6.2"
  }
]

bundler_outdated_text = '''
Fetching gem metadata from https://rails-assets.org/.....
Fetching version metadata from https://rails-assets.org/..
Fetching gem metadata from http://rubygems.org/.......
Fetching version metadata from http://rubygems.org/...
Fetching dependency metadata from http://rubygems.org/..
Resolving dependencies........................................................

Outdated gems included in the bundle:
  * foo (newest 2.2.1, installed 1.5.0, requested ~> 1.5.0) in group "default"
  * capybara (newest 2.6.2, installed 2.5.0) in groups "development, test"

'''

setup = (vile) ->
  vile.spawn.returns new Promise (resolve) ->
    resolve {
      code: 0
      stdout: bundler_outdated_text
      stderr: ""
    }

module.exports =
  issues: issues
  setup: setup
