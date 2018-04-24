const superb = require('superb')
const camelCase = require('camelcase')

module.exports = {
  templateOptions: {
    context: { camelCase },
  },
  prompts: {
    name: {
      message: 'What is the name of the new bot?',
      role: 'folder:name',
    },
    description: {
      message: 'How would you describe the new bot?',
      default: `My ${superb()} bot.`,
    },
    fullname: {
      message: 'What is your full name?',
      role: 'git:name',
      store: true,
    },
    username: {
      message: 'What is your GitHub username?',
      role: 'git:username',
      store: true,
    },
    email: {
      message: 'What is your GitHub email?',
      role: 'git:email',
      store: true,
    },
  },
  move: {
    'gitignore': '.gitignore',
  },
  enforceNewFolder: true,
  installDependencies: true,
  gitInit: true,
  showTip: true,
}
