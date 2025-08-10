function getElementWidth(content, padding, border){
    const boxSizing = Number.parseFloat(padding) * 2;
    const borderBox = Number.parseFloat(border) * 2;
    const contentBox = Number.parseFloat(content);
    return boxSizing + borderBox + contentBox;

}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200