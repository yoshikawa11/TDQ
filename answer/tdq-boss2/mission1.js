// tdq % deno run --allow-net --allow-read answer/tdq-boss2/mission1.jsのコマンドで実行すること

import { load } from "jsr:@std/dotenv";

const env = await load();
const apiKey = env.API_KEY;

if (!apiKey) {
  console.error("API_KEYが設定されていません。");
  Deno.exit(1);
}

const response = await fetch("https://reqres.in/api/products", {
  headers: {
    "x-api-key": apiKey,
  },
});

console.log("レスポンスステータス:", response.status);

if (response.ok) {
  const data = await response.json();
  console.log("データ件数:", data.total);
} else {
  const errorText = await response.text();
  console.error("エラーレスポンス:", errorText);
}
