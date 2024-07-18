const photo = document.querySelectorAll('.photo img');
const model = document.getElementById('model') ;
const close = document.getElementById('close');
const imgModel = document.querySelector('.imgModel');

photo.forEach ( img => {
    img.addEventListener( 'click' , ()=>{
        model.style.display = 'flex' ;
        imgModel.src = img.src ;
    })
})

close.addEventListener( 'click' , ()=> {
    model.style.display = 'none' ;
})

model.addEventListener( 'click' , ()=> {
    model.style.display = 'none' ;
})