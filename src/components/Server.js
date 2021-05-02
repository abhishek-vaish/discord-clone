import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import color_code from "./color-code";
import Add from "@material-ui/icons/Add";

const Server = () => {
  return (
    <div>
      <ServerChannels>
        <ServerIcon>
          <Avatar src="/images/logo.png"></Avatar>
          <hr></hr>
          <Avatar src="/images/logo.png"></Avatar>
          <Avatar src="/images/logo.png"></Avatar>
          <Avatar src="/images/logo.png"></Avatar>
          <NewServer>
            <Add></Add>
          </NewServer>
        </ServerIcon>
      </ServerChannels>
    </div>
  );
};

export default Server;

const ServerChannels = styled.div`
  background-color: ${color_code.discord__medium_grey};
  height: 100vh;
  display: flex;
  flex: 0.05;
  color: ${color_code.discord__white};
`;

const ServerIcon = styled.div`
  padding: 0px 10px;
`;

const NewServer = styled.div``;
