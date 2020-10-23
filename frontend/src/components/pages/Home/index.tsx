import React, { useEffect, useState } from 'react';
import { Container, GBA } from '../../core';

export default function Home() {
    return (
        <Container className='justify-center'>
            <div>GBA goes here</div>
            <GBA hash={'123'} opts={{ speed: 1, volume: 1 }} />
        </Container>
    );
}
