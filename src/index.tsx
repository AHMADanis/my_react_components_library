import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import About from './routes/about';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="expenses" element={<Expenses />} />
					<Route path="about" element={<About />} />
					<Route path="invoices" element={<Invoices />}>
						<Route
							index
							element={
								<main style={{ padding: '1rem' }}>
									<p>Select an invoice to see the details</p>
								</main>
							}
						/>
						<Route path=":invoiceId" element={<Invoice />} />
					</Route>
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
