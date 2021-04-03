async function searchGifs(query){
    const queryInfo = {'params': {'api_key': 'o8xV4J93zC4iYEJnSUdj0fEfWYYgBd5f', 'q': query}};
    let gif = await axios.get('https://api.giphy.com/v1/gifs/search', queryInfo);
    console.log(gif);
}