# 解答
### TDQ-001 JavaScriptの開発環境構築
#### Mission1
- 都度deno run せずとも変更を検知して自動でdeno runするよう手を加える
- `deno run --watch main.js`　を実行する

### TDQ-002 JavaScriptの開発環境構築
#### Misson1
- 未定義のメソッドを含むコードを実行すると `ReferenceError: add is not defined` が発生する。これをlintが検出できなかった
- deno_lintは静的構文解析によるチェックは行われるが、型推論までは踏み込まない。

### TDQ-004 データ型
#### Mission4
- A:`typeof null` は `object` を返すが、これはバグだが歴史的経緯のため仕様となっている。JavaScriptが実装された際に、既存コードの振る舞いを壊すのを避けるため修正が見送られた。

### TDQ-005 等価演算子と厳密等価演算子
#### Mission1
- a: string同士は `===` が推奨される
- b: `x == null` で null/undefined を同時判定 -> ◯
- c: object同士は `==` でも参照比較なので意味なし
- d: `{} == {}` も false、常に参照比較
