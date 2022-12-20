import css from 'components/ColorPicker/ColorPicker.module.css';

const ColorPicker = ({ options }) => (
    <div className ={css.container}>
        <h2 className ={css.title}>
            <div>
                {options.map(({ label, color }) => (
                    <span>
                        key={label}
                        className ={css.label}
                        style ={{backgroundColor: color}}
    </span>
))}
            </div>
        </h2>
    </div>
)

export default ColorPicker;