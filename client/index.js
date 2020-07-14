import { Item } from './components'

function render() {
  document.querySelector('#root').innerHTML = `
    ${Item()}
  `
}

render()
