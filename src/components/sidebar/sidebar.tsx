'use client';

import { useEffect, useState } from 'react';

const MAX_WIDTH = 450;
const MIN_WIDTH = 100;

const Sidebar = () => {
  const [width, setWidth] = useState(300);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';

      const newWidth = Math.max(Math.min(e.clientX, MAX_WIDTH), MIN_WIDTH);

      setWidth(newWidth + 5); // + 5 компенсирует ширину border
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <aside
      style={{ width }}
      className="relative h-screen shrink-0 overflow-auto pt-2.5 pb-2.5 text-nowrap"
    >
      <div className="pl-3.5">Будущий sidebar</div>

      <div
        onMouseDown={() => setIsDragging(true)}
        className="absolute top-0 right-0 h-full w-1.5 cursor-col-resize border-r transition-colors hover:bg-black/10 active:bg-black/30"
      />
    </aside>
  );
};

export default Sidebar;
