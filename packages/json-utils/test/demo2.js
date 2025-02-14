function hasProperties(targetProperties) {
  let hasProperties = false;
  if (targetProperties !== undefined && targetProperties !== null) {
    // targetProperties 等于""、0、false时均认为是存在的属性
    hasProperties = true;
  }
  return hasProperties;
}

const testObj = { k2: 123 };

console.log(
  hasProperties(testObj.k1),
  hasProperties(testObj.k2),
  testObj.k1 !== undefined,
  testObj.k2 !== undefined,
);
