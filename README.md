# vscode-ext-restore-from-main
An very tiny vscode extension that allows users to revert a selected file from main branch.

## Installation
Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/) by searching for "vscode-ext-restore-from-main" or use:
```
code --install-extension smallstack.vscode-ext-restore-from-main
```

## Development & Contributing
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to build the extension
4. Open the folder in VS Code and press `F5` to test in debug mode
5. Make your changes and submit a pull request

## Publishing
To publish a new version to the VS Code Marketplace:
1. Update the version in `package.json`
2. Run `npm run compile` to build
3. Install `vsce`: `npm install -g @vscode/vsce`
4. Login: `vsce login smallstack`
5. Publish: `vsce publish`
