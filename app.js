const cli = require("cac")();
const { run } = require("./index");
const { isValidUrl } = require('./utils');

cli.option("--url <type>", "Set url", {
  default: "node"
});

cli.option("--remove <type>", "You want to remove tag", {});


cli.command("get [...url]", "Get HTML").action((files, options) => {
  console.log(options)
  for (let url of files) {
    if (!isValidUrl(url)) {
      console.log('URL is invalid');
    } else {
      run(url, options.remove);
    }
  }
});

// Enable help command
cli.help();

// Enable to check versions
cli.version("0.0.1");

// Run
cli.parse();
