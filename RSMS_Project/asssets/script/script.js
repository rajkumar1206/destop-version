const parallax = document.querySelector('.image');

window.addEventListener('scroll',() => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = -offset*0.5 +'px';
})

const toggleElemenetList = Array.from( document.getElementsByClassName('innerblock') );
console.log(toggleElemenetList);

const toggleHandler = (element) => {
    element.target.nextElementSibling.classList.toggle('magic');
}

toggleElemenetList.forEach( element => {
    element.addEventListener('click', toggleHandler.bind(this));
});