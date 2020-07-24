import React from 'react';

const Imagen = ({ imagen }) => {

    const { largeImageURL, likes, previewURL, tags, views } = imagen;


    return (

        <div className="card border-primary">
            <img src={previewURL} alt={tags} className="card-img-top" />
            <div className="card-body">
                <button type="button" className="btn btn-outline-info btn-block">
                    Me Gusta <span className="badge badge-outline-light">{likes}</span>
                </button>
                <button type="button" className="btn btn-outline-info btn-block">
                    Vistas <span className="badge badge-outline-light">{views}</span>
                </button>
            </div>
            <div className="card-footer">
                <a
                    href={largeImageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning btn-block"
                >Ver Imagen</a>
            </div>
        </div >

    );
}

export default Imagen;