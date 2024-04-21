import React from "react";
import styled from "styled-components";
import Stepper from "../../components/common/Stepper"; // Stepper コンポーネントをインポート
import Description from "../../components/ui/Description";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

// コンポーネント定義
const PageCountSelector = ({ selectedPageCount, onSelect }) => {
  // Stepperからの値の変更を処理する関数
  const handleValueChange = (newValue) => {
    onSelect(newValue);
  };

  return (
    <>
      <Description
        number={6}
        text={"作成するページ数を指定してください。"}
      ></Description>
      <Container>
        <Stepper
          initialValue={selectedPageCount}
          onValueChange={handleValueChange}
        />
      </Container>
    </>
  );
};

export default PageCountSelector;
