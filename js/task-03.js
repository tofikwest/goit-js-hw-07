const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.getElementById('gallery')

const createGallery = images.map(image => {
  return `<li style="margin-right: 10px"><img src="${image.url}" width='300px' height='auto' alt="${image.alt}"</li>`
})
gallery.insertAdjacentHTML("afterbegin", createGallery.join(''))
gallery.setAttribute('style', 'display: flex')




// for (let i = 0; i < images.length; i++) {
//   // console.log(images[i]);
//   // const create = document.createElement('li');
//   // const create2 = document.createElement('img');

//   // create.appendChild(create2).setAttribute('url', images[i].url)
//   // create.appendChild(create2).setAttribute('alt', images[i].alt)
//   // gallery.appendChild(create)


//   // gallery.setAttribute('style', 'display: flex')
//   // gallery.insertAdjacentHTML("afterbegin", `<li style="margin-right: 10px"><img src="${images[i].url}" width='300px' height='auto' alt="${images[i].alt}"</li>`)
// }
// console.log(gallery);
