import { useEffect, useRef } from "react";

export default function AdSense({ slot, style = { display: "block" }, className = "" }) {
  const insRef = useRef(null);

  useEffect(() => {
    if (window.adsbygoogle && insRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {}
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-5188962898989280"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={insRef}
    />
  );
}