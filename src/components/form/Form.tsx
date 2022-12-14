import React, { useState } from 'react';
import Button from '../ui/Button';
import TextField from './TextField';
import Image from 'next/image';
import Delete from '../../../public/assets/icon-delete.svg';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { invoice } from '../Data';

const Form = ({ discardForm }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({});

	const [invoices, setInvocies] = useState(invoice);

	// const total = 0;

	console.log('State', invoices);

	const date = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now());

	const [addFormData, setAddFormData] = useState({
		senderAddress: {
			streetOne: '',
			cityOne: '',
			postCodeOne: '',
			countryOne: '',
		},
		clientsName: '',
		clientsEmail: '',
		clientAddress: {
			streetTwo: '',
			cityTwo: '',
			postCodeTwo: '',
			countryTwo: '',
		},
		paymentDue: '',
		paymentTerms: '',
		description: '',
		items: [{
			name: '',
			quantity: '',
			price: '',
		}]
	});

console.log("Default",addFormData);

	const handleAddFormChange = (e) => {
		e.preventDefault();

		const fieldName = e.target.getAttribute('name');
		const fieldValue = e.target.value;

		// make a copy of the existing form data
		const newFormData = { ...addFormData };
		// update the object with the new data the user has typed
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	const addItemList = () => { 
		// grabs the existing items 
		setAddFormData([...addFormData,{ name: '',quantity: '',price: ''}])
	}

	const onSubmit = (data) => {
		console.log(data);

		const newInvoice = {
			id: nanoid().slice(0, 6),
			slug: nanoid().slice(0, 6),
			createdAt: date,
			paymentDue: addFormData.paymentDue,
			description: addFormData.description,
			paymentTerms: addFormData.paymentTerms,
			clientsName: addFormData.clientsName,
			clientsEmail: addFormData.clientsEmail,
			status: 'pending',
			senderAddress: {
				streetOne: addFormData.streetOne,
				cityOne: addFormData.cityOne,
				postCodeOne: addFormData.postCodeOne,
				countryOne: addFormData.countryOne,
			},
			clientAddress: {
				streetTwo: addFormData.streetTwo,
				cityTwo: addFormData.cityTwo,
				postCodeTwo: addFormData.postCodeTwo,
				countryTwo: addFormData.countryTwo,
			},
			items: [
				{
					name: addFormData.name,
					quantity: addFormData.quantity,
					price: addFormData.price,
				},
			],
			total: 4032.23,
		};

		// create a new inoice array to avoid mutating the state
		const newInvoices = [...invoices, newInvoice];
		setInvocies(newInvoices);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form background">
			<h2 className="form--title text--one">New Invoice</h2>
			<div className="form__scroll">
				<h3 className="form--title-subhead">Bill From</h3>
				<div className="flex form__flex-space">
					<TextField
						className="display--none"
						htmlFor="street-address"
						label="Street Address"
						{...register('streetOne', {
							required: 'Street Address is required',
						})}
						name="streetOne"
						onChange={handleAddFormChange}
					/>
					{/* {errors.streetOne && <span className="error">{errors.streetOne.message}</span>} */}
					<div className="flex form__flex-gap">
						<TextField
							formSize="input--small"
							htmlFor="city"
							label="City"
							{...register('cityOne', {
								required: 'Required',
							})}
							name="cityOne"
							onChange={handleAddFormChange}
						/>
						<TextField
							formSize="input--small"
							htmlFor="postCodeOne"
							label="Post Code"
							{...register('postCodeOne', {
								required: 'Required',
							})}
							name="postCodeOne"
							onChange={handleAddFormChange}
						/>
						<TextField
							formSize="input--small"
							htmlFor="countryTwo"
							label="Country"
							{...register('countryOne', {
								required: 'Required',
							})}
							name="countryOne"
							onChange={handleAddFormChange}
						/>
					</div>
				</div>
				<div className="form__flex-space">
					<h3 className="form--title-subhead">Bill To</h3>
					<div className="flex form__flex-gap form__flex-column">
						<TextField
							htmlFor="clients-name"
							label="Client's Name"
							{...register('clientsName', {
								required: 'Required',
							})}
							name="clientsName"
							onChange={handleAddFormChange}
						/>
						<TextField
							htmlFor="clients-email"
							placeholder="e.g. email@example.com"
							label="Client's Email"
							{...register('clientsEmail', {
								required: 'Required',
							})}
							name="clientsEmail"
							onChange={handleAddFormChange}
						/>
						<TextField
							htmlFor="street-address"
							label="Street Address"
							{...register('streetTwo', {
								required: 'Required',
							})}
							name="streetTwo"
						/>
						<div className="flex form__flex-gap">
							<TextField
								formSize="input--small"
								htmlFor="city"
								label="City"
								{...register('cityTwo', {
									required: 'Required',
								})}
								name="cityTwo"
								onChange={handleAddFormChange}
							/>
							<TextField
								formSize="input--small"
								htmlFor="post-code"
								label="Post Code"
								{...register('postCodeTwo', {
									required: 'Required',
								})}
								name="postCodeTwo"
								onChange={handleAddFormChange}
							/>
							<TextField
								formSize="input--small"
								htmlFor="country"
								label="Country"
								{...register('countryTwo', {
									required: 'postCodeTwo',
								})}
								name="countryTwo"
								onChange={handleAddFormChange}
							/>
						</div>
					</div>
				</div>
				<div>
					<div className="flex form__terms">
						<TextField formSize="input--medium" type="date" label="Invoice Date" name="paymentDue" onChange={handleAddFormChange} />
						<div className="input__payment-terms">
							<label className="body--medium input--label-text" htmlFor="payment-terms">
								Payment Terms
							</label>
							<select className="select select__background input--medium" name="paymentTerms" onChange={handleAddFormChange} id="payment-terms">
								<option value="1">Net 1 Day</option>
								<option value="7">Net 7 Day</option>
								<option value="14">Net 14 Days</option>
								<option value="30">Net 30 Days</option>
							</select>
						</div>
					</div>
					<TextField htmlFor="project-description" label="Project Description" placeholder="e.g.Graphic Design Service" name="description" onChange={handleAddFormChange} />
				</div>
				<div className="item__list">
					<span className="item--list-header">Item List</span>
					<div className="flex form__flex-column">
						<div className="flex item__list-subheaders">
							<div>
								<span className="body--medium">Item Name</span>
								<TextField
									formSize="input--item"
									{...register('itemName', {
										required: 'itemName',
									})}
									name="name"
									onChange={handleAddFormChange}
								/>
							</div>
							<div>
								<span className="body--medium ">Qty.</span>
								<TextField
									type="number"
									formSize="input--qty"
									{...register('quantity', {
										required: 'quantity',
									})}
									name="quantity"
									onChange={handleAddFormChange}
								/>
							</div>
							<div>
								<span className="body--medium ">Price</span>
								<TextField
									type="number"
									formSize="input--price"
									{...register('price', {
										required: 'price',
									})}
									name="price"
									onChange={handleAddFormChange}
								/>
							</div>
							<div className="flex">
								<span className="body--medium">Total</span>
								<div className="flex input__total-spot">
									<span className="input--total body--medium">156.00</span>
									<Image className="total--delete" src={Delete} alt="Delete Icon" />
								</div>
							</div>
						</div>
						{/* <table className='input__item-list'>
								<tr>
									<th className="body--medium">Item Name</th>
									<th className="body--medium">QTY.</th>
									<th className="body--medium">Price</th>
									<th className="body--medium">Total</th>
							</tr>
							<tr>
								<td className='input__item-fields'>
								<TextField
									formSize="input--item"
									{...register('itemName', {
										required: 'itemName',
									})}
									name="name"
									onChange={handleAddFormChange}
								/>
								</td>
								<td>
								<TextField
									type="number"
									formSize="input--quantity"
									{...register('quantity', {
										required: 'quantity',
									})}
									name="quantity"
									onChange={handleAddFormChange}
								/>
								</td>
								<td>
								<TextField
									type="number"
									formSize="input--price"
									{...register('price', {
										required: 'price',
									})}
									name="price"
									onChange={handleAddFormChange}
								/>
								</td>
								<td>
								<div className="flex input__total-spot">
									<span className="input--total body--medium">156.00</span>
									<Image className="total--delete" src={Delete} alt="Delete Icon" />
								</div>
								</td>
								</tr>
							</table> */}
						<Button onClick={()=> addItemList()} buttonStyle="btn--style-four" buttonSize="btn--size-five">
							+ Add New Item
						</Button>
					</div>
				</div>
			</div>
			<div className="form__bottom-buttons flex">
				<div className="form__discard-right">
					<Button onClick={discardForm} buttonStyle="btn--style-six" buttonSize="btn--size-four">
						Discard
					</Button>
				</div>
				<div className="form__draft">
					<Button buttonStyle="btn--style-three" buttonSize="btn--size-two">
						Save as Draft
					</Button>
				</div>
				<Button type="submit" buttonStyle="" buttonSize="btn--size-two">
					Save & Send
				</Button>
			</div>
		</form>
	);
};

export default Form;
