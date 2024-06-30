import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './linkForm.module.css';
import UsedLinksBadge from '@/components/LinkForm/UsedLinkBadge';

type Input = {
    inputField: string;
};

function LinkForm() {
    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm<Input>();
    const onSubmit: SubmitHandler<Input> = (data) => {
        console.log(data);
        resetField('inputField');
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.background}>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.textInputWrapper}>
                            <input
                                className={`${styles.textInput} ${
                                    errors.inputField
                                        ? styles.textInputError
                                        : ''
                                }`}
                                placeholder='Shorten a link here&#8230;'
                                {...register('inputField', { required: true })}
                            />
                            {errors.inputField && (
                                <div className={styles.errorContainer}>
                                    Please add a link
                                </div>
                            )}
                        </div>
                        <input
                            className={styles.submitInput}
                            value='Shorten It!'
                            type='submit'
                        />
                    </form>
                </div>
                <div className={styles.badgesWrapper}>
                    <UsedLinksBadge />
                    <UsedLinksBadge />
                    <UsedLinksBadge />
                </div>
            </div>
        </>
    );
}

export default LinkForm;
