const burgericon = document.getElementsByName('burgericon');
const lefthiddennav = document.querySelector('.lefthiddennav');

burgericon.forEach(ele => {
    ele.addEventListener('click', e => {
        lefthiddennav.classList.toggle("hideleft");
    });
});