import React from "react";
import styled from "styled-components";

const FooterBar = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: white;
`;

function Footer() {
  return (
    <FooterBar>
      <p>© 2024 Joel Mwangi Gachihi. All Rights Reserved.</p>
    </FooterBar>
  );
}

export default Footer;
