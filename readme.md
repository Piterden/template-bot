# template-bot

🚀 Kick-start a Telegram bot with `telegraf.js` and `sao`.

## Features

- Build with [telegraf.js](https://github.com/telegraf/telegraf).
- Lint with [@atomix/eslint-config](https://github.com/atomixinteractions/eslint-config).
- Uses [knex](https://github.com/tgriesser/knex) as a DB query builder.

## Usage

Install [SAO](https://github.com/egoist/sao) first:

```sh
$ npm i sao -g
```

Or for crazy junkies:

```sh
$ sudo npm i sao -g
```

Then create a new bot:

```sh
$ sao piterden/template-bot my-new-bot --update --force-npm
$ cd my-new-bot
```

Or for `npm@5` you \wo `sao` install:

```sh
$ npx sao piterden/template-bot my-new-bot --update --force-npm
$ cd my-new-bot
```

The `.env` file:

```dotenv
NODE_ENV=development

BOT_TOKEN=
BOT_NAME=

DB_HOST=127.0.0.1
DB_PORT=3306
DB_CLIENT=mysql
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
DB_CHARSET=utf8mb4
DB_MIGRATIONS_TABLE=migrations

DEBUG_COLORS=true
DEBUG_SHOW_HIDDEN=true
DEBUG_DEPTH=10
```

The bot's default structure:

```sh
 ├── migrations/
 ├── src/
 │  ├── handlers/
 │  │  ├── help/
 │  │  │  └── index.js
 │  │  ├── settings/
 │  │  │  └── index.js
 │  │  ├── start/
 │  │  │  └── index.js
 │  │  └── index.js
 │  ├── helpers/
 │  │  ├── debug/
 │  │  │  └── index.js
 │  │  └── index.js
 │  ├── keyboards/
 │  │  └── index.js
 │  ├── scenes/
 │  │  └── index.js
 │  └── index.js
 ├── .gitignore
 ├── knexfile.js
 ├── LICENSE
 ├── README.md
 └── package.json
```

