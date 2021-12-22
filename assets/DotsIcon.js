import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DotsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    width={25}
    height={25}
  >
    <Path
      fill="#FFF"
      d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm-7 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm14 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
    />
  </Svg>
);

export default DotsIcon;
