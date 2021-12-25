import DecorativeLights from '../DecorativeLights';
import { useEffect } from 'react'
export default function DecorativeLightsRoute() {
  useEffect(() => {
    document.title = "Decorative Lights - The Light Artsy"
  }, [])

  return (
    <div>
      <DecorativeLights />
    </div>)
} 