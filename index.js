// creat variables for content
const frameWork = document.createElement(`div`);
const body = document.body;
const myHeaderOne = document.createElement(`h1`);
const myP1 = document.createElement(`p1`);


// create array of possible employees
const freelance = [
    {name: `Dr. Pepper`, Price: 30, occupation: `Doctor`},
    {name: `Mike`, Price: 80, occupation: `Hvac Tech`},
    {name: `Lincoln`, Price: 50, occupation: `Being Ugly`},
];
const myTextNode = document.createTextNode(freelance)
// set styles

myHeaderOne.textContent = `Freelance Employee`
myP1.setAttribute(`style`, `font-size: 30;`)
frameWork.setAttribute(`style`, `height: 500; width: 500; background-color:
                blue; text-align: center;`);
// later must add function to calculate average cost 
myP1.textContent = `the average starting price is `


// Apend to html
body.appendChild(frameWork);
frameWork.appendChild(myHeaderOne);
frameWork.appendChild(myP1);
frameWork.appendChild(myTextNode);

console.log(freelance[0].name);