import React, {useState} from 'react';

export function MovieList({films}) {

    const [filmList, setFilmList] = useState(films)
    const [filmDetail, setFilmDetail] = useState([]);

    const getFilmDetails = async (id) => {

        await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY_FILM}`)
          .then(res => res.json())
          .then(detail => setFilmDetail(detail))

        console.log(filmDetail);
    };

    return (

        <div className="col-lg-4 col-md-6 col-xs-12">

          
                <div key={filmList.imdbID} className="card mt-5 mb-5" style={{width: '18rem'}}>
                <img src={filmList.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{filmList.Title}</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <button onClick={() => getFilmDetails(filmList.imdbID)} className="btn btn-primary">Go somewhere</button>
                </div>
              </div>
          
          </div>
    )
}