import React from 'react';
import { Linking, ToastAndroid } from 'react-native';
import styled from 'styled-components';

import logo from '../assets/logo-coursify-w.png';

const Container = styled.View`
    width: 100%;
    height: 219px;
    background-color: #1ABC9C;
    align-items: center;
`;

const LogoImage = styled.Image`
    width: 172px;
    height: 45px;
    margin-top: 10px;
`;

const Description = styled.Text`
    width: 290px;
    height: 48px;
    color: white;
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
`;

const ButtonArea = styled.TouchableOpacity`
    width: 216px;
    height: 44px;
    align-items: center;
    justify-content: center;
    background-color: #FFA900;
    margin-top: 20px;
    border-radius: 60px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 12px;
`;

export default () => {

    const openUrl = async(url) => {
        if(await Linking.canOpenURL(url)) {
            await Linking.openURL(url)
        } else {
            Linking.openURL(url)
        }
    }
    return (
        <Container>
            <LogoImage source={logo} />    
            <Description>
                O Coursify.me é uma plataforma de ensino a distância, onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.
            </Description>

            <ButtonArea onPress={() => openUrl('https://coursify.me/')}>
                <ButtonText>Quero conhecer a plataforma!</ButtonText>
            </ButtonArea>
        </Container>
    )
}