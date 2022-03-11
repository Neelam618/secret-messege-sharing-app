document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()      //to avoid brouser default behavior: sending form data to backend server and refreshing the page which we don't have here
    const msgInput = document.querySelector('#msg-input')
    const encrypted = btoa(msgInput.value)

    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window, location}#${encrypted}`
    linkInput.select()
})