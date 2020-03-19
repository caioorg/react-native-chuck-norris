import {URLS} from '../utils/constants';

class JokesApi {
  static async getJokeByCategory(category) {
    return await fetch(`${URLS.RANDOM_CATEGORY_FACT}${category}`)
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}

export default JokesApi;
