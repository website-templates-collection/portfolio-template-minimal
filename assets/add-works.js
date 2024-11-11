// import paintings from './paintings-works.json';

const paintingsWorks = [
    {
        "location":"./assets/images/paintings/img-1.JPG"
    },
    {
        "location":"./assets/images/paintings/img-2.JPG"
    }
]

const worksContainerEl = document.getElementById('paintings-works');

// const paintingsWorks = paintings.items;

paintingsWorks.forEach(item =>{
    const itemEl = document.createElement("div");
    itemEl.classList.add('col-lg-4');
    //create image element
    const imgEl = document.createElement('img');
    imgEl.src = item.location;
    imgEl.classList.add('img-fluid');
    itemEl.appendChild(imgEl);
    worksContainerEl.appendChild(itemEl);
})