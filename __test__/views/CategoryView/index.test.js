import React from 'react';
import renderer from 'react-test-renderer';
import CategoryView from '../../../src/views/CategoryView';
import {LIST_CATEGORY} from '../../__mocks__/constants';

const props = {data: LIST_CATEGORY, onSelecteCategory: jest.fn()};

describe('[View] Category', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<CategoryView {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
