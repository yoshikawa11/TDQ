// deno --allow-net --allow-read "....../tdq/answer/tdq-boss3/main.js"

import { load } from "jsr:@std/dotenv";

const env = await load();
const apiKey = env.API_KEY;

async function fetchUsers(condition) {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      headers: {
        "x-api-key": apiKey,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const jsonRes = await response.json();
    const users = jsonRes.data;
    const filteredUsers = users.filter((user) => {
      return (
        !condition.name ||
        user.first_name.includes(condition.name) ||
        user.last_name.includes(condition.name)
      );
    });
    return filteredUsers;
  } catch (e) {
    throw e;
  }
}

if (import.meta.main) {
  try {
    const result = await fetchUsers({ name: "E" });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export { fetchUsers };
