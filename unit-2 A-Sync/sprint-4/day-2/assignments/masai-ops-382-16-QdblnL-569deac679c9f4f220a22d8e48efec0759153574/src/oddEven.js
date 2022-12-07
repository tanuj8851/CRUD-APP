function getData(data) {
    let promise = new Promise((resolve, reject) => {
        if (typeof(data) == string) {
            reject("error");
        } else if (data % 2 == 1) {
            setTimeout((el) => {
                resolve("odd");
            }, 2000);
        } else if (data % 2 == 0) {
            setTimeout((el) => {
                resolve("even")
            }, 4000);
        }
    })


    promise.then((res) => {
            console.log(res)
            return res;
            console.log(promise);
        })
        .catch((err) => {
            console.log(err);
            // return err;
        })

    // console.log(promise)
    return promise;
}


export default getData