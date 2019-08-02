import React from "react";

const RandomUsers = ({ favorite }) => {
  return (
    <div className="random-user">
      <img src={favorite.user.profile_image_url_https} alt="User profile" />
      <span>
        <p><strong>{favorite.user.name}</strong></p>
        <p>@{favorite.user.screen_name}</p>
      </span>
    </div>
  );
};

export default RandomUsers;
