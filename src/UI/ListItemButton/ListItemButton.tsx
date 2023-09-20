import { FC } from 'react';
import classes from './ListItemButton.module.css';

interface ItemButtonI {
	text: string;
	onClick: () => void;
}

export const ListItemButton: FC<ItemButtonI> = ({ text, onClick }) => {
	return (
		<button className={classes.button} onClick={onClick}>
			{text}
		</button>
	);
};
