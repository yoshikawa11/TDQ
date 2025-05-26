# 解答
### TDQ-001 JavaScriptの開発環境構築
#### Mission1
- 都度deno run せずとも変更を検知して自動でdeno runするよう手を加える
- `deno run --watch main.js`　を実行する

### TDQ-002 JavaScriptの開発環境構築
#### Misson1
- 未定義のメソッドを含むコードを実行すると `ReferenceError: add is not defined` が発生する。これをlintが検出できなかった
- deno_lintは静的構文解析によるチェックは行われるが、型推論までは踏み込まない。