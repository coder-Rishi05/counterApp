let totalApple = 10;

let leftApple = totalApple;

const warning = document.querySelector("h3");

const leftBasket = document.querySelector(".left-basket span");

const rightBasket = document.querySelector(".right-basket span");

const right = document.querySelector(".right-but");

const left = document.querySelector(".left-but");

leftBasket.innerText = totalApple;

// right.addEventListener("click", () => {
//     let count = rightApple;
//   let rightApple = 0;
//   rightBasket.innerText = count;

//   //   let rightApple = count++;
//   //   rightBasket.innerText = rightApple;

//   count ++;
//   console.log("hi");
// });
// left.addEventListener("click", () => {
//   console.log("hi");
// });

let a = 0;
rightBasket.innerHTML = a;

right.addEventListener("click", () => {
  if (a < 10) {
    a++;
    console.log(a);
    rightBasket.innerHTML = a;
    totalApple--;
    leftBasket.innerText = totalApple;
    
  }
});

left.addEventListener("click", () => {
  if (a > 0) {
    a--;
    console.log(a);
    rightBasket.innerHTML = a;
    totalApple++;
    leftBasket.innerText = totalApple;
    // warning.innerHTML = "can't decrease more than 0 and increase more than 10 ";
    // warning.style.color = "red";
  }
});
