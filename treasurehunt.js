// const treasure = (gold) => {
//     var randomNum = Math.floor(Math.random() * 8);
//     console.log(randomNum);
//     if (gold === randomNum) {
//       document.getElementById(gold).innerHTML = "🏴‍☠️";
//     } // else if (randomNum === 1) {
//     //   return (document.getElementById("1").innerHTML = "💣");
//     // } else if (randomNum === 2) {
//     //   document.getElementById("2").innerHTML = "💣";
//     // } else if (randomNum === 3) {
//     //   document.getElementById("3").innerHTML = "💣";
//     // } else if (randomNum === 4) {
//     //   document.getElementById("4").innerHTML = "💣";
//     // } else if (randomNum === 5) {
//     //   document.getElementById("5").innerHTML = "💣";
//     // } else if (randomNum === 6) {
//     //   document.getElementById("6").innerHTML = "💣";
//     // } else if (randomNum === 7) {
//     //   document.getElementById("7").innerHTML = "💣";
//     // } else {
//     //   document.getElementById("8").innerHTML = "💣";
//   };

// var treasure = Math.floor(Math.random()*8)
// var shark = Math.floor(Math.random()*8)
// var sharkTwo = Math.floor(Math.random()*8)
// var counter = 6

// if(treasure === shark){
//     shark = Math.floor(Math.random() * 8)
//   }

// const treasureHunt = (gold) => {
//     counter = counter - 1
//     document.getElementById("counter").innerHTML = counter

//     if(treasure === gold){
//         document.getElementById("searchResults").innerHTML = "You have found the underwater treasure! 💰"
//         document.getElementById("searchArea").innerHTML = "💰💰💰"
//       }
//       else if(shark === gold){
//         document.getElementById("searchResults").innerHTML = "I'm so sorry... the sharks got to you first 🦈"
//         document.getElementById("searchArea").innerHTML = "🦈🦈🦈"
//       }
//       else if(sharkTwo === gold){
//         document.getElementById("searchResults").innerHTML = "I'm so sorry... the sharks got to you first 🦈"
//         document.getElementById("searchArea").innerHTML = "🦈🦈🦈"
//       }
//       else if(counter === 0){
//         document.getElementById("searchResults").innerHTML = "You've run out of time and the Pirates have got you! 🏴‍☠️"
//         document.getElementById("searchArea").innerHTML = "🏴‍☠️🏴‍☠️🏴‍☠️"
//       }
//       else if (treasure !== gold && shark !== gold){
//         document.getElementById(gold).innerHTML = "🐠"
//       }
// }











var treasure = Math.floor(Math.random()*24)
var shark = Math.floor(Math.random()*24)
var sharkTwo = Math.floor(Math.random()*24)
var counter = 12

if(treasure === shark){
    shark = Math.floor(Math.random() * 24)
  }

const treasureHunt = (gold) => {
    counter = counter - 1
    document.getElementById("counter").innerHTML = counter

    if(treasure === gold){
        document.getElementById("searchResults").innerHTML = "You have found the underwater treasure! 💰"
        document.getElementById(gold).innerHTML = "💰"
        // document.getElementById("counter").innerHTML = (counter = 0)
      }
      else if(shark === gold){
        document.getElementById("searchResults").innerHTML = "I'm so sorry... the sharks got to you first 🦈"
        document.getElementById(gold).innerHTML = "🦈"
      }
      else if(sharkTwo === gold){
        document.getElementById("searchResults").innerHTML = "I'm so sorry... the sharks got to you first 🦈"
        document.getElementById(gold).innerHTML = "🦈"
      }
      else if(counter === 0){
        document.getElementById("searchResults").innerHTML = "You've run out of time and the Pirates have got you! 🏴‍☠️"
        document.getElementById(gold).innerHTML = "🏴‍☠️"
      }
      else if (treasure !== gold && shark !== gold){
        document.getElementById(gold).innerHTML = "🐠"
        document.getElementById(location).disabled = true
      }
    //   document.getElementById(location).disabled = true

}