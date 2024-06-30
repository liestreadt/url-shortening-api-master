import styles from './button.module.css';

type ButtonProps = {
    text: string;
    buttonSize: 'big' | 'small';
    borderRadius: 'rounded' | 'squared';
};

function Button(props: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[props.buttonSize]} ${
                styles[props.borderRadius]
            }`}
        >
            {props.text}
        </button>
    );
}

export default Button;
