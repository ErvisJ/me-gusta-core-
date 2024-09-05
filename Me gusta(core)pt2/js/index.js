let contadorLike = document.querySelector("#botonlike")
contadorLike.addEventListener("click", function(){
    let like = parseInt(document.querySelector("#contador").textContent);
    like++;
    document.querySelector("#contador").textContent = like + " like(s)"
})

//2//
let contadorLike2 = document.querySelector("#botonlike2")
contadorLike2.addEventListener("click", function(){
    let like2 = parseInt(document.querySelector("#contador2").textContent);
    like2++;
    document.querySelector("#contador2").textContent = like2 + " like(s)"
})

//3//

let contadorLike3 = document.querySelector("#botonlike3")
contadorLike3.addEventListener("click", function(){
    let like3 = parseInt(document.querySelector("#contador3").textContent);
    like3++;
    document.querySelector("#contador3").textContent = like3 + " like(s)"
})