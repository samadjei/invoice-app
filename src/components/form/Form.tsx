import React from 'react'
import Button from '../ui/Button'
import TextField from './TextField'

const Form = () => {
  return (
    <form>
      <h2 className='form--title'>New Invoice</h2>
      <div>
        <h3 className='form--title-subhead'>Bill From</h3>
        <div className="flex form__flex-space">
          <TextField htmlFor="street-adress" label="Street Address"/>
          <div className='flex form__flex-gap'>
            <TextField formSize="input--small" htmlFor="city" label="City"/>
            <TextField formSize="input--small" htmlFor="post-code" label="Post Code"/>
            <TextField formSize="input--small" htmlFor="country" label="Country"/>
          </div>
        </div>
        <div className='form__flex-space'>
          <h3 className='form--title-subhead'>Bill To</h3>  
          <div className='flex form__flex-gap form__flex-column'>
            <TextField htmlFor="clients-name" label="Client's Name"/>
            <TextField htmlFor="clients-email" placeholder='e.g. email@example.com' label="Client's Email"/>
            <TextField htmlFor="street-addressl" label="Street Address" />
            <div className='flex form__flex-gap'>
            <TextField formSize="input--small" htmlFor="city" label="City"/>
            <TextField formSize="input--small" htmlFor="post-code" label="Post Code"/>
            <TextField formSize="input--small" htmlFor="country" label="Country"/>
          </div>
          </div>
        </div>
        <div>
          <div className='flex form__terms'>
          <TextField formSize='input--medium' type='date' label='Invoice Date' />
          <div className='input__payment-terms'>
            <label className='body--medium input--label-text' htmlFor="payment-terms">Payment Terms</label>
            <select className='select input--medium' name="payment-terms" id="payment-terms">
              <option value="Net 1 Day">Net 1 Day</option>
              <option value="Net 7 Day">Net 7 Day</option>
              <option value="Net 14 Days">Net 14 Days</option>
              <option value="Net 30 Days">Net 30 Days</option>
            </select>
          </div>
          </div>
          <TextField htmlFor="project-description" label="Project Description" placeholder='e.g.Graphic Design Service'/>
        </div>
        <div className='item__list'>
          <span className='item--list-header'>Item List</span>
          <div className='flex form__flex-column'>
          <div className='flex item--list-subheaders'>
            <span className='body--medium '>Item Name</span>
            <span className='body--medium '>Qty.</span>
            <span className='body--medium '>Price</span>
            <span className='body--medium '>Total</span>
          </div>
          <Button buttonStyle='btn--item' buttonSize='btn--item-long'>
          + Add New Item
          </Button> 
          </div>
        </div>
      </div>
    </form>
  )
}

export default Form