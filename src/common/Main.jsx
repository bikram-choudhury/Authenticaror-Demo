import React, { useCallback, useState } from 'react'
import NavList from './NavList'
import Employee from '../Template/Employee';
import Employer from '../Template/Employer';

export default function Main({ className }) {
    const [list, setList] = useState([
        { label: 'Employee', value: 'employee', active: true, component: Employee },
        { label: 'Employer', value: 'employer', active: false, component: Employer },
    ]);
    const handleClick = useCallback((selectedItem) => {
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

    const handleSubmit = useCallback((formValues) => {
        console.log("formValues", formValues);
    }, [])

    const activeNav = list.find(l => l.active);
    const TabContent = activeNav.component;
    return (
        <div className={`register-right ${className}`}>
            <NavList items={list} onClick={handleClick} />
            <section className='tab-content'>
                <TabContent active={true} onSubmit={handleSubmit} />
            </section>
        </div>
    )
}
