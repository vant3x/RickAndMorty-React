import React from 'react';

function PersonajeCard (props) {
    const { character } = props;

    return (
      <div className="char-card-container animated fadeInDownBig">
        <div
                className="CharacterCard"
                style={{ backgroundImage: `url(${character.image})` }}
            >
            <div className="CharacterCard__name-container text-truncate">
            {character.name}
            <br/>
            </div>
        </div>
        <div className="more-info-container">
            <h5 className="char-title">Más Información</h5>
            <span className="char-title">Especie: </span> <span  className="white-text">{character.species}</span>
            <br/>
            <span className="char-title">Genero: </span> <span className="white-text">{character.gender}</span>
            <br/>
            <span className="char-title">Estado: </span> <span className="white-text">{character.status}</span>
        </div>
      </div>
    );
}

export default PersonajeCard;