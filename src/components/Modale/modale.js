import React, {useState} from "react";

export function Modale({filmDet, chisuraModale}){

    const handleClose = () => {
        chisuraModale(false);
    }

    return(

                <div className="modale">
                    <div className="container-modale">
                        <div className="uscita-modale">
                            <button className={'btn btn-primary'} onClick={handleClose}>Chiudi</button>
                        </div>
                        <div className="img-dettaglio text-center">
                            <img src={filmDet.Poster} alt={filmDet.Title}/>
                        </div>
                        <h3>{filmDet.Title}</h3>
                        <p><strong>Rilasciato il: </strong> {filmDet.Released}</p>
                        <p>{filmDet.Plot}</p>

                    </div>
                </div>


    )
}