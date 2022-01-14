const pwd = require("./pwd");
const ls = require("./ls");

// pwd()
// ls()

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
    process.stdout.write("\nprompt > ");
  } else if (cmd === "ls") {
    ls();
  }
});
