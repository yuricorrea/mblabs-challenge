import React, { useState } from 'react';
import theme from '@theme';
import { Container, Content, Title, TitleContainer, Row, RegisterLabel } from './components/styles';
import i18n from '@translate';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { useDispatch } from 'react-redux';
import { doLogin } from '@redux/actions/account.actions';

const Login = ({ navigation }) => {

    const dispatch = useDispatch();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const goToRegister = () => {
        navigation.navigate('Register');
    }

    const handleSubmit = () => {
        const response = dispatch(doLogin({
            user,
            password,
        }));
        if(!response){
            alert(i18n.t('login.error'));
            return;
        }
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
                        value={user}
                        onChangeText={setUser}
                    />
                </Row>
                <Row>
                    <TextInput
                        label={i18n.t('login.password')}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </Row>
                <Row>
                    <Button
                        label={i18n.t('login.enter')}
                        onPress={handleSubmit}
                        disabled={user.trim() === '' || password.trim() === ''}
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
