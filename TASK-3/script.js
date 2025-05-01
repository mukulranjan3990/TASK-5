const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const mainContainer = document.getElementById("mainContainer");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  sidebar.classList.toggle("active");
  mainContainer.addEventListener("click", () => {
    sidebar.classList.remove("active");
    menuIcon.classList.remove("active");
  });
});


const images = [
  "imge/istanbul on the bosphorus turkey.jpeg",
  "imge/sweden city christmas.jpg",
  "imge/sonamarg jamu kasmir.jpg",
  "imge/zurih switzerland.jpg",
  "imge/evening-time.jpg",
  "imge/350855.jpg",
  "imge/colossem italy rome.jpg",
  "imge/new york city.jpg",
];

const paralist=[
  "Istanbul on the Bosphorus Turkey",
  "Sweden City Christmas",
  "Sonamarg Jammu Kashmir",
  "Zurich Switzerland",
  "Evening Time",
  "Nature Beauty by god gifted",
  "Colosseum Italy Rome",
  "New York City",
];

let currentIndex = 0;
const imgpara1 = document.getElementById("imgpara1");
const carouselContainer = document.getElementById("carouselContainer");
const imageElement = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
carouselContainer.style.backgroundImage = "url('imge/aurora finland.jpg')";
carouselContainer.style.backgroundSize = "cover";
imgpara1.textContent = "aurora finland";
carouselContainer.style.color = "white";
carouselContainer.style.fontSize = "37px";
carouselContainer.style.fontWeight = "bold";
carouselContainer.style.textAlign = "center";
carouselContainer.style.alignContent = "flex-end";

function showImage(index) {
  // imageElement.src = images[index];

  carouselContainer.style.backgroundImage = "url('" + images[index] + "')";
  imgpara1.textContent = paralist[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {

  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("mousedown", () => {
  nextBtn.setAttribute("class", "collor"); // Change to green on click
});

nextBtn.addEventListener("mouseup", () => {
  nextBtn.setAttribute("class", "btn");
});

prevBtn.addEventListener("mousedown", () => {
  prevBtn.setAttribute("class", "collor"); // Change to green on click
});

prevBtn.addEventListener("mouseup", () => {
  prevBtn.setAttribute("class", "btn");
});


const jokePara = document.getElementById("joke");
const getJokeBtn = document.getElementById("getJoke");

getJokeBtn.addEventListener("mousedown", () => {
  getJokeBtn.setAttribute("id", "collor"); // Change to green on click
});

getJokeBtn.addEventListener("mouseup", () => {
  getJokeBtn.setAttribute("id", "getJoke"); // Change back to original on release
});
async function fetchJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokePara.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    jokePara.textContent = "Oops! Failed to fetch a joke.";
    console.error("Error fetching joke:", error);
  }
}

getJokeBtn.addEventListener("click", fetchJoke);


/* Image Section */


const r1img1 = document.getElementById("r1img1");
r1img1.style.backgroundImage = "url('imge/2021-Sydney-Opera-House-Detail.jpg')";
r1img1.style.backgroundSize = "cover";
r1img1.innerText = "Sydney Opera House";
r1img1.style.color = "white";
r1img1.style.fontSize = "40px";
r1img1.style.fontWeight = "bold";
r1img1.style.textAlign = "center";
r1img1.style.alignContent = "flex-end";

const r1img2 = document.getElementById("r1img2");
r1img2.style.backgroundImage = "url('imge/BEST PLACE FOR WISIT IN HOLIDAY.jpeg')";
r1img2.style.backgroundSize = "cover";
r1img2.innerText = "Best Place for Visit in Holiday";
r1img2.style.color = "white";
r1img2.style.fontSize = "40px";
r1img2.style.fontWeight = "bold";
r1img2.style.textAlign = "center";
r1img2.style.alignContent = "flex-end";


const r2img1 = document.getElementById("r2img1");
r2img1.style.backgroundImage = "url('imge/best-places-to-visit-in-summer-maldives TROPICAL ISLAND.jpg')";
r2img1.style.backgroundSize = "cover";
r2img1.innerText = " Maldives Tropical Island";
r2img1.style.color = "rgb(255, 255, 255)";
r2img1.style.fontSize = "40px";
r2img1.style.fontWeight = "bold";
r2img1.style.textAlign = "center";
r2img1.style.alignContent = "flex-end";


const r2img2 = document.getElementById("r2img2");
r2img2.style.backgroundImage = "url('imge/BODHGYA BIHAR.jpg')";
r2img2.style.backgroundSize = "cover";
r2img2.innerText = "Bodhgaya Bihar";
r2img2.style.color = "white";
r2img2.style.fontSize = "40px";
r2img2.style.fontWeight = "bold";
r2img2.style.textAlign = "center";
r2img2.style.alignContent = "flex-end";


const r3img1 = document.getElementById("r3img1");
r3img1.style.backgroundImage = "url('imge/CHIANG MAI - GO LAOS.jpeg')";
r3img1.style.backgroundSize = "cover";
r3img1.innerText = "Chiang Mai - Go Laos";
r3img1.style.color = "rgb(255, 255, 255)";
r3img1.style.fontSize = "40px";
r3img1.style.fontWeight = "bold";
r3img1.style.textAlign = "center";
r3img1.style.alignContent = "flex-end";


const r3img2 = document.getElementById("r3img2");
r3img2.style.backgroundImage = "url('imge/DEST_IRELAND_KILLARY_HARBOUR_GettyImages-81296197-5.jpg')";
r3img2.style.backgroundSize = "cover";
r3img2.innerText = "Dest Ireland Killary Harbour";
r3img2.style.color = "white";
r3img2.style.fontSize = "40px";
r3img2.style.fontWeight = "bold";
r3img2.style.textAlign = "center";
r3img2.style.alignContent = "flex-end";


const r4img1 = document.getElementById("r4img1");
r4img1.style.backgroundImage = "url('imge/GADISAR LAKE JAISALMER..jpg')";
r4img1.style.backgroundSize = "cover";
r4img1.innerText = "Gadisar Lake Jaisalmer";
r4img1.style.color = "rgb(255, 255, 255)";
r4img1.style.fontSize = "35px";
r4img1.style.fontWeight = "bolder";
r4img1.style.textAlign = "center";
r4img1.style.alignContent = "flex-end";


const r4img2 = document.getElementById("r4img2");
r4img2.style.backgroundImage = "url('imge/Amer-Fort-Jaipur-Rajasthan-844x450.webp')";
r4img2.style.backgroundSize = "cover";
r4img2.innerText = "Jaipur Amber Fort The Cube";
r4img2.style.color = "white";
r4img2.style.fontSize = "40px";
r4img2.style.fontWeight = "bold";
r4img2.style.textAlign = "center";
r4img2.style.alignContent = "flex-end";


const r4img3 = document.getElementById("r4img3");
r4img3.style.backgroundImage = "url('imge/LALBAGH FORT AURANGABAD BANGLADESH.jpg')";
r4img3.style.backgroundSize = "cover";
r4img3.innerText = "Lalbagh Fort  Bangladesh";
r4img3.style.color = "white";
r4img3.style.fontSize = "35px";
r4img3.style.fontWeight = "bold";
r4img3.style.textAlign = "center";
r4img3.style.alignContent = "flex-end";


const r4img4 = document.getElementById("r4img4");
r4img4.style.backgroundImage = "url('imge/MALDIVES PLACES FOR HONEYMOON.jpeg')";
r4img4.style.backgroundSize = "cover";
r4img4.innerText = "Maldives Places for Honeymoon";
r4img4.style.color = "white";
r4img4.style.fontSize = "35px";
r4img4.style.fontWeight = "bold";
r4img4.style.textAlign = "center";
r4img4.style.alignContent = "flex-end";


const r5img1 = document.getElementById("r5img1");
r5img1.style.backgroundImage = "url('imge/MESA ARCH SUNRICE IN CANYLANDS NATIONLPRK.jpg')";
r5img1.style.backgroundSize = "cover";
r5img1.innerText = "Mesa Arch Sunrise in Canyonlands National Park";
r5img1.style.color = "white";
r5img1.style.fontSize = "30px";
r5img1.style.fontWeight = "bold";
r5img1.style.textAlign = "center";
r5img1.style.alignContent = "flex-end";


const r5img2 = document.getElementById("r5img2");
r5img2.style.backgroundImage = "url('imge/night-view-basilica-st-peter-river-tiber-rome-italy-35857871.webp')";
r5img2.style.backgroundSize = "cover";
r5img2.innerText = "Basilica St Peter  Rome Italy";
r5img2.style.color = "white";
r5img2.style.fontSize = "35px";
r5img2.style.fontWeight = "bold";
r5img2.style.textAlign = "center";
r5img2.style.alignContent = "flex-end";


const r6img1 = document.getElementById("r6img1");
r6img1.style.backgroundImage = "url('imge/Rishikesh-Uttarakhand-1024x683.webp')";
r6img1.style.backgroundSize = "cover";
r6img1.innerText = "Rishikesh Uttarakhand";
r6img1.style.color = "white";
r6img1.style.fontSize = "40px";
r6img1.style.fontWeight = "bold";
r6img1.style.textAlign = "center";
r6img1.style.alignContent = "flex-end";


const r6img2 = document.getElementById("r6img2");
r6img2.style.backgroundImage = "url('imge/Taj mahal agra(uttarpradesh).jpg')";
r6img2.style.backgroundSize = "cover";
r6img2.innerText = "Taj Mahal Agra Uttar Pradesh";
r6img2.style.color = "rgb(255, 255, 255)";
r6img2.style.fontSize = "40px";
r6img2.style.fontWeight = "bold";
r6img2.style.textAlign = "center";
r6img2.style.alignContent = "flex-end";


const r7img1 = document.getElementById("r7img1");
r7img1.style.backgroundImage = "url('imge/Varenna-is-one-of-the-most-beautiful-and-the-best-towns-to-stay-in-Lake-Como-Italy-768x512.jpg')";
r7img1.style.backgroundSize = "cover";
r7img1.innerText = "Varenna is one of the most beautiful stay in Lake Como Italy";
r7img1.style.color = "white";
r7img1.style.fontSize = "30px";
r7img1.style.fontWeight = "bold";
r7img1.style.textAlign = "center";
r7img1.style.alignContent = "flex-end";


const r7img2 = document.getElementById("r7img2");
r7img2.style.backgroundImage = "url('imge/wat-phra-kaew-bangkok-5c461d99c9e77c0001822ff0.jpg')";
r7img2.style.backgroundSize = "cover";
r7img2.innerText = "Wat Phra Kaew Bangkok";
r7img2.style.color = "white";
r7img2.style.fontSize = "40px";
r7img2.style.fontWeight = "bold";
r7img2.style.textAlign = "center";
r7img2.style.alignContent = "flex-end";


const r8img1 = document.getElementById("r8img1");
r8img1.style.backgroundImage = "url('imge/budapest- hungry,europe.jpg')";
r8img1.style.backgroundSize = "cover";
r8img1.innerText = "Budapest Hungry Europe";
r8img1.style.color = "white";
r8img1.style.fontSize = "40px";
r8img1.style.fontWeight = "bold";
r8img1.style.textAlign = "center";
r8img1.style.alignContent = "flex-end";


const r8img2 = document.getElementById("r8img2");
r8img2.style.backgroundImage = "url('imge/Charles-Bridge-Czechia-768x512.jpg')";
r8img2.style.backgroundSize = "cover";
r8img2.innerText = "Charles Bridge Czechia";
r8img2.style.color = "white";
r8img2.style.fontSize = "40px";
r8img2.style.fontWeight = "bold";
r8img2.style.textAlign = "center";
r8img2.style.alignContent = "flex-end";


const r8img3 = document.getElementById("r8img3");
r8img3.style.backgroundImage = "url('imge/Eiffel-Tower-Paris-France.jpg')";
r8img3.style.backgroundSize = "cover";
r8img3.innerText = "Eiffel Tower Paris France";
r8img3.style.color = "white";
r8img3.style.fontSize = "40px";
r8img3.style.fontWeight = "bold";
r8img3.style.textAlign = "center";
r8img3.style.alignContent = "flex-end";


const r8img4 = document.getElementById("r8img4");
r8img4.style.backgroundImage = "url('imge/golden temple the significant of shrine in shikhism.jpg')";
r8img4.style.backgroundSize = "cover";
r8img4.innerText = "Golden Temple amritsar";
r8img4.style.color = "rgb(255, 255, 255)";
r8img4.style.fontSize = "40px";
r8img4.style.fontWeight = "bold";
r8img4.style.textAlign = "center";
r8img4.style.alignContent = "flex-end";


const r9img1 = document.getElementById("r9img1");
r9img1.style.backgroundImage = "url('imge/hampi vijyanagar empire.jpeg')";
r9img1.style.backgroundSize = "cover";
r9img1.innerText = "Hampi Vijayanagar Empire";
r9img1.style.color = "white";
r9img1.style.fontSize = "38px";
r9img1.style.fontWeight = "bold";
r9img1.style.textAlign = "center";
r9img1.style.alignContent = "flex-end";


const r9img2 = document.getElementById("r9img2");
r9img2.style.backgroundImage = "url('imge/Lofoten-Islands-_norway.webp')";
r9img2.style.backgroundSize = "cover";
r9img2.innerText = "Lofoten Islands Norway";
r9img2.style.color = "white";
r9img2.style.fontSize = "40px";
r9img2.style.fontWeight = "bold";
r9img2.style.textAlign = "center";
r9img2.style.alignContent = "flex-end";


const r9img3 = document.getElementById("r9img3");
r9img3.style.backgroundImage = "url('imge/natural woders of the wold-portugal.jpg')";
r9img3.style.backgroundSize = "cover";
r9img3.innerText = "Natural Wonders of the World Portugal";
r9img3.style.color = "white";
r9img3.style.fontSize = "35px";
r9img3.style.fontWeight = "bold";
r9img3.style.textAlign = "center";
r9img3.style.alignContent = "flex-end";


const r9img4 = document.getElementById("r9img4");
r9img4.style.backgroundImage = "url('imge/One-of-the-most-romantic-places-in-Europe-is-definitely-Tubingen-Germany_1779483323.jpg')";
r9img4.style.backgroundSize = "cover";
r9img4.innerText = "romantic places  Tubingen Germany";
r9img4.style.color = "rgb(255, 255, 255)";
r9img4.style.fontSize = "34px";
r9img4.style.fontWeight = "bold";
r9img4.style.textAlign = "center";
r9img4.style.alignContent = "flex-end";


const r10img1 = document.getElementById("r10img1");
r10img1.style.backgroundImage = "url('imge/santorini island escape.jpg')";
r10img1.style.backgroundSize = "cover";
r10img1.innerText = "Santorini Island Escape";
r10img1.style.color = "white";
r10img1.style.fontSize = "40px";
r10img1.style.fontWeight = "bold";
r10img1.style.textAlign = "center";
r10img1.style.alignContent = "flex-end";


const r10img2 = document.getElementById("r10img2");
r10img2.style.backgroundImage = "url('imge/church of st. john at kaneo-ohrid, macedonia.jpeg')";
r10img2.style.backgroundSize = "cover";
r10img2.innerText = "Church of St. John at Kaneo Macedonia";
r10img2.style.color = "rgb(255, 255, 255)";
r10img2.style.fontSize = "37px";
r10img2.style.fontWeight = "bold";
r10img2.style.textAlign = "center";
r10img2.style.alignContent = "flex-end";

const row3img1 = document.getElementById("row3img1"); 
row3img1.style.backgroundImage = "url('imge/pexels-julien-goettelmann-44396125-19453586.jpg')";
row3img1.style.backgroundSize = "cover";
row3img1.innerText = "Beautiful Nature";
row3img1.style.color = "white";
row3img1.style.fontSize = "40px";
row3img1.style.fontWeight = "bold";
row3img1.style.textAlign = "center";
row3img1.style.alignContent = "flex-end";


const row5img2 = document.getElementById("row5img2");
row5img2.style.backgroundImage = "url('imge/Baros-Maldives.webp')";
row5img2.style.backgroundSize = "cover";
row5img2.innerText = "Baros Maldives";
row5img2.style.color = "white";
row5img2.style.fontSize = "40px";
row5img2.style.fontWeight = "bold";
row5img2.style.textAlign = "center";
row5img2.style.alignContent = "flex-end";

const row6img1 = document.getElementById("row6img1");
row6img1.style.backgroundImage = "url('imge/maryland for young adults.jpg')";
row6img1.style.backgroundSize = "cover";
row6img1.innerText = "Maryland for Young Adults";
row6img1.style.color = "white";
row6img1.style.fontSize = "35px";
row6img1.style.fontWeight = "bold";
row6img1.style.textAlign = "center";
row6img1.style.alignContent = "flex-end";



const row7img3 = document.getElementById("row7img3");
row7img3.style.backgroundImage = "url('imge/hotel inc maldives.jpg')";
row7img3.style.backgroundSize = "cover";
row7img3.innerText = "Hotel Inc Maldives";
row7img3.style.color = "white";
row7img3.style.fontSize = "40px";
row7img3.style.fontWeight = "bold";
row7img3.style.textAlign = "center";
row7img3.style.alignContent = "flex-end";

const row10img2 = document.getElementById("row10img2");
row10img2.style.backgroundImage = "url('imge/mecon Georgia.jpeg')";
row10img2.style.backgroundSize = "cover";
row10img2.innerText = "Macon Georgia";
row10img2.style.color = "white";
row10img2.style.fontSize = "35px";
row10img2.style.fontWeight = "bold";
row10img2.style.textAlign = "center";
row10img2.style.alignContent = "flex-end";




const row1div1 = document.getElementsByClassName("row1div1");
const row2div1 = document.getElementsByClassName("row2div1");
const row2div2 = document.getElementsByClassName("row2div2");
const rowContainer = document.getElementsByClassName("row-Container");
const jokehead= document.getElementById("jokehead");
const joke = document.getElementById("joke");

// media qouries to make the page responsive

// Define the media query
const mediaQuery1 = window.matchMedia('(max-width: 1100px)');

// Function to handle the media query change
function handleMediaQueryChange(event) {

  if (event.matches) {
    // If the media query matches
    console.log('Screen width is 1100px or less');
    jokehead.style.fontSize = "20px";
    joke.style.fontSize = "15px";
    for (let i = 0; i < row1div1.length; i++) {
      row1div1[i].style.fontSize = "20px";
      
    }

    for (let i = 0; i < row2div1.length; i++) {
      row2div1[i].style.fontSize = "20px";
    }

    for (let i = 0; i < row2div2.length; i++) {
      row2div2[i].style.fontSize = "20px";
    }
       
  } else {

    // If the media query does not match
    console.log('Screen width is more than 1100px');
    for (let i = 0; i < row1div1.length; i++) {
      //row1div1[i].style.removeProperty('font-size');
      row1div1[i].style.fontSize = "30px";
    }

    for (let i = 0; i < row2div1.length; i++) {
      //row2div1[i].style.removeProperty('font-size');
      row2div1[i].style.fontSize = "35px";
    }
    // Reset the font size to the original value

    for (let i = 0; i < row2div2.length; i++) {
      //row2div2[i].style.removeProperty('font-size');
      row2div2[i].style.fontSize = "35px";
    }
   
  }
}

// Initial check
handleMediaQueryChange(mediaQuery1);

// Add listener for changes
mediaQuery1.addEventListener('change', handleMediaQueryChange);

