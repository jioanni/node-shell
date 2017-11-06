var commands = require('./command.js');
var fs = require("fs");


process.stdout.write('prompt > ');


process.stdin.on('data', function (data) {
    var cmd = data.toString().trim();

    if (cmd === "PWD") {
        commands.pwd();
    } else if (cmd === "Date") {
        commands.date();
    } else if (cmd === "LS") {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    } else if (cmd === "echo") {
            process.stdout.write(process.argv[2] + "\n");
            process.stdout.write("prompt >");
    }

      
    
     

});
