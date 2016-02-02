mimus = require "mimus"
Promise = require "bluebird"
bundler_outdated = mimus.require "./../lib", __dirname, []
chai = require "./helpers/sinon_chai"
util = require "./helpers/util"
vile = mimus.get bundler_outdated, "vile"
expect = chai.expect

# TODO: write integration tests for spawn -> cli
describe "running bundler outdated", ->
  after mimus.restore
  afterEach mimus.reset

  beforeEach ->
    mimus.stub vile, "spawn"
    util.setup vile

  it "calls bundler outdated with json output", (done) ->
    bundler_outdated
      .punish {}
      .should.be.fulfilled.notify ->
        setTimeout ->
          vile.spawn.should.have.been
            .calledWith "bundler", args: [ "outdated" ]
          done()

  it "converts bundler outdated text output to issues", ->
    bundler_outdated
      .punish {}
      .should.eventually.eql util.issues

  it "handles an empty response", ->
    vile.spawn.reset()
    vile.spawn.returns new Promise (resolve) -> resolve ""

    bundler_outdated
      .punish {}
      .should.eventually.eql []
