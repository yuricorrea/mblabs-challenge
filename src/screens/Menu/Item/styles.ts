import styled from 'styled-components/native';

export const Row = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px;
    background-color: ${props => props.theme.primaryColor}
`

export const Label = styled.Text`
    color: ${props => props.theme.textColor};
     
`