const cap = [
    //Temporada 1
    `https://argensimpsons.bringfeel.com/Temporadas/1/C1`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C2`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C3`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C4`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C5`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C6`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C7`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C8`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C9`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C10`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C11`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C12`,
    `https://argensimpsons.bringfeel.com/Temporadas/1/C13`,
    //Temporada 2
    `https://argensimpsons.bringfeel.com/Temporadas/2/C1`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C2`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C3`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C4`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C5`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C6`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C7`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C8`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C9`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C10`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C11`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C12`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C13`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C14`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C15`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C16`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C17`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C18`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C19`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C20`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C21`,
    `https://argensimpsons.bringfeel.com/Temporadas/2/C22`,
]
function random() {
    var i = parseInt(Math.random() * cap.length);
    location.href = cap[i];
}