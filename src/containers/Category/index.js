import React, {useEffect, useState, Fragment} from 'react';
import CategoryView from '../../views/CategoryView';
import CategoryApi from '../../services/CategoryApi';
import Loading from '../../components/Loading';

const Category = ({navigation}) => {
  const [listCategories, setListCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CategoryApi.getCategory()
      .then(e => {
        setIsLoading(true);
        setListCategories(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onSelecteCategory = selected => {
    navigation.navigate('Jokes', {
      category: selected,
    });
  };

  return (
    <Fragment>
      {isLoading && <Loading />}
      <CategoryView
        data={listCategories}
        onSelecteCategory={onSelecteCategory}
      />
    </Fragment>
  );
};

export default Category;
