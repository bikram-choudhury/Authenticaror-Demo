import React, { useCallback, Fragment } from 'react';
import { noop } from '../constant';

export default function Select({
    formGroup = false,
    onSelect = noop,
    options,
    selected,
    ...props
}) {
    const handleSelect = useCallback((event) => {
        onSelect(event.target.value);
    }, []);
    const Tag = formGroup ? 'div' : Fragment;
    
    return (
        <Tag className="form-group">
            <select onChange={handleSelect} value={selected} {...props}>
                {
                    options.map((o, idx) => {
                        return (
                            <option key={`idx-${idx}`} value={o.value}>{o.label}</option>
                        )
                    })
                }
            </select>
        </Tag>
    )
}
