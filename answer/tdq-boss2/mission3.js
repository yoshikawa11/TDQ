// tdq % deno run --allow-net --allow-read answer/tdq-boss2/mission3.jsのコマンドで実行すること

import { load } from "jsr:@std/dotenv";

const env = await load();
const apiKey = env.API_KEY;

if (!apiKey) {
  console.error("API_KEYが設定されていません。");
  Deno.exit(1);
}

async function getProductNameParallel() {
  const baseUrl = "https://reqres.in/api/products?per_page=3";

  // まず1ページ目を取得して total_pages を取得
  const firstRes = await fetch(`${baseUrl}&page=1`, {
    headers: { "x-api-key": apiKey },
  });

  if (!firstRes.ok) {
    console.error("初回リクエストに失敗:", firstRes.status);
    Deno.exit(1);
  }

  const firstData = await firstRes.json();
  const totalPages = firstData.total_pages;

  // すべてのページに対して並列でリクエストを送信
  const fetches = [];
  for (let i = 1; i <= totalPages; i++) {
    fetches.push(
      fetch(`${baseUrl}&page=${i}`, {
        headers: { "x-api-key": apiKey },
      }).then((res) => res.json()),
    );
  }

  const allPagesData = await Promise.all(fetches);

  // 各ページの data から name を抽出
  const products = allPagesData.flatMap((page) => page.data.map((p) => p.name));

  return products;
}

console.log(await getProductNameParallel());
