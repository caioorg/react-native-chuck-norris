import React, {useState, useEffect} from 'react';
import JokesApi from '../../services/JokesApi';
import JokesView from '../../views/JokesView';
import Loading from '../../components/Loading';


const Jokes = ({route}) => {
  const [jokeSelected, setJokeSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {category} = route.params;

  const _loadJoke = item => {
    JokesApi.getJokeByCategory(item)
      .then(e => {
        setIsLoading(true);
        setJokeSelected(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    _loadJoke(category);
  }, [category]);

  return (
    <>
      {isLoading && <Loading />}
      <JokesView data={jokeSelected} refresh={_loadJoke} />
    </>
  );
};

export default Jokes;
