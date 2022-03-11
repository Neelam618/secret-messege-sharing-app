document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()      //to avoid brouser default behavior: sending form data to backend server and refreshing the page which we don't have here
    const input = document.querySelector('input')
})