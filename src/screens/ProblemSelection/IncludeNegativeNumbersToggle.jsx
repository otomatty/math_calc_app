import React from "react";
import styled from "styled-components";

import Checkbox from "../../components/common/Checkbox";
import Description from "../../components/ui/Description";

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// ラベルスタイルを更新
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px; // チェックボックスとテキストの間に8pxのスペースを追加
`;

const IncludeNegativeNumbersToggle = ({ includeNegatives, onToggle }) => {
  return (
    <>
      <Description
        number={3}
        text={"問題に「負の数」を含む場合はチェックを入れてください。"}
      ></Description>
      <Container>
        <StyledLabel>
          <Checkbox checked={includeNegatives} onChange={onToggle} />
          負の数を含む
        </StyledLabel>
      </Container>
    </>
  );
};

export default IncludeNegativeNumbersToggle;
