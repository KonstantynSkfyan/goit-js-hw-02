function getElementWidth(content, padding, border) {
  const number_content = Number.parseFloat(content);
  const number_padding = Number.parseFloat(padding);
  const number_border = Number.parseFloat(border);
  return number_content + number_padding * 2 + number_border * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
