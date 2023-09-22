import React from 'react'
import { noop } from '../constant'

export default function Button({
    className,
    children,
    type = 'button',
    onClick = noop,
    ...props
}) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            {...props}
        >{children}</button>
    )
}
