
export const GifApi = async(variable) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ora2a1BRyp5v2EqVo4qAEkqeR2GJ4p6T&q=${variable}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}
