
const fs = require('fs');
let PDF2Pic = require('pdf2pic');
const config = require('./config');



console.log("======================================================转换开始:======================================================");
console.log('实际结果：pdf2jpg开始....');

/**
 * 实际结果
 */
class actualPdf{
     init(){
         const imageDir = config.imageDir;
         const pdfDir = config.pdfDir;
         let pdfFiles = fs.readdirSync(`${pdfDir.actualPdf}`);
         console.log('转换路径:',`"${pdfDir.actualPdf}"`);
        console.log('需要转的pdf:',pdfFiles);
         console.log('');
         console.log('');
        pdfFiles.forEach((file)=>{
            const converter = new PDF2Pic({
                density: 100,           // output pixels per inch
                 savename: file.replace(/(.*)\.(.*){3}$/,'$1'),   // output file name
                savedir: imageDir.actualImage,    // output file location
                format: "jpg",          // output file format
                size: 1024
            });

            converter
                .convertBulk(pdfDir.actualPdf+file,-1)
                .then(resolve => {
                    console.log("转换信息:",file);
                    console.table(resolve);
                    // console.log("====================================================结束========================================================",);
                    console.log('');
                    console.log('');

                });
        });
    }
}


const aPdf = new actualPdf();
aPdf.init();

// module.exports = actualPdf;