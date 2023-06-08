
const axios = require('axios').default;
class DataSource {
  static searchClub(keyword) {

    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
          return response.data;
        })
        .then(responseData => {
          if (responseData.drinks) {
            return Promise.resolve(responseData.drinks);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 

export default DataSource;