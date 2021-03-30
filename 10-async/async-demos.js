(function(){
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`);
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`);
    }

    globalThis['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`);
        });
    }

    globalThis['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning result`);
                resolveFn(result);
            }, 5000);
        });
        return p;
    }

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var p = addAsyncPromise(x,y)
        //then, catch
        return p.then(function(result){
            console.log(`[@client] result = ${result}`);
            return result * 2
        });
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`);
        return result * 2
    }

    function divideAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if (y === 0){
                    return rejectFn(new Error('Invalid arguments!'))
                }
                const result = x + y;
                console.log(`   [@service] returning result`);
                resolveFn(result);
            }, 5000);
        });
        return p;
    }

    globalThis['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();