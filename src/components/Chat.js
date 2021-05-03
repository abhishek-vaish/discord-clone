import React from "react";
import styled from "styled-components";
import color_code from "./color-code";

const Chat = () => {
  return <ChatBoard>This Chat Board</ChatBoard>;
};

export default Chat;

const ChatBoard = styled.div`
  display: flex;
  flex: 75%;
  background-color: ${color_code.discord__logo_grey};
  height: 100vh;
`;
