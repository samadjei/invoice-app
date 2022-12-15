import React from 'react'
import { invoice } from '../../src/components/Data'
import Link from 'next/link';
import Button from '../../src/components/ui/Button'
import Image from 'next/image';
import ArrowLeft from '../../public/assets/icon-arrow-left.svg'
import { useStateContext } from '../../src/hooks/context/StateContext'

export const getStaticProps = async ({ params }) => {
	const invoices = invoice.filter((p) => p.slug === params.id);
	return {
		props: {
			items: invoices[0],
		},
	};
};

export const getStaticPaths = async () => {
	const paths = invoice.map((items) => ({
		params: { id: items.slug },
	}));
	return { paths, fallback: false };
};


const InvoiceDetails = ({ items }) => {
	// console.log(Object.entries(items.senderAddress).map(x => (console.log(x[1]))))

	const { theme } = useStateContext();

	return (
		<main className={theme}>
			<div className='invoiceDetails'>
				<div className="container">
					<Link href="/">
						<Image className='invoiceDetails--back-icon' src={ArrowLeft} alt="Arrow Left Icon" />
						<span className='invoiceDetails--back-text h3--small'>Go back</span>
					</Link>
					<div className='flex invoiceDetails__upper background--two'>
						<div className='invoiceDetails__status'>
							<span className='body--medium invoiceDetails__status--text'>Status</span>
							<div className='invoices__status invoices--paid'>
								<span className="invoices--dot invoices--dot-paid"></span>
								<span className='invoices__status-text'>{items.status}</span>
							</div>
						</div>
						<div className='invoiceDetails__buttons-flex'>
							<Button buttonStyle='btn--style-two' buttonSize='btn--size-three'>Edit</Button>
							<Button buttonStyle='btn--style-five' buttonSize='btn--size-four'>Delete</Button>
							<Button buttonSize='btn--size-two'>Mark as Paid</Button>
						</div>
					</div>
					<div>
						<div>
							<span>#{items.id}</span>
							<span>{items.description}</span>
							<div>
								{Object.entries(items.senderAddress).map((sender, index) => (
									<span key={index}>{sender[1]}</span>
								))}
							</div>
						</div>
					</div>
					<div>
						<div>
							<span>Invoice Date</span>
							<span>{items.createdAt}</span>
						</div>
						<div>
							<span>Payment Due</span>
							<span>{items.paymentDue}</span>
						</div>
					</div>
					<div>
						<span>Bill To</span>
						<span>{items.clientName}</span>
						<div>
							{Object.entries(items.clientAddress).map((sender, index) => (
								<span key={index}>{sender[1]}</span>
							))}
							</div>
					</div>
					<div>
						<span>Sent to</span>
						<span>{items.clientEmail}</span>
					</div>
					<div>
						<div>
							<span>Item Name</span>
							<span>QTY.</span>
							<span>Price</span>
							<span>Total</span>
						</div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</main>
  )
}

export default InvoiceDetails