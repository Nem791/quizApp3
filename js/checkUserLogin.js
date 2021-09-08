let tempInfo = localStorage.getItem('tempUserInfo');


function checkLogin() {
    if (tempInfo) {
        console.log(JSON.parse(tempInfo).email)
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Thông báo',
            text: 'Bạn phải đăng nhập để làm trắc nghiệm',
        })

        const radioBtns = document.querySelectorAll('.form-check-input');
        radioBtns.forEach(element => {
            element.disabled = true;
        })
        const timer = document.querySelector('.timer');
        timer.hidden = true;
    }
}

export { checkLogin };