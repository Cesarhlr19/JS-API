function Leer() {
    const Categoria = document.getElementById("input").value;
    const api_url = `https://kitsu.io/api/edge/anime?filter[categories]=${Categoria}`
    buscar1(api_url);
}

function buscar1(api_url) {

    fetch(api_url)
        .then(data => {
            return data.json()
        }).then(resultado =>{
            console.log(resultado); 

            const { data = [] } = resultado;

            console.log(data);
            document.getElementById("lista").innerHTML = '';

            data.map((p) => {
                document.getElementById("lista").innerHTML += `<h3 style="margin-top:10px;">
                    <img src="${p.attributes.posterImage.small}" width="300" height="408">
            </div>`
            })
        });


}

/*const buscar2 = async (api_url) => {

    const data = await fetch(api_url);
    const respuesta = await data.json();
    const Search = await respuesta.Search;

    console.log(Search);

    if (Search != null) {
        document.getElementById("lista").innerHTML = '';
        Search.map((p) => {
            document.getElementById("lista").innerHTML += `<div style="margin-top:10px;">
                    <img width='100%' src=${p.posterImage} alt="No hay imagen"></img></div>`;
        })

    }

}

const buscar3 = async (api_url) => {

    const respuesta = await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(Search);

    if (Search != null) {
        document.getElementById("lista").innerHTML = '';

        Search.map((p) => {
            document.getElementById("lista").innerHTML += `<div style="margin-top:10px;">
                    <img width='100%' src=${p.posterImage} alt="No hay imagen"></img><`;
        })

    }
}*/
