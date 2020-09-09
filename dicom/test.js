let dicom = require("dicom-parser");
let fs = require("fs");

var dicomFileAsBuffer = fs.readFileSync('F:\\晨\\191215\\数据\\LIDC-IDRI\\LIDC-IDRI-0001\\01-01-2000-30178\\3000566-03192\\000005.dcm');


var dataSet = dicom.parseDicom(dicomFileAsBuffer);
console.log(dataSet.string('x00080016'))
a =1;