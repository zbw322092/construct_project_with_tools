module.exports = function(grunt) {

	grunt.initConfig({
		// logger: {
		// 	one: [1,2,3],
		// 	two: 'string',
		// 	object: {
		// 		title: 'it is an object'
		// 	}
		// }
		
		concurrent: {
			target: {
				tasks: ['nodemon:dev'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		nodemon: {
			dev: {
				script: './bin/entry.js',
				options: {
					nodeArgs: ['--debug'],
					env: {
						PORT: '8888'
					},
					ignore: ['node_modules/**'],
					cwd: __dirname,
					ext: 'js,html'
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('test', 'it is a test grunt', function() {
		console.log('it is working');
	});

	grunt.registerMultiTask('logger', 'it is a multitask test', function() {
		grunt.log.writeln(this.target + ": " + this.data);
	});

	grunt.registerTask('dirname', 'log the dirname', function() {
		console.log(__dirname);
	});

	grunt.registerTask('server', ['concurrent']);
};

















