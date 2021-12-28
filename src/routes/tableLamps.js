import { useEffect } from "react";
import TableLamps from "../TableLamps";
export default function TableLampsRoute() {
  useEffect(() => {
    document.title = "Table Lamps - The Light Artsy";
  }, []);
  return (
    <div>
      <TableLamps />
    </div>
  );
}
