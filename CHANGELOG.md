# Changelog

## 0.1.1

- The `two-go-test` snippet and the `two-go: Insert API Test Skeleton` command now
  use `import` instead of `require`. two-go is ESM-only, so the old skeleton
  failed with `ERR_REQUIRE_ESM` on Node 18 and 20.

## 0.1.0

Initial release.

- Snippets for JavaScript and TypeScript: `go-get`, `go-post`, `expect-status`, `expect-json`, and `two-go-test`.
- Command `two-go: Insert API Test Skeleton` (`two-go.newTest`) that inserts a two-go test skeleton at the cursor.
