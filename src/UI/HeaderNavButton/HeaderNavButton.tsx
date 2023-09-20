import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './HeaderNavButton.module.css';

interface NavButtonProps {
	icon: string;
	text: string;
	path: string;
	number?: number;
}

export const HeaderNavButton: FC<NavButtonProps> = ({
	icon,
	text,
	path,
	number,
}) => {
	const navigate = useNavigate();

	return (
		<button className={classes.navButton} onClick={() => navigate(path)}>
			<img src={icon} alt={text} />
			{text}
			{!!number && <span className={classes.number}>{number}</span>}
		</button>
	);
};
