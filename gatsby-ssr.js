import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        key="abc"
        type="text/javascript"
        src="src/static/mobileMenu.js"
      />,
      <script
        key={`body`}
        type="text/javascript"
        src="src/static/fieldToggle.js"
      />,
  ]);
}