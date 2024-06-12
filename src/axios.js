import axios from 'axios';
import {BaseURL} from './constants/config'

const instance = axios.create({
    baseURL: BaseURL,
  });

  export default instance