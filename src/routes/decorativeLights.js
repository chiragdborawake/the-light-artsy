import { useEffect } from 'react'
export default function DecorativeLights() {
  useEffect(() => {
    document.title = "Decorative Lights - The Light Artsy"
  }, [])
  return (<div>Decorative Lights</div>)
} 