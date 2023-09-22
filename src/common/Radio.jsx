import React from 'react'
import Text from './Text'


const noop = () => { };
export default function Radio({
    list = [],
    className = '',
    selected = '',
    formGroup = false,
    onSelect = noop,
    ...props
}) {
    const group = (
        <div className={className}>
            {
                list.map(l => (
                    <label className="radio inline" key={l.value}>
                        <input
                            type="radio"
                            value={l.value}
                            onChange={e => onSelect(e.target.value)}
                            checked={l.value === selected}
                            {...props}
                        />
                        <Text as="span">{l.label}</Text>
                    </label>
                ))
            }

        </div>
    )
    if (formGroup) {
        return (
            <div className="form-group">
                {group}
            </div>
        );
    }
    return group;
}
