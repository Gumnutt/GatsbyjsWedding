import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
      <script
        key={`body`}
        type="text/javascript"
        src="src/static/fieldToggle.js"
      />,
  ]);
}