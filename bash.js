var commands = require('./command.js');


process.stdout.write('prompt > ');


process.stdin.on('data', function (data) {
    var cmd = data.toString().trim();

    if (cmd === "PWD") {
        commands.pwd();
    } else if (cmd === "Date") {
        commands.date();
    }
     process.stdout.write('\nprompt > ');

});
