function getData(data) {
    return new Promise(function(Resolve, Reject) {


        if (data % 2 == 0) {
            Resolve("even");
        } else if (data % 2 == 1) {
            Resolve("odd")
        } else {
            Reject("Error");
        }
    }).then((res) => {
        console.log(res)
    }).catch((msg) => {
        console.log(msg)
    })
}



export default getData