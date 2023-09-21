import React, { useCallback, useState } from 'react'
import NavList from './NavList'
import Employee from '../Template/Employee';

export default function Main({ className }) {
    const [list, setList] = useState([
        { label: 'Employee', value: 'employee', active: true },
        { label: 'Employer', value: 'employer', active: false },
    ]);
    const handleClick = useCallback((selectedItem) => {
        /* const modifiedList = list.map(l => {
            if(l.value === selectedItem) {
                l.active = true;
            } else {
                l.active = false;
            }
            return l;
        });
        setList(modifiedList); */
        setList(prevList => {
            const modifiedList = prevList.map(l => {
                if (l.value === selectedItem) {
                    l.active = true;
                } else {
                    l.active = false;
                }
                return l;
            });
            return modifiedList;
        });
    }, [list]);
    return (
        <div className={`register-right ${className}`}>
            <NavList items={list} onClick={handleClick} />
            <section className='tab-content'>
                <Employee active={true} />
            </section>
        </div>
    )
}
