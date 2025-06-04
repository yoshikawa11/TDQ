/**
 * HTTP GETリクエストを行う
 * @param {string} url
 * @param {Function} callback
 * @returns {void}
 *
 * @example
 * ```js
 * httpGet("https://reqres.in/api/users?page=2", function (error, data) {
 *   if (error) {
 *     console.error(error);
 *     return;
 *   }
 *   console.log(data);
 * })
 * ```
 */

import { load } from "jsr:@std/dotenv";

const env = await load();
const apiKey = env.API_KEY;

export function httpGet(url, callback) {
  fetch(url, {
    headers: {
      "x-api-key": apiKey,
    },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      callback(null, data);
    })
    .catch(function (error) {
      callback(error, null);
    });
}
