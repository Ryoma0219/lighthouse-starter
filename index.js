const fs = require('fs');
const { getFunction } = require('./api');
const { formatHtml } = require('./format');
const formatted = './formatted';

const getDomain = url => url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];

const output = (filePath, html, domain) => {
  fs.mkdir(filePath, { recursive: true}, error => {
    if (error) {
      console.log('Error')
    } else {
      fs.writeFile(`${filePath}/index.html`, html, (error, data) => {
        if (error) {
          console.log('fugafuga');
        } else { 
          console.log('Succeed');
        };
      });
    }
  })
};

const run = url => {
  if (!url) {
    console.log('Prease set URL');
    return;
  };
  getFunction(url, response => {
    const formattedHtml = formatHtml(response);
    const domain = getDomain(url);
    output(`${formatted}/${domain}`, formattedHtml, domain);
  });
}

exports.output = output;
exports.run = run;