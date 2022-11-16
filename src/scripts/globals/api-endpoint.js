import CONFIG from './config';

const API_ENDPOINT = {
  RESTO: `${CONFIG.BASE_URL}list`,
  IMAGE: {
    SMALL: (id) => `${CONFIG.BASE_IMAGE_URL}small/${id}`,
    MEDIUM: (id) => `${CONFIG.BASE_IMAGE_URL}medium/${id}`,
    LARGE: (id) => `${CONFIG.BASE_IMAGE_URL}large/${id}`,
  },
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
