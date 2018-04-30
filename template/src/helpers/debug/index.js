const { inspect } = require('util')


const { DEBUG_COLORS, DEBUG_SHOW_HIDDEN, DEBUG_DEPTH } = process.env

module.exports = (data) => console.log(inspect(data, {
  colors: DEBUG_COLORS,
  showHidden: DEBUG_SHOW_HIDDEN,
  depth: DEBUG_DEPTH,
}))
