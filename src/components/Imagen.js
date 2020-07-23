import React from 'react';

const Imagen = ({ imagen }) => {

    const { largeImageURL, likes, previewURL, tags, views } = imagen;


    return (

        <div className="card">
            <img src={previewURL} alt={tags} className="card-img-top h-75 w-100" />
            <div className="card-body">
                <p className="card-text">{likes} Me Gusta</p>
                <p className="card-text">{views} Vistas</p>
            </div>
            <div className="card-footer">
                <a
                    href={largeImageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                >Ver Imagen</a>
            </div>
        </div>

    );
}

export default Imagen;