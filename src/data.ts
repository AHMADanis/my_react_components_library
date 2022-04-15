let invoices = [
	{
		name: 'Santa Monica',
		anumber: 1995,
		amount: '$10,800',
		due: '12/05/1995',
	},
	{
		name: 'Stankonia',
		anumber: 2000,
		amount: '$8,000',
		due: '10/31/2000',
	},
	{
		name: 'Ocean Avenue',
		anumber: 2003,
		amount: '$9,500',
		due: '07/22/2003',
	},
	{
		name: 'Tubthumper',
		anumber: 1997,
		amount: '$14,000',
		due: '09/01/1997',
	},
	{
		name: 'Wide Open Spaces',
		anumber: 1998,
		amount: '$4,600',
		due: '01/27/1998',
	},
];

export function getInvoices() {
	return invoices;
}

export function getInvoice(anumber: number) {
	return invoices.find((invoice) => invoice.anumber === anumber);
}
