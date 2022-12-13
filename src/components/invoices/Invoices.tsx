import React from 'react'
import {invoice} from '../Data'
import ArrowRight from '../../../public/assets/icon-arrow-right.svg'
import Image from 'next/image'
import Link from 'next/link'

const Invoices = () => {
  return (
    <div className='invoice'>
      {
        invoice.map(item => {
          return (
            <Link href={'/invoice/' + item.slug} className='invoices background--two' key={item.id}>
              <strong className='invoices--id text--one'><span className='invoices--hashtag'>#</span>{item.id}</strong>
              <span className='text--two'>Due {item.paymentDue}</span>
              <span className='text--two'>{item.clientName}</span>
              <h3 className='text--one'>£{item.total}</h3>
              <div className='invoices__flex'>
                <div className='invoices__status invoices--paid'>
                  <span className="invoices--dot invoices--dot-paid"></span>
                  <span className='invoices__status-text'>{item.status}</span>
                </div>
                <Image className="invoices__arrow-right" src={ArrowRight} alt="Invoice App Logo" />
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Invoices