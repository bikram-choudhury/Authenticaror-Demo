import React from 'react'

export default function Text({ children, as }) {
    const Comp = as;
    return (
        <Comp>{children}</Comp>
    )
}
