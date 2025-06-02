import { load } from "jsr:@std/dotenv";

const env = await load();
const apiKey = env.API_KEY;

if (!apiKey) {
  console.error("API_KEYが設定されていません。");
  Deno.exit(1);
}

const baseUrl = "https://reqres.in/api/products?per_page=2";

// ランダムな遅延を追加
function randomDelay() {
  const ms = Math.floor(Math.random() * 1000) + 500; // 500〜1500ms
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ページ取得関数
async function fetchPage(page) {
  await randomDelay();
  const res = await fetch(`${baseUrl}&page=${page}`, {
    headers: { "x-api-key": apiKey },
  });
  const data = await res.json();
  return data.data.map((p) => p.name);
}

// 最大2並列で実行するタスク制御関数
async function runWithConcurrency(tasks, limit = 2) {
  const results = [];
  let i = 0;

  const runners = Array.from({ length: limit }, async () => {
    while (i < tasks.length) {
      const current = i++;
      results[current] = await tasks[current]();
    }
  });

  await Promise.all(runners);
  return results.flat();
}

async function getProductNames() {
  // 最初のページでページ数を確認
  const firstRes = await fetch(`${baseUrl}&page=1`, {
    headers: { "x-api-key": apiKey },
  });
  const firstData = await firstRes.json();
  const totalPages = firstData.total_pages;

  // 各ページのタスクを用意
  const tasks = [];
  for (let i = 1; i <= totalPages; i++) {
    tasks.push(() => fetchPage(i));
  }

  return await runWithConcurrency(tasks, 2); // 並列2
}

console.log(await getProductNames());
