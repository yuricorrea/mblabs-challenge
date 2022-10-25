import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`

export const Content = styled.View`
    justify-content: center;
    flex: 1;
`

export const Title = styled.Text`
    text-align: center;
    color: ${props => props.theme.textColor};
    font-size: 20px;
    margin-top: 20px;
`