import React, {useState} from 'react'
import Button from '../ui/Button'
import TextField from './TextField'
import Image from 'next/image';
import Delete from "../../../public/assets/icon-delete.svg"
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
import Invoices from '../invoices/Invoices';

const Form = ({discardForm}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
  });

  const [invoices, setInvocies] = useState(data)

  const [addFormData, setAdFormData] = useState({
    streetAddressOne: '',
    cityOne: '',
    postCodeOne: '',
    countryOne: '',
    clientsName: '',
    clientsEmail: '',
    streetAddressTwo: '',
    cityTwo: '',
    postCodeTwo: '',
    countryTwo: '',
    date: '',
    paymentTerms: '',
    projectDescription: '',
    itemName: '',
    qty: '',
    price: ''
  })


  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue;

    setAdFormData(newFormData)
  }

  const onSubmit = (data) => {
    console.log(data);

    const newInvoice = {
      id: nanoid(),
      streetAddressOne: addFormData.streetAddressOne,
      cityOne: addFormData.cityOne,
      postCodeOne: addFormData.postCodeOne,
      countryOne: addFormData.countryOne,
      clientsName: addFormData.clientsName,
      clientsEmail: addFormData.clientsEmail,
      streetAddressTwo: addFormData.streetAddressTwo,
      cityTwo: addFormData.cityTwo,
      postCodeTwo: addFormData.postCodeTwo,
      countryTwo: addFormData.countryTwo,
      date: addFormData.date,
      paymentTerms: addFormData.paymentTerms,
      projectDescription: addFormData.projectDescription,
      itemName: addFormData.itemName,
      qty: addFormData.qty,
      price: addFormData.price
    }

    // create a new inoice array to avoid mutating the state 
    const newInvoices = [...invoices, newInvoice];
    setInvocies(newInvoices);
  }

  


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form background'>
      <h2 className='form--title text--one'>New Invoice</h2>
      <div className='form__scroll'>
        <h3 className='form--title-subhead'>Bill From</h3>
        <div className="flex form__flex-space">
          <TextField 
            className='display--none'
            htmlFor="street-address"
            label="Street Address"
            {...register('streetAddressOne', {
              required: "Street Address is required"
            })}
            name='streetAddressOne'
            onChange={handleAddFormChange}
          />
          {/* {errors.streetAddressOne && <span className="error">{errors.streetAddressOne.message}</span>} */}
          <div className='flex form__flex-gap'>
            <TextField formSize="input--small" htmlFor="city" label="City" 
            {...register('cityOne', {
              required: "Required"
            })}
            name='cityOne'
                        onChange={handleAddFormChange}

            />
            <TextField
              formSize="input--small" htmlFor="postCodeOne" label="Post Code"
              {...register('postCodeOne', {
              required: "Required"
              })}
              name='postCodeOne'
                          onChange={handleAddFormChange}

            />
            <TextField formSize="input--small" htmlFor="countryTwo"    label="Country"
              {...register('countryOne', {
                required: "Required"
                })}
              name='countryOne'
                          onChange={handleAddFormChange}

            />
          </div>
        </div>
        <div className='form__flex-space'>
          <h3 className='form--title-subhead'>Bill To</h3>  
          <div className='flex form__flex-gap form__flex-column'>
            <TextField htmlFor="clients-name" label="Client's Name"
              {...register('clientsName', {
                required: "Required"
              })}
              name='clientsName'
                          onChange={handleAddFormChange}
 />
            <TextField htmlFor="clients-email" placeholder='e.g. email@example.com' label="Client's Email"
              {...register('clientsEmail', {
                required: "Required"
              })}
              name='clientsEmail'
                          onChange={handleAddFormChange}
 />
            <TextField htmlFor="street-address" label="Street Address"
              {...register('streetAddressTwo', {
                required: "Required"
              })}
              name='streetAddressTwo' />
            <div className='flex form__flex-gap'>
              <TextField formSize="input--small" htmlFor="city" label="City"
                {...register('cityTwo', {
                  required: "Required"
                })}
                name='cityTwo'
                            onChange={handleAddFormChange}
 />
              <TextField formSize="input--small" htmlFor="post-code" label="Post Code" 
                {...register('postCodeTwo', {
                  required: "Required"
                })}
                name='postCodeTwo'
                            onChange={handleAddFormChange}
 />
              <TextField formSize="input--small" htmlFor="country"      label="Country"
                {...register('countryTwo', {
                  required: "postCodeTwo"
                })}
                name='countryTwo'
                            onChange={handleAddFormChange}
 />
          </div>
        </div>
        </div>
        <div>
          <div className='flex form__terms'>
            <TextField formSize='input--medium' type='date' label='Invoice Date' name='date'
                      onChange={handleAddFormChange}

            />
          <div className='input__payment-terms'>
            <label className='body--medium input--label-text' htmlFor="payment-terms">Payment Terms</label>
            <select className='select input--medium' name="paymentTerms"
                        onChange={handleAddFormChange}
 id="payment-terms">
              <option value="Net 1 Day">Net 1 Day</option>
              <option value="Net 7 Day">Net 7 Day</option>
              <option value="Net 14 Days">Net 14 Days</option>
              <option value="Net 30 Days">Net 30 Days</option>
            </select>
          </div>
          </div>
          <TextField htmlFor="project-description" label="Project Description" placeholder='e.g.Graphic Design Service' name='projectDescription'
                      onChange={handleAddFormChange}
/>
        </div>
        <div className='item__list'>
          <span className='item--list-header'>Item List</span>
          <div className='flex form__flex-column'>
            <div className='flex item__list-subheaders'>
              <div>
                <span className='body--medium '>Item Name</span>
                <TextField  formSize='input--item'
                  {...register('itemName', {
                    required: "itemName"
                  })}
                  name='itemName'
                              onChange={handleAddFormChange}

                />
              </div>
              <div>
                <span className='body--medium '>Qty.</span>
                <TextField type='number'  formSize='input--qty'
                {...register('qty', {
                  required: "qty"
                })}
                name='qty'
                            onChange={handleAddFormChange}

                />
              </div>
              <div>
                <span className='body--medium '>Price</span>
                <TextField type='number' formSize='input--price'
                {...register('price', {
                  required: "price"
                })}
                name="price"
                            onChange={handleAddFormChange}
 
                />
              </div>
              <div className='flex'>
                <span className='body--medium'>Total</span>
                <div className='flex input__total-spot'>
                  <span className='input--total body--medium'>156.00</span>
                  <Image className='total--delete' src={Delete} alt="Delete Icon" />
                </div>
              </div>
          </div>
          <Button buttonStyle='btn--item' buttonSize='btn--item-long'>
          + Add New Item
          </Button> 
          </div>
        </div>
      </div>
      <div className='form__bottom-buttons flex'>
        <div className="form__discard-right">
          <Button onClick={discardForm} buttonStyle='btn--grey' buttonSize='btn--discard'>Discard</Button>
        </div>
        <Button buttonStyle='btn--draft' buttonSize='btn--mini'>Save as Draft</Button>
        <Button type='submit' buttonSize='btn--mini'>Save & Send</Button>
      </div>
    </form>
  )
}

export default Form