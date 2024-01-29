const alphabet = 
      "qwertyuiopasdfghjklzxcvbnm"
      //"QWERTYUIOPASDFGHJKLZXCVBNM"

// changed it to querySelectorAll for multiple elements
document.querySelectorAll(".hacker-effect").forEach((userItem) => {
  userItem.onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("").map((letter, index) => {
        if(index < iterations) {
          return event.target.dataset.value[index];
        }

        return alphabet[Math.floor(Math.random() * 26)];
      }).join("")

      if(iterations>=event.target.dataset.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  }
})

//JS DROPDOWN ATTEMPT
const dropdownBtn = document.getElementById("links");
const dropdownMenu = document.getElementById("dropdown");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

const updateEdge = function(item) {
  if (document.querySelectorAll('#dropdown a').length) {
    item.classList.remove('edge');
    let elm = document.querySelector('#dropdown');
    let offsets = elm.getBoundingClientRect();
    let l = offsets.left;
    let w = elm.clientWidth;
    // let docH = $(".container").height();
    let docW = document.querySelector('.topbar').clientWidth;

    let overflowing = ((l + w) >= docW);
    console.log('overflowing: ' + (l + w) + " >= " + (docW));

    if (overflowing) {
      item.classList.add('edge');
      console.log("added edge");
    } else  {
      item.classList.remove('edge');
      console.log("removed edge");
    }
  }
}

dropdownBtn.onmouseover = e => {
// dropdownBtn.addEventListener("click", function (e) {
  // e.stopPropagation();
  // toggleDropdown();
  // dropdownMenu.classList.add("show");
  
  updateEdge(dropdownMenu)
};//);

// dropdownBtn.onmouseleave = e => {
// // dropdownBtn.addEventListener("click", function (e) {
//   // e.stopPropagation();
//   // toggleDropdown();
//   dropdownMenu.classList.remove("show");
// };//);

dropdownBtn.addEventListener("click", function () {
  alert("bro this is clearly a dropdown what do you expect to happen? dpo uou want me to take you to a whole different page just for 3 links?");
});
// document.documentElement.addEventListener("click", function () {
//   if (dropdownMenu.classList.contains("show")) {
//     toggleDropdown();
//   }
// });

const API_KEY = "0db92a5e-d9bb-41c4-be88-0c63506a55e6"
const URL = "https://api.random.org/json-rpc/2/invoke"

let xhr = new XMLHttpRequest();
xhr.open('POST', URL);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
        "apiKey": API_KEY,
        "n": 52,
        "min": 2,
        "max": 59,
    },
    "id": 7
}));
         
xhr.onload = function() {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    let number = response.result.random.data[1];
    document.querySelector("#time-of-post").innerHTML = number + " mins ago"
  } else {
    console.log(xhr.statusText);
  }
};

let isFollowing = localStorage.getItem("following_professional yapper");
const follow = document.querySelector("#follow-button")

if (isFollowing) {
  follow.innerHTML = "Following"
} else {
  follow.innerHTML = "Follow"
}

follow.addEventListener("click", function () {
  //local storage following
  isFollowing = !isFollowing
  localStorage.setItem("following_professional yapper", isFollowing);
  if (isFollowing) {
    follow.innerHTML = "Following"
  } else {
    follow.innerHTML = "Follow"
  }
});