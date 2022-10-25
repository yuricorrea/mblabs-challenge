import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: stretch;
`;

export const TitleContainer = styled.View`
    flex: 0.5;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    text-align: center;
    color: ${props => props.theme.textColor};
    font-size: 20px;
    flex: 0.5;
`;

export const Content = styled.View`
    flex: 1.5;
`;

export const Row = styled.View`
    margin: 10px 20px;
`;

export const RegisterLabel = styled.Text`
    text-decoration: underline;
    text-align: center;
    color: ${props => props.theme.textColor}
    margin-top: 10px;
    font-size: 14px;
`;


