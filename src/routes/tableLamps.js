import { useEffect } from "react";
import TableLamp from "../TableLamps";
export default function TableLamps() {
  useEffect(() => {
    document.title = "Table Lamps - The Light Artsy";
  }, []);
  return (
    <div>
      <TableLamp />
    </div>
  );
}
