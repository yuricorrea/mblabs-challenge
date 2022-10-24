import React, { useState } from 'react';
import theme from '@theme';
import { Container, Content, Title, TitleContainer, Row, RegisterLabel } from './components/styles';
import i18n from '@translate';
import TextInput from '@components/TextInput';
import Button from '@components/Button';

const Login = ({ navigation }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const goToRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <Container>
            <TitleContainer>
                <Title>{i18n.t('login.title')}</Title>
            </TitleContainer>
            <Content>
                <Row>
                    <TextInput
                        label={i18n.t('login.user')}
                    />
                </Row>
                <Row>
                    <TextInput
                        label={i18n.t('login.password')}
                    />
                </Row>
                <Row>
                    <Button 
                        label={i18n.t('login.enter')}
                    />
                </Row>
                <Row>
                    <RegisterLabel onPress={goToRegister}>{i18n.t('login.register')}</RegisterLabel>
                </Row>
            </Content>
        </Container>
    );
};

export default Login;
