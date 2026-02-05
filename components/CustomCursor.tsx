import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a') || target.closest('button') || target.getAttribute('role') === 'button';
      setIsHovering(!!isHoverable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    addEventListeners();
    return removeEventListeners;
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isClicking ? 0.8 : 1})`,
        }}
      />
      {/* Following Ring */}
      <div
        className={`fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out ${
          isHovering ? 'w-16 h-16 bg-white/20' : 'w-10 h-10'
        }`}
        style={{
          transform: `translate(${position.x - (isHovering ? 32 : 20)}px, ${position.y - (isHovering ? 32 : 20)}px)`,
          opacity: isHovering ? 0.8 : 0.5,
        }}
      />
    </>
  );
};