import React, {useState} from "react";

export function Modale({filmDet}){
    return(

                <div className="modale">
                    <div className="container-modale">
                        <div className="uscita-modale">
                            <button className={'btn btn-primary'}>Chiudi</button>
                        </div>
                        {filmDet.Title}
                    </div>
                </div>


    )
}