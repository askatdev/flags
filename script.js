

const hero = document.querySelector('.hero')
const input = document.querySelector('input')
const btn = document.querySelector('button')
const options = document.querySelector('.region')
const area = document.querySelector('.area')


let all = null
function getAPI(API){
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res)=>{
            all = res.data
            console.log(res.data)
            view(all)
        })
}

getAPI("all")



function view(data){
    window.scroll(0,0)
    hero.innerHTML = ""
    // data.sort((a,b)=> b.population - a.population)
    data.slice(0,20).map((el) => (
        hero.innerHTML += `<div class="box" style="margin-top: 50px">
<img src="${el.flags.svg}" width="100" alt="img">
<h2>${el.name.common}</h2>
<h3>${el.region}</h3>
<h4>${el.population}</h4>
<h4>${el.area} КВ<sup>2</sup></h4>
</div>`
    ))
}



btn.addEventListener("click",()=>{
    getAPI(`name/${input.value}`)
})

input.addEventListener('input',(e)=>{
getAPI(`name/${e.target.value}`)

})
area.addEventListener("change", (e) => {
    const target = e.target.value
    if (target === "area"){
        const res = all.sort((a,b) => b.area - a.area)
        view(res)
    }else if (target === "population"){
       const res = all.sort((a,b) => b.population - a.population)
        view(res)
    }else if (target === "z-a") {
        const res = all.sort((a, b) => b.name.common.localeCompare(a.name.common));
        view(res);
    }else if (target === "a-z") {
        const res = all.sort((a, b) => a.name.common.localeCompare(b.name.common));
        view(res);
    }else{

    }
    })

options.addEventListener("change", (e)=>{
    const target = e.target.value
    if (target === 'asia'){
        const res = all.filter(el =>{
            return el.region === 'Asia'
        })
        view(res)
    }else if (target === 'europe') {
        const res = all.filter(el => {
            return el.region === 'Europa'
        })
        view(res)

    }else if (target === 'africa') {
        const res = all.filter(el => {
            return el.region === 'Africa'
        })
        view(res)

    }else if (target === 'americas') {
        const res = all.filter(el => {
            return el.region === 'Americas'
        })
        view(res)

    }
})

