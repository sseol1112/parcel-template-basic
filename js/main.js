console.log("parcel!!");

//비동기함수(async) - ES6 문법
async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}

test();