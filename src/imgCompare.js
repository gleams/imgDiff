
const { imgDiff } = require('img-diff-js');
const fs = require('fs');
const config = require('./config');

const imageDir = config.imageDir;

console.log('===========================图片对比开始================================')
const files = fs.readdirSync(imageDir.actualImage);
files.forEach((file)=>{
    imgDiff({
        actualFilename: imageDir.actualImage+file,
        expectedFilename: imageDir.expectedImage+file,
        diffFilename: imageDir.diffImage+file,
      }).then(result => {
		  //console.log(result)
		  if(result.diffCount){
			  console.log('不一致：',file)
			  console.log(result)
		  }
	  }
	);

});