import {useState} from 'react';
import css from 'components/ColorPicker/ColorPicker.module.css';


export default function ColorPicker({ options }) {
    const [activeOptionIdx, setActiveOptionIdx] = useState(0);

    const { label } = options[activeOptionIdx];

    const makeOptionClassName = index => {
    return index === activeOptionIdx ? css.optionActive : css.option;
    }

    return (
            <div className={css.container}>
                <h2 className={css.title}>Color Picker</h2>
                <p>Selected color:{label}</p>
                <div>
                    {options.map(({ label, color }, index) => (                       
                            <button
                                key={label}
                                className={makeOptionClassName(index)}
                                style={{ backgroundColor: color }}
                                onClick={() => setActiveOptionIdx(index)}
                            >
                            </button>
                    ))}
                </div>
            </div>
        );
}

