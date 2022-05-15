const ulEl = document.querySelector('#categories');

const ulChildrenEl = ulEl.children;
console.log(`Number of categories: ${ulChildrenEl.length}`);



[...ulChildrenEl].forEach((element) => {

    const titleEl = element.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);
    const ulInItemEl = element.querySelector('ul');
    console.log(`Elements: ${ulInItemEl.children.length}`);
});



