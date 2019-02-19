const path = require('path');
const pdf2img = require('pdf2img');

const input = __dirname + '/pdf/01.pdf';

pdf2img.setOptions({
    type: 'png',                                // png or jpg, default jpg
    size: 1024,                                 // default 1024
    density: 600,                               // default 600
    outputdir: __dirname + path.sep + 'output', // output folder, default null (if null given, then it will create folder name same as file name)
    outputname: 'test',                         // output file name, dafault null (if null given, then it will create image name same as input name)
    page: null                                  // convert selected page, default null (if null given, then it will convert all pages)
});

pdf2img.convert(input, function(err, info) {
    if (err) console.log(err)
    else console.log(info);
});