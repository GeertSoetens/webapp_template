module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* banner comment */'
            },
            build: {
                src: 'script.js',
                dest: 'public/script.js'
            }
        }
    })
};