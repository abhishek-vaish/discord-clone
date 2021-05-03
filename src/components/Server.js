import React from "react";
import styled from "styled-components";
import color_code from "./color-code";
import Add from "@material-ui/icons/Add";
import "./Server.css";
import { Explore } from "@material-ui/icons";

const Server = () => {
  return (
    <ServerChannels>
      <ServerIcon>
        <AvatarIcon className="avatar__logo">
          <AvatarImage src="/images/logo.png" />
        </AvatarIcon>
        <hr></hr>
        <AvatarIcon className="avatar__logo">
          <AvatarImage src="/images/logo.png" />
        </AvatarIcon>

        <NewServerIcon>
          <AvatarIcon className="avatar__newServer">
            <Add
              className="avatar__icon"
              style={{ color: `${color_code.discord__green}` }}
            />
          </AvatarIcon>
          <AvatarIcon className="avatar__newServer">
            <Explore
              className="avatar__icon"
              style={{ color: `${color_code.discord__green}` }}
            />
          </AvatarIcon>
        </NewServerIcon>
      </ServerIcon>
    </ServerChannels>
  );
};

export default Server;

const ServerChannels = styled.div`
  background-color: ${color_code.discord__nav_grey};
  height: 100vh;
  display: flex;
  flex: 2%;
  color: ${color_code.discord__white};
`;

const ServerIcon = styled.div`
  padding: 0px 10px;
`;

const AvatarIcon = styled.div`
  border-radius: 50px;
  background-color: ${color_code.discord__logo_grey};
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  &:hover {
    border-radius: 20px;
    transition: 0.15s;
    cursor: pointer;
  }
`;

const AvatarImage = styled.img`
  width: 50%;
`;

const NewServerIcon = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 30px;
`;
