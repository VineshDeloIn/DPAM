module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['./Assets/css/**/*.css'],
                dest: 'dist/css/style.css'
            },
            js: {
                src: ['./Assets/css/**/*.js'],
                dest: 'dist/js/script.js'
            }
        },
        cssmin: {
            css: {
                src: './dist/css/style.css',
                dest: './dist/css/min/style.min.css'
            }
        },
        uglify: {
            js: {
                src: './dist/js/script.js',
                dest: './dist/js/min/script.min.js'
            }
        },
        watch: {
            css: {
                files: ['./Assets/css/**/*.css'],
                tasks: ['concat:css', 'cssmin:css']
            },
            js: {
                files: ['./Assets/js/**/*.js'],
                tasks: ['concat:js', 'uglify:js']
            }
        }
    });


  };