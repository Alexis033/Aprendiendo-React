export function Filters() {
  return (
    <section>
      <div>
        <label htmlFor='price'>Price </label>
        <input type='range' id='price' min='10' max='2000' />
      </div>
      <div>
        <label htmlFor='category'>Category </label>
        <select id='category'>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='home-decoration'>Home decorations</option>
          <option value='smartphones'>Smartphones</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
