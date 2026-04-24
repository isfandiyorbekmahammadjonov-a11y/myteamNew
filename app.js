const BarEl = document.querySelector('#bar');
const MenuEL = document.querySelector('.bars');
const XmarkEl = document.querySelector('#xmark')
BarEl.addEventListener('click',()=> {
    MenuEL.classList.toggle("hidden")
});
XmarkEl.addEventListener('click',()=> {
    MenuEL.classList.toggle("hidden")
});