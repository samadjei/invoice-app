import React from 'react'
import Data from '../../src/components/Data.json'

export const getStaticPaths = async () => {
  const res = await fetch(Data);
  console.log(res)
  const data = await res.json();

  // const paths = data.map(invoice => {
  //   return {

  //   }
  // })
}

const Invoice = () => {
  return (
    <div>
      <h1>Invoice Details</h1>
    </div>
  )
}

export default Invoice