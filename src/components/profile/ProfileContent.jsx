import React from 'react';

const ProfileContent = (props) => {
  const { picture, bio, link, } = props;
  return (
    <div className="row">
      <div id="profile-page-sidebar" className="col s12 m4">
        <div className="card light-blue" style={{display: 'inline-block'}}>
          <div className="card-content">
            <img class="responsive-img" src={picture}/>
          </div>
        </div>
      </div>
    </div>
  )
};


export default ProfileContent;