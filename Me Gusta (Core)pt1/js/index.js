//contador like//
let contadorLike = document.querySelector("#botonlike")
contadorLike.addEventListener("click", function(){
    let like = parseInt(document.querySelector("#contador").textContent);
    like++;
    document.querySelector("#contador").textContent = like + " like(s)"
})

