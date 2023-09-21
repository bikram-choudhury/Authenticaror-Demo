import React from 'react'

export default function Input({
    type,
    value,
    className = '',
    ...props
}) {
    return (
        <input type={type} value={value} className={className} {...props} />
    )
}
