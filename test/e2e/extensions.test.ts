import { describe, test } from "./baseFixture"

function runTestExtensionTests() {
  // This will only work if the test extension is loaded into code-server.
  test("should have access to VSCODE_PROXY_URI", async ({ codeServerPage }) => {
    const address = await codeServerPage.address()

    await codeServerPage.executeCommandViaMenus("code-server: Get proxy URI")

    // Click span:has-text("https://localhost:57989/proxy/{{port}}")
    await codeServerPage.page.waitForSelector(`span:has-text("${address}/proxy/{{port}}")`)
  })
}

describe("Extensions", true, [], () => {
  runTestExtensionTests()
})

describe("Extensions with --cert", true, ["--cert"], () => {
  runTestExtensionTests()
})
