import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
`;

export const Row = styled.View`
    margin: 10px 20px;
`;

export const MiniRow = styled.View`
    width: 50%;
    margin: 10px 20px;
`;

export const Label = styled.Text`
color: ${props => props.theme.textColor};
    font-weight: 500;
    margin-bottom: 5px;
`;