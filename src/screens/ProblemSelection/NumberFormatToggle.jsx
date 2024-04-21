import React, { useCallback, useState } from "react";
import "katex/dist/katex.min.css"; // KaTeX CSSをインポート
import Container from "../../components/layout/Container";
import Wrapper from "../../components/layout/Wrapper";
import Chip from "../../components/common/Chip"; // Chip コンポーネントをインポート
import Description from "../../components/ui/Description";

const NumberFormatToggle = ({ onSelect }) => {
  // 数のフォーマットとそれに対応するアイコンをTeX形式で定義
  const formats = [
    { label: "整数", icon: "\\text{1}" },
    { label: "分数", icon: "\\displaystyle\\frac{1}{2}" },
    { label: "少数", icon: "0.5" },
  ];

  // 初期状態では全てのフォーマットをfalse（非選択）とする
  const initialFormatStates = formats.reduce((acc, format) => {
    acc[format.label] = format.label === "整数"; // 「整数」のみtrueに設定
    return acc;
  }, {});

  const [selectedFormats, setSelectedFormats] = useState(initialFormatStates);

  const handleSelect = useCallback(
    (label) => {
      // 選択されたフォーマットの状態を反転させる
      const updatedFormats = {
        ...selectedFormats,
        [label]: !selectedFormats[label],
      };
      setSelectedFormats(updatedFormats);
      // onSelect コールバックを使用して親コンポーネントに選択状態を伝える
      // 選択されたフォーマットのみを配列で渡す
      onSelect(
        Object.keys(updatedFormats).filter((key) => updatedFormats[key])
      );
    },
    [selectedFormats, onSelect]
  );

  return (
    <Container>
      <Description
        number={2}
        text={"問題の「数の種類」を選択してください（複数選択可）"}
      ></Description>
      {/* <Text>出題する「数の種類」を選択してください（複数選択可）</Text> */}
      <Wrapper>
        {formats.map(({ label, icon }) => (
          <Chip
            key={label}
            icon={icon}
            label={label}
            checked={selectedFormats[label]}
            onChange={() => handleSelect(label)}
            fontSize="24px" // Chipにフォントサイズを指定
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default NumberFormatToggle;
