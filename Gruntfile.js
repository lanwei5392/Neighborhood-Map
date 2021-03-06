module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/lib/knockout-3.2.0.js',
                dest: 'js/lib/knockout-3.2.0.min.js'
            }
        },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify']);
};
