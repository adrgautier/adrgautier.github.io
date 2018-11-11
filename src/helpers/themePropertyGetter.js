export default namespace => propertyName => props => {
  try {
    const theme = props.theme[namespace];
    try {
      return theme[propertyName];
    } catch (e) {
      console.error("No theme provided for this namespace.");
    }
  } catch (e) {
    console.error("No theme provided.");
  }
  return undefined;
};
