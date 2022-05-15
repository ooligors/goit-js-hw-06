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

const imageList = document.querySelector('.gallery');


const markUp = images.map((image) => `<li><img src="${image.url}" alt="${image.alt}" width=300  /></li>`).join(" ")
console.log(markUp);


imageList.insertAdjacentHTML("afterbegin", markUp)

document.querySelector('img').classList.add('img');









// imageList.style.display = "flex";
// imageList.style.listStyle = "none";
// imageList.style.justifyContent = "space-around";
// imageList.querySelector("img").style.height = "200px";


// // ------- css -------
// const style = document.createElement('style');
// style.type = 'text/css';
// style.innerHTML = '.gallery { display: flex; justify-content: space-between; list-style-type: none;}'
//   +
//   ' li {width: 33%;}'
//   +
//   ' img{width:  100%; height: 100%; object-fit: cover;}';
// document.querySelector('head').append(style);
