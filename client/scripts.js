const buttons = document.querySelectorAll('button')
const cart = []

// Check to see if an item is in the cart
const checkInCart = (name, cart) => {
  let isInCart = false
  cart.forEach(item => {
    if (item.name === name) { isInCart = true }
  })
  return isInCart
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    /* Add item to cart ========= */
    // Get item name
    const itemText = btn.previousElementSibling.querySelector('figcaption').textContent
    // If item is in cart increase qty by 1
    if (checkInCart(itemText, cart)) {
      const itemIndex = cart.findIndex(item => item.name === itemText)
      cart[itemIndex].qty++
      // Else add new object with itemText as name and qty 1
    } else {
      cart.push({ name: itemText, qty: 1 })
    }
  })
})
