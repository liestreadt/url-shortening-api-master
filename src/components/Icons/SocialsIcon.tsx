import { SOCIALS_ICON_NAME } from '@/constants';
import { useState } from 'react';

function SocialsIcon(props: SocialsIconPropsType) {
    const [color, setColor] = useState('#FFF');

    return (
        <>
            <svg
                onMouseEnter={() => setColor('#2acfcf')}
                onMouseLeave={() => setColor('#FFF')}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height={props.name === 'Twitter' ? '20px' : '24px'}
            >
                <path fill={color} d={SOCIALS_ICON_NAME[props.name]} />
            </svg>
        </>
    );
}

export default SocialsIcon;
