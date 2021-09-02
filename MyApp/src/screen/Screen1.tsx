import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RecyclerListView} from 'recyclerlistview/web';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  flex: 1;

  padding: 20px;
`;
const Head = styled.View`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: beige; */
`;
const ClickText = styled.Text`
  text-align: center;
  font-size: 27px;
  color: white;
  margin: auto;
  font-weight: 700;
`;
const CountryImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
const Button = styled.TouchableOpacity`
  background-color: blue;
  flex: 1;
  width: 126px;
  height: 211px;
  margin-right: 5px;
  border-radius: 25px;
`;

const Colum = styled.Text`
  font-size: 18px;
`;
const Body = styled.View`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
`;

const List = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: white;
  width: 100%;
  height: 126px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  margin-bottom: 20px;
  border-radius: 10px;
  elevation: 3;
`;
const ProfileImg = styled.Image`
  width: 16px;
  height: 16px;
  border-radius: 70px;
  margin-right: 10px;
`;
const ProfileInit = styled.View``;
const ProfileHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ProfileBody = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Line = styled.View`
  border: 1px solid #cdcdcd;
  color: #cdcdcd;
`;
const ProfileInfo = styled.View`
  flex-direction: row;
`;
const Name = styled.Text`
  font-size: 9px;
  font-weight: 700;
`;
const Country = styled.Text`
  font-size: 10px;
  opacity: 0.7;
  margin-left: 7px;
`;
const Title = styled.Text`
  font-size: 12px;
`;
const JobTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export default function Screen1() {
  var faker = require('faker');

  // console.log('data', faker.address.country());
  const DATA = [...Array(30).keys()].map((_, index) => {
    return {
      key: faker.datatype.uuid(),
      name: faker.name.findName(),
      title: faker.name.title(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        'women',
        'men',
      ])}/${faker.datatype.number(60)}.jpg`,
      jobTitle: faker.name.jobTitle(),
      country: faker.address.country(),
    };
  });
  const scrolly = React.useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = 70 + 20 * 3;

  return (
    <>
      <Container>
        <Head>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Button>
              <CountryImage
                source={require('../Assets/Images/ER.png')}
                resizeMode="cover"
                imageStyle={{borderRadius: 25}}>
                <ClickText>Europe</ClickText>
              </CountryImage>
            </Button>
            <Button>
              <CountryImage
                source={require('../Assets/Images/Asia.png')}
                resizeMode="cover"
                imageStyle={{borderRadius: 25}}>
                <ClickText>Asia</ClickText>
              </CountryImage>
            </Button>
            <Button>
              <CountryImage
                source={require('../Assets/Images/USA.png')}
                resizeMode="cover"
                imageStyle={{borderRadius: 25}}>
                <ClickText>America</ClickText>
              </CountryImage>
            </Button>
            <Button>
              <CountryImage
                source={require('../Assets/Images/AF.png')}
                resizeMode="cover"
                imageStyle={{borderRadius: 25}}>
                <ClickText>Africa</ClickText>
              </CountryImage>
            </Button>
          </ScrollView>
        </Head>
        <Colum>전체목록</Colum>

        <Animated.FlatList
          data={DATA}
          keyExtractor={(item) => item.key}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrolly}}}],
            {useNativeDriver: true},
          )}
          renderItem={({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];
            const opacityInputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 0.5),
            ];
            const scale = scrolly.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
            const opacity = scrolly.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1, 1, 1, 0],
            });
            return (
              <Animated.View
                style={{
                  padding: 20,
                  marginBottom: 20,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  elevation: 3,
                  opacity,
                  transform: [{scale}],
                }}>
                <ProfileInit>
                  <ProfileHead>
                    <JobTitle>{item.jobTitle}</JobTitle>
                    <Icon name={'bookmark-outline'} size={20} />
                  </ProfileHead>
                  <ProfileBody>
                    <Icon name={'location'} size={9} />
                    <Country>{item.country}</Country>
                  </ProfileBody>
                </ProfileInit>
                <Line />
                <Title>{item.title}</Title>
                <ProfileInfo>
                  <ProfileImg source={{uri: item.image}} />
                  <Name>{item.name}</Name>
                </ProfileInfo>
              </Animated.View>
            );
          }}></Animated.FlatList>
      </Container>
    </>
  );
}
