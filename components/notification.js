function notify(notifyTitle) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${notifyTitle}`,
        showConfirmButton: false,
        timer: 1500
    })
}

export {notify};