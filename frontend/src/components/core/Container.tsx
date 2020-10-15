import styled from 'styled-components';

const Container = styled.div.attrs((props) => ({
    className: `w-full flex items-center justify-center ${props.children}`,
}))``;

export default Container;
