import React, { useState, useEffect } from 'react';
import { Image, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Api from '../../Api';

import {
  Container,
  AreaCategory,
  HeaderCategory,
  TitleCategory,
  TextMore,
  CardCategory,
  TitleCard,
  BodyCard,
  MoreCard,
  Body,
  DataCategory,
  Activity
} from './style';

export default () => {
  const [media, setMedia] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getApi = async () => {
      await Api.getMedia()
        .then((item) => {
          let itemPost = item
          setMedia(itemPost)
        }).catch((error) => {
          console.warn(error, 'Ocorreu um erro ao tentar buscar as medias')
        })

      await Api.getPosts()
        .then(async (item) => {
          setPosts(item)
        }).catch((error) => {
          console.warn(error, 'Ocorreu um erro ao tentar buscar os posts')
        })

      await Api.getCategories()
        .then(async (categories) => {
          setCategories(categories)
        }).catch((error) => {
          console.warn(error, 'Ocorreu um erro ao tentar buscar as categorias')
        })
    }
    
    getApi();
  }, []);

  useEffect(() => {
    posts.map(post => {
      media.filter(media => {
        if (media.id === post.featured_media) {
          return post.mediaImage = media.guid.rendered
        }
      });
    });
  });

  const handleCard = (item) => {
    navigation.navigate('Notice', item)
  }

  return (
    <Container>
      <Header />

      {categories.length === 0 && <Activity><ActivityIndicator color="#2AB598" size="large" /></Activity>}
      <Body>
        {
          categories.map(category => {
            return (
              <AreaCategory key={category.id}>
                <HeaderCategory>
                  <TitleCategory>{category.name}</TitleCategory>
                  <TextMore>VER MAIS</TextMore>
                </HeaderCategory>

                <DataCategory
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {
                    posts.map(item => {
                      if (item.categories.includes(category.id)) {
                        return (
                          <CardCategory key={item.id} onPress={() => handleCard(item)}>
                            <Image
                              source={{ uri: item.mediaImage }}
                              style={{ width: 235, height: 103, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                            />
                            <TitleCard>{item.title.rendered}</TitleCard>
                            <BodyCard>{item.excerpt.rendered}</BodyCard>
                            <MoreCard>Leia mais</MoreCard>
                          </CardCategory>
                        )
                      }
                    })
                  }
                </DataCategory>
              </AreaCategory>
            )
          })
        }

        <Footer />
      </Body>
    </Container>
  )
}
