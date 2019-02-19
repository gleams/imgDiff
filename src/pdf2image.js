var pdf2image = require('pdf2image');


pdf2image.convertPDF(__dirname+'/pdf/01.pdf').then(
    function(pageList){
        console.log(pageList);
    }
);