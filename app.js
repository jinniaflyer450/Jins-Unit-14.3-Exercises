async function searchGifs(query){
    const queryInfo = {'params': {'api_key': 'o8xV4J93zC4iYEJnSUdj0fEfWYYgBd5f', 'tag': query}};
    let gif = await axios.get('http://api.giphy.com/v1/gifs/random', queryInfo);
    return gif;
}

//https://stackoverflow.com/questions/62491649/google-chrome-corb-blocking-giphy-api-images Figured out why my images weren't working here.

const form = document.querySelector('#gif-search-form');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const query = document.querySelector('#search').value;
    let gif = await searchGifs(query);
    let gifUrl = gif.data.data.image_url;
    let newGif = document.createElement('img');
    newGif.src = gifUrl;
    newGif.classList.add('col-4')
    newGif.classList.add('m-0')
    let gifs = document.querySelector('#gifs');
    gifs.append(newGif);
})

const gifsButton = document.querySelector('#remove-all');
const gifs = document.querySelector('#gifs');
gifsButton.addEventListener('click', function(e){
    e.preventDefault();
    gifs.innerHTML = '';
})