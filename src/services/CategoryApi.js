import {URLS} from '../utils/constants';

class CategoryApi {
  static async getCategory() {
    return await fetch(URLS.CATEGORIES)
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}

export default CategoryApi;
