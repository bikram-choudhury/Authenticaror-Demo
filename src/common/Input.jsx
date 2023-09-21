import React from 'react'

const noop = () => {};
export default function Input({
    type,
    value,
    className = '',
    formGroup = false,
    setValue = noop,
    ...props
}) {
    const inputTag = <input
    type={type}
    value={value}
    className={className}
    onChange={e => setValue(e.target.value)}
    {...props}
    />
    if(formGroup) {
        return (
            <div className="form-group">
                {inputTag}
            </div>
        )
    }
    return inputTag;
}
