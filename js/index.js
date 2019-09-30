const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




// nav bar stuff

let linksNav = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
let navbar = document.querySelector('nav');
console.log(navbar);

linksNav.forEach(link => {
  const linkList = document.createElement('a');
  linkList.textContent = link;
  navbar.append(linkList);
})


const newLinks = document.createElement('a');
newLinks.textContent = 'Reviews';
console.log(newLinks);
const apply = document.querySelector('nav');
apply.appendChild(newLinks);

const newLinksTwo = document.createElement('a');
newLinksTwo.textContent = 'Jobs';
newLinksTwo.style.marginRight = "-190px"; // maybe comment this out later see what happens
console.log(newLinksTwo);
const beginner = document.querySelector('nav');
beginner.prepend(newLinksTwo);

const navWords = document.querySelectorAll('a');
navWords.forEach(function(aColor) {
  aColor.style.color = 'green';
});
console.log(navWords)



// CTA

const header = document.querySelector('h1');
header.innerText = siteContent.cta.h1;
console.log(header);

const btn = document.querySelector('button');
console.log(btn);

const CTAimage = document.querySelector('#cta-img');
CTAimage.src = siteContent.cta['img-src'];
console.log(CTAimage);


// main stuff section

let mainContentHeadings = document.querySelectorAll('.main-content h4');
mainContentHeadings[0].innerText = siteContent['main-content']['features-h4'];
mainContentHeadings[1].innerText = siteContent['main-content']['about-h4'];
mainContentHeadings[2].innerText = siteContent['main-content']['services-h4'];
mainContentHeadings[3].innerText = siteContent['main-content']['product-h4'];
mainContentHeadings[4].innerText = siteContent['main-content']['vision-h4'];
console.log(mainContentHeadings);

let mainContentParagraphs = document.querySelectorAll('.main-content p');
mainContentParagraphs[0].innerText = siteContent['main-content']['features-content'];
mainContentParagraphs[1].innerText = siteContent['main-content']['about-content'];
mainContentParagraphs[2].innerText = siteContent['main-content']['services-content'];
mainContentParagraphs[3].innerText = siteContent['main-content']['product-content'];
mainContentParagraphs[4].innerText = siteContent['main-content']['vision-content'];
console.log(mainContentParagraphs);

const mainContentImage = document.querySelector('#middle-img');
mainContentImage.src = siteContent['main-content']['middle-img-src'];
console.log(mainContentImage);

// contact

const contactHeader = document.querySelector('.contact h4');
contactHeader.innerText = siteContent.contact['contact-h4'];
console.log(contactHeader);

const contactParagraph = document.querySelectorAll('.contact p');
contactParagraph[0].innerText = siteContent.contact['address'];
contactParagraph[1].innerText = siteContent.contact['phone'];
contactParagraph[2].innerText = siteContent.contact['email'];
console.log(contactParagraph);



//footer

const footer = document.querySelector('footer');
footer.innerText = siteContent.footer.copyright;
console.log(footer);