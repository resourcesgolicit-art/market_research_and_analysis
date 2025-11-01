import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="339805187243-9t0plitdv7ifa41qq7r164v4hcpbtjt6.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
