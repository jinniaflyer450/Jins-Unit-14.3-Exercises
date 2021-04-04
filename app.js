async function searchGifs(query){
    const queryInfo = {'params': {'api_key': 'o8xV4J93zC4iYEJnSUdj0fEfWYYgBd5f', 'tag': query}};
    let gif = await axios.get('http://api.giphy.com/v1/gifs/random', queryInfo);
    return gif;
}

const form = document.querySelector('#gif-search-form');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const query = document.querySelector('#search').value;
    let gif = await searchGifs(query);
    let gifUrl = gif.data.data.image_url;
    console.log(gif);
    let newGif = document.createElement('img');
    newGif.src = gifUrl;
    let gifs = document.querySelector('#gifs');
    gifs.append(newGif);
})