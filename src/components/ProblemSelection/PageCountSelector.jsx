import React from "react";
import styled from "styled-components";

// スタイル定義
const Selector = styled.select`
  padding: 8px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ffc107;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

// コンポーネント定義
const PageCountSelector = ({ selectedPageCount, onSelect }) => {
  const pageCountOptions = [1, 2, 3, 4, 5]; // ページ数の選択肢

  return (
    <Container>
      <Selector
        value={selectedPageCount}
        onChange={(e) => onSelect(e.target.value)}
      >
        {pageCountOptions.map((pageCount) => (
          <option key={pageCount} value={pageCount}>
            {pageCount}ページ
          </option>
        ))}
      </Selector>
    </Container>
  );
};

export default PageCountSelector;
