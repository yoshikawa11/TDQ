// deno --allow-net --allow-read "....../tdq/answer/tdq-boss3/main_mission7.js"

import { httpGet } from "./libs.js";
import { promisify } from "node:util";

// コールバック形式の関数
function fetchUsers(condition, callback) {
  httpGet("https://reqres.in/api/users", function (error, jsonRes) {
    if (error) {
      callback(error, null);
      return;
    }

    try {
      const users = jsonRes.data;
      const filteredUsers = users.filter((user) =>
        !condition.name ||
        user.first_name.includes(condition.name) ||
        user.last_name.includes(condition.name)
      );
      callback(null, filteredUsers);
    } catch (e) {
      callback(e, null);
    }
  });
}

// Promiseベースに変換
const fetchUsersPromise = promisify(fetchUsers);

if (import.meta.main) {
  try {
    const result = await fetchUsersPromise({ name: "E" });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export { fetchUsers, fetchUsersPromise };
