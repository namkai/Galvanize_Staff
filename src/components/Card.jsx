import React from 'react';

import '../../style/card.css';
export const Card = (props) => {
  const { name, bio, picture, role, link } = props;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light" style={style.imageContainer}>
          <img className="activator" src={picture} style={style.image}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
          <p><a target="_blank" href={link}>{role}</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Bio<i className="material-icons right">close</i></span>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

const style = {
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
};


export default Card;