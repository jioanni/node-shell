function pwd(){
  process.stdout.write(process.env.PWD);
}

function date(){
  process.stdout.write(Date());
}

module.exports = {pwd, date}
