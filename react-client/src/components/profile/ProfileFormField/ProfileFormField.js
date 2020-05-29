import React, { PureComponent } from 'react';
import 'bulma/css/bulma.css'

export default class ProfileFormField extends PureComponent {
    render() {
        const { item, blurHandler,  errorObj, changeHandler, value } = this.props;
        const { placeholder, type, key} = item;
        const dateField = type === 'DATE_FIELD';
        switch (type) {
        case 'INPUT_FIELD':
        case 'DATE_FIELD': {
            return (
            <div>
                <div className="field">
                    <label className="label">
                        {placeholder}
                    </label>
                    <input
                        className="input"
                        placeholder=' '
                        name={key}
                        required
                        defaultValue={value}
                        onBlur={blurHandler}
                        onChange={changeHandler}
                    />
                    {
                        dateField ? <span>
                        <i className='calender'></i>
                        </span> : null
                    }
                </div>
                <div>
                    <div>
                        {Object.keys(errorObj).length > 0 && errorObj[key] ? <p className="content">{errorObj[key]}</p> : null}
                    </div>
                </div>
            </div>
            )
        }
        default: return null;
        }
    }
}