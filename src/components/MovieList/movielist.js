import React, {useState} from 'react';

export function MovieList({films, dettaglioFilm}) {

    const [filmList, setFilmList] = useState(films);

    const handleId = (id) => {
        dettaglioFilm(id);
    }

    return (

        <div className="col-lg-4 col-md-6 col-xs-12">

                <div key={filmList.imdbID} className="card mt-5 mb-5" style={{width: '18rem'}}>
                <img src={filmList.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{filmList.Title}</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <button onClick={() => handleId(filmList.imdbID)} className="btn btn-primary">Go somewhere</button>
                </div>
              </div>
          
          </div>
    )
}