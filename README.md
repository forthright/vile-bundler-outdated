# vile-bundler-outdated [![Circle CI](https://circleci.com/gh/forthright/vile-bundler-outdated.svg?style=shield&circle-token=c85edd896691e55d036186ac2231b8ab3d396947)](https://circleci.com/gh/forthright/vile-bundler-outdated) [![score-badge](https://vile.io/api/v0/projects/vile-bundler-outdated/badges/score?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-bundler-outdated) [![coverage-badge](https://vile.io/api/v0/projects/vile-bundler-outdated/badges/coverage?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-bundler-outdated) [![dependency-badge](https://vile.io/api/v0/projects/vile-bundler-outdated/badges/dependency?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-bundler-outdated)

A [vile](https://vile.io) plugin for tracking outdated Ruby gems (via [Bundler](https://github.com/bundler/bundler)).

## Requirements

- [Node.js](http://nodejs.org)
- [Ruby](https://www.ruby-lang.org)

## Installation

Currently, you need to have `bundler` installed manually.

Example:

    npm i -D vile vile-bundler-outdated
    gem install bundler

## Versioning

This project uses [Semver](http://semver.org).

## Licensing

This project is licensed under the [MPL-2.0](LICENSE) license.

Any contributions made to this project are made under the current license.

## Contributions

Current list of [Contributors](https://github.com/forthright/vile-bundler-outdated/graphs/contributors).

Any contributions are welcome and appreciated!

All you need to do is submit a [Pull Request](https://github.com/forthright/vile-bundler-outdated/pulls).

1. Please consider tests and code quality before submitting.
2. Please try to keep commits clean, atomic and well explained (for others).

### Issues

Current issue tracker is on [GitHub](https://github.com/forthright/vile-bundler-outdated/issues).

Even if you are uncomfortable with code, an issue or question is welcome.

### Code Of Conduct

By participating in this project you agree to our [Code of Conduct](CODE_OF_CONDUCT.md).

### Maintainers

- Brent Lintner - [@brentlintner](http://github.com/brentlintner)

## Architecture

This project is currently written in JavaScript,
and a hacky CLI regex parse is currently used until
a better option can be implemented.

- `bin` houses any shell based scripts
- `src` is es6+ syntax compiled with [Babel](https://babeljs.io)
- `lib` generated js library
- `test` any test related code written in coffeescript
- `.test` generated js test code

## Developing

    cd vile-bundler-outdated
    npm install
    gem install bundler
    npm run dev
    npm test
