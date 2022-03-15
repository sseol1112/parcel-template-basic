// ESM (Ecma Script) - browser에서 사용
// CommonJS (node.js에서는 이걸 사용함)

// import - browser용
// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer') //node.js용

// export - browser용
// module.exports = { //node.js용
//   plugins : [
//     autoprefixer
//   ]
// }


/* 소스 간소화 */
module.exports = { //node.js용
  plugins : [
    require('autoprefixer')
  ]
}