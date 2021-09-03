import {Text, View} from 'react-native';
import React from 'react';
import styled from '@emotion/native';
import {TextInput} from 'react-native-gesture-handler';

// const loginId = styled.TextInput``;
export default function Login() {
  return (
    <>
      <View>
        <Text>Login</Text>
        <TextInput />
      </View>
    </>
  );
}
