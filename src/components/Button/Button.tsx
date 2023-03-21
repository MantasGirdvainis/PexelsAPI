import styles from './Button.module.css';

type ButtonProps = {
    children: JSX.Element | string;
    className?: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
};

const Button = ({ children, className, type = 'button', onClick }: ButtonProps): JSX.Element => {

    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    )
};

export { Button };