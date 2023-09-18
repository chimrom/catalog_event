import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './Pages/Layout/Layout';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index />
			</Route>
		</Routes>
	);
}

export default App;
