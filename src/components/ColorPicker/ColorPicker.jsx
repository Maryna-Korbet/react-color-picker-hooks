import {useState} from 'react';
import css from 'components/ColorPicker/ColorPicker.module.css';

export default function ColorPicker({ options }) {
    const [activeOptionIdx, setActiveOptionIdx] = useState(0);
    
    const setActiveIdx = index => {
        setActiveOptionIdx(index);
    }

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



class ColorPicker extends Component {
    // state = {
    //     activeOptionIdx: 0,
    // }

    // setActiveIdx = (index) => {
    //     this.setState({ activeOptionIdx: index });
    // }

    makeOptionClassName = (index) => {
        const optionClasses = [css.option];

        if (index === this.state.activeOptionIdx) {
            optionClasses.push(css.optionActive);
        }

        return optionClasses.join(' ');
    }
        
    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const { label } = options[activeOptionIdx];
        
        // return (
        //     <div className={css.container}>
        //         <h2 className={css.title}>Color Picker</h2>
        //         <p>Selected color:{label}</p>
        //         <div>
        //             {this.props.options.map(({ label, color }, index) => (                       
        //                     <button
        //                         key={label}
        //                         className={this.makeOptionClassName(index)}
        //                         style={{ backgroundColor: color }}
        //                         onClick={() => this.setActiveIdx(index)}
        //                     >
        //                     </button>
        //             ))}
        //         </div>
        //     </div>
        // );
    }
}

export default ColorPicker;