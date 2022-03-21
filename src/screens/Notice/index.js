import React from 'react';
import { Image } from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Container,
  Body,
  TitlePost,
  BodyPost,
} from './style';

export default (params) => {
  const { route:post } = params;
  const textBody = post.params.content;
  const title = post.params.title;
  const imagePost = post.params.mediaImage;

  return (
    <Container>
      <Header active={true} />
      <Body>

        <TitlePost>{title.rendered}</TitlePost>

        <Image
          source={{ uri: imagePost }}
          style={{ height: 244, marginTop: 25, borderRadius: 12 }}
        />

        <BodyPost>{textBody.rendered}</BodyPost>

        <Footer />
      </Body>
    </Container>
  )
}
