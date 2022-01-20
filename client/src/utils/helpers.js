import axios from 'axios';

//api fetch request for imdb
function exportInfo(search) {
const imdb = fetch(` {search}`)

axios.get(imdb)
.then ((data) => {
    return data
});

}


export default exportInfo