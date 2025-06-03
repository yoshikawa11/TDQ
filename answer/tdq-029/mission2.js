import { getAsJapanese as cat } from "./libs/cat.js";
import { getAsJapanese as dog } from "./libs/dog.js";

const dogJapanese = dog();
const catJapanese = cat();
// FIXME:"犬" と "猫" を libs配下のgetAsJapaneseから取得する
console.log(`私は${dogJapanese}と${catJapanese}が好きです`);
