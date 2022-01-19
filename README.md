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
4. Push your branch to Github.
5. Make a pull request into the `main` branch.

You can also make a pull request from a Github fork if you don't have permission to create a branch on the repository.

A repository administrator will review and merge your changes.

If you would like to be an official repository contributor, head over to our [Discord](https://discord.gg/5nAu7K9aES) and say hi in the #introduce-yourself channel.

## Internationalization

To run the site for local development with a different locale, pass the locale flag at startup. Each locale is hosted as a different app so you cannot change the locale without stopping and starting the development server.

```
yarn run start -- --locale zh-Hans
```

Ensure that all text tags are wrapped in the Translate element as shown here: `<Translate>Some Text<Translate>`.

You will need to generate the translation files after new text is added to the site. This is done by running the following command for each locale:

```
yarn run write-translations -- --locale zh-Hans
```

This command will update the `i18n/zh-Hans/code.json` file which contains the translations for Chinese. The file contains a JSON object where keys are in English and the `message` field is the translated text. The command will intitialize the `message` field with the English text. Translators should update this text to the translated message.

For example, the message:

```json
"Send a MoonDAO member to space": {
  "message": "Send a MoonDAO member to space"
},
```

should be updated to be:

```json
"Send a MoonDAO member to space": {
  "message": "将 MoonDAO 成员送入太空"
},
```

Create a PR and send it for review after updating the code.json file.

See the [Docusaurus documentation](https://docusaurus.io/docs/i18n/tutorial) for more details

## See a problem?

Open a Github issue and we'll take a look :-)
