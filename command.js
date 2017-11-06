


function pwd(){
  process.stdout.write(process.env.PWD);
  process.stdout.write('\nprompt > ');
}

function date(){
  process.stdout.write(Date());
  process.stdout.write('\nprompt > ');
}



module.exports = {pwd, date}
