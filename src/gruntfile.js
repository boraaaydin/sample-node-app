module.exports=function(grunt){
    grunt.initConfig({
        nodemon:{
            all:{
                script:"server.js",
                options:{
                    watchExtensions:['js']
                }
            }
        },
        
    });
    grunt.LoadNpmTask('grunt-nodemon');
    grunt.registertaks('default',['nodemon']);
};