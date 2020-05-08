const messageBroker = require('./../../brokers')

function getMessage(ctx) {
  const query = ctx.update.message.text
  if (Object.prototype.hasOwnProperty.call(messageBroker, query)) {
    return ctx.reply(messageBroker[query]())
  }
  return false
}

module.exports = () => [
  async (ctx) => {
    await getMessage(ctx)
  }
]
