import axios from 'axios';
import Config from 'react-native-config';

console.log(Config.AWS_ENDPOINT);
const BaseService = axios.create({
  baseURL: Config.AWS_ENDPOINT,
});
export default BaseService;
