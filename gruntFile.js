module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
     
        pkg: grunt.file.readJSON('package.json'),

        uglify : {
            uglifyJS : {
                files : [{
                    src: '**/*.js',
                    dest :'dest/all.min.js'  
                }]
            }
        }  
    
    })
  };