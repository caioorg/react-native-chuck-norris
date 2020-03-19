import React from 'react';
import renderer from 'react-test-renderer';
import JokesView from '../../../src/views/JokesView';
import {JOKE_SELECTED} from '../../__mocks__/constants';

const props = {data: JOKE_SELECTED, refresh: jest.fn()};

describe('[Views] Jokes', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<JokesView {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
