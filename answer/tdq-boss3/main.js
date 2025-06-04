import { httpGet } from "./libs.js";

function fetchUsers(condition, callback) {
  httpGet("https://reqres.in/api/users", function (error, jsonRes) {
    if (error) {
      callback(error, null);
      return;
    }

    try {
      const users = jsonRes.data;
      const filteredUsers = [];
      // todo : usersをfilterでリファクタリングする
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (
          !condition.name ||
          user.first_name.indexOf(condition.name) !== -1 ||
          user.last_name.indexOf(condition.name) !== -1
        ) {
          filteredUsers.push(user);
        }
      }
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
