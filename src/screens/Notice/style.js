import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Body = styled.ScrollView`
  flex: 1;
  padding: 10px;
  margin-top: 20px;
  width: 370px;
`;

export const TitlePost = styled.Text`
  color: #2AB598;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  width: 352px;
`;

export const BodyPost = styled.Text`
  color: #666666;
  font-size: 16px;
  margin-top: 25px;
`;