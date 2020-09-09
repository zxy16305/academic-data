var Bagpipe = require('./bagpipe/bagpipe');
const superagent = require('superagent');


class BagpipePromise {
    constructor(size) {
        this.bagpipe = new Bagpipe(size, {
            ratio: 500
        });
        this.bagpipe.on('full', function (length) {
            console.warn(`Button system cannot deal on time, queue jam, current queue length is: ${length}`);
        });
        this.bagpipe.on('outdated', function (err) {
            console.warn(`outdated ${err}`);
        });
    }

    push(promise) {
        return new Promise(resolve => this.bagpipe.push((callback) => {
            promise.then((data) => {
                callback();
                resolve(data)
            })
        }))
    }
}

class SuperagentPipe {
    constructor(size) {
        this.bagpipe = new Bagpipe(size, {
            ratio: 500
        });
    }

    get(url, resolveDefault) {
        return new Promise(resolve => this.bagpipe.push((callback) => {
            superagent.get(url)
                .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36")
                .set("Accept", "*/*")
                .end((err, res) => {
                callback();

                if (err) {
                    // 如果访问失败或者出错，会这行这里
                    // 失败就再来一次
                    console.log(`抓取失败 - ${err} - ${url}`)
                    this.get(url, resolveDefault || resolve)
                    // reject(`抓取失败 - ${err} - ${url}`)
                } else {
                    resolveDefault && resolveDefault({err, res})
                    || resolve({err, res})
                }
            });
        }))
    }

    download(url, stream) {
        return new Promise(resolve => this.bagpipe.push((callback) => {
            superagent.get(url)
                .pipe(stream)
                .on('end', (err, res) => {
                    callback();
                    resolve({err, res})
                });
            }));
    }
}
// test()
function test() {
    let bagpipePromise = new BagpipePromise(30);

    const httpGet = (url) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(url)
            }, 500)
        })
    }


    for (let i = 0; i < 100; i++) {
        bagpipePromise.push(httpGet(i)).then(data => {
            console.log(data)
        })

    }
}


module.exports = {
    SuperagentPipe
}

