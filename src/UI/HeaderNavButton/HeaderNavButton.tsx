import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./HeaderNavButton.module.css";

interface NavButtonProps {
    icon: string;
    text: string;
    path: string;
}

export const HeaderNavButton: FC<NavButtonProps> = ({ icon, text, path }) => {
    const navigate = useNavigate();

    return (
        <button className={classes.navButton} onClick={() => navigate(path)}>
            <img src={icon} alt={text} />
            {text}
        </button>
    );
};
