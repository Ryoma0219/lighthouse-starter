const cli = require("cac")();
const { output, run } = require("./index");
const { isValidUrl } = require('./utils');

cli.option("--url <type>", "Set url", {
  default: "node"
});

cli.command("get [...url]", "Get HTML").action((files, options) => {
  for (let url of files) {
    if (!isValidUrl(url)) {
      console.log('URL is invalid');
    } else {
      run(url);
    }
  }
});

cli.help();
cli.version("0.0.1");

cli.parse();
