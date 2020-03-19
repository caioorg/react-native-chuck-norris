import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: relative;
`;

export const JokeText = styled.Text`
  font-size: 20px;
  font-style: italic;
  text-align: center;
`;

export const JokeRefresh = styled.TouchableOpacity`
  padding: 20px 10px;
  position: absolute;
  bottom: 40px;
  right: 20px;
  background: #7b5e57;
  border-radius: 50px;
  height: 60px;
  width: 150px;
`;

export const JokeRefreshText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;
