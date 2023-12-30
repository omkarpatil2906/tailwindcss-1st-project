const menuToggle = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const menu = document.getElementById('navbar-sticky');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');

});

const btns = document.querySelectorAll('.btn-search');
const inputBoxes = document.querySelectorAll('.inputBox');

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        inputBoxes[index].classList.toggle("hidden");
        inputBoxes[index].animate(
            [
                { opacity: 0, transform: 'translateX(50%)' },
                { opacity: 1, transform: 'translateX(0)' }
            ],
            { duration: 1000, easing: 'ease-in-out' }
        );
    });
});

const btnsub = document.querySelectorAll('.btnsub');
btnsub.forEach(btn4 =>{
    btn4.addEventListener("click", () => {
         if(btn4.innerHTML === "SUBSCRIBE"){
            btn4.innerHTML ="SUBSCRIBED"
         }else{
            btn4.innerHTML = "SUBSCRIBE"
         }
    })
})