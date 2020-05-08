require('dotenv').config()

const knex = require('knex')
const Telegraf = require('telegraf')

const { startHandler, helpHandler, settingsHandler, messageHandler } = require('./handlers')

const { session } = Telegraf

const {
  BOT_NAME,
  BOT_TOKEN,
  BOT_WEBHOOK_DOMAIN,
  BOT_WEBHOOK_PORT,
  DB_CLIENT,
  DB_PORT,
  DB_HOST,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_CHARSET
} = process.env

const bot = new Telegraf(BOT_TOKEN, { username: BOT_NAME })

bot.context.db = knex({
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    charset: DB_CHARSET
  }
})
bot.use(session())
bot.start(...startHandler())
bot.help(...helpHandler())
bot.settings(...settingsHandler())
bot.on('message', ...messageHandler())
<%_ if (updateTypePolling) { _%>
bot.startPolling()
<%_ } _%>
<%_ if (updateTypeWebhook) { _%>
bot.launch({
  webhook: {
    domain: `https://${BOT_WEBHOOK_DOMAIN}`,
    port: BOT_WEBHOOK_PORT
  }
})
<%_ } _%>
