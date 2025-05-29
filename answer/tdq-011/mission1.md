```js
for (const i = 0; i < [10, 20, 30].length; i++) {
  console.log(i);
}
```
`const i` は再代入ができないのにもかかわらず、増分されるため。
```js
for (let i = 0; i < [10, 20, 30].length; i++) {
  console.log(i);
}
```