import styled from "styled-components";
import { NAMESPACE, THEME_PROPERTIES } from "./constants";

// helpers
import { themePropertyGetter } from "../../helpers";

const getThemeProperty = themePropertyGetter(NAMESPACE);

export default styled.section`
  background-color: ${getThemeProperty(THEME_PROPERTIES.BACKGROUND_COLOR)}};
  color: ${getThemeProperty(THEME_PROPERTIES.COLOR)}};
  text-align: ${getThemeProperty(THEME_PROPERTIES.TEXT_ALIGN)}};
`;
