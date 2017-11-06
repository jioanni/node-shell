var fs = require("fs");


function pwd(){
  process.stdout.write(process.env.PWD);
}

function date(){
  process.stdout.write(Date());
}

function ls(err, files) {
  if (err) throw err;
  files.forEach(function(file) {
    process.stdout.write(file.toString() +"\n");
  })
}

module.exports = {pwd, date, ls}
