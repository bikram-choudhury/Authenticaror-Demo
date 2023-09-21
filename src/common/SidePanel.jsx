import React from 'react'
import Heading from './Heading';
import Text from './Text';
import Input from './Input';

export default function SidePanel(props) {
    const { className } = props;
    return (
        <div className={`register-left ${className}`}>
            <Heading>Welcome</Heading>
            <Text as="p">You are 30 seconds away from earning your own money!</Text>
            <Input value="Login" type="submit" />
        </div>
    )
}
