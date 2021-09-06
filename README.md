# 2600Hz - Commio
## _Native Theme Library_

Library that contains all sharable utilities and configuration files, written in Javascript

## Installation

```sh
yarn add @dfhernandez/sds-native-theme
```

## Usage

```js
import { darkTheme, lightTheme } from '@dfhernandez/sds-native-theme';

// ...

<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
```

## Development

This project requires [Node.js](https://nodejs.org/) v14+ to run.

Using *.nvmrc* file helps to normalize node version used by all maintainers.
If you are required to use version specified in this file, run these commands.

```bash
nvm use
nvm install
```

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) v1+ to install dependencies and devDependencies.

```bash
yarn install
yarn
```

**Create symlink**
Run the following command on package root folder, so you can consume on an app locally

```bash
yarn link
```

**Watch project**
Build package whenever there is a change
```bash
yarn watch
```

**Consume the package**
`Both projects must be placed on same folder, otherwise won't work`
```bash
yarn link @dfhernandez/sds-native-theme
```

Build the package
_Automatically will build the project_
```bash
yarn build
```

## Utilities

Format code using [Eslint](https://eslint.org/)

```bash
yarn run lint:fix
```

Format code using [Prettier](https://prettier.io/)
```bash
yarn run format
```

Format code using [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)
```bash
yarn run prettify
```

Check [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) on files
```bash
yarn run typescript
```

Run full check
```bash
yarn run full-check
```

## Tech
Components library uses a number of open source projects to work properly:

- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) - Strongly typed programming language which builds on JavaScript
- [NodeJs](https://nodejs.org/es/) - Allows execute javascript scripts on the terminal
- [Styled-Components](https://styled-components.com/) - Library to style react components

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

**Commits**
Commits must follow [conventional commit format](https://conventionalcommits.org/)
Make sure your messages look like the following examples
```
feat: Adding new badge component
fix: Touchable component not being exported correctly
fix!: Drop support for Typescript
```
_Note that the last one will generate a Major commit. It has the same result as adding a breaking change footer_

Follow [Semantic Versioning 2.0.0](https://semver.org/) to update project version.

[Release-It](https://github.com/release-it/release-it) will take care of versioning, you just have to give the correct type to commit:

- **fix** - to indicate a bug fix (PATCH) ex . v0.0.1
- **feat** - to indicate a new feature (MINOR) ex. v0.1.0
- **chore** - for updates that do not require a version bump (.gitignore, comments, etc.)
- **docs** - for updates to the documentation
- **BREAKING CHANGE** - regardless of type, indicates a Major release (MAJOR) ex. v1.0.0

Visit [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

**Make a release**
Run following command after your last commit/amend. Then answer with Y/N the prompt
```bash
yarn release
```

## License

MIT
