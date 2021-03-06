import { Link, Outlet } from 'react-router-dom';

export default function App() {
	return (
		<div>
			<h1>Bookkeeper</h1>
			<nav
				style={{
					borderBottom: 'solid 2px blue',
					paddingBottom: '1rem',
				}}>
				<Link to="/invoices">Invoices</Link> |{' '}
				<Link to="/expenses">Expenses</Link> | <Link to="/about">About</Link>
			</nav>
			<Outlet />
		</div>
	);
}
