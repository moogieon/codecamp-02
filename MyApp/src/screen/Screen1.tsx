import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styled from '@emotion/native';

const Container = styled.View`
  flex: 1;
`;
const Head = styled.View`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;

  background-color: beige;
`;
const ClickText = styled.Text`
  text-align: center;
`;
const Button = styled.TouchableOpacity`
  background-color: blue;
  width: 126px;
  height: 211px;
  margin-right: 5px;
  border-radius: 25px;
`;

export default function Screen1() {
  return (
    <>
      <Container>
        <Head>
          <ScrollView
            horizontal={true}
            //  showsHorizontalScrollIndicator={false}
          >
            <Button>
              <ClickText>Europe</ClickText>
            </Button>
            <Button>
              <ClickText>Aisa</ClickText>
            </Button>
            <Button>
              <ClickText>USA</ClickText>
            </Button>
            <Button>
              <ClickText>Africa</ClickText>
            </Button>
          </ScrollView>
        </Head>
      </Container>
    </>
  );
}
