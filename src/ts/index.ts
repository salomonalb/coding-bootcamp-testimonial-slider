/* Declaring variables and assigning them to the elements in the HTML. */
const photoEl = document.getElementById('photo');
const testimonialEl = document.getElementById('testimonial');
const nameEl = document.getElementById('name');
const positionEl = document.getElementById('position');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');



import imgJohn from '../images/image-john.jpg';
import imgTanya from '../images/image-tanya.jpg';

/* A person is an object with a photo, name, position, and testimonial. */
type person = {
    photo: string,
    name: string,
    position: string,
    testimonial: string
}

/* Creating two objects, tanya and john, and assigning them to the person type. */
const tanya: person = {
    photo: imgTanya,
    name: 'Tanya Sinclair',
    position: 'UX Engineer', 
    testimonial: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
}
const john: person = {
    photo: imgJohn,
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer', 
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`
}

/* Change the DOM elements with the person objects */
function changeData(obj: person) {
    photoEl!.setAttribute('src', obj.photo)
    testimonialEl!.textContent = obj.testimonial;
    nameEl!.textContent = obj.name;
    positionEl!.textContent = obj.position;
    photoEl!.setAttribute('alt', obj.name)
}

/* Adding an event listener to the next and previous buttons. When the next button is clicked, the
changeData function is called with the john object as an argument. When the previous button is
clicked, the changeData function is called with the tanya object as an argument. */
nextBtn!.addEventListener('click', ()=> {
    changeData(john)
})
prevBtn!.addEventListener('click', ()=> {
    changeData(tanya)
})

/* use the tanya person by default */
changeData(tanya)

export {};