import { useEffect } from 'react';
export default function TractOrder() {
  useEffect(() => {
    document.title = "Track Order - The Light Artsy"
  }, [])
  return (<div>Track Order</div>)
}