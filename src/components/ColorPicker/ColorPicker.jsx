import css from 'components/ColorPicker/ColorPicker.module.css';
import { Component } from 'react';

class ColorPicker extends Component {
    render() {
        return (
            <div className ={css.container}>
        <h2 className ={css.title}>
            <div>
                {this.props.options.map(({ label, color }) => (
                    <button type ="button">
                        key={label}
                        className ={css.label}
                        style ={{backgroundColor: color}}
    </button>
))}
            </div>
        </h2>
    </div>
        )
    }
}

export default ColorPicker;