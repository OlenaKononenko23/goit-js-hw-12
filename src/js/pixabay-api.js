import axios from 'axios';

export async function getImage(value, page) {
  const KEY = '43045088-79308e5151ececf264bff6e88';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 15,
    page: page,
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  const response = await axios.get(url);
  return response.data;
}