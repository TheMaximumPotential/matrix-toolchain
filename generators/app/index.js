var Generator = require('yeoman-generator')

module.exports = class extends (
	Generator
) {
	// The name `constructor` is important here
	constructor(args, opts) {
		// Calling the super constructor is important so our generator is correctly set up
		super(args, opts)

		// Next, add your custom code
		// this.option('babel') // This method adds support for a `--babel` flag
	}

	async initPkg() {
		this.answers = await this.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'Your project name',
				default: this.appname, // Default to current folder name
			},
		])

		const pkgJson = {
			name: this.answers.name,
			version: '1.0.0',
			description: '测试使用Docker / Github Webhook实现CI持续集成',
			main: 'webhooks.js',
			scripts: {
				start:
					'concurrently "cd backend && node server.js"  "cd frontend && yarn dev "',
				build: 'sh build.sh',
			},
			author: '',
			license: 'ISC',
			dependencies: {},
			devDependencies: {},
		}
		await this.fs.extendJSON(this.destinationPath('package.json'), pkgJson)
		await this.yarnInstall(['github-webhook-handler'], {
			'save-dev': false,
		})
		await this.yarnInstall(['concurrently', '@vue/cli'], {
			global: true,
		})
	}

	async copyFile() {
		await this.copyTemplate(this.templatePath(), this.destinationPath())
		this.copyTemplate(
			this.templatePath('.vscode'),
			this.destinationPath('.vscode')
		)
		await this.fs.copyTpl(
			this.templatePath('.gitignore'),
			this.destinationPath('.gitignore')
		)
		await this.fs.copyTpl(
			this.templatePath('backend/.dockerignore'),
			this.destinationPath('backend/.dockerignore')
		)
		await this.fs.copyTpl(
			this.templatePath('frontend/.dockerignore'),
			this.destinationPath('frontend/.dockerignore')
		)
		// this.copyTemplate(
		// 	this.templatePath('backend'),
		// 	this.destinationPath('backend')
		// )
		// this.copyTemplate(
		// 	this.templatePath('frontend'),
		// 	this.destinationPath('frontend')
		// )
		// this.copyTemplate(
		// 	this.templatePath('nginx'),
		// 	this.destinationPath('nginx')
		// )
	}

	async initBackendPkg() {
		const pkgJson = {
			name: this.answers.name + '-backend',
			version: '1.0.0',
			description: '',
			main: 'server.js',
			scripts: {
				dev: 'vite',
				build: 'vite build',
			},
			author: '',
			license: 'ISC',
			dependencies: {},
			devDependencies: {},
		}
		await this.fs.extendJSON(
			this.destinationPath('backend/package.json'),
			pkgJson
		)
	}

	async initFrontPkg() {
		const pkgJson = {
			name: this.answers.name + '-front',
			version: '1.0.0',
			scripts: {
				dev: 'vite',
				build: 'vite build',
			},
			author: '',
			license: 'ISC',
			dependencies: {},
			devDependencies: {},
		}
		await this.fs.extendJSON(
			this.destinationPath('frontend/package.json'),
			pkgJson
		)
	}

	end() {
		this.spawnCommand('sh', [this.templatePath('dev.sh')])
	}
}
