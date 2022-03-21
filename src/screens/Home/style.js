import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const AreaCategory = styled.View`
  margin-top: 20px;
  width: 100%;
  elevation: 10;
`;

export const HeaderCategory = styled.View`
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const TitleCategory = styled.Text`
  font-size: 20px;
  color: #2AB598;
  font-weight: bold;
  width: 220px;
`;

export const TextMore = styled.Text`
  font-size: 17px;
  color: #535353;
`;

export const CardCategory = styled.TouchableOpacity`
  width: 235px;
  height: 325px;
  margin: 20px;
  border: 1px solid grey;
  border-radius: 12px;
`;

export const TitleCard = styled.Text`
  font-size: 17px;
  text-align: left;
  color: #2AB598;
  font-weight: bold;
  width: 187px;
  height: 44px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const BodyCard = styled.Text`
  color: #868686;
  font-size: 15px;
  margin-top: 10px;
  margin-left: 10px;
  opacity: 1;
  text-align: left;
  width: 223px;
  height: 78px;
`;

export const MoreCard = styled.Text`
  color: #fda506;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Body = styled.ScrollView`
  flex: 1;
`;

export const DataCategory = styled.ScrollView``;

export const Activity = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
