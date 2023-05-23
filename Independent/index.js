import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./independent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//root is how react mounts on the website, root is where we are telling react to add app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
//follow this pattern when starting a new project
