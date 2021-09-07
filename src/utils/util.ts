import { CONSTANTS } from './constant';

export const getMongoURI = () => {
  return process.env.MONGO_URI_PROD || CONSTANTS.MONGO_URI_DEV;
};
