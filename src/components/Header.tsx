import React, {useState} from 'react'
import Button from './ui/Button'
import Image from 'next/image';
import Plus from "../../public/assets/icon-plus.svg"
import ArrowDown from "../../public/assets/icon-arrow-down.svg"

interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = () => {
  // Menu State
  const [filterOpen, setFilterOpen] = useState(false);
  const [arrowFlip, setArrowFlip] = useState("");
	const filterToggle = () => {
    setFilterOpen(!filterOpen);
    setArrowFlip("rotate")
  };
  

  return (
    <div className='header'>
      <div>
        <h1>Invoices</h1>
          <span className='header__total h3--small'>There are 7 total invoices</span>
        </div>
      <div>
        <div className='header__right'>
          <div className='header__filters'>
            <div>
              <div className='header__filter' onClick={filterToggle}>
                <span className='h3--small'>Filter by Status</span>
                {filterOpen ? <Image className='header__filter-arrow rotate' src={ArrowDown} alt="Arrow Down Icon" /> : <Image className='header__filter-arrow' src={ArrowDown} alt="Arrow Down Icon" />}
              
              </div>
              </div>
              {filterOpen ? <div className='filter__card'>
              <div className="filter__card-container">
                  <label className="filter__card-content h3-small">Draft
                    <input id="Draft" name="Draft" value="Draft" type="checkbox"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="filter__card-content h3-small">Pending
                    <input id="pending" name="pending" value="pending" type="checkbox"/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="filter__card-content h3-small">Paid
                    <input id="paid" name="paid" value="paid" type="checkbox"/>
                    <span className="checkmark"></span>
                  </label>
                </div> 
              </div> : null }
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