const Rx = require('rxjs');
const { mergeMap, concatAll, concatMap, last, toArray, map} = require('rxjs/operators');
var myObservable = new Rx.Subject();

let ob = Rx.from([1,10,20,30,40])
    .pipe(
        mergeMap((num) => {
            return Rx.Observable.create((observer) => {
                setTimeout(()=>{
                    observer.next(num + 1)
                    observer.complete();
                }, 2000)
            });

        }, null, 2)
    ).pipe(toArray())
    .pipe(map(
        a => {
            console.log(a)
            return a;
        }
    ));

ob.subscribe(a=>{
    console.log(a)
}).complete()


