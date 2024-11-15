// import paintings from './paintings-works.json';

const paintingsWorks = [
    // {
    //     "location":"./assets/images/paintings/img-1.JPG"
    // },
    // {
    //     "location":"./assets/images/paintings/img-2.JPG"
    // }
]

//set images
for(let i=0; i<39;i++){
    paintingsWorks.push(    {
        path : './assets/images/paintings/img-' + parseInt(i+1) +'.JPG'
    });
}

// const worksContainerEl = document.getElementById('paintings-works');
const allWorksContainerEl = document.getElementById('all-paintings-works');


// const paintingsWorks = paintings.items;
function createImageElement(imgPath){
    //create image element
    const imgEl = document.createElement('img');
    imgEl.src = imgPath;
    imgEl.classList.add('img-fluid');
    return imgEl;
}
function createGridElement( gridWidth, extraClass ) {
    //create grid element
    const itemEl = document.createElement("div");
    itemEl.classList.add('col-lg-' + gridWidth, extraClass);
    return itemEl;
}
function createImageGrid(imgPath){
    // create an image element inside grid
    // create grid element
    const itemEl = createGridElement('6', 'mt-5');
    //create image element
    const imgEl = createImageElement(imgPath);
    //append image inside grid
    itemEl.appendChild(imgEl);
    return itemEl;
}
//load all paintings
function renderPaintings(all=true){
    let workItems = paintingsWorks;

    for(let i=0;i<workItems.length;i++){
        const imgPath = paintingsWorks[i].path;
        const imgGridEl = createImageGrid(imgPath);
        //append image grid to all works container element
        allWorksContainerEl.appendChild(imgGridEl);
    }
}
renderPaintings();
// renderPaintings(all=true);
// paintingsWorks.forEach(item =>{
//     // create grid element
//     const itemEl = createGridElement('4', 'mt-4');
//     //create image element
//     const imgEl = createImageElement(item.path);
//     // imgEl.src = item.location;
//     // imgEl.classList.add('img-fluid');
//     itemEl.appendChild(imgEl);
//     worksContainerEl.appendChild(itemEl);
// })