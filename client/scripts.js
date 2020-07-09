const buttons = document.querySelectorAll('button')
const cart = []

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    /* Add object to cart ======= */
    // Grab text from clicked item
    const itemText = e.target.previousElementSibling.querySelector('figcaption').textContent

    const itemIndex = cart.findIndex(item => item.name === itemText)

    // If item is in cart (index is valid) just increase qty by 1
    if (itemIndex !== -1) {
      cart[itemIndex].qty++
    } else {
      // Else add item and qty=1 to cart
      const newItem = { name: itemText, qty: 1 }
      cart.push(newItem)
    }
  })
})
