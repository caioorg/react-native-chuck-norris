import React from 'react';
import PropTypes from 'prop-types';
import {Container, JokeText, JokeRefresh, JokeRefreshText} from './styles';

const JokesView = ({data: {value, categories}, refresh}) => {
  return (
    <Container>
      {value && <JokeText>{value}</JokeText>}
      <JokeRefresh onPress={() => refresh(categories[0])}>
        <JokeRefreshText>Atualizar</JokeRefreshText>
      </JokeRefresh>
    </Container>
  );
};

JokesView.propTypes = {
  data: PropTypes.object.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default JokesView;
