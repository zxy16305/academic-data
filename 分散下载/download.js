const SuperagentPipe = require("../poolList").SuperagentPipe;
let fs = require('fs');
let path = require('path');

let {yidaiyiluIds, get, allId} = require("./countries.js");

let superagentPipe = new SuperagentPipe(5, true);
let basePath = 'F:\\晨\\20210109 data\\各国进口数据'

let token = ['97cc1af445f66a22de40689931de802e',
    '7b130d87f68089ab863871016d9252a5'];
// let token = ['358cb74ad16233484c5eb16d734ba7a0'];

function getToken() {
    let index = new Date().getTime() % token.length;
    return token[index];
}

let downloadUrl = "https://comtrade.un.org/api/get?max=100000&type=C&freq=A&px=HS&ps={year}&r={countryIds}&p=0&rg=1&cc=TOTAL&uitoken=97cc1af445f66a22de40689931de802e&fmt=csv";
let years = ['2000,2001,2003,2004,2005', '2006,2007,2008,2009,2010', '2011,2012,2013,2014,2015', '2016,2017,2018,2019'].map(i => i.toString())


// superagentPipe.get(`https://comtrade.un.org/api/get?max=500&type=C&freq=A&px=HS&ps=2019&r=710&p=0&rg=1&cc=TOTAL&uitoken=${token}`)
// .then(({err, res})=>{
//     // console.log(res.body.dataset)
//     fs.writeFile('temp.json', JSON.stringify(res.body.dataset), (err)=>{
//         if (err) throw err;
//         console.log('文件已被保存');
//     })
// })


const Rx = require('rxjs');
const {mergeMap, concatAll, concatMap, last, toArray, delay} = require('rxjs/operators');
var myObservable = new Rx.Subject();


myObservable
    .pipe(delay(1000 * 3600))
    .pipe(
        // 并发控制
        mergeMap(({year, country}) => {
            return Rx.Observable.create((observer) => {
                console.log("开始下载", year, country);
                superagentPipe.get(`https://comtrade.un.org/api/get?max=500&type=C&freq=A&px=HS&ps=${year}&r=${country}&p=0&rg=1&cc=TOTAL&uitoken=${getToken()}`)
                    .then(({err, res}) => {
                            // 等36s
                            setTimeout(()=>{
                                if (res != null) {
                                    observer.next(res.body.dataset);
                                }else{
                                    observer.next([]);
                                }
                                observer.complete();
                                console.log("结束下载", year, country);
                            }, 36*1000)

                    })
                // setTimeout(() => {
                //     observer.next({year, country});
                //     observer.complete();
                // }, 1000)
            });
        }, null, 1))
    .pipe(toArray())
    .subscribe(value => {
        console.log("进入保存阶段")

        fs.writeFile('temp.json', JSON.stringify(value), (err) => {
            if (err) throw err;
            console.log('文件已被保存');
        })
    });

// myObservable
//     .pipe(delay(5*1000))
//     .pipe(
//         // 并发控制
//         mergeMap(({year, country}) => {
//             return Rx.Observable.create((observer) => {
//                 console.log("开始下载", year, country);
//
//                 setTimeout(() => {
//                     setTimeout(() => {
//                         console.log("结束下载", year, country);
//                         observer.next({year, country});
//                         observer.complete();
//                     }, 6 * 1000)
//
//                 }, 1000)
//
//             });
//         }, null, 1))
//     .pipe(toArray())
//     .subscribe(value => {
//
//         fs.writeFile('temp.json', JSON.stringify(value), (err) => {
//             if (err) throw err;
//             console.log('文件已被保存');
//         })
//     });


years.forEach(year => {
    yidaiyiluIds.forEach(country => {
        myObservable.next({
            year,
            country
        })
    })
})

myObservable.complete();
//
// (async function () {
//     await new Promise((resolve, reject) => setTimeout(() => resolve(), 5 * 1000))
//
//
//     myObservable
//         .pipe(
//             // 并发控制
//             mergeMap(({year, country}) => {
//                 return Rx.Observable.create((observer) => {
//                     console.log("开始下载", year, country);
//
//
//                     setTimeout(() => {
//                         observer.next({year, country});
//                         observer.complete();
//                         console.log("结束下载", year, country);
//                     }, 6 * 1000)
//
//                 });
//             }, null, 1))
//         .pipe(toArray())
//         .subscribe(value => {
//
//             fs.writeFile('temp.json', JSON.stringify(value), (err) => {
//                 if (err) throw err;
//                 console.log('文件已被保存');
//             })
//         });
//     years.forEach(year => {
//         yidaiyiluIds.forEach(country => {
//             myObservable.next({
//                 year,
//                 country
//             })
//         })
//     })
//
//     myObservable.complete();
// }())
//
//



