import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Header() {
  return (
    <HeaderContainer>
      {/* BLOCK: HEADER LEFT */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO:
        />
      </HeaderLeft>
      {/* BLOCK:  Header Search */}
      {/* BLOCK: Header Right */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
