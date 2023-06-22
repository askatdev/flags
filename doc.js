
const breeds = document.querySelector(".breeds")
const breedImg = document.querySelector(".breedImg")
const option = document.querySelector('.dog')
const btnOne = document.querySelector('button')
const inputOne = document.querySelector('input')

let all = null
function getAll(Api) {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            all = res.data
            console.log(Object.keys(res.data.message))
            Object.keys(res.data.message).map(el => {
                breeds.innerHTML += `<button class="btn-breed btn">${el}</button>`
            })
        })
        .then(() => btn())
}
getAll('all')


function btn() {
    const breedBtn = document.querySelectorAll(".btn-breed")
    breedBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            getImg(btn.innerHTML)
        })
    })
}

function getImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res)=>{
            breedImg.innerHTML =` <img src="${res.data.message}" width="300" alt="img">`
        })
}
getImg()
function opt() {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map(el => {
                option.innerHTML += `<option value="${el}">${el}</option>`
            })
        })
}
opt()


option.addEventListener("change", (e)=>{
    const option = e.target.value
    getImg(option)

})




















// function getAll() {
//     axios(`https://dog.ceo/api/breeds/list/all`)
//      .then((res) => {
//         console.log(Object.keys(res.data.message))
//         Object.keys(res.data.message).map(el => {
//             breeds.innerHTML += `<button class="btn-breed btn">${el}</button>`
//         })
//     })
//         // .then(() => btn())
// }
// getAll()


// function btn() {
//     const breedBtn = document.querySelectorAll(".btn-breed")
//     breedBtn.forEach(btn => {
//         btn.addEventListener("click", () => {
//             getImg(btn.innerHTML)
//         })
//     })
// }

// function getImg(name){
//     axios(`https://dog.ceo/api/breed/${name}/images/random`)
//         .then((res) =>{
//             breedImg.innerHTML = `<img src="${res.data.message}" width="300" alt="img">`
//         })
// }
// getImg()

// function option(){
//     axios(`https://dog.ceo/api/breeds/list/all`)
//         .then((res)=>{
//             Object.keys(res.data.message).map(el =>{
//                 optionDog.innerHTML += `<option value="${el}"class="option">${el}</option>`
//             })
//         })
//         .then(() => Op())
// }
// option()
//
//
//
// function Op(){
// const dogOption = document.querySelectorAll('.option')
//     dogOption.forEach(btn =>{
//         btn.addEventListener('change', () =>{
//             getImg(Op.innerHTML)
//         })
//     })
// }
//
// function getImg(name){
//     axios(`https://dog.ceo/api/breed/${name}/images/random`)
//         .then((res) =>{
//             breedImg.innerHTML = `<img src="${res.data.message}" width="300" alt="img">`
//         })
// }
// getImg()


//function btn() {
//     const breedBtn = document.querySelectorAll(".btn-breed")
//     breedBtn.forEach(btn => {
//         btn.addEventListener("click", () => {
//             getImg(btn.innerHTML)
//         })
//     })
// }



