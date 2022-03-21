import React from 'react';
import styled from 'styled-components';
import IconMenu from '../assets/iconMenu.svg';
import BackIcon from '../assets/backIcon.svg';
import Logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const LogoImage = styled.Image`
    width: 169px;
    height: 50px;
`;

const IconArea = styled.TouchableOpacity`
    width: 37px;
    height: 37px;
    background-color: #3CC6AA;
    align-items: center;
    justify-content: center;
    border-radius: 99px;
`;

const Container = styled.View`
    width: 100%;
    height: 64px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    border-bottom-color: grey;
    border-bottom-width: 1px;
`;

export default ({ active }) => {
    const navigation = useNavigation();
    return (
        <Container>
            {active && <BackIcon width="22" height="22" fill="black" style={{ marginRight: -70 }} onPress={() => navigation.goBack()} />}
            <LogoImage source={Logo} />
            <IconArea>
                <IconMenu height="16" width="21" fill="white" />
            </IconArea>
        </Container>
    )
}