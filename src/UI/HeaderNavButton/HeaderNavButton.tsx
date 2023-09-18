import { FC } from "react";
import classes from "./HeaderNavButton.module.css";

interface NavButtonProps {
    icon: string;
    text: string;
}

export const HeaderNavButton: FC<NavButtonProps> = ({ icon, text }) => {
    return (
        <button className={classes.navButton}>
            <img src={icon} alt={text} />
            {text}
        </button>
    );
};
