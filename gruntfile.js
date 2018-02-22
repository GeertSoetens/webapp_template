module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* Javascript, uglified, makes it nice and hard to read doesn\'t it? */'
            },
            build: {
                src: 'script.js',
                dest: 'public/script.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['*.css', '!*.css.min'],
                    dest: 'public/',
                    ext: '.css'
                }]
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['env']
            },
            dist: {
                files: {
                    'public/script.js': 'script.js'
                }
            }
        },
        copy: {
            main: {
                expand: true,
                src: 'index.html',
                dest: 'public/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['babel', 'uglify', 'cssmin', 'copy'])
};