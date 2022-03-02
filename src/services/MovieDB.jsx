import axios from 'axios';

export default class MovieDB {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    this.api_key = 'api_key=d620bb47a2a55e90e3a75186bf3160fc';
  }

  async getSearch(text, page = 1) {
    let { data } = await axios.get(`${this.url}search/movie?${this.api_key}&query=${text}&page=${page}&language=ru-RU`);
    return data;
  }

  async getGenres() {
    let { data } = await axios.get(`${this.url}genre/movie/list?${this.api_key}&language=ru-RU`);
    return data;
  }

  // async getMovie(idMovie) {
  //
  // }
}
