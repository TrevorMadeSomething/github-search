import React from "react";
import "../styles/myCard.scss";
import { useEffect } from "react";
import { useState } from "react";
import dateFormat from "dateformat";

export default function MyCard({ searchedValue, setNoPerson }) {
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
    fetch(
      `http://api.github.com/users/${searchedValue ? searchedValue : "octocat"}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.login) {
          setData(data);
          setNoPerson(false);
        } else {
          // eslint-disable-next-line
          setNoPerson(true);
        }
      });
    // eslint-disable-next-line
  }, [searchedValue]);

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
            <div className="name">{name || login}</div>
            <h3 className="login">{`@${login}`}</h3>
            <p className="bio">{bio || "This profile has no bio"}</p>
          </div>
          <p className="dateJoined">Joined {dateJoined}</p>
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
        <div className="bottomThird">
          <div className="locationAndBlog">
            <div className="location iconInfo">
              <img
                src="assets/icon-location.svg"
                alt="icon-location"
                className={location ? "locationIcon" : "locationIcon greyOut"}
              />
              <h3 className={location ? "" : "greyOut"}>
                {location || "Not Available"}
              </h3>
            </div>
            <div className="blog iconInfo">
              <img
                src="assets/icon-website.svg"
                alt="icon-blog"
                className={blog ? "" : "greyOut"}
              />

              <a className={blog ? "" : "greyOut"} href={blog ? blog : "#"}>
                {blog || "Not Available"}
              </a>
            </div>
          </div>
          <div className="twitterAndCompany">
            <div className="twitter iconInfo">
              <img
                src="assets/icon-twitter.svg"
                alt="icon-twitter"
                className={twitterUserName ? "" : "greyOut"}
              />

              <a
                className={twitterUserName ? "" : "greyOut"}
                href={
                  twitterUserName
                    ? `https://twitter.com/${twitterUserName}`
                    : "#"
                }
              >
                {twitterUserName || "Not Available"}
              </a>
            </div>

            <div className="company iconInfo">
              <img
                src="assets/icon-company.svg"
                alt="icon-company"
                className={company ? "" : "greyOut"}
              />

              <a
                href={
                  company ? `https://github.com/${company.substring(1)}` : "#"
                }
                className={company ? "" : "greyOut"}
              >
                {company || "Not Available"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
