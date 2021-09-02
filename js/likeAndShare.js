const heartBtn = document.getElementById('heart-btn');
const shareBtn = document.getElementById('share-btn');

console.log(heartBtn)
console.log(shareBtn)

heartBtn.addEventListener('click', () => {
    if (heartBtn.firstElementChild.classList.contains('far')) {

        // Tim <3 
        heartBtn.firstElementChild.classList.add('fas');
        heartBtn.firstElementChild.classList.remove('far');

        // Cong 1 
        heartBtn.lastElementChild.innerHTML = Number(heartBtn.lastElementChild.innerHTML) + 1;
    } else {
        // Tim <3 
        heartBtn.firstElementChild.classList.add('far');
        heartBtn.firstElementChild.classList.remove('fas');

        // Tru 1 
        heartBtn.lastElementChild.innerHTML = Number(heartBtn.lastElementChild.innerHTML) - 1;
    }
})













