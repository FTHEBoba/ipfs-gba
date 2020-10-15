import React from 'react';
import { Container } from '../core';
import { A } from 'hookrouter';

export default function Header() {
    return (
        <Container className={'h-20 fixed top-0 bg-gray-800 text-white'}>
            <A className='mx-2' href='/'>
                Home
            </A>
            <A className='mx-2' href='/profile'>
                Profile
            </A>
        </Container>
    );
}
