import React, { useState } from 'react';
import { Container, Content, Title, TitleContainer, Row, RegisterLabel } from './styles';
import i18n from '@translate';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { useDispatch } from 'react-redux';
import { doRegister } from '@context/actions/account.actions';

const Register = ({ navigation }) => {

    const dispatch = useDispatch();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    const handleSubmit = () => {
        if(!user.trim().length || !password.trim().length){
            alert(i18n.t('register.input_error'));
            return;
        }
        const response = dispatch(doRegister({
            user,
            password,
        }));
        if(!response){
            alert(i18n.t('register.register_error'));
            return;
        }
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
                        value={user}
                        onChangeText={setUser}
                    />
                </Row>
                <Row>
                    <TextInput
                        label={i18n.t('register.password')}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </Row>
                <Row>
                    <Button
                        label={i18n.t('register.enter')}
                        onPress={handleSubmit}
                        disabled={user.trim() === '' || password.trim() === ''}
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
