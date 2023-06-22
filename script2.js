const block = document.querySelector('.block')


    axios(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
            console.log(res.data)
            res.data.map(el => (
                block.innerHTML += `<div class="ask"> <img src="./img/User%20icon%20businessman%20black%20suit%20icon%20vector%20image%20png.png" alt="img" width="100"><h1>${el.name}</h1>
<h2>${el.username}</h2> <h3>${el.address.street}</h3> <a href="">${el.phone}</a>
<a href="">${el.email}</a>
</div>`
            ))

        })




















// data.map(el => (
//             block.innerHTML += `<div class="ask"> <img src="./img/User%20icon%20businessman%20black%20suit%20icon%20vector%20image%20png.png" alt="img" width="100"><h1>${el.name}</h1>
// <h2>${el.username}</h2> <h3>${el.address.street}</h3> <a href="">${el.phone}</a>
// <a href="">${el.email}</a>
// </div>`
//         ))
//     })