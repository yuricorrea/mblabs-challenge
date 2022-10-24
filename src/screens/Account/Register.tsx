import React, { useState } from 'react';
import theme from '@theme';
import { Container, Content, Title, TitleContainer, Row, RegisterLabel } from './components/styles';
import i18n from '@translate';
import TextInput from '@components/TextInput';
import Button from '@components/Button';

const Register = ({ navigation }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <Container>
            <TitleContainer>
                <Title>{i18n.t('register.title')}</Title>
            </TitleContainer>
            <Content>
                <Row>
                    <TextInput
                        label={i18n.t('register.user')}
                    />
                </Row>
                <Row>
                    <TextInput
                        label={i18n.t('register.password')}
                    />
                </Row>
                <Row>
                    <Button 
                        label={i18n.t('register.enter')}
                    />
                </Row>
                <Row>
                    <RegisterLabel onPress={goToLogin}>{i18n.t('register.login')}</RegisterLabel>
                </Row>
            </Content>
        </Container>
    );
};

export default Register;
