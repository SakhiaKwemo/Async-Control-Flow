//SetInterval(callback, delay)
//callback function ----> What?
//delay ---> When?

let counter = -1
const time = setInterval(() => {
        counter++
        console.log(counter + " seconds have gone by")

    if(counter === 10) {
        clearInterval(time)
    }
}, 1000)

