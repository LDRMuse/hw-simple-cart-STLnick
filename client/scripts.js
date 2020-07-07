// TODO: Use `querySelectorAll` to create a 'NodeList' of all of the 'buttons'
// Iterate over that and add event listeners to each one.
// The event listener should listen for a 'click.' When we click it should say 'clicked'
const buttons = document.querySelectorAll('button')

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', (e) => {
//     alert('Clicked!')
//   })
// }

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alert('Clicked!')
  })
})
