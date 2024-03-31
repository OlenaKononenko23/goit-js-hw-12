function imageTemplate(data) {
    const {
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = data;
    return `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
          <img
              src="${webformatURL}"
              alt="${tags}"
              width="360"
              height="200"
              class="gallery-img"
          />
          <ul class="gallery-descript">
          <li class="gallery-descript__item"><span class="gallery-descript__span">likes</span> ${likes}</li>
          <li class="gallery-descript__item"><span class="gallery-descript__span">Views</span> ${views}</li>
          <li class="gallery-descript__item"><span class="gallery-descript__span">Coments</span> ${comments}</li>
          <li class="gallery-descript__item"><span class="gallery-descript__span">Downloads</span> ${downloads}</li>
       </ul>
      </a>
  </li>`;
  }
  
  export function imagesTemplate(arr) {
    return arr.map(imageTemplate).join('');
  }