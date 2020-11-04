import axios from 'axios';

const baseUrl = "http://localhost:3000/musics";

export default class MusicService {
  getMusics() {
    return axios.get(`${baseUrl}`);
  }
  getOneMusic(id) {
    return axios.get(`${baseUrl}/${id}`);
  }
}