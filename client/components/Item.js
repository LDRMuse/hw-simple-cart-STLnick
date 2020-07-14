export default () => {
  let markup = ''
  for (let i = 1; i <= 12; i++) {
    markup += `<div>
      <figure>
        <img src="https://source.unsplash.com/random/320x240" alt="Random Image">
          <figcaption>Item ${i}</figcaption>
      </figure>
        <button type="button" class="item-btn">Add 2 Cart <span>🛒</span></button>
    </div>
    `
  }
  return markup
}
