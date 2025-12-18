import { execSync } from "node:child_process";
import * as path from "node:path";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		"restore-from-main.restoreFromMain",
		async (uri: vscode.Uri) => {
			if (!uri) {
				vscode.window.showErrorMessage("No file selected");
				return;
			}

			const filePath = uri.fsPath;
			const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);

			if (!workspaceFolder) {
				vscode.window.showErrorMessage("File is not in a workspace");
				return;
			}

			try {
				// Get relative path from workspace root
				const relativePath = path.relative(
					workspaceFolder.uri.fsPath,
					filePath
				);

				// Execute git restore command
				execSync(`git restore --source=main "${relativePath}"`, {
					cwd: workspaceFolder.uri.fsPath,
					stdio: "pipe"
				});

				vscode.window.showInformationMessage(
					`✓ Restored ${path.basename(filePath)} from main`
				);
			} catch (error) {
				const errorMsg = error instanceof Error ? error.message : String(error);
				vscode.window.showErrorMessage(`Failed to restore file: ${errorMsg}`);
			}
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
