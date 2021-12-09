/*we make a title for the document. The title is "Animals"*/
const title=document.createElement('title');
title.textContent="Animals";
document.body.appendChild(title);

/*each section of the document is named"part"*/
const part=document.querySelectorAll('.part');


/*We want to insert buttons in the navigation bar*/

/*First we will make a variable called 'navigation'.
 This variable represents the navigation bar*/
const navigation=document.querySelector('.navigation');

/*At first we should create a list and put it inside the navigation bar*/
const list=document.createElement('ul');
navigation.appendChild(list)
/*we want this list to be a flexbox*/
list.style.cssText='display:flex; flex-wrap:wrap; margin:3px;padding-left:5px'


/*then we want to insert the buttons in this list */

/*We will begin with the first button*/
/* we create a button and insert it in the list inside the navigation bar*/
const firstbutton=document.createElement('button');
firstbutton.setAttribute('class','navbutton active2 ')
list.appendChild(firstbutton)

/*then we change properties of this button*/
firstbutton.textContent="Classification";
firstbutton.style="color:white;font-size: 1.5em;text-decoration: none"

/*An event listenener for smooth scroll to the appropriate section*/
firstbutton.addEventListener('click',function(){
  part[0].scrollIntoView({behavior:"smooth"})
});


/*then, the second button*/
/* we create a button and insert it in the list inside the navigation bar*/
const secondbutton=document.createElement('button');
secondbutton.setAttribute('class','navbutton')
list.appendChild(secondbutton)

/*then we change properties of this button*/
secondbutton.textContent="Characteristics";
secondbutton.style="color:white;font-size: 1.5em;text-decoration: none"
/*An event listenener for smooth scroll to the appropriate section*/
secondbutton.addEventListener('click',function(){
  part[1].scrollIntoView({behavior:"smooth"})
});


/*then, the third button*/
/* we create a button and insert it in the list inside the navigation bar*/
const thirdbutton=document.createElement('button');
thirdbutton.setAttribute('class','navbutton')
list.appendChild(thirdbutton)

/*then we change properties of this button*/
thirdbutton.textContent="Structure";
thirdbutton.style="color:white;font-size: 1.5em;text-decoration: none"
/*An event listenener for smooth scroll to the appropriate section*/
thirdbutton.addEventListener('click',function(){
  part[2].scrollIntoView({behavior:"smooth"})
});


/*then, the fourth button*/
/* we create a button and insert it in the list inside the navigation bar*/
const fourthbutton=document.createElement('button');
fourthbutton.setAttribute('class','navbutton')
list.appendChild(fourthbutton)

/*then we change properties of this button*/
fourthbutton.textContent="Ecology";
fourthbutton.style="color:white;font-size: 1.5em;text-decoration: none"
/*An event listenener for smooth scroll to the appropriate section*/
fourthbutton.addEventListener('click',function(){
  part[3].scrollIntoView({behavior:"smooth"})
});



/*then, the fifth and last button*/
/* we create a button and insert it in the list inside the navigation bar*/
const fifthbutton=document.createElement('button');
fifthbutton.setAttribute('class','navbutton')
list.appendChild(fifthbutton)
/*then we change properties of this button*/
fifthbutton.textContent="Examples";
fifthbutton.style="color:white;font-size: 1.5em;text-decoration: none"
/*An event listenener for smooth scroll to the appropriate section*/
fifthbutton.addEventListener('click',function(){
  part[4].scrollIntoView({behavior:"smooth"})
});

/*I will name each navigation button "navbutton"*/
const navbutton=document.querySelectorAll('.navbutton');



/*I have designed a grid, every element has the class'item'.
I will store it in a variable called 'a'*/
const a=document.body.getElementsByClassName('item');

/*Now, I will add 2 buttons to each item */
for(let i=0; i<a.length; i++) {
  const c= document.createElement('button');
  const d= document.createElement('button');
  a[i].appendChild(c);
  a[i].appendChild(d);

  /*then I want to change properties of the 2 buttons*/

  c.textContent='more photos';
  c.setAttribute('class','first button');
  d.textContent="information from wikipedia";
  d.setAttribute('class','second button');

  /*Here I want to add Event Listner to each item of the grid,
  I will change the background of the item when the mouse pointer is over it*/

  a[i] .addEventListener('mouseover',function (){
    a[i].style.backgroundColor='rgb(50,50,240)'
  });
  /*And I want to return its background to the original background
   when the mouse pointer leaves it*/
  a[i].addEventListener('mouseout',function (){
    a[i].style.backgroundColor='rgb(140,239,240)'
  });
};

/*I want to add a link to each button in each item of the grid*/
/*We will store the first buttons (with the text"more photos")
in a variable called "z";*/
/*and I will store the second buttons (with the text "information from wikipedia")
 in a variable called "y"*/
/*"y" and "z" are NODELISTS*/
const z=document.querySelectorAll('.first ');
const y=document.querySelectorAll('.second ');

/*I want to add event listner to each button of both ClassLists.*/
z[0].addEventListener('click',function () {
            window.open(
              "https://unsplash.com/s/photos/rabbit");
        });

z[1].addEventListener('click',function () {
            window.open(
              "https://unsplash.com/images/animals/lion");
        });

z[2].addEventListener('click',function () {
            window.open(
              "https://unsplash.com/s/photos/crocodile-image");
        });
z[3].addEventListener('click',function () {
            window.open(
              "https://unsplash.com/s/photos/giraffe");
        });
z[4].addEventListener('click',function () {
            window.open(
              "https://unsplash.com/s/photos/tortoise");
        });
z[5].addEventListener('click',function () {
            window.open(
              "https://unsplash.com/s/photos/elephant");
        });
z[6].addEventListener('click',function () {
            window.open(
              "https://unsplash.com/s/photos/monkey");
        });
z[7].addEventListener('click',function () {
            window.open(
              "https://unsplash.com/s/photos/cat");
        });
z[8].addEventListener('click',function () {
              window.open(
              "https://unsplash.com/s/photos/dog");
        });


y[0].addEventListener('click',function () {
                    window.open(
              "https://en.wikipedia.org/wiki/Rabbit");
                });
y[1].addEventListener('click',function () {
                    window.open(
              "https://en.wikipedia.org/wiki/Lion");
                });
y[2].addEventListener('click',function () {
                    window.open(
              "https://en.wikipedia.org/wiki/Crocodile");
                });
y[3].addEventListener('click',function () {
                    window.open(
              "https://en.wikipedia.org/wiki/Giraffe");
                });

y[4].addEventListener('click',function () {
                    window.open(
              "https://en.wikipedia.org/wiki/Tortoise");
                });

y[5].addEventListener('click',function () {
                    window.open(
              "https://en.wikipedia.org/wiki/Elephant");
                });

y[6].addEventListener('click',function () {
                    window.open(
              "https://en.wikipedia.org/wiki/Monkey");
               });

y[7].addEventListener('click',function () {
                    window.open(
             "https://en.wikipedia.org/wiki/Cat");
               });

y[8].addEventListener('click',function () {
                    window.open(
              "https://en.wikipedia.org/wiki/Dog");
                });

/*I want to add event listener to each button
to change its background color, text color and other properties
 when the mouse pointer is over it*/
const f=document.querySelectorAll('.button');

for(let index=0; index<f.length; index++){
  f[index].addEventListener('mouseover', function (){
    this.style.cssText=
    'color:red; background-Color:yellow; width:95%; height:2.2em; font-weight:bold;';
  });
};

/*I want to return first buttons to the original properties
 when the mouse pointer is out of them*/
const first=document.querySelectorAll('.first');
for(let index=0; index<first.length; index++){
  first[index].addEventListener('mouseout', function (){
    this.style.cssText='color:purple; background-Color:white;width:60%'
  });
};

/*I want to return second buttons to the original properties
 when the mouse pointer is out of them*/
const second=document.querySelectorAll('.second');
for(let index=0; index<second.length; index++){
  second[index].addEventListener('mouseout', function (){
    this.style.cssText='color:purple; background-Color:white;width:85%'
  });
};


/*I want to show which section is viewed while scrolling through the page*/
/*At first, I will create a function called "view"**/
/*This function returns "true" if the section is in the window view*/
function view(element){
  const rect=element.getBoundingClientRect();
  return(
    rect.bottom>0.5*window.innerHeight&&
    rect.top<0.5*window.innerHeight
  );
}

/*I will apply this function when I scroll*/
/*If the function is true for a specific part,
 the class of this part will be added the word "active"
and remove the word "active" from the class of other parts
At the same time, the class of the navbutton will be added the word "active2"
and remove the word "active2" from the class of other navbuttons*/
window.onscroll=function(){
  for (i=0; i<part.length; i++) {
    if(view(part[i])) {
      for(let j=0; j<navbutton.length; j++) {
        navbutton[j].classList.remove('active2');
        part[j].classList.remove('active');
      };
      navbutton[i].classList.add('active2');
      part[i].classList.add('active');
    };
  };
}
