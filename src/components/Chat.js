import {
  EmojiEmotions,
  GifSharp,
  HelpSharp,
  InboxSharp,
  Notifications,
  PeopleAltSharp,
  RedeemSharp,
  Search,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import color_code from "./color-code";

const Chat = () => {
  return (
    <ChatBoard>
      <Header>
        <Section>
          <span className="hash"># </span>
          announcements
        </Section>
        <SectionTwo>
          <Notifications style={{ marginRight: "10px" }}></Notifications>
          <PeopleAltSharp style={{ marginRight: "10px" }}></PeopleAltSharp>
          <SearchBox>
            <SearchBar placeholder="Search"></SearchBar>
            <Search></Search>
          </SearchBox>
          <InboxSharp
            style={{ marginRight: "10px", marginLeft: "10px" }}
          ></InboxSharp>
          <HelpSharp style={{ marginRight: "10px" }}></HelpSharp>
        </SectionTwo>
      </Header>
      <ChatScreen></ChatScreen>
      <ChatBox>
        <ChatInput>
          <Input placeholder="Message #announcement"></Input>
          <Icon>
            <RedeemSharp style={{ marginRight: "20px" }}></RedeemSharp>
            <GifSharp style={{ marginRight: "20px" }}></GifSharp>
            <EmojiEmotions style={{ marginRight: "20px" }}></EmojiEmotions>
          </Icon>
        </ChatInput>
      </ChatBox>
    </ChatBoard>
  );
};

export default Chat;

const ChatBoard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 75%;
  background-color: ${color_code.discord__logo_grey};
  height: 100vh;
`;

const Header = styled.div`
  background-color: ${color_code.discord__down_header_grey};
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color_code.discord__white};
`;

const Section = styled.p`
  font-size: 13pt;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  margin: 10px 0px;
  color: ${color_code.discord__white};
`;

const SectionTwo = styled.div`
  display: flex;
  align-items: center;
  color: ${color_code.discord__font_color};
`;

const SearchBox = styled.div`
  background-color: ${color_code.discord__logo_grey};
  height: 20px;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.input`
  background-color: ${color_code.discord__logo_grey};
  border: 0px;
  color: ${color_code.discord__white};
  padding: 5px;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;

const ChatScreen = styled.div``;

const ChatBox = styled.div`
  width: 77%;
  position: absolute;
  bottom: 0;
`;

const ChatInput = styled.div`
  background-color: ${color_code.discord__nav_grey};
  margin: 20px 30px;
  border-radius: 4px;
  padding: 4px;
  color: ${color_code.discord__font_color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16pt;
`;

const Input = styled.input`
  width: 75%;
  background-color: ${color_code.discord__nav_grey};
  border: 0px;
  padding: 10px;
  color: ${color_code.discord__white};

  &:focus {
    outline: none;
  }
`;

const Icon = styled.div``;
