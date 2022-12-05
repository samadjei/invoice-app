import React from 'react'
import TextField from './TextField'

const Form = () => {
  return (
    <form>
      <h2>Edit #XM9141</h2>
      <div className="bill-from">
        <h3>Bill From</h3>
        <TextField htmlFor="street-adress" label="Street Address"/>
        <div>
          <TextField className="input--small" htmlFor="city" label="City"/>
          <label htmlFor="post-code">Post Code</label>
          <input type="text" />
          <label htmlFor="country">Country</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="clients-name"></label>
          <input type="text" />
          <label htmlFor="clients-email"></label>
          <input type="text" />
          <label htmlFor="street-address"></label>
          <input type="text" />
          <div>
            <label htmlFor="city">City</label>
            <input type="text" />
            <label htmlFor="post-code">Post code</label>
            <input type="text" />
            <label htmlFor="country"></label>
            <input type="text" />
            <div>
              <label htmlFor="invoice-date"></label>
              <input type="date" />
              <label htmlFor="payment-terms">Payment Terms</label>
              <select name="payment-terms" id="payment-terms">
                <option value="Net 1 Day">Net 1 Day</option>
                <option value="Net 7 Day">Net 7 Day</option>
                <option value="Net 14 Days">Net 14 Days</option>
                <option value="Net 30 Days">Net 30 Days</option>
              </select>
              <label htmlFor="project-description">Project Description</label>
              <input type="text" placeholder='e.g. Graphic Design Service' />
            </div>
          </div>
        </div>
        <div>
          <span>Item List</span>
        </div>
      </div>
    </form>
  )
}

export default Form