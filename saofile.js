module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the project?',
        role: 'folder:name',
        default: '',
        default: this.outFolder,
        filter: (val) => val.toLowerCase(),
      },
      {
        name: 'description',
        message: 'How would you describe the project?',
        default: 'My awesome bot.',
      },
      {
        name: 'fullname',
        message: 'What is your full name?',
        default: '',
        role: 'git:name',
        store: true,
      },
      {
        name: 'username',
        message: 'What is your GitHub username?',
        default: '',
        role: 'git:username',
        store: true,
      },
      {
        name: 'email',
        message: 'What is your GitHub email?',
        default: '',
        role: 'git:email',
        store: true,
      },
      {
        name: 'bot_name',
        message: 'What is the name of your bot?',
        default: '',
      },
      {
        name: 'bot_token',
        message: 'What is your bot token?',
        default: '',
      },
      {
        name: 'updatetype',
        message: 'Choose update type to use',
        type: 'list',
        choices: [
          { name: 'Polling', value: 'polling' },
          { name: 'Webhook', value: 'webhook' },
        ],
        default: 'polling',
        store: true,
      },
      {
        name: 'bot_webhook_domain',
        message: 'Please provide the Webhook Domain',
        when: (answers) => answers.updatetype === 'webhook',
      },
      {
        name: 'bot_webhook_port',
        message: 'Please provide the Webhook Port',
        default: 8443,
        when: (answers) => answers.updatetype === 'webhook',
      },
    ]
  },
  templateData() {
    const updateTypePolling = this.answers.updatetype === 'polling'
    const updateTypeWebhook = this.answers.updatetype === 'webhook'
    return { updateTypePolling, updateTypeWebhook }
  },
  actions: [
    {
      type: 'add',
      files: '**',
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
      },
    },
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  },
}
