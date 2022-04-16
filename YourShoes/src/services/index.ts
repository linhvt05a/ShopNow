import axios from 'axios';
import Config from 'react-native-config';

const BaseService = axios.create({
  baseURL: Config.AWS_ENDPOINT,
});
export default BaseService;
