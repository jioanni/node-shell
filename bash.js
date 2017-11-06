process.stdout.write('prompt > ');




process.stdin.on('data', function (data) {
    var cmd = data.toString().trim();

    if (cmd === "PWD") {
        process.stdout.write(process.env.PWD);
    } else if (cmd === "Date") {
        process.stdout.write(Date());
    }
     process.stdout.write('\nprompt > ');

});



