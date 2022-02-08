//Create a new array with 5 objects. Every object should have an id, a title, description, date when was added, and a image.
//You can populate these fields with the data you have on blogposts.  In the end console log the list with the 5 objects.
const blog = [{
    id: 1,
    title: 'Sagrada Familia',
    description: 'The most famous sight and tourist attraction is certainly the historic church Sagrada Familia',
    date: '2021.10.01',
    image: 'https://www.proidea.ro/aplicatii-produse-5/mapei-sagrada-familia-barcelona-14513/a_49_d_15_1518696636579_mapei_barcelona_sagrada_familia_1.jpg'
},
{
    id: 2,
    title: 'Parc Guell',
    description: 'Park Güell is the famous city park with the mosaics and the salamander in the district Gràcia of Barcelona and definitely one of the most important attractions in Barcelona in terms of visitor numbers and architecture',
    date: '2021.05.03',
    image: 'https://images.unsplash.com/photo-1544918877-460635b6d13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
},
{
    id: 3,
    title: 'Alcazar de Sevilla',
    description: 'The Real Alcázar de Sevilla is the Royal Palace of Seville. The name Alcazar means castle in Spanish and is derived from the Arabic word al-qasr (fortress or palace)',
    date: '2021.12.06',
    image: 'https://images.unsplash.com/photo-1611420278664-07c3e3ab4aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'
},
{
    id: 4,
    title: 'Metropol Parasol Seville',
    description: 'Standing in the Plaza de la Encarnación is Metropol Parasol, also known as the mushrooms of Seville',
    date: '2021.02.09',
    image: 'https://c1.wallpaperflare.com/preview/87/936/58/metropol-parasol-parasol-metropol-seville.jpg'
},
{
    id: 5,
    title: 'Setenil de las Bodegas',
    description: 'The municipal area is located in the north east of the province, in the continuation of the Ronda Valley, and its landscape comprises gently undulating fields of cereals and olive trees, across which the River Guadalporcun flows',
    date: '2021.06.12',
    image: 'https://c1.wallpaperflare.com/preview/385/377/71/white-people-andalusia-white-houses-setenil.jpg '
}]
console.log(blog);

//Create a method addPost(){} and here try to add 2 more post object to original array. console.log the array after this change. Should have 7 items now. 

const addPost = function addPost(element) {
    blog.push(element)
    console.log(blog);
}
addPost({
    id: 6,
    title: 'Amsterdam',
    description: 'Amsterdam, city and port, western Netherlands, located on the IJsselmeer and connected to the North Sea.',
    date: '2021.11.17',
    image: 'https://cdn.britannica.com/q:60/78/219378-131-A2307D59/Rijksmuseum-Amsterdam.jpg'
});

addPost({
    id: 7,
    title: 'Florence ',
    description: 'Florence is the capital city of the Italian region of Tuscany. It is considered the birthplace of the Italian Renaissance and is incredibly beautiful.',
    date: '2021.09.25',
    image: 'https://www.youth-hostel.si/assets/images/upload/Struktura_strani/Vse_o_potovanju/Svetovna_Mesta/Mesta_1/Potovanje_v_Firence_-_A_trip_to_Florence_-_Photo_by_Heidi_Kaden_on_Unsplash.jpg'
});



//Create a method changePost(){} and change the title for second post in the array to "Second blog post". console.log the list after.
// Should have the name changed for second post. 

//Method 1
// blog[1] = {...blog[1],title:'Second blog post'};
// console.log(blog);

//Method 2
// const changePost = blog.map (obj => {
//    if (obj.id === 2){
//         return {...obj, title: "Second blog post"};
//     }
//     return obj;    
// });
// console.log(changePost);

//Method 3
const changePost = () => {
    let odd = [...blog];
    odd[1].title = "Second post blog";
    console.log(odd);
}
changePost();

//Create a method selectOddPost(){} and return the odd posts here. For example the posts with id: 1,3,5. console.log the list after that. 
const selectOddPost = (blog) => {
    let odd = [];
    let even = [];
    blog.forEach(element => {
        if (element.id % 2 === 0)
            even.push(element)
        else
            odd.push(element)
    })
    console.log(odd);
}
selectOddPost(blog);


//Create a method showRecentPost(){} and return here the post with the most recent date. console.log the post at the end. 
const showRecentPost = () => {
    blog.sort((a, b) => {
        if (a.date < b.date) {
            return -1;
        }
        else if (a.date > b.date) {
            return 1;
        }
        else {
            return 0;
        }
    });
    console.log(blog);
}
showRecentPost();