"use client";
import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      setVisible(scrollTop > 200); // Show after scrolling down 200px
      setAtBottom(windowHeight + scrollTop >= fullHeight - 10); // Detect if near bottom
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={atBottom ? scrollToTop : scrollToBottom}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          title={atBottom ? "Scroll to top" : "Scroll to bottom"}
        >
          {atBottom ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      )}
    </>
  );
}
