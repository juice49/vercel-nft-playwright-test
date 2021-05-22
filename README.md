# @vercel/nft playwright-core bug

Playwright cannot be deployed to Vercel since @vercel/nft 0.12.0 was released. This was previously working with @vercel/nft 0.11.2.

Playwright [requires a file named `browsers.json`](https://github.com/microsoft/playwright/blob/9cd89ae0525b327ce435ae3e4aadcba035621ee9/src/utils/registry.ts#L261), which is not being traced by @vercel/nft 0.12.0.

This repo has a test case for both 0.11.2 (working) and 0.12.0 (not working). You can run the tests with:

```
npm test
```

## Error from Vercel serverless function

```
2021-05-22T00:54:33.057Z	6af7190a-cc4b-404e-a4ac-d195861eea49	ERROR	Error: Cannot find module '/var/task/node_modules/playwright-core/browsers.json'
Require stack:
- /var/task/node_modules/playwright-core/lib/utils/registry.js
- /var/task/node_modules/playwright-core/lib/server/webkit/wkPage.js
- /var/task/node_modules/playwright-core/lib/server/webkit/wkBrowser.js
- /var/task/node_modules/playwright-core/lib/server/webkit/webkit.js
- /var/task/node_modules/playwright-core/lib/server/playwright.js
- /var/task/node_modules/playwright-core/lib/inprocess.js
- /var/task/node_modules/playwright-core/index.js
- /var/task/node_modules/next-og-image/dist/index.js
- /var/task/.next/server/pages/api/[...path].js
- /var/task/node_modules/next/dist/next-server/server/next-server.js
- /var/task/___next_launcher.js
- /var/runtime/UserFunction.js
- /var/runtime/index.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at new Registry (/var/task/node_modules/playwright-core/lib/utils/registry.js:260:30)
    at new Playwright (/var/task/node_modules/playwright-core/lib/server/playwright.js:42:23)
    at Object.createPlaywright (/var/task/node_modules/playwright-core/lib/server/playwright.js:55:12)
    at setupInProcess (/var/task/node_modules/playwright-core/lib/inprocess.js:24:37)
    at Object.<anonymous> (/var/task/node_modules/playwright-core/lib/inprocess.js:42:18)
    at Module._compile (internal/modules/cjs/loader.js:1063:30) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/var/task/node_modules/playwright-core/lib/utils/registry.js',
    '/var/task/node_modules/playwright-core/lib/server/webkit/wkPage.js',
    '/var/task/node_modules/playwright-core/lib/server/webkit/wkBrowser.js',
    '/var/task/node_modules/playwright-core/lib/server/webkit/webkit.js',
    '/var/task/node_modules/playwright-core/lib/server/playwright.js',
    '/var/task/node_modules/playwright-core/lib/inprocess.js',
    '/var/task/node_modules/playwright-core/index.js',
    '/var/task/node_modules/next-og-image/dist/index.js',
    '/var/task/.next/server/pages/api/[...path].js',
    '/var/task/node_modules/next/dist/next-server/server/next-server.js',
    '/var/task/___next_launcher.js',
    '/var/runtime/UserFunction.js',
    '/var/runtime/index.js'
  ]
}
RequestId: 6af7190a-cc4b-404e-a4ac-d195861eea49 Error: Runtime exited with error: exit status 1
Runtime.ExitError
```
