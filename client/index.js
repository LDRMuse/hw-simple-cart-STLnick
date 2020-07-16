import { Item } from './components'

const HTMLRoot = document.querySelector('#root')

const props = {
  Item: [
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #1'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #2'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #3'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #4'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #5'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #6'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #7'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #8'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #9'
    },
    {
      imgUrl: 'https://source.unsplash.com/random/320x240',
      caption: 'Item #10'
    }
  ]
}

function render(props) {
  HTMLRoot.innerHTML = Item(props)

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
      console.log(cart)
    })
  })
}

render(props)
