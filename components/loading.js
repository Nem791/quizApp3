import { notify } from "./notification.js"

function loading(loadingTitle, loadingHTML) {
    let timerInterval
    Swal.fire({
        title: `${loadingTitle}`,
        html: `${loadingHTML} <b></b>`,
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
            notify('Đã lưu');
        }
    })
}

export { loading };