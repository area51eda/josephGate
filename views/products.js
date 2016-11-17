var h = require('hyperscript')

module.exports = ({products}, dispatch) => {
  return h('div#products', {}, products.map((product, index) => {
    return [
      h('p', {className: 'name'}, product.name),
      h('p', "Price: ", product.price)
    ]

  }))
}
