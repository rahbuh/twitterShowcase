import React from "react";

const RandomUsers = ({ favorite }) => {
  const { name, screen_name, profile_image_url_https } = favorite.user;

  return (
    <button className="random-user">
      <img src={profile_image_url_https} alt="User profile" />
      <span>
        <p>
          <strong>{name}</strong>
        </p>
        <p>@{screen_name}</p>
      </span>
    </button>
  );
};

export default RandomUsers;
