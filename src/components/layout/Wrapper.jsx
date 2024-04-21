import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection || "row"}; // flex-directionをプロパティから設定
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: flex-start;
  padding: 10px 20px 20px 20px;
  gap: 10px;
`;

const Wrapper = ({ children, flexDirection, justifyContent }) => {
  return (
    <StyledWrapper
      flexDirection={flexDirection}
      justifyContent={justifyContent}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
