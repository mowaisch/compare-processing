import axios from 'axios';
import { BASE_URL } from '../values/strings';

export default axios.create({
    baseURL: BASE_URL,
});
