import styled from 'styled-components';

export const StyledButton = styled.button`
    border: 2px solid #4caf50;
    color: ${(props) => props.variant === 'outline' ? '#4caf50' : '#FFF'};
    padding: 15px 15px;
    cursor: pointer;
    background-color: ${(props) => props.variant === 'outline' ? '#FFF' : '#4caf50'};
    &:hover {
        background-color: ${(props) => props.variant !== 'outline' ? '#FFF' : '#4caf50'};
        color: ${(props) => props.variant !== 'outline' ? '#4caf50' : '#FFF'};
    }
`

export const FuncyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`

export const SubmitButton = styled(StyledButton).attrs({
    type: 'submit'
})`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) => props.variant !== 'outline' ? '#FFF' : '#4caf50'};
        box-shadow: 0 5px #666;
        transform: translateY(4px)
    }
`