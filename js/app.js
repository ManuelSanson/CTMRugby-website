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
    {img: "https://pbs.twimg.com/media/ELhVtUnWoAImVHd.jpg",
    titulo: "DIFUNDIENDO EL DEPORTE",
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum doloremvel architecto assumenda explicabo est tempore tenetur, iure delectus!'},
    {img: "https://pbs.twimg.com/media/ELhVtUnWoAImVHd.jpg",
    titulo: "CTM vs. OCC",
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum doloremvel architecto assumenda explicabo est tempore tenetur, iure delectus!'},
    {img: "https://pbs.twimg.com/media/ELhVtUnWoAImVHd.jpg",
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