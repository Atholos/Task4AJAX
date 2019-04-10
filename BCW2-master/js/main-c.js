'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.
const showImages = (images) =>{

  images.forEach((image)=>{

    const li = document.createElement('li');
    const fig = document.createElement('figure');
    const a = document.createElement('a');
    const figcap = document.createElement('figcaption');
    const h3 = document.createElement('h3');

    a.setAttribute('href','img/original/${image.mediaUrl}');
    a.innerHTML = `<img src="img/thumbs/${image.mediaThumb}">`;

    figcap.appendChild(h3);
    a.appendChild(figcap);
    fig.appendChild(a);
    li.appendChild(fig);

    const fulllist = document.querySelector('ul');
    fulllist.appendChild(li);
  });
};
// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

fetch('images.json').then((respons)=>{
  console.log(respons);
  return respons.json()
}).then((images)=>{
  showImages(images);
  console.log(images);
});