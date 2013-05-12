module.exports = function(grunt) {

	var proc = require('child_process');

	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({

		compass: {
			dist: {
				options: {
				}
			}
		},

		growl: {
			notify: 'growlnotify \t:"from grunt" "compiled!"'
		},

		watch: {
			files: [
				'css/_sass/*.scss',
				'css/_sass/reset/*.scss',
				'css/_sass/layout/*.scss'
			],
			tasks: ['compass', 'growl']
		}

	});

	grunt.registerMultiTask('growl', 'growl notify', function() {
		// for windows
		proc.exec(this.data);
	});

	grunt.registerTask('default', ['compass', 'watch', 'growl']);

};
