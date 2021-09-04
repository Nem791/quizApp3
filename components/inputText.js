async function inputText(inputTitle, inputText, notifyText, fireFunction) {
    const { value: text } = await Swal.fire({
        input: 'text',
        inputLabel: inputTitle,
        inputPlaceholder: inputText,
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      if (text) {
        fireFunction(text);
      }
}

export {inputText};