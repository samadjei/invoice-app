import React from 'react'
import Button from './ui/Button'
import Image from 'next/image';
import Plus from "../../public/assets/icon-plus.svg"
import ArrowDown from "../../public/assets/icon-arrow-down.svg"

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h1>Invoices</h1>
          <span className='header__total h3--small'>There are 7 total invoices</span>
        </div>
      <div>
        <div className='header__right'>
          <div className='header__filter'>
            <div className="header__filter">
              <span className='h3--small'>Filter by Status</span>
              <Image className='header__filter-arrow' src={ArrowDown} alt="Arrow Down Icon" />
              </div>
              <div className='filter__card'>
                <div className="filter__card-container">
                  <label className='h3--small' htmlFor="Draft">
                  <input className='filter--checkbox' id="Draft" name="Draft" value="Draft" type="checkbox" />
                    Draft
                  </label>
                  <label className='h3--small' htmlFor="Pending">
                  <input className='filter--checkbox' id="Pending" name="Pending" value="Pending" type="checkbox" />
                    Pending
                  </label>
                  <label className='h3--small' htmlFor="Paid">
                  <input className='filter--checkbox' id="Paid" name="Paid" value="Paid" type="checkbox" />
                    Paid
                  </label>
                </div>
              </div>
              <Button>
                <div className="new__invoice-btn">
                <div className='filter__button-white'>
                  <Image className='new__invoice-plus' src={Plus} alt="Plus Icon" />
                </div>
                New Invoice
                </div>
              </Button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Header