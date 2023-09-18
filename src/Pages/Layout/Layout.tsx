import { Outlet } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import classes from './Layout.module.css';

export const Layout = () => {
	return (
		<div className={classes.wrapper}>
			<Header />
			<main className={classes.main}>
				<Outlet />
			</main>
		</div>
	);
};
