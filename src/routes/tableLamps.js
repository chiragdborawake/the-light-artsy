import { useEffect } from "react";
export default function TableLamps() {
  useEffect(() => {
    document.title = "Table Lamps - The Light Artsy";
  }, []);
  return <div>TableLamps</div>;
}
