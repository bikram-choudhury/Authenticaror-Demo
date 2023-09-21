import React from 'react'

export default function Container(props) {
    const {className, children} = props;
    return (
        <div className={`container ${className}`}>
            <div className='row'>{children}</div>
        </div>
    )
}
