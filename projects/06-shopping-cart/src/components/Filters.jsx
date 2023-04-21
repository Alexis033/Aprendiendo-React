import { useState } from 'react'
import './filters.css'

export function Filters({ setFilters }) {
  const [price, setPrice] = useState(30)

  const handleChange = (event) => {
    setPrice(event.target.value)
    setFilters((prev) => ({ ...prev, maxPrice: event.target.value }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Max price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="2000"
          value={price}
          onChange={handleChange}
        />
        <span>${price}</span>
      </div>
      <div>
        <label htmlFor="category">Category </label>
        <select
          id="category"
          onChange={(e) => {
            setFilters((prev) => ({
              ...prev,
              category: event.target.value
            }))
          }}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="home-decoration">Home decorations</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}
