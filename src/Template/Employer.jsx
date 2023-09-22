import React, { useState, useCallback } from 'react';
import Heading from '../common/Heading';
import Input from '../common/Input';
import Radio from '../common/Radio';
import Select from '../common/Select';
import { noop } from '../constant';
import Button from '../common/Button';

export default function Employer({ active, onSubmit = noop }) {
    const gender = [
        { value: 'male', label: 'Male', selected: false },
        { value: 'female', label: 'Female', selected: false }
    ];
    const questionList = [
        { label: 'Please select your Sequrity Question', value: '' },
        { label: 'What is Your old Phone Number ?', value: 'oldPhoneNumber' },
        { label: 'What is your Pet Name ?', value: 'petName' },
    ];
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [answer, setAnswer] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState('');

    const handlGenderChange = useCallback((selectedGender) => {
        setSelectedGender(selectedGender);
    }, [])
    return (
        <div className={`tab-pane fade ${active ? 'show active' : ''}`}>
            <Heading className="register-heading">Apply as a Employer</Heading>
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
                <div className='col-md-6'>
                    <Input
                        formGroup={true}
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        value={email}
                        setValue={setEmail}
                    />
                    <Input
                        formGroup={true}
                        type="text"
                        className="form-control"
                        placeholder="Your Phone *"
                        value={phone}
                        setValue={setPhone}
                        minLength={10}
                        maxLength={10}
                    />
                    <Select
                        formGroup={true}
                        options={questionList}
                        selected={selectedQuestion}
                        onSelect={setSelectedQuestion}
                        className="form-control"
                    />
                    <Input
                        formGroup={true}
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Answer *"
                        value={answer}
                        setValue={setAnswer}
                    />
                    <Button type="submit" className='btnRegister'>Register</Button>
                </div>
            </div>
        </div>
    )
}
