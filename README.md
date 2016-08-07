# vile-bundler-outdated [![Circle CI](https://circleci.com/gh/forthright/vile-bundler-outdated.svg?style=svg&circle-token=c85edd896691e55d036186ac2231b8ab3d396947)](https://circleci.com/gh/forthright/vile-bundler-outdated)

[![score-badge](https://vile.io/~/brentlintner/vile-bundler-outdated/badges/score?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/~/brentlintner/vile-bundler-outdated) [![security-badge](https://vile.io/~/brentlintner/vile-bundler-outdated/badges/security?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/~/brentlintner/vile-bundler-outdated) [![coverage-badge](https://vile.io/~/brentlintner/vile-bundler-outdated/badges/coverage?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/~/brentlintner/vile-bundler-outdated) [![dependency-badge](https://vile.io/~/brentlintner/vile-bundler-outdated/badges/dependency?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/~/brentlintner/vile-bundler-outdated)

A [vile](https://vile.io) plugin for keeping up to date [bundler](https://github.com/bundler/bundler) dependencies.

## Requirements

- [nodejs](http://nodejs.org)
- [npm](http://npmjs.org)
- [ruby](http://nodejs.org)
- [rubygems](http://rubygems.org)

## Installation

Currently, you need to have `bundler` installed manually.

Example:

    npm i vile-bundler-outdated
    gem install bundler

## Architecture

This project is currently written in JavaScript,
and a hacky CLI regex parse is currently used until
a better option can be implemented.

- `bin` houses any shell based scripts
- `src` is es6+ syntax compiled with [babel](https://babeljs.io)
- `lib` generated js library
- `test` any test related code written in coffeescript
- `.test` generated js test code

## Hacking

    cd vile-bundler-outdated
    npm install
    gem install bundler
    npm run dev
    npm test
