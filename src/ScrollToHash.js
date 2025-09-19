// ScrollToHash.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // scroll to the element with the given id
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // no hash → scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
