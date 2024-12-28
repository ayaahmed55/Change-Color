// First Solution
// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector(".red").onclick = function(){
//         document.querySelector('#result').style.color = "red";
//     }
//     document.querySelector(".green").onclick = function(){
//         document.querySelector('#result').style.color = "green";
//     }
//     document.querySelector(".blue").onclick = function(){
//         document.querySelector('#result').style.color = "blue";
//     }
// });

// Second Solution 
// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelectorAll("button").forEach(function(changeColor){
//         changeColor.onclick = function(event){
//             document.querySelector("#result").style.color = event.target.id;
//         }
//     })
// });

// Third Solution 
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("button").forEach(function(changeColor){
        changeColor.onclick = function(){
            document.querySelector("#result").style.color = changeColor.dataset.color;
        }
    })
});