const path = require('path');
module.exports ={
    pdfDir : {
        expectedPdf:path.normalize(__dirname + '/pdf/expectedPdf/'),
        actualPdf:path.normalize(__dirname + '/pdf/actualPdf/'),
    },
    imageDir : {
        actualImage:path.normalize(__dirname + '/output/actualImage/'),
        expectedImage:path.normalize(__dirname + '/output/expectedImage/'),
        diffImage:path.normalize(__dirname + '/output/diffImage/'),
    }
}																																																															