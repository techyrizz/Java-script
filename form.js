let firstname = document.querySelector('#firstname')

let lastname = document.querySelector('#lastname')

let submit = document.querySelector('#submit')

submit.addEventListener('click',()=>{
    document.write(`My full Name is : ${firstname.value} ${lastname.value}`)
})


