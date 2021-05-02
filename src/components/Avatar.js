import React from "react";
import styled from "styled-components";
import color_code from "./color-code";

const Avatar = (props) => {
  return (
    <div>
      <AvatarIcon>
        <AvatarImage src={props.src}></AvatarImage>
      </AvatarIcon>
    </div>
  );
};

export default Avatar;

const AvatarIcon = styled.div`
  border-radius: 50px;
  background-color: ${color_code.discord__dark_grey};
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  &:hover {
    background-color: ${color_code.discord__blue};
    border-radius: 20px;
    transition: 0.15s;
  }
`;

const AvatarImage = styled.img`
  width: 50%;
`;
