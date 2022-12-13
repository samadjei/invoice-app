import React from 'react'
import { invoice } from '../../src/components/Data'
import Link from 'next/link';
import Button from '../../src/components/ui/Button'

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
	console.log(items.senderAddress)
  return (
		<div>
			<Link href="/">Go Back</Link>
			<div className='flex'>
				<div>
					<span>Status</span>
					<div className='invoices__status invoices--paid'>
						<span className="invoices--dot invoices--dot-paid"></span>
						<span className='invoices__status-text'>{items.status}</span>
					</div>
				</div>
				<div>
				<Button buttonSize='btn--mini'>Edit</Button>
				<Button buttonStyle='btn--delete' buttonSize='btn--mini'>Delete</Button>
				<Button buttonSize='btn--mini'>Mark as Paid</Button>
				</div>
			</div>
			<div>
				<div>
					<span>#{items.id}</span>
					<span>{items.description}</span>
					{Object.keys(items.senderAddress).map((sender, index) => (
                <div key={index}>
                  <span>{sender.city}</span>
                </div>
            ))}
				</div>
			</div>
    </div>
  )
}

export default InvoiceDetails