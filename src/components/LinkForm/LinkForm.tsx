import {useForm, SubmitHandler} from 'react-hook-form';
import styles from './linkForm.module.css';

type Input = {
    inputField: string;
}

function LinkForm() {

    const {register, handleSubmit} = useForm<Input>();
    const onSubmit: SubmitHandler<Input> = data => console.log(data);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.background}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <input className={styles.textInput} placeholder='Shorten a link here&#8230;' {...register('inputField', {required: true})} />
                        <input className={styles.submitInput} value='Shorten It!' type='submit' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default LinkForm;
