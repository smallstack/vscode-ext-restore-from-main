# Restore from main VSCode extension
An very tiny vscode extension that allows users to revert a selected file from main branch. It just does `git restore --source=main "${filePath}"`.

## Installation

### VS Code
Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/) by searching for "restore-from-main" or use:
```
code --install-extension smallstack.restore-from-main
```

### VSCodium / open-source builds
VSCodium and other open-source VS Code forks use the [Open VSX Registry](https://open-vsx.org/) instead of the Microsoft marketplace. Search for "restore-from-main" in the Extensions view, or install from the CLI:
```
codium --install-extension smallstack.restore-from-main
```
You can also download the `.vsix` from the [Open VSX page](https://open-vsx.org/extension/smallstack/restore-from-main) and install it via **Extensions → … → Install from VSIX…**.

## Development & Contributing
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to build the extension
4. Open the folder in VS Code and press `F5` to test in debug mode
5. Make your changes and submit a pull request

## Publishing

The extension is published to two registries: the **VS Code Marketplace** (for VS Code) and the **Open VSX Registry** (for VSCodium and other open-source builds).

### Automated (recommended)
Publishing to both marketplaces runs automatically via the [`Publish Extension`](.github/workflows/publish.yml) GitHub Actions workflow when you publish a GitHub Release (or trigger it manually from the Actions tab).

One-time repository setup (**Settings → Secrets and variables → Actions**):
- `OVSX_PAT` — an [Open VSX access token](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions#how-to-publish-an-extension). The `smallstack` namespace must exist on Open VSX and your account must be a member; create it once with `npx ovsx create-namespace smallstack -p <token>`.
- `VSCE_PAT` — a VS Code Marketplace token (optional; the Marketplace step is skipped if unset).

### Manual
1. Update the version in `package.json`.
2. Build and package: `npm run package` (produces `restore-from-main.vsix`).
3. Publish to the VS Code Marketplace: `npm run publish:vsce` (or `npx vsce publish`).
4. Publish to Open VSX / VSCodium: `OVSX_PAT=<token> npm run publish:ovsx`.

Both `vsce` and `ovsx` are included as dev dependencies, so no global install is required.
