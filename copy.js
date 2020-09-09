let fs = require("fs");
let path = require("path");
let myurl = "E:/coding/"

var team = []
var normal = []
var other = []

let myUrl = 'C:\\Users\\Administrator\\Documents\\Tencent Files\\248864651\\FileRecv\\浙品';
let myUrl1 = 'C:\\Users\\Administrator\\Documents\\Tencent Files\\248864651\\FileRecv\\浙品\\标准';
let myUrl2 = 'C:\\Users\\Administrator\\Documents\\Tencent Files\\248864651\\FileRecv\\浙品\\团体标准';


function myReadfile(MyUrl) {
    fs.readdir(MyUrl, (err, files) => {
        if (err) throw err
        files.forEach(file => {
            //拼接获取绝对路径，fs.stat(绝对路径,回调函数)
            let fPath = path.join(MyUrl, file);
            fs.stat(fPath, (err, stat) => {
                if (stat.isFile()) {
                    //stat 状态中有两个函数一个是stat中有isFile ,isisDirectory等函数进行判断是文件还是文件夹
                    // console.log(file)
                    if (file.includes('团体标准')) {
                        team.push(file)
                        fs.rename(fPath, path.join(myUrl1, file), () => {
                        })
                    } else if (file.includes('标准')) {
                        normal.push(file)
                        fs.rename(fPath, path.join(myUrl2, file), () => {
                        });
                    } else {
                        other.push(file)
                    }
                }
                else {
                    myReadfile(fPath)
                }
            })
        })
    })
}

myReadfile(myUrl)

setTimeout(() => {
    console.log(team, normal, other)

}, 2000)
