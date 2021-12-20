import { useEffect } from "react";
export default function StringLight() {
  useEffect(() => {
    document.title = "String Lihgts - The Light Artsy"
  }, [])
  return (<div>StringLight</div>)
} 