"use client";
import React, { useRef, useState } from "react";

const SCREEN_HEIGHT = 400;
const TOTAL_BOXES = 50000;
const BOX_HEIGHT = 40;

export default function page() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollTopRef = useRef(0);

  // useState currentRow so it value can change on render
  const [currentRow, setCurrentRow] = useState(0);

  const scrollHandler = () => {
    if (!scrollRef.current) {
      return console.log("scrollRef.current === null");
    }
    scrollTopRef.current = scrollRef.current.scrollTop;

    //  currentRow = current pixel(can be number between 50000*40) * box height
    setCurrentRow(Math.floor(scrollTopRef.current / BOX_HEIGHT));
  };

  return (
    <div
      ref={scrollRef}
      onScroll={scrollHandler}
      style={{ height: SCREEN_HEIGHT }}
      className="w-full bg-blue-400 overflow-auto"
    >
      <div
        style={{ height: TOTAL_BOXES * BOX_HEIGHT }}
        className="w-full bg-green-400 relative"
      >
        {/* Single Box */}
        <div
          style={{
            height: BOX_HEIGHT,
            position: "absolute",

            // top = currentRow(out of 50000) * 40
            top: currentRow * BOX_HEIGHT,
          }}
          className="w-full bg-red-400 flex items-center p-4"
        >
          Row {currentRow}
        </div>
      </div>
    </div>
  );
}
