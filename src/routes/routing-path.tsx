import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Expenses from './expenses';
import Invoices from './invoices';

const RoutingPath: React.FC = () => {
	return (
		<Routes>
			<Route path="/expenses" element={<Expenses />} />
			<Route path="/invoices" element={<Invoices />} />
		</Routes>
	);
};

export default RoutingPath;
