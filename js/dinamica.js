let btns =document.querySelectorAll('#btn-numeros')
let ficha1= document.querySelector('.ficha1-container')
let ficha2= document.querySelector('.ficha2-container')
let span=document.querySelector('span')

Array.from(btns).forEach(btn=>{
    btn.addEventListener('click',e=>{
        const reting=e.target.textContent
        span.textContent=reting
        ficha2.classList.remove('hidden')   
        ficha1.classList.add('hidden') 
    })
})