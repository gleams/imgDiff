## imgageDiff 是一个图片对比工具

如果只是对比使用[DiffPDF(PDF文件比较工具) v5.8.3 官方版](http://www.opdown.com/soft/32555.html)还是不错的。

[在线转pdf](https://pdfcandy.com/cn/)

因为工作需要公司项目里有pdf对比工作，每个pdf有40页左右 ，如果人工比如，费时而且容易出错。pdf是怎么比较的其实没有太好的思路，只是一个想法，能用就行了，所以初步想法就是，先把pdf转为jpg，然后jpg进行比较。


## 工具说明

`src`目录中`pdf/expectedPdf` 为目标pdf，`src/actualPdf`为实际pdf

`output` 目录中`out/expectedImage`为目标jpg,`out/actualImage`为实际jpg，`output/diffImage` 比较后的结果文件

## 环境依赖

1. GraphicsMagick 
2. ImageMagick
3. ghostScript

    不平台安装方式有所不同请注意

文件说明：

1. `actualPdf.js` 将`pdf/actualPdf`下的pdf转为jpg
2. `expectedPdf.js` 将`pdf/expectedPdf`下的pdf转为jpg
3. `imgCompare.js`比较转换后的jpg(比较是通过文件名比较名，所以pdf名字保持一致)


