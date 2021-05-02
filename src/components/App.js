import React from "react";
import styled from "styled-components";
import color_code from "./color-code";
import Server from "./Server";

const App = () => {
  return (
    <div>
      <Home>
        <Server></Server>
      </Home>
    </div>
  );
};

export default App;

const Home = styled.h1`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;
`;
