export function getImage(value) {
    const KEY = '43045088-79308e5151ececf264bff6e88';
    const BASE_URL = 'https://pixabay.com/api/';
  
    const params = new URLSearchParams({
      key: KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 100,
      safesearch: true,
    });
    const url = `${BASE_URL}?${params}`;
  
    return fetch(url).then(res => res.json());
  }