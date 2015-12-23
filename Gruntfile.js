module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      compile: {
        files: {
          //'css/test.css': 'less/test.less',
          'css/login/global.css': 'less/login/global.css',
          'css/login/login.css': 'less/login/login.css'
        }
      },
      yuicompress: {
        files: {
          //'css/test-min.css': 'css/test.css'
            'css/login/global.css': 'less/login/global.css',
            'css/login/login.css': 'less/login/login.css'
        },
        options: {
          yuicompress: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['less/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);
};