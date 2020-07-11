let rgb = document.querySelector ("#rgb")
let easy = document.querySelector (".easy")
let hard = document.querySelector (".hard")
let sq = document.querySelectorAll (".sq")
let res = document.querySelector ("#res")
let header = document.querySelector ("header")
let newColors = document.querySelector ("#newColors")
let mode = 3
let colors = []

newColors.addEventListener ("click", function(){    
    colors = []
    res.textContent = ""
    header.style.backgroundColor = "rgb(28, 120, 173)"
    newColors.textContent = "New Colors"
    newColors.classList.remove ("clicked")
    for (let i=0; i<6; i++){
        sq[i].classList.remove ("flash")
    }    

    if (mode === 3) {        
        sq[3].style.backgroundColor = "black"
        sq[4].style.backgroundColor = "black"
        sq[5].style.backgroundColor = "black"        
        generateColors()         

    } else if (mode === 6) {
        generateColors()  
    }   else {
        res.textContent = "Please pick a level"
    }
}) 

hard.addEventListener ("click", function(){
    mode = 6
    hard.classList.add ("clicked")
    easy.classList.remove ("clicked")    
    res.textContent = ""                             
})

easy.addEventListener ("click", function(){
    mode = 3
    colors = []
    hard.classList.remove ("clicked")
    easy.classList.add ("clicked")
    res.textContent = ""              
})

function generateColors(){
    for (let i = 0; i<mode; i++){
        sq[i].classList.remove("hidden")
        colors[i] = randomRgb()
        sq[i].style.backgroundColor = colors[i]
        sq[i].addEventListener ("click", function(){
            if (colors[i]==rgb.textContent){
                res.textContent = "Congratulations!!!"
                header.style.backgroundColor = rgb.textContent
                newColors.textContent = "Play Again?"
                newColors.classList.add ("clicked")
                
                for (let c = 0; c<colors.length; c++){
                    sq[c].classList.remove ("hidden")
                    sq[c].style.backgroundColor = rgb.textContent
                    sq[c].classList.add("flash")
                }
            } else {
                sq[i].classList.add ("hidden")
                res.textContent = "Opsie! Not this one. Try again"
            }
        })
    }    
    rgb.textContent = colors[Math.round(Math.random()*(Number(mode)-1))]
}

function randomRgb(){
    return String("RGB(" + Math.round(Math.random()*256) + ", " + Math.round(Math.random()*256) + ", " + Math.round(Math.random()*256) + ")")
}

