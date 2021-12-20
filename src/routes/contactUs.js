import { useEffect } from 'react';
export default function ContactUs() {
  useEffect(() => {
    document.title = "Contact US - The Light Artsy"
  }, [])
  return (<div>ContactUs</div>)
}