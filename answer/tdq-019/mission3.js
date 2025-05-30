const services = [
  "GitHub",
  "GitLab",
  "GitHub Copilot",
  "Bitbucket",
  "ChatGPT",
  "Vim",
  "Neovim",
];

/**
 * vimを含む(大文字小文字の区別なし) or Gitで始まるものを抽出する
 */
function hoge(services) {
  return services.filter((service) =>
    service.toLowerCase().includes("vim") ||
    service.toLowerCase().startsWith("git")
  );
}

import { expect } from "jsr:@std/expect";

Deno.test("vimを含む(大文字小文字の区別なし) or Gitで始まるものを抽出する", () => {
  expect(hoge(services)).toEqual([
    "GitHub",
    "GitLab",
    "GitHub Copilot",
    "Vim",
    "Neovim",
  ]);
});
