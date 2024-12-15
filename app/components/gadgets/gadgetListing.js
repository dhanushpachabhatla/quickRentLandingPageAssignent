import React from 'react'
import Button from '../common/Button'
import "./styles.css"
const gadgetListing = () => {
  return (
    <>
    <section className="gadget-listing">
  <h2>Available Gadgets for Rent</h2>
  <div className="gadget-table">
    <table>
      <thead>
        <tr>
          <th>Gadget</th>
          <th>Features</th>
          <th>Price/Day</th>
          <th>Price/Week</th>
          <th>Price/Month</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Laptop</td>
          <td>16GB RAM, 512GB SSD, Intel i7</td>
          <td>$15</td>
          <td>$75</td>
          <td>$225</td>
          <td><button className="rent-button">Rent Now</button></td>
        </tr>
        <tr>
          <td>Camera</td>
          <td>4K Video, 20MP Lens, Accessories Included</td>
          <td>$20</td>
          <td>$100</td>
          <td>$500</td>
          <td><button className="rent-button">Rent Now</button></td>
        </tr>
        <tr>
          <td>Gaming Console</td>
          <td>4K HDR, 1TB Storage, Extra Controller</td>
          <td>$18</td>
          <td>$90</td>
          <td>$360</td>
          <td><button className="rent-button">Rent Now</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div className="cta-list">
    <p>Have a gadget you want to share? Earn money by listing it on QuickRent!</p>
    <Button text={"Rent Now"}/>
    {/* <button className="list-button">List Your Gadget</button> */}
  </div>
</section>
<hr/>
    </>
  )
}

export default gadgetListing
