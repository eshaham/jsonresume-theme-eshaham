// Helpers
const prettyDate = require('./pretty_date');

function domainOnly(url) {
  if (!url) {
    return url;
  }
  return url.replace(/(https?:\/\/)?(www.)?/i, '');
}

// Exports
module.exports = {
  prettyDate,
  domainOnly,
};
