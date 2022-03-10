//Create a new array with 5 objects. Every object should have an id, a title, description, date when was added, and a image.
//You can populate these fields with the data you have on blogposts.  In the end console log the list with the 5 objec
let global = -1;
const blog =[{
    id: 1,
    title: 'What to discover in Sagrada Familia?',
    description: 'The most famous sight and tourist attraction is certainly the historic church Sagrada Familia (In Spanish Basílica y Templo Expiatorio de la Sagrada Família) in the l Eixample district. The name means basilica and the expiatory church of the Holy Family. This beautiful, unfinished church was designed by Catalan architect Antoni Gaudí. Construction of this holy church started on 19 March 1882. Initially it was based on the plans by architect Francisco de Paula del Villar, but in 1883, architect Antoni Gaudí was given the task to continue construction of the Sagrada Família. After Gaudi received an anonymous donation, he decided to replace the original Gothic Revival design with a more modern and innovative temple design. The only time construction was halted for a few years was during the Spanish Civil War. Until his death in 1926, Gaudi worked on the temple, and several architects have succeeded him since.',
    date: transformDate(new Date('2021-10-01')),
    image: 'https://www.proidea.ro/aplicatii-produse-5/mapei-sagrada-familia-barcelona-14513/a_49_d_15_1518696636579_mapei_barcelona_sagrada_familia_1.jpg'
},
{
    id: 2,
    title: 'What to discover in Parc Guell?',
    description: 'Park Güell is the famous city park with the mosaics and the salamander in the district Gràcia of Barcelona and definitely one of the most important attractions in Barcelona in terms of visitor numbers and architecture. Park Güell is a city park with an area of 15 hectares. Read more about the background of and access to this world-famous, fairytale-like park by Gaudi.',
    date:  transformDate(new Date('2021-05-03')),
    image: 'https://images.unsplash.com/photo-1544918877-460635b6d13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
},
{
    id: 3,
    title: 'What to discover in Alcazar de Sevilla?',
    description: 'The Real Alcázar de Sevilla is the Royal Palace of Seville. The name `Alcazar` means castle in Spanish and is derived from the Arabic word al-qasr (fortress or palace). The complex of palaces is in the Mudéjar style, which is a architectural style with many influences from Moorish and Christian culture. It is probably the oldest palace still in use in Europe; when King Felipe V visits Seville, this UNESCO-listed palace is still his residence.)',
    date: transformDate(new Date('2021-12-06')),
    image: 'https://images.unsplash.com/photo-1611420278664-07c3e3ab4aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'
},
{
    id: 4,
    title: 'What to discover in Metropol Parasol Seville?',
    description: 'Standing in the Plaza de la Encarnación is Metropol Parasol, also known as the mushrooms of Seville. This building, which opened in 2011, was designed by the German architect Jürgen Mayer, who won a design competition to revitalise the square. It is the largest wooden construction in the world (150 x 70 meters and 26 meters in height). It is the largest wooden construction in the world',
    date: transformDate(new Date('2021-02-09')),
    image: 'https://c1.wallpaperflare.com/preview/87/936/58/metropol-parasol-parasol-metropol-seville.jpg'
},
{
    id: 5,
    title: 'What to discover in Setenil de las Bodegas?',
    description: 'The municipal area is located in the north east of the province, in the continuation of the Ronda Valley, and its landscape comprises gently undulating fields of cereals and olive trees, across which the River Guadalporcun flows. The village stands on a slope which cascades down from the Castle alongside the river. Its main attraction lies in the beauty and originality of its streets, particularly in the lower part, where the houses, in the manner of semi-troglodytic dwellings, take advantage of the shelter of the rocks in the gorge created by the river. Also of interest are the fortress and La Encarnacion Church.',
    date: transformDate(new Date('2021-06-12')),
    image: 'https://c1.wallpaperflare.com/preview/385/377/71/white-people-andalusia-white-houses-setenil.jpg '
},
{   id: 6,
    title: 'What to discover in Amsterdam?',
    description: 'Amsterdam, city and port, western Netherlands, located on the IJsselmeer and connected to the North Sea. It is the capital and the principal commercial and financial centre of the Netherlands. Amsterdam is the nominal capital of the Netherlands but not the seat of government, which is The Hague.',
    date: transformDate(new Date('2021-11-17')),
    image: 'https://cdn.britannica.com/q:60/78/219378-131-A2307D59/Rijksmuseum-Amsterdam.jpg'
    },
{    id: 7,
    title: 'What to discover in Florence? ',
    description: 'Florence is the capital city of the Italian region of Tuscany. It is considered the birthplace of the Italian Renaissance and is incredibly beautiful. It was declared a World Heritage Site by UNESCO in 1982 and is one of the most desirable places to visit in the world. The city also makes a major European impact on music, architecture, education, cuisine, fashion, philosophy, science and religion. The historic centre of Florence contains numerous elegant squares (piazzas), Renaissance palaces (palazzos), academies, parks, gardens, churches, monasteries, museums and art galleries.',
    date: transformDate(new Date('2021-09-25')),
    image: 'https://www.youth-hostel.si/assets/images/upload/Struktura_strani/Vse_o_potovanju/Svetovna_Mesta/Mesta_1/Potovanje_v_Firence_-_A_trip_to_Florence_-_Photo_by_Heidi_Kaden_on_Unsplash.jpg'
    }];

let blogs = document.querySelector('.blogs');
let mainBlog = document.querySelector('.mainBlog');

const popUp = `
<div id="myModal" class="modal">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-body">
    <form id="formEdit">
    <h3>Edit blog post</h3>
    <div class="msg"></div>
    <div>
      <label for="dateEdit">Date</label>
      <input class="form-control" type="date" id="dateEdit" />
    </div>
    <div>
      <label for="titleEdit">Title</label>
      <input class="form-control" type="text-area" id="titleEdit" />
    </div>
    <div>
      <label for="descriptionEdit">Description</label>
      <input class="form-control" type="text-area" id="descriptionEdit" />
    </div>
    <div>
      <label for="imageEdit">Image</label>
      <input class="form-control" type="url" id="imageEdit" />
    </div>
  </form>
    </div>
    <div class="modal-footer">
    <button onclick='saveEditElement()' type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>`;


function myFunc() {
  mainBlog.innerHTML = ""; 
  blogs.innerHTML = ""; 
  for(let i = 0; i<blog.length; i++) {
    if(i === 0) {
      mainBlog.innerHTML= mainBlog.innerHTML + `
        <div class="card shadow-lg p-3 mb-2 bg-body rounded">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${blog[i].image}" class="img-fluid rounded h-100" alt="Sagrada Famillia"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">
                  <small class="text-muted">${blog[i].date}</small>
                </p>
                <h5 class="card-title fw-bold">${blog[i].title}
                </h5>
                <h6 class="card-title fw-bold d-none ">${blog[i].id}</h6>
                <p class="card-text">${blog[i].description}
                </p>
                <div class="btn">
                <button onclick = 'readMoreElement(${blog[i].id})' class ="btn btn-primary me-3">Read More </button>
                <button type="button" class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#myModal" onclick = 'editElement(${blog[i].id})' >Edit</button>
                ${popUp}
                <button onclick = 'deleteElement(${blog[i].id})' class ="btn btn-primary me-3" > Delete </button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  } else { 
    blogs.innerHTML= blogs.innerHTML + ` 
      <div class="col">
        <div class="card h-100 shadow-lg p-3 mb-1 bg-body rounded">
          <img
            src="${blog[i].image}"
            class="card-img-top"alt=" "/>
          <div class="card-body">
            <p class="card-text">
              <small class="text-muted">${blog[i].date}</small>
            </p>
            <h5 class="card-title fw-bold">${blog[i].title}</h5>
            <h6 class="card-title fw-bold d-none ">${blog[i].id}</h6>
            <p class="card-text">${blog[i].description}
            </p>
            <div class="btn">
            <button onclick = 'readMoreElement(${blog[i].id})' class ="btn btn-primary me-3"> Read More </button>
            <button type="button" class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#myModal" onclick = 'editElement(${blog[i].id})' >Edit</button>
            ${popUp}
            <button onclick = 'deleteElement(${blog[i].id})' class ="btn btn-primary me-3"> Delete </button>
            </div>
          </div>
        </div>
      </div>`;
    }
  }
};
showRecentPost();

function deleteElement(elementId) {
  for(i =0; i<blog.length; i++){
    if (blog[i].id === elementId){
      blog.splice(i, 1);
      break;
    }
  }
  showRecentPost();
};

function editElement(elementId){
  for(i =0; i<blog.length; i++){
    if (blog[i].id === elementId){
      document.getElementById("dateEdit").value = blog[i].date;
      document.getElementById("titleEdit").value = blog[i].title;
      document.getElementById("descriptionEdit").value = blog[i].description;
      document.getElementById("imageEdit").value = blog[i].image;

      global = i;
      break;
    }
  }
  
}

function saveEditElement(){
      blog[global].date = document.getElementById("dateEdit").value ;
      blog[global].title = document.getElementById("titleEdit").value ;
      blog[global].description = document.getElementById("descriptionEdit").value ;
      blog[global].image = document.getElementById("imageEdit").value ;
      console.log(blog[global].title);
      showRecentPost();
}

 function transformDate(date){
   return [
     date.getFullYear(),
     padDate(date.getMonth()+1),
     padDate(date.getDate()),
   ].join('-');
 }
 function padDate(num){
   return num.toString().padStart(2, '0');

 }


const myForm =document.querySelector('#my-form');
const dateInput =document.querySelector('#date');
const titleInput =document.querySelector('#title');
const descriptionInput =document.querySelector('#description');
const msg = document.querySelector('.msg');
const imageInput = document.querySelector('#image');



myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(dateInput.value === '' || titleInput.value === '' || descriptionInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // newBlogPost=JSON.parse(blogPost);

  let post = {};
  post.id=document.getElementById('id').value;
  post.title =document.getElementById('title').value;
  post.date = document.getElementById('date').value;
  post.description = document.getElementById('description').value;
  post.image = document.getElementById('image').value;

  blog.push(post);
  console.log(blog);

  showRecentPost();

 dateInput.value = '';
 titleInput.value = '';
 descriptionInput.value = '';
  }
};


function showRecentPost(){
    blog.sort(function (a, b){
        return Date.parse(a.date) - Date.parse(b.date);
    });
    console.log(blog);
    myFunc();
}



//Remove the bootstrap.min.js import and and try to add a function which will open/toggle the menu for mobile in the same way as bootstrap does that. 
const burger = document.getElementById('toggle');
const menu = document.getElementById('navmenu');
burger.addEventListener('click', () =>{
    //console.log(burger.getAttribute("aria-expanded"));
    menu.classList.toggle( 'show');
    // if( burger.getAttribute("aria-expanded") == "false") {
    // burger.classList.remove('collapsed');
    // burger.setAttribute("aria-expanded", "true");
    // menu.classList.add("collapse", "show");
    // }
    // else {
    //     burger.classList.add('collapsed');
    // burger.setAttribute("aria-expanded", "false");
    // menu.classList.remove("show");

    // }
    //console.log(burger.getAttribute("aria-expanded"));
});


//Replace the blog posts from html with the ones you have in blog.js, in the first array with 5 objects. Loop through that array and print the data from that array in the UI. 

// for(let index = 0; index < blog.length; index ++) {
//     const cardbody = document.getElementById(`card-body-${index}`)
//         const p = document.createElement('p');
//         p.classList.add('card-body');
//         p.textContent = blog[index].description;
//         cardbody.append(p);
//     };


// blog.forEach((blogPost, index) =>{
//     const cardbody = document.getElementById(`card-body-${index}`)
//     const imagebody = document.getElementById(`image-body-${index}`)

//         const img = document.createElement('img');
//         img.classList.add('img-fluid', 'rounded','h-100');
//         img.setAttribute('src', blogPost.image);
//         imagebody.prepend(img);
        
        
//         const small = document.createElement('small');
//         small.classList.add('text-muted');
//         small.setAttribute('id', 'dateId');
//         small.textContent= blogPost.date;
//         cardbody.append(small);
//         //carbody.innerHTML += <small> blogPost.date </small> ; 
        
//         const h = document.createElement('h5');
//         h.classList.add('card-title', 'fw-bold');
//         h.textContent =blogPost.title;
//         cardbody.append(h);
       
//         const p = document.createElement('p');
//         p.classList.add('card-body');
//         p.textContent = blogPost.description;
//         cardbody.append(p);
// })


//Create a method addPost(){} and here try to add 2 more post object to original array. console.log the array after this change. Should have 7 items now. 
// const addPost = function addPost(element) {
//     blog.push(element)
//     console.log(blog);
// }
// addPost({
//     id: 6,
//     title: 'Amsterdam',
//     description: 'Amsterdam, city and port, western Netherlands, located on the IJsselmeer and connected to the North Sea.',
//     date: '2021.11.17',
//     image: 'https://cdn.britannica.com/q:60/78/219378-131-A2307D59/Rijksmuseum-Amsterdam.jpg'
// });

// addPost({
//     id: 7,
//     title: 'Florence ',
//     description: 'Florence is the capital city of the Italian region of Tuscany. It is considered the birthplace of the Italian Renaissance and is incredibly beautiful.',
//     date: '2021.09.25',
//     image: 'https://www.youth-hostel.si/assets/images/upload/Struktura_strani/Vse_o_potovanju/Svetovna_Mesta/Mesta_1/Potovanje_v_Firence_-_A_trip_to_Florence_-_Photo_by_Heidi_Kaden_on_Unsplash.jpg'
// });


// //Create a method changePost(){} and change the title for second post in the array to "Second blog post". console.log the list after.
// // Should have the name changed for second post. 

// //Method 1
// // blog[1] = {...blog[1],title:'Second blog post'};
// // console.log(blog);

// //Method 2
// // const changePost = blog.map (obj => {
// //    if (obj.id === 2){
// //         return {...obj, title: "Second blog post"};
// //     }
// //     return obj;    
// // });
// // console.log(changePost);

// //Method 3
// const changePost = () => {
//     let odd = [...blog];
//     odd[1].title = "Second post blog";
//     console.log(odd);
// }
// changePost();

// //Create a method selectOddPost(){} and return the odd posts here. For example the posts with id: 1,3,5. console.log the list after that. 
// const selectOddPost = (blog) => {
//     let odd = [];
//     let even = [];
//     blog.forEach(element => {
//         if (element.id % 2 === 0)
//             even.push(element)
//         else
//             odd.push(element)
//     })
//     console.log(odd);
// }
// selectOddPost(blog);


//The first blog on the html page should be the most recent one (You can take it from showRecentPost() method.
// const showRecentPost = () => {
//     blog.sort((a, b) => {
//         if (a.date < b.date) {
//             return -1;
//         }
//         else if (a.date > b.date) {
//             return 1;
//         }
//         else {
//             return 0;
//         }
//     });
//     console.log(blog);
// }
// showRecentPost();