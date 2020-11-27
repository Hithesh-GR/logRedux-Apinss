import React from "react";
import Data from "./data.json";
import { Chip, Avatar } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import "./home.css";
const Home = () => {
  return (
    <div className="Home">
      <div className="nav-div">
      <span id="font-E">Employee List Page</span>
      </div>
      <div className="data">
        {Data.map(post => {
          return (
            <div key={post.id} className="post">
              <div>
                <span id="font">{post.name}</span>
              </div>
              <div>
                <Chip
                  color="secondary"
                  variant="outlined"
                  avatar={<Avatar>Age</Avatar>}
                  label={post.age}
                />
              </div>
              <div>
                <Chip
                  icon={<FaceIcon />}
                  label={post.gender}
                />
              </div>
              <div>
                <Chip
                  avatar={<Avatar>mail</Avatar>}
                  label={post.email}
                  clickable
                  color="primary"
                  variant="outlined"
                />
              </div>
              <div>
                <Chip
                  label={post.phoneNo}
                  color="secondary"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;