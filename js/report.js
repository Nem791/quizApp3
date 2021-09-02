import { loading } from "../components/loading.js";

const reportBtn = document.getElementById('report-btn');

reportBtn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Report',
        inputPlaceholder: 'Báo lỗi của bạn...',
        inputAttributes: {
            'aria-label': 'Type your message here'
        },
        confirmButtonText: 'Submit',
        showCancelButton: true
    })

    if (text) {
        // Swal.fire('Đã submit report của bạn về máy chủ')
        loading('Thông báo', 'Đang lưu form của bạn');
    }
})

