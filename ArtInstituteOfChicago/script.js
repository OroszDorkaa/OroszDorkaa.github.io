async function getch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

async function uj_info(){
    console.log("megnyomódtam");

    let random_oldal = veletlen_szam(1, 10000);
    let data = await getch(`https://api.artic.edu/api/v1/artworks?page=${random_oldal}`);
    console.log(random_oldal);
    console.log(data);
    
    let i = veletlen_szam(0, 11);
    console.log(i);

    cim.innerHTML = data.data[i].title;

    muvesz.innerHTML = data.data[i].artist_display;
    info.innerHTML = data.data[i].place_of_origin;
    kep.src = `${data.config.iiif_url}/${data.data[i].image_id}/full/max/0/default.jpg`;
    
}

const gomb = document.getElementById("gomb");
const cim = document.getElementById("cim");
const kep = document.getElementById("kep");
const info = document.getElementById("info");

gomb.addEventListener("click", uj_info);

function veletlen_szam(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log("a betöltéskor lekérdezem a föld adatait");
// uj_info(); // itt most nincs await!!! nem is lehetne, mert nem async függvényben vagyunk...
// console.log("túl vagyok a lekérdezésen, várok...");