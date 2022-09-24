//MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

//NOTICIAS
const noticias = [
    {img: "../img/Equipo 2.jpeg",
    titulo: "DIFUNDIENDO EL DEPORTE",
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum doloremvel architecto assumenda explicabo est tempore tenetur, iure delectus!'},
    {img: "../img/Equipo 2.jpeg",
    titulo: "CTM vs. OCC",
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum doloremvel architecto assumenda explicabo est tempore tenetur, iure delectus!'},
    {img: "../img/Equipo 2.jpeg",
    titulo: "CONVOCADO",
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum doloremvel architecto assumenda explicabo est tempore tenetur, iure delectus!'},
]

const containerNoticiasIndex = document.querySelector('#containerNoticiasIndex')
const containerNoticiasNoticias = document.querySelector('#containerNoticiasNoticias')

const renderizarNoticias = () => {
    noticias.forEach((noticia) => {
        const newSection = document.createElement('article')
        newSection.innerHTML = `
        <img src="${noticia.img}" alt="ImagenNoticia" class="imgNoticia">
        <h2 class="logoNoticias">NOTICIAS</h2>
        <h2 class="tituloNoticia">${noticia.titulo}</h2>
        <p class="textoNoticia">${noticia.texto}</p>
        `
        newSection.className = 'noticia'

        if (containerNoticiasIndex) {
            containerNoticiasIndex.append(newSection)
        }

        const b = document.createElement('article')
        b.innerHTML = `
        <img src="${noticia.img}" alt="ImagenNoticia" class="imgNoticia">
        <h2 class="logoNoticias">NOTICIAS</h2>
        <h2 class="tituloNoticia">${noticia.titulo}</h2>
        <p class="textoNoticia">${noticia.texto}</p>
        `

        const clone = newSection.cloneNode(true);

        if (containerNoticiasNoticias) {
            containerNoticiasNoticias.append(newSection)
        }
    })
}

if (containerNoticiasIndex) {
    renderizarNoticias()
}

if (containerNoticiasNoticias) {
    renderizarNoticias()
    renderizarNoticias()
}



/*
const renderizarNoticiasIndex = () => {
    noticias.forEach((noticia) => {
        const newSection = document.createElement('article')
        newSection.innerHTML = `
        <img src="${noticia.img}" alt="ImagenNoticia" class="imgNoticia">
        <h2 class="logoNoticias">NOTICIAS</h2>
        <h2 class="tituloNoticia">${noticia.titulo}</h2>
        <p class="textoNoticia">${noticia.texto}</p>
        `
        newSection.className = 'noticia'
        if (containerNoticiasIndex) {
            containerNoticiasIndex.append(newSection)
        }
    })
}
if (containerNoticiasIndex) {
    renderizarNoticiasIndex()
}



const renderizarNoticiasNoticias = () => {
    noticias.forEach((noticia) => {
        const newSection = document.createElement('article')
        newSection.innerHTML = `
        <img src="${noticia.img}" alt="ImagenNoticia" class="imgNoticia">
        <h2 class="logoNoticias">NOTICIAS</h2>
        <h2 class="tituloNoticia">${noticia.titulo}</h2>
        <p class="textoNoticia">${noticia.texto}</p>
        `
        newSection.className = 'noticia'
        if (containerNoticiasNoticias) {
            containerNoticiasNoticias.append(newSection)
        }
    })
}
if (containerNoticiasNoticias) {
    renderizarNoticiasNoticias()
}




const renderizarNoticiasNoticias2 = () => {
    noticias.forEach((noticia) => {
        const newSection = document.createElement('article')
        newSection.innerHTML = `
        <img src="${noticia.img}" alt="ImagenNoticia" class="imgNoticia">
        <h2 class="logoNoticias">NOTICIAS</h2>
        <h2 class="tituloNoticia">${noticia.titulo}</h2>
        <p class="textoNoticia">${noticia.texto}</p>
        `
        newSection.className = 'noticia'
        if (containerNoticiasNoticias2) {
            containerNoticiasNoticias2.append(newSection)
        }
    })
}
if (containerNoticiasNoticias2) {
    renderizarNoticiasNoticias2()
}
*/