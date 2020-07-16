function render({ Item: divs }) {
  return divs.reduce((acc, cur) => {
    return acc + `
    <div>
      <figure>
        <img src="${cur.imgUrl}" alt="Random Image">
        <figcaption>${cur.caption}</figcaption>
      </figure>
      <button type="button">Add 2 Cart <span>🛒</span></button>
    </div>
    `
  }, '')
}

export default (props) => render(props)
