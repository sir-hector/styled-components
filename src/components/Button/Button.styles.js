import styled from 'styled-components';

export const StyledButton = styled.button`
    border: 2px solid #4caf50;
    color: ${(props) => props.variant === 'outline' ? '#4caf50' : '#FFF'};
    padding: 15px 15px;
    cursor: pointer;
    background-color: ${(props) => props.variant === 'outline' ? '#FFF' : '#4caf50'};
`