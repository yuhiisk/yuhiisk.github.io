module.exports = function(grunt) {

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

		watch: {
			files: [
				'css/_sass/*.scss',
				'css/_sass/reset/*.scss',
				'css/_sass/layout/*.scss'
			],
			tasks: ['compass']
		}

	});

	grunt.registerTask('default', ['compass', 'watch']);

};
