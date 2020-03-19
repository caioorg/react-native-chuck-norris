import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import {ItemList, ItemListText} from './styles';

const CategoryView = ({data, onSelecteCategory}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <ItemList onPress={() => onSelecteCategory(item)} key={item}>
              <ItemListText>{item}</ItemListText>
            </ItemList>
          );
        }}
      />
    </View>
  );
};

CategoryView.propTypes = {
  data: PropTypes.array.isRequired,
  onSelecteCategory: PropTypes.func.isRequired,
};

export default CategoryView;
