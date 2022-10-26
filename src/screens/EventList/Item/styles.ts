import styled from 'styled-components/native';

export const Row = styled.TouchableOpacity`
    flex-direction: row;
    margin: 5px;
    padding: 10px;
    background-color: ${props => props.theme.primaryColor}
`;

export const Content = styled.View`
    flex: 1;
`

export const ASide = styled.View``

export const Title = styled.Text`
    color: ${props => props.theme.textColor};
    font-weight: 700;
    margin-bottom: 5px;
`

export const Description = styled.Text``

export const Date = styled.Text``

export const Address = styled.Text``