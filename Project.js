// function movement(){
//     let id =null;
//     const elem = document.getElementsByClassName("box62");
//     let myposition =0;
//     clearInterval(id);
//     id =setInterval(frame, 5);
//     function frame(){
//         if(myposition == 350){
//             clearInterval(id);
//         }
//         else{
//             myposition++;
//             elem.style.top = myposition + "px";
//         }
//     }

// }



// function movement() {
//     for (let i = 0; i < 7; i++) 
//     {

//         let elem = document.getElementsByClassName("total")[i]; // Select the first element with class "box62"
//         let myposition = 0;
//         let id = setInterval(frame, 10);

//         function frame() {
//             if (myposition >= 200) {
//                 clearInterval(id);
//             } else {
//                 myposition++;
//                 elem.style.top = -myposition + "px"; // Move the element upwards (negative value)
//             }
//         }
//     }
// }


// function movement() {
//     let elem = document.querySelector("#total"); // Select the first element with class "total"
//     let myposition = 0;
//     let id = setInterval(frame, 10);

//     function frame() {
//         if (myposition >= 200) {
//             clearInterval(id);
//         } else {
//             myposition++;
//             elem.style.top = -myposition + "px"; // Move the element upwards (negative value)
//         }
//     }
// }


// let list = document.querySelectorAll("ul li");
// let div = document.querySelector(".seconddiv");

// if (window.localStorage.getItem("color")) {
//     // 1) add color to div
//     div.style.backgroundColor = window.localStorage.getItem("color");
//     // 2)remove active class from all li
//     list.forEach((li) => {
//         li.classList.remove("active");
//     });
//     // 3)add active class to current color
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// list.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         //remove active class from all li
//         list.forEach((li) => {
//             li.classList.remove("active");
//         });

//         //add active class to current element
//         e.currentTarget.classList.add("active");

//         //add current color to local storage
//         window.localStorage.setItem("color", e.currentTarget.dataset.color);

//         // change div background color
//         div.style.backgroundColor = e.currentTarget.dataset.color;
//     });
// });
