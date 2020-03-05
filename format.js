const beautify = require('js-beautify');

const beautifyOptions = {
  indent_size: 2,
  end_with_newline: true,
  preserve_newlines: false,
  max_preserve_newlines: 0,
  wrap_line_length: 0,
  wrap_attributes_indent_size: 0,
  unformatted: ['b', 'em']
};

const REGEX_IMG = /<img[^>]*>/g;
const REGEX_SCRIPT = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

exports.formatHtml = source => beautify.html(source, beautifyOptions);
exports.removeImg = source => source.replace(REGEX_IMG, '');
exports.removeScript = source => source.replace(REGEX_SCRIPT, '');