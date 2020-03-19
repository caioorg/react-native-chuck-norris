import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Container} from './styles';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#000" />
      <Text>Loading</Text>
    </Container>
  );
};

export default Loading;
