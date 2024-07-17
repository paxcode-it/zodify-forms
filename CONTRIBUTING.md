# Contributing to next-safe-action

Code contributions are very welcome, so if you decide to help improve the library code, thank you! First of all, though, please read the guidelines below.

## Information about the project

This is a monorepo, that uses:

- [pnpm](https://pnpm.io/) as package manager;
- [Turborepo](https://turbo.build/repo) as build system;
- [TypeScript](https://www.typescriptlang.org/) as primary language;
- [ESLint](https://eslint.org/) as linter;
- [Prettier](https://prettier.io/) as formatter;
- [Husky](https://github.com/typicode/husky) as Git hooks manager;
- [Commitizen](https://github.com/commitizen/cz-cli) as commit message manager;
- [Commitlint](https://commitlint.js.org/) as commit message linter;
- [semantic-release](https://github.com/semantic-release/semantic-release) as release manager.

### What you need to install

- `git`;
- Node.js LTS version specified in [.nvmrc](./.nvmrc). Highly recommended to use [nvm](https://github.com/nvm-sh/nvm) for easy management of Node.js versions;
- [`pnpm`](https://pnpm.io/installation) as package manager.
- Code editor (duh)

### Repository structure

- [`packages/*`](./packages/): contains the source code of the libraries;
- [`apps/playground`](./apps/playground): contains the source code of the Next.js playground app, which is a basic implementation of the library;

## How to contribute

### Getting started

Before opening a pull request, please follow the general rule of **opening an issue or discussion first**, using the [issue templates](https://github.com/paxcode-it/zodify-forms/issues/new/choose), that will guide you through the process. You can avoid opening a new issue or discussion if:

- You're correcting a trivial error, like a typo;
- The issue or discussion for the bug you're fixing/feature you're implementing with the PR is already open.

### Development setup

After forking, cloning the repository and optionally creating a new branch from the base one, you can install the dependencies using `pnpm` in the project root directory:

```sh
pnpm install
```

Then, you can run the `build:lib` command to rebuild the library code, and then test it in the playground app:

```sh
pnpm run build:lib && pnpm run pg
```

### Committing changes

Once you're done with your code changes, you can finally commit and push them to the remote repository.

Committing is very easy, thanks to both `commitizen` and `commitlint` utilities. Each commit message **must** follow the [Conventional Commits](https://www.conventionalcommits.org/) format, to allow for automated release management via `semantic-release`. You can commit your code using:

```sh
git commit
```

This command will bring up the `commitizen` interface to help you write a proper commit message, without also bringing up the default editor. If you want to, you can set up an alias for it, to make it easier to type and remember. The commit message is then run through `commitlint` to validate it.
