const buttons = document.querySelectorAll('button')
const cart = []

const checkInCart = (name, cart) => {
  let isInCart = false
  cart.forEach((item) => {
    if (item.name === name) { isInCart = true }
  })
  return isInCart
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log('CLICKED')
    /* Add object to cart ======= */
    // Grab text from clicked item
    const itemText = e.target.previousElementSibling.querySelector('figcaption').textContent
    // If item is in cart just increase qty by 1
    if (checkInCart(itemText, cart)) {
      const itemIndex = cart.findIndex(item => item.name === itemText)
      cart[itemIndex].qty++
    } else {
      // Else add item and qty=1 to cart
      const newItem = { name: itemText, qty: 1 }
      cart.push(newItem)
    }
  })
})
