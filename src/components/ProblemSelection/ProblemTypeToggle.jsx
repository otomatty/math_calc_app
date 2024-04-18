import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

// Google Fonts から選んだフォントを適用
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const SwitchLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // 中央寄せにする
  margin: 10px 0; // 余白を増やす
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled(motion.span)`
  position: relative;
  cursor: pointer;
  width: 60px;
  height: 34px;
  background-color: #ccc;
  border-radius: 34px;
  display: flex;
  align-items: center;
`;

// Slider内の動く部分を表す新しいmotion.span
const SliderButton = styled(motion.span)`
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// トグルスイッチのアニメーション用の変数
const sliderVariants = {
  checked: {
    backgroundColor: "#007bff",
    before: {
      x: 26, // トグルボタンの移動距離
      backgroundColor: "white", // 必要に応じて
    },
  },
  unchecked: {
    backgroundColor: "#ccc",
    before: {
      x: 0,
      backgroundColor: "white", // 必要に応じて
    },
  },
};
const sliderButtonVariants = {
  checked: {
    x: 26, // オンの状態でのSliderButtonの位置
    transition: { type: "spring", stiffness: 700, damping: 30 }, // スプリングアニメーションを適用
  },
  unchecked: {
    x: 0, // オフの状態でのSliderButtonの位置
    transition: { type: "spring", stiffness: 700, damping: 30 }, // スプリングアニメーションを適用
  },
};

const LabelText = styled.span`
  color: #333; // テキストの色を変更
  font-weight: bold; // テキストを太字に
  text-align: center;
  display: inline-block;
  width: 100px; // 幅を100pxに設定
`;

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  display: flex;
`;

const ProblemTypeToggle = ({ selectedTypes, onSelect }) => {
  const types = ["加法", "減法", "乗法", "除法"];

  // トグルスイッチの状態をオブジェクトで管理
  const [toggleStates, setToggleStates] = React.useState({
    加法: false,
    減法: false,
    乗法: false,
    除法: false,
  });

  const handleSelect = (type) => {
    // 特定のトグルスイッチの状態を更新
    setToggleStates((prevStates) => ({
      ...prevStates,
      [type]: !prevStates[type],
    }));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {types.map((type) => (
          <SwitchLabel key={type}>
            <LabelText>{type}</LabelText>
            <SwitchInput
              type="checkbox"
              checked={toggleStates[type]}
              onChange={() => handleSelect(type)}
            />
            <Slider
              className="slider"
              variants={sliderVariants}
              animate={toggleStates[type] ? "checked" : "unchecked"}
            >
              <SliderButton
                variants={sliderButtonVariants}
                animate={toggleStates[type] ? "checked" : "unchecked"}
              />
            </Slider>
          </SwitchLabel>
        ))}
      </Container>
    </>
  );
};

export default ProblemTypeToggle;
