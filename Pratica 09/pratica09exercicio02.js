var numeroFigura = 0;

function anterior() {
    numeroFigura--;
    if (numeroFigura < 0)
        numeroFigura = 21;
    mostrarFigura();
}
function posterior() {
    numeroFigura++;
    if (numeroFigura > 21)
        numeroFigura = 0;
    mostrarFigura();
}
function mostrarFigura() {
    var titulo, imagem;
    switch (numeroFigura) {
        case 0:
            titulo = "Ferrari 166 Inter Berlinetta 1948";
            imagem = "<img src='Ferrari-1948.jpg' alt='Ferrari 1948'></img>";
            break;
        case 1:
            titulo = "Ferrari 250 GT Boano 1956";
            imagem = "<img src='Ferrari-1956.jpg' alt='Ferrari 1956'></img>";
            break;
        case 2:
            titulo = "Ferrari 250 GTO 1962";
            imagem = "<img src='Ferrari-1962.jpg' alt='Ferrari 1962'></img>";
            break;
        case 3:
            titulo = "Ferrari Dino 206 GT 1968";
            imagem = "<img src='Ferrari-1968.jpg' alt='Ferrari 1968'></img>";
            break;
        case 4:
            titulo = "Ferrari 308 GTB 1975";
            imagem = "<img src='Ferrari-1975.jpg' alt='Ferrari 1975'></img>";
            break;
        case 5:
            titulo = "Ferrari F40 1987";
            imagem = "<img src='Ferrari-1987.jpg' alt='Ferrari 1987'></img>";
            break;
        case 6:
            titulo = "Ferrari F355 1994";
            imagem = "<img src='Ferrari-1994.jpg' alt='Ferrari 1994'></img>";
            break;
        case 7:
            titulo = "Ferrari F50 1995";
            imagem = "<img src='Ferrari-1995.jpg' alt='Ferrari 1995'></img>";
            break;
        case 8:
            titulo = "Ferrari 550 Maranello 1996";
            imagem = "<img src='Ferrari-1996.jpg' alt='Ferrari 1996'></img>";
            break;
        case 9:
            titulo = "Enzo Ferrari 2002";
            imagem = "<img src='Ferrari-2002.jpg' alt='Ferrari 2002'></img>";
            break;
        case 10:
            titulo = "Ferrari 458 Itália 2009";
            imagem = "<img src='Ferrari-2009.jpg' alt='Ferrari 2009'></img>";
            break;
        case 11:
            titulo = "LaFerrari 2013";
            imagem = "<img src='Ferrari-2013.jpeg' alt='Ferrari 2013'></img>";
            break;        
        default:
            titulo = "Ferrari";
            imagem = "<img src='logoferrari.jpg' alt='Ferrari'></img>";
    }
    rotulo.innerHTML = titulo;
    foto.innerHTML = imagem;
}