# two-go for VS Code

A VS Code extension that helps you write [two-go](https://github.com/two-go-testing/two-go) API tests faster. `two-go` is a zero-dependency fluent service and API testing library for Node. You build an HTTP request with a chainable API and attach checks like `expectStatus`, `expectHeader`, and `expectJson`.

This extension provides ready-to-use snippets and a command that inserts a complete test skeleton at your cursor.

## Snippets

The snippets are available in both JavaScript and TypeScript files.

- `go-get` - Build a GET request chain with status and JSON checks.
- `go-post` - Build a POST request with a JSON body and checks.
- `expect-status` - Insert an `.expectStatus(...)` assertion.
- `expect-json` - Insert an `.expectJson(...)` assertion for a JSON path.
- `two-go-test` - Insert a full `node:test` test wrapping a two-go request chain. It uses ESM `import`, so put it in a `.mjs` file or a project with `"type": "module"`.

## Command

- `two-go: Insert API Test Skeleton` (`two-go.newTest`) - Inserts a small two-go test skeleton at the cursor. Open the Command Palette and search for the command title to run it.

## Example

```js
await go("https://api.example.com")
  .get("/users")
  .expectStatus(200)
  .expectJson("data[0].id", 1);
```

## Running locally

1. Clone this repository and open the folder in VS Code.
2. Press `F5` to launch an Extension Development Host window with the extension loaded.
3. In the new window, open a `.js` or `.ts` file and type one of the snippet prefixes, or run `two-go: Insert API Test Skeleton` from the Command Palette.

## License

MIT
