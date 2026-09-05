import { useRef } from "react";

const MouseFollowingEyes = () => {
  const eyesRef = useRef(null);

  const handleMouseMove = (event) => {
    for (const eye of eyesRef.current.children) {
      const rect = eye.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const scale = distance === 0 ? 0 : Math.min(distance, 20) / distance;

      eye.firstElementChild.style.transform = `translate(${dx * scale}px, ${dy * scale}px)`;
    }
  };

  const resetEyes = () => {
    for (const eye of eyesRef.current.children) {
      eye.firstElementChild.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <div
      className="w-full h-[320px] shrink-0 flex justify-center items-center rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetEyes}
      aria-hidden="true"
    >
      <div ref={eyesRef} className="flex">
        <Eye />
        <Eye />
      </div>
    </div>
  );
};

const Eye = () => (
  <div className="relative bg-white border-4 border-black rounded-full h-24 w-24 shrink-0 flex items-center justify-center overflow-hidden">
    <div className="absolute bg-black rounded-full h-8 w-8 transition-transform duration-150 ease-out motion-reduce:transition-none">
      <div className="w-3 h-3 bg-white rounded-full absolute bottom-1 right-1" />
    </div>
  </div>
);

export { MouseFollowingEyes };
export default MouseFollowingEyes;
