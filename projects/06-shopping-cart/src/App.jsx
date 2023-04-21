import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ListProducts } from './components/ListProducts'

function App() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 30
  })

  useEffect(() => {
    fetch('/src/mocks/products.json')
      .then((data) => data.json())
      .then((data) => setProducts(data.products.slice(0, 10)))
      .catch((err) => console.log(err))
  }, [])

  const filterProducts = (products) => {
    const filteredProducts = products.filter((product) => {
      return (
        product.price <= filters.maxPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
    return filteredProducts
  }

  const filteredProducts = filterProducts(products).sort(
    (a, b) => a.price - b.price
  )

  return (
    <>
      <Header setFilters={setFilters} />
      {products.length ? (
        <ListProducts products={filteredProducts} />
      ) : (
        <p> Loading products...</p>
      )}
    </>
  )
}

export default App
