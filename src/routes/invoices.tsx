import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {
	let invoices = getInvoices();
	let [searchParams, setSearchParams] = useSearchParams();

	return (
		<div style={{ display: 'flex' }}>
			<nav
				style={{
					borderRight: 'solid 1px',
					padding: '1rem',
				}}>
				<input // search input
					value={searchParams.get('filter') || ''}
					onChange={(event) => {
						let filter = event.target.value;
						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
				/>

				{invoices // set search params
					.filter((invoice) => {
						let filter = searchParams.get('filter');
						if (!filter) return true;
						let name = invoice.name.toLowerCase();
						return name.startsWith(filter.toLowerCase());
					})
					.map((
						invoice // active list color
					) => (
						<NavLink
							style={({ isActive }) => {
								return {
									display: 'block',
									margin: '1rem 0',
									color: isActive ? 'red' : '',
								};
							}}
							to={`/invoices/${invoice.anumber}`}
							key={invoice.anumber}>
							{invoice.name}
						</NavLink>
					))}
			</nav>
			<Outlet />
		</div>
	);
}
