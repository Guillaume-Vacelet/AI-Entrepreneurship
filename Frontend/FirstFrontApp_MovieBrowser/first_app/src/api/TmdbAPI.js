import axios from 'axios';

const token = '5ffc8d33bda9e9b3161a8fa0b9ed2a5a';
const base_url = 'https://api.themoviedb.org/3/';

export default class TmdbAPI {
    constructor() {
        this.header = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        };
    }

    getMovieFromAPI(search) {
        let include_adult = 'true';

        const url = base_url + 'search/movie?'
        + '&api_key=' + token
        + '&query=' + search
        + '&include_adult=' + include_adult;

        return new Promise((resolve, reject) => {
            axios.get(url, this.header)
            .then(res => {
                if (res.status == 200) {
                    resolve(res.data);
                }
                reject();
            }).catch(err => {
                console.log(err);
            });
        });
    }
}