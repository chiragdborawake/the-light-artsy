import { useEffect } from "react";
import StringLights from "../StringLights";
export default function StringLightRoute() {
  useEffect(() => {
    document.title = "String Lihgts - The Light Artsy";
  }, []);
  return (
    <div>
      <StringLights />
    </div>
  );
}
