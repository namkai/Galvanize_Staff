import React from 'react';

const ProfilePicture = (props) => {
  const { picture } = props;
  return (
    <div>
      <img src={picture} alt=""/>
    </div>
  );
};

const style = {
  picture: {

  }
}
export default ProfilePicture;