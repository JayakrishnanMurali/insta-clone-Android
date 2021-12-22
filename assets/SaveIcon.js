import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SaveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    width={30}
    height={30}
  >
    <Path
      fill="#FFF"
      d="M16 2H8a3 3 0 0 0-3 3v16a1 1 0 0 0 .5.87 1 1 0 0 0 1 0l5.5-3.18 5.5 3.18a1 1 0 0 0 .5.13 1 1 0 0 0 .5-.13A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3Zm1 17.27-4.5-2.6a1 1 0 0 0-1 0L7 19.27V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z"
    />
  </Svg>
);

export default SaveIcon;
