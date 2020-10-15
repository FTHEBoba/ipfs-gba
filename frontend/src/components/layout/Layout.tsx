import React, { FC } from 'react';
import { Container } from '../core';

export default function Layout({ children }: { children: FC }) {
    return (
        <Container className={'h-screen'}>
            <>{children}</>
        </Container>
    );
}
