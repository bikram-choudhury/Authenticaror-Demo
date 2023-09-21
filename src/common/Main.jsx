import React, { useCallback } from 'react'
import NavList from './NavList'

export default function Main({ className }) {
    const list = [
        { label: 'Employee', value: 'employee', active: false },
        { label: 'Employer', value: 'employer', active: true },
    ];
    const handleClick = useCallback((selectedItem) => {
        alert(selectedItem);
    }, []);
    return (
        <div className={`register-right ${className}`}>
            <NavList items={list} onClick={handleClick} />
        </div>
    )
}
