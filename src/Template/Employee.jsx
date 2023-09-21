import React, { useState, useCallback } from 'react';
import Heading from '../common/Heading';
import Input from '../common/Input';
import Radio from '../common/Radio';

export default function Employee({ active }) {
    const gender = [
        { value: 'male', label: 'Male', selected: false },
        { value: 'female', label: 'Female', selected: false }
    ];
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    const handlGenderChange = useCallback((selectedGender) => {
        setSelectedGender(selectedGender);
    }, [])
    return (
        <div className={`tab-pane fade ${active ? 'show active' : ''}`}>
            <Heading className="register-heading">Apply as a Employee</Heading>
            <div className="row register-form">
                <div className='col-md-6'>
                    <Input
                        formGroup={true}
                        type="text"
                        className="form-control"
                        placeholder="First Name *"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <Input
                        formGroup={true}
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                        value={lastName}
                        setValue={setLastName}
                    />
                    <Input
                        formGroup={true}
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        value={password}
                        setValue={setPassword}
                    />
                    <Input
                        formGroup={true}
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password *"
                        value={confPassword}
                        setValue={setConfPassword}
                    />
                    <Radio
                        formGroup={true}
                        list={gender}
                        selected={selectedGender}
                        onSelect={handlGenderChange}
                        className="maxl"
                    />
                </div>
                <div className='col-md-6'></div>
            </div>
        </div>
    )
}
