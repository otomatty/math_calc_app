import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const ChipContainer = styled(motion.div)`
  width: 13%;
  height: 100px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 8px;
  background-color: #f0f0f0;
  cursor: pointer;
  margin: 5px 5px 20px;
  user-select: none;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;

  &:hover {
    background-color: #e0e0e0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    props.checked &&
    css`
      background-color: #007bff;
      color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

      &:hover {
        background-color: #0090ff;
      }
    `}
`;

const CheckMark = styled(motion.div)`
  position: absolute;
  top: 10px;
  left: 10px;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; // 丸形にする
  background-color: white; // 背景色を白に
  color: #007bff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // チェックマークにも影を追加

  // アニメーションの定義
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
`;

const Icon = styled.div`
  margin-bottom: 8px;
  font-size: ${(props) =>
    props.fontSize || "40px"}; // デフォルトのフォントサイズは24px
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Chip = ({ icon, label, checked, onChange, fontSize }) => {
  return (
    <ChipContainer
      checked={checked}
      onClick={onChange}
      whileTap={{ scale: 0.95 }}
    >
      {checked && (
        <CheckMark
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <FaCheck />
        </CheckMark>
      )}
      <Icon fontSize={fontSize}>
        <InlineMath math={icon} />
      </Icon>
      <Label>{label}</Label>
    </ChipContainer>
  );
};

export default Chip;
