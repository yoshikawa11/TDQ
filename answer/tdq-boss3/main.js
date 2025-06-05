// deno --allow-net --allow-read "....../tdq/answer/tdq-boss3/main.js"

import { httpGet } from "./libs.js";

function fetchUsers(condition, callback) {
  httpGet("https://reqres.in/api/users", function (error, jsonRes) {
    if (error) {
      callback(error, null);
      return;
    }

    try {
      const users = jsonRes.data;
      const filteredUsers = users.filter((user) => {
        return (
          !condition.name ||
          user.first_name.includes(condition.name) ||
          user.last_name.includes(condition.name)
        );
      });

      callback(null, filteredUsers);
    } catch (e) {
      callback(e, null);
    }
  });
}

function fetchUsersPromise(condition) {
  return new Promise((resolve, reject) => {
    fetchUsers(condition, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

if (import.meta.main) {
  try {
    const result = await fetchUsersPromise({ name: "E" });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export { fetchUsers, fetchUsersPromise };
