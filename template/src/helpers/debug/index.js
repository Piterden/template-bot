const { inspect } = require('util')


module.exports = (data) => console.log(inspect(data, {
  colors: true,
  showHidden: true,
  depth: 10,
}))
