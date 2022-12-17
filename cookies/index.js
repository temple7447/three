let container = document.querySelector('.container-cookies');
let btn = document.querySelector('.btn');



btn.addEventListener('click', () => {
    container.classList.add('hidden');
    document.cookie = "cookieBy = codingNepal; max-age=" + 60 * 60 * 24 * 30;
})

if (document.cookie) {
    container.classList.add('hidden');
} else {
    container.classList.add('active')
}

setTimeout(() => {
    container.classList.add('active')
}, 4000)

// let checkcookie = document.cookie.indexOf("cookieBy = codingpal");

// // checkcookie !=-1 ? 
// console.log(checkcookie)