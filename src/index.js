// Add event listeners to capture form data and override a form's default behavior
// Fetch data based on what the user types into that form
// Display that data on the page

const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = document.querySelector("input#searchByID")

    console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector("section#movieDetails h4")
            const summary = document.querySelector("section#movieDetails p")

            title.innerText = data.title;
            summary.innerText = data.summary;
        })
    inputForm.reset()
  })
}

document.addEventListener('DOMContentLoaded', init);