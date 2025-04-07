let countShoe = 0;
let countSock = 0;
let countBag = 0;
const shoeQuantity = document.getElementById("quantityShoe");
const sockQuantity = document.getElementById("quantitySock");
const bagQuantity = document.getElementById("quantityBag");
const shoe = document.getElementById("shoe");
const sock = document.getElementById("sock");
const bag = document.getElementById("bag");
let likeShoes = document.getElementById("likeShoe");
let likeSocks = document.getElementById("likeSock");
let likeBags = document.getElementById("likeBag");
let total = document.getElementById("total");

function updateShoeQuantity() {
  shoeQuantity.innerText = countShoe;
}

function increaseShoe() {
  countShoe++;
  updateShoeQuantity();
  TotalShoeCost();
}

function decreaseShoe() {
  if (countShoe > 0) {
    countShoe--;
  }
  updateShoeQuantity();
  TotalShoeCost();
}

function updateSockQuantity() {
  sockQuantity.innerText = countSock;
}

function increaseSock() {
  countSock++;
  updateSockQuantity();
  TotalSockCost();
}

function decreaseSock() {
  if (countSock > 0) {
    countSock--;
  }
  updateSockQuantity();
  TotalSockCost();
}

function updateBagQuantity() {
  bagQuantity.innerText = countBag;
}

function increaseBag() {
  countBag++;
  updateBagQuantity();
  TotalBagCost();
}

function decreaseBag() {
  if (countBag > 0) {
    countBag--;
  }
  updateBagQuantity();
  TotalBagCost();
}

function deleteShoe() {
  shoe.remove();
  total.innerText = `${countShoe * 0}$`;
}
function deleteSock() {
  sock.remove();
  total.innerText = `${countSock * 0}$`;
}
function deleteBag() {
  bag.remove();
  total.innerText = `${countBag * 0}$`;
}

function likeShoe() {
  if (likeShoes.style.color === "red") {
    likeShoes.style.color = "black";
  } else {
    likeShoes.style.color = "red";
  }
}

function likeSock() {
  if (likeSocks.style.color === "red") {
    likeSocks.style.color = "black";
  } else {
    likeSocks.style.color = "red";
  }
}

function likeBag() {
  if (likeBags.style.color === "red") {
    likeBags.style.color = "black";
  } else {
    likeBags.style.color = "red";
  }
}
function TotalShoeCost() {
  total.innerText = `${countShoe * 100} $`;
}

function TotalSockCost() {
  total.innerText = `${countSock * 20} $`;
}

function TotalBagCost() {
  total.innerText = `${countBag * 50} $`;
}
