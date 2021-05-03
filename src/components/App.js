import React from "react";
import styled from "styled-components";
import Server from "./Server";
import Channel from "./Channel";
import Chat from "./Chat";

const App = () => {
  return (
    <div>
      <Home>
        <Server />
        <Channel />
        <Chat />
      </Home>
    </div>
  );
};

export default App;

const Home = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;
