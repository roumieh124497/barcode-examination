const bwipjs = require('bwip-js');

exports.getExamPage = (req, res) => {
  let image;
  let url = `https://bwipjs-api.metafloor.com/?bcid=code128&text=1234567890&width=40&height=9&backgroundcolor=FFBD35`;
  image = url;
  res.render('exam', { image: image });
};
