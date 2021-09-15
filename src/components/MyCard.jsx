import React from "react";
import "../styles/myCard.scss";
import { useEffect } from "react";
import { useState } from "react";
import dateFormat from "dateformat";

export default function MyCard() {
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [login, setLogin] = useState();
  const [dateJoined, setDateJoined] = useState();
  const [bio, setBio] = useState();
  const [publicRepos, setPublicRepos] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [location, setLocation] = useState();
  const [twitterUserName, setTwitterUserName] = useState();
  const [blog, setBlog] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    fetch("http://api.github.com/users/octocat")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  }) => {
    setAvatar(avatar_url);
    setName(name);
    setLogin(login);
    setDateJoined(dateFormat(created_at, "d mmm yyyy"));
    setBio(bio);
    setPublicRepos(public_repos);
    setFollowers(followers);
    setFollowing(following);
    setLocation(location);
    setTwitterUserName(twitter_username);
    setBlog(blog);
    setCompany(company);
  };

  return (
    <div className="myCard">
      <div className="leftColumn">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="bigCard">
        <div className="topThird">
          <div className="nameAndBio">
            <div className="name">{name}</div>
            <div className="login">{login}</div>
            <div className="bio">{bio}</div>
          </div>
          <div className="dateJoined">Joined {dateJoined}</div>
        </div>
        <div className="middleThird">
          <div className="infoBox">
            <h3>Repos</h3>
            <h2>{publicRepos}</h2>
          </div>
          <div className="infoBox">
            <h3>Followers</h3>
            <h2>{followers}</h2>
          </div>
          <div className="infoBox">
            <h3>Following</h3>
            <h2>{following}</h2>
          </div>
        </div>
        <div className="lowerThird">
          <div className="locationAndTwitter">
            <div className="location">
              <img src="assets/icon-location.svg" alt="icon-location" />
              <h3>{location}</h3>
            </div>
            <div className="Twitter">
              <img src="assets/icon-twitter.svg" alt="icon-twitter" />
              <h3>{twitterUserName || "Not Avaliable"}</h3>
            </div>
          </div>
          <div className="blogAndCompany">
            <div className="blog">
              <img src="assets/icon-website.svg" alt="icon-blog" />
              <h3>{blog}</h3>
            </div>
            <div className="company">
              <img src="assets/icon-company.svg" alt="icon-company" />
              <h3>{company}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
