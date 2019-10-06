import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        key="abc"
        type="text/javascript"
        src="src/assets/js/mobileMenu.js"
      />,
  ]);
}