import { SliderCard } from "../components/sliderCard.js";

fetch('http://localhost:3000/quizzes')
    .then(response => {
        return response.json();
    })
    .then((data) => {
        const firstSlider = document.querySelector('.container-box');
        
        Object.keys(data).forEach(() => {
            const cardItem = new SliderCard();
            firstSlider.appendChild(cardItem.render())
        });

        const box = document.querySelectorAll('.box');
        let content = firstSlider.querySelectorAll('.content');
        let cardImage = firstSlider.querySelectorAll('.card-image');
        console.log(cardImage)
        content.forEach((element, index) => {

            // Render ten cau hoi tu data 
            element.innerText = data[`${Object.keys(data)[index]}`][0].questionTitle;

            // Render so luong cau hoi 
            element.nextElementSibling.innerText = data[`${Object.keys(data)[index]}`].length + ' questions';

            // Render link hinh anh 
            cardImage[index].src = data[`${Object.keys(data)[index]}`][0].image;

            box[index].dataset.id = Object.keys(data)[index];
        })

        box.forEach(element => {
            element.addEventListener('click', () => {
                localStorage.setItem('id', JSON.stringify(element.dataset.id));
                // location.href = './quizPage.html';
                location.href = `./quizPage.html?id=${element.dataset.id}`;

                // location.search = '$id=24';
            })
        })
    })

    .then(() => {
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    })











