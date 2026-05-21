async function getch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

async function uj_info(){
    console.log("megnyomódtam");
    let data = await getch("https://api.artic.edu/api/v1/artworks");
    console.log(data);
    console.log("adat megérkezett és már ki is írtam");

    // cim.innerHTML = data['object'];
    cim.innerHTML = data.data[0].title;

    muvesz.innerHTML = data.data[0].artist_display;
    info.innerHTML = data.data[0].place_of_origin;
    kep.src = data.data[0].image;
    
}

const gomb = document.getElementById("gomb");
const cim = document.getElementById("cim");
const kep = document.getElementById("kep");
const info = document.getElementById("info");

gomb.addEventListener("click", uj_info);

// console.log("a betöltéskor lekérdezem a föld adatait");
// uj_info(); // itt most nincs await!!! nem is lehetne, mert nem async függvényben vagyunk...
// console.log("túl vagyok a lekérdezésen, várok...");