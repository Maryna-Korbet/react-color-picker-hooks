import css from 'components/ColorPicker/ColorPicker.module.css';
import { Component } from 'react';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 2,
    }

    setActiveIdx = (index) => {
        this.setState({ activeOptionIdx: index });
    }

    makeOptionClassName = (index) => {
        const optionClasses = [css.option];

        if (index === this.state.activeOptionIdx) {
            optionClasses.push(css.optionActive);
        }

        return optionClasses.join(' ');
    }
        
    render() {
        const { label } = this.props.options[this.state.activeOptionIdx];
        
        return (
            <div className={css.container}>
                <h2 className={css.title}>Color Picker</h2>
                <p>Selected color:{label}</p>
                <div>
                    {this.props.options.map(({ label, color }, index) => (                       
                            <button
                                key={label}
                                className={this.makeOptionClassName(index)}
                                style={{ backgroundColor: color }}
                                onClick={() => this.setActiveIdx(index)}
                            >
                            </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default ColorPicker;