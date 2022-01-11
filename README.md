# MoonDAO website

This website is built using the [Docusaurus 2](https://v2.docusaurus.io/) static website generator.

[https://moondao.com](https://moondao.com)

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Deployment is automatic on each merge into the `main` branch or on a direct push into `main`.

The `test-deploy` Github Action workflow will run on every pull request into `main` to ensure that the site will still build. The `deploy` workflow will run when a pull request is merged into main. This will push the build to the `gh-pages` branch, deploying the changes to production.

## How to contribute

If you are a repository contributor:
1. Clone the repository on your local machine.
2. Make a feature branch.
3. Make cool changes on your feature branch.
3. Push your branch to Github.
4. Make a pull request into the `main` branch.

You can also make a pull request from a Github fork if you don't have permission to create a branch on the repository.

A repository administrator will review and merge your changes.

If you would like to be an official repository contributor, head over to our [Discord](https://discord.gg/5nAu7K9aES) and say hi in the #introduce-yourself channel.

## See a problem?

Open a Github issue and we'll take a look :-)
