import style from './CloudIcon.module.scss';

export const CloudyIcon = (): JSX.Element => {
    return (
        <svg
            id="clouds-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 38.37 29.75"
        >
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
            <circle className={style.cls1} cx="26.77" cy="10.97" r="5.2" />
            <rect
                className={style.cls2}
                x="31.18"
                y="3.74"
                width="3.77"
                height="1.57"
                rx="0.53"
                transform="translate(6.49 24.7) rotate(-45)"
            />
            <rect
                className={style.cls2}
                x="18.44"
                y="4.24"
                width="3.77"
                height="1.57"
                rx="0.53"
                transform="translate(31.14 22.95) rotate(-135)"
            />
            <rect
                className={style.cls2}
                x="31.15"
                y="16.48"
                width="3.77"
                height="1.57"
                rx="0.53"
                transform="translate(44.18 52.82) rotate(-135)"
            />
            <rect
                className={style.cls2}
                x="35.19"
                y="8.89"
                width="1.73"
                height="4.63"
                rx="0.59"
                transform="translate(47.26 -24.86) rotate(90)"
            />
            <rect
                className={style.cls2}
                x="25.71"
                width="1.73"
                height="4.34"
                rx="0.59"
                transform="translate(53.15 4.34) rotate(180)"
            />
            <path
                className={style.cls1}
                d="M7.18,18.56c.89-1.77,7-12.65,16.58-2.82a.43.43,0,0,0,.3.13c1.08-.06,6.91-.11,7.55,5.84.66,6.15-4.84,7.17-5.54,7.28H5.75a5.45,5.45,0,0,1-5-5.83,4.57,4.57,0,0,1,6.07-4.46A.3.3,0,0,0,7.18,18.56Z"
            />
            <rect
                className={style.cls2}
                x="16.66"
                y="8.78"
                width="1.73"
                height="4.63"
                rx="0.59"
                transform="translate(28.62 -6.44) rotate(90)"
            />
            </g>
        </g>
        </svg>
    );
}