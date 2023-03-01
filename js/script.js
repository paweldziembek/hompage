console.log("Cześć  ten kod jest już w repozytorium git");

let przycisk = document.querySelector(".przycisk");
let naglowek = document.querySelector(".naglowek");

przycisk.addEventListener("click", () => {
    naglowek.remove();
})


console.log(przycisk); 