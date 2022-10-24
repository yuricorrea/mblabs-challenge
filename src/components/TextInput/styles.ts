import styled from 'styled-components/native';

export const Area = styled.View`

`;

export const Label = styled.Text`
    color: ${props => props.theme.textColor};
    font-weight: 500;
    margin-bottom: 5px;
`

export const Input = styled.TextInput`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-size: 15px;
    padding: 10px 10px;
`
