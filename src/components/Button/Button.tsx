import styles from './button.module.css';

type ButtonProps = {
    text: string;
    padding: string;
    fontSize?: string;
}

function Button(props: ButtonProps) {
    return (
        <button style={{padding: props.padding, fontSize: props.fontSize || 'inherit'}} className={styles.button}>{props.text}</button>
    )
}

export default Button;