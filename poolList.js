var Bagpipe = require('./bagpipe/bagpipe');
const superagent = require('superagent');
require('superagent-proxy')(superagent);

// let ipProxy = [
//     "61.145.48.146:9999",
//     "218.64.151.60:9000",
//     "49.89.84.43:9999",
//     "27.206.77.143:9000",
//     "112.95.25.198:8118",
//     "183.166.138.207:9999",
//     "112.111.217.5:9999",
//     "117.91.254.64:9999",
//     "123.169.115.92:9999",
//     "113.195.234.211:9999",
//     "59.62.42.54:9000",
//     "218.65.69.54:9000",
//     "27.43.189.234:9999",
//     "27.43.185.90:9999",
//     "112.111.217.136:9999",
// ]

function getProxyIp() {
    const number = new Date().getTime() % ipProxy.length;
    return ipProxy[number];
}

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
    constructor(size, debug = false, timeout = 120000) {
        this.bagpipe = new Bagpipe(size, {
            ratio: 500
        });
        this.debug = debug;
        this.timeout = timeout;
    }

    get(url, resolveDefault, c = 0) {
        if (c === 5) {
            console.log(url, `已重复${c}次，返回空`)

            return  new Promise(resolve =>   resolveDefault &&
                resolveDefault({err: null, res: null}) || resolve({err: null, res: null}))
        }
        return new Promise(resolve => this.bagpipe.push((callback) => {
            this.debug && console.log('start', url);

            superagent.get(url)
                .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36")
                .set("Accept", "*/*")
                // .proxy("http://" + getProxyIp())
                .timeout({
                    deadline: this.timeout
                })
                .end((err, res) => {
                    this.debug && console.log('end', url);

                    callback();

                    if (err) {
                        // 如果访问失败或者出错，会这行这里
                        // 失败就再来一次
                        console.log(`抓取失败 - ${err} - ${url}`)
                        this.get(url, resolveDefault || resolve, c + 1)
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
            this.debug && console.log('start', url);

            superagent.get(url)
                .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36")
                .set("Accept", "*/*")
                .pipe(stream)
                .on('end', (err, res) => {
                    this.debug && console.log('end', url);

                    callback();
                    resolve({err, res})
                });
            }));
    }

    wait() {
        setTimeout(() => {
            if (this.bagpipe.queue !== 0) {
                this.wait();
            }
        }, 2000)
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

