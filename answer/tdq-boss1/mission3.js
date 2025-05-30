/**
 * DenoのHTTPサーバーを使って、CSVファイルから動物のデータを読み込み、
 * 特定の年齢以上の動物をフィルタリングするAPIを実装します。
 *
 * APIエンドポイント: /animals?minAge=10
 *
 * レスポンス例:
 * [
 *   { "name": "Dog", "age": 12 },
 *   { "name": "Cat", "age": 15 }
 * ]
 */
async function readFile(filePath) {
  return await Deno.readTextFile(filePath, {
    encoding: "utf8",
  });
}

function makeJsonObject(headers, lines) {
  return lines.map((line) => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((key, i) => obj[key] = values[i]);
    obj.age = Number(obj.age);
    return obj;
  });
}

async function main() {
  const text = await readFile("./answer/tdq-boss1/animal.csv");

  const [headerLine, ...lines] = text.trim().split("\n");
  const headers = headerLine.split(",");
  const animals = makeJsonObject(headers, lines);

  // api server 起動
  Deno.serve((req) => {
    const url = new URL(req.url);
    if (url.pathname === "/animals") {
      const minAge = Number(url.searchParams.get("minAge") ?? 0);
      const filtered = animals.filter((a) => a.age >= minAge);
      return new Response(JSON.stringify(filtered), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  });
}

main();
