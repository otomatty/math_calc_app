function generateInteger() {
  return Math.floor(Math.random() * 100) + 1; // 1から100までの整数
}

function generateFraction() {
  const numerator = Math.floor(Math.random() * 9) + 1; // 分子（1から9）
  const denominator = Math.floor(Math.random() * 9) + 1; // 分母（1から9）
  return `${numerator}/${denominator}`; // 文字列として分数を返す
}

function generateDecimal() {
  return (Math.random() * 10).toFixed(1); // 0.1から10.00までの少数
}

function generateRandomNumber(selectedFormats) {
  const format =
    selectedFormats[Math.floor(Math.random() * selectedFormats.length)];
  switch (format) {
    case "整数":
      return generateInteger();
    case "分数":
      return generateFraction();
    case "少数":
      return generateDecimal();
    default:
      return generateInteger(); // デフォルトは整数を返す
  }
}

function generateProblem(type, selectedFormats, terms) {
  let problem = "";
  let numbers = [];

  for (let i = 0; i < terms; i++) {
    numbers.push(generateRandomNumber(selectedFormats));
  }

  // 問題の種類に応じた演算子で数値を結合
  switch (type) {
    case "加法":
      problem = numbers.join(" + ");
      break;
    case "減法":
      problem = numbers.join(" - ");
      break;
    case "乗法":
      problem = numbers.join(" × ");
      break;
    case "除法":
      problem = numbers.join(" ÷ ");
      break;
    default:
      problem = "不明な問題タイプ";
  }

  return problem + " = ?";
}

function generateProblems(type, selectedFormats, terms, count) {
  const problems = [];
  for (let i = 0; i < count; i++) {
    const problem = generateProblem(type, selectedFormats, terms);
    problems.push(problem);
  }
  return problems;
}
export { generateProblems };
