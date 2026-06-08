const vscode = require("vscode");

/**
 * Called when the extension is activated. Registers the two-go.newTest
 * command, which inserts a small two-go API test skeleton at the cursor.
 *
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const disposable = vscode.commands.registerCommand("two-go.newTest", function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage("Open a file before inserting a two-go test skeleton.");
      return;
    }

    const skeleton = new vscode.SnippetString(
      [
        'const { test } = require("node:test");',
        'const { go } = require("two-go");',
        "",
        'test("${1:GET users returns the first user}", async () => {',
        '  await go("${2:https://api.example.com}")',
        '    .get("${3:/users}")',
        "    .expectStatus(${4:200})",
        '    .expectJson("${5:data[0].id}", ${6:1});',
        "});",
        "$0"
      ].join("\n")
    );

    editor.insertSnippet(skeleton);
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
