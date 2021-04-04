async function searchGifs(query){
    const queryInfo = {'params': {'api_key': 'o8xV4J93zC4iYEJnSUdj0fEfWYYgBd5f', 'q': query}};
    let gif = await axios.get('http://api.giphapi.giphy.com/v1/gifs/random', queryInfo);
    return gif;
}

const form = document.querySelector('#gif-search-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const query = document.querySelector('#search').value;
    console.log(searchGifs(query));
})