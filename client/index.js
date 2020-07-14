import { Cart, CartButton, Item } from './components'

function render() {
  document.querySelector('#root').innerHTML = `
    ${CartButton()}
    ${Cart()}
    ${Item()}
  `

  const cart = []
  const cartDiv = document.querySelector('#cart-container')
  const cartList = document.querySelector('#cart-list')

  const cartButton = document.querySelector('#cart-btn')
  const itemButtons = document.querySelectorAll('.item-btn')

  // Check to see if an item is in the cart
  const checkInCart = (name, cart) => {
    let isInCart = false
    cart.forEach(item => {
      if (item.name === name) { isInCart = true }
    })
    return isInCart
  }

  const renderItem = (item, index) => {
    const markup = `<li class="cart-item" id="${item.id}">${item.name} - Quantity: ${item.qty}</li>`
    cartList.insertAdjacentHTML('beforeend', markup)
  }

  const updateItem = (item) => {
    const text = `${item.name} - Quantity: ${item.qty}`
    cartList.querySelector(`#${item.id}`).textContent = text
  }

  /* Add item to cart ============= */
  itemButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Get item name
      const itemName = btn.previousElementSibling.querySelector('figcaption').textContent

      // If item is in cart increase qty by 1
      if (checkInCart(itemName, cart)) {
        // Update cart array quantity
        const itemIndex = cart.findIndex(item => item.name === itemName)
        const itemToUpdate = cart[itemIndex]
        itemToUpdate.qty++
        // Update UI
        updateItem(itemToUpdate)
        // Else add new object with itemText as name and qty 1
      } else {
        const newItem = { name: itemName, qty: 1, id: `item-${cart.length}` }
        // Add to cart array
        cart.push(newItem)
        // Update UI
        renderItem(newItem)
      }
    })
  })

  /* Show/hide the cart ============= */
  cartButton.addEventListener('click', () => {
    cartDiv.classList.toggle('hidden')
  })
}

render()
