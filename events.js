console.log("start")

let counter = 6
const box = document.getElementById('box')
const seconds = document.getElementById('seconds')
const title = document.getElementById('title')

const time = setInterval(() => {
    counter--
    console.log(counter + " seconds have gone by")
    seconds.innerHTML = counter

    if(counter === 0) {
        clearInterval(time)
        title.innerHTML = "You Lost"
    }


}, 1000)

box.addEventListener('click', () => {
    if(box.style.backgroundColor === "red"){
        clearInterval(time)
        title.innerHTML = "You Win"
    }
}) 

box.addEventListener('mouseover', () => {
    let array = ["red", "blue", "green", "yellow"]
    const index = Math.floor(Math.random()*array.length)
    console.log(index)
    box.style.backgroundColor = array[index]
}) 

console.log("finish")


