export function run_cmd(cmd, args, callback) {
	var spawn = require('child_process').spawn
	var child = spawn(cmd, args)
	var resp = ''

	child.stdout.on('data', function (buffer) {
		resp += buffer.toString()
	})
	child.stdout.on('end', function () {
		callback(resp)
	})
}
