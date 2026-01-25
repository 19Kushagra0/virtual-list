"use client";

import { useRef } from "react";

const row_height = 40;
const container_height = 400;
const total_rows = 50000;

export default function Home() {
  // typescript saftey check
  // scrollRef could be a element or null
  // pointing to element
  const scrollRef = useRef<HTMLDivElement | null>(null);

  //  saving scroll number
  const scrollTopRef = useRef(0);

  // typescript saftey check
  // scrollRef is not null here
  const handleScroll = () => {
    if (scrollRef.current === null) {
      return;
    }
    // scrollTop telling as at what number we scrolled
    scrollTopRef.current = scrollRef.current.scrollTop;
    console.log(scrollTopRef.current);
  };

  return (
    <div
      // You don’t need ref to listen to onScroll,
      // and you don’t need ref to get scrollTop if
      //  you use the event — but you do need ref if
      //  you want persistent access to the scrollable
      // element

      // scrollRef is in element now
      ref={scrollRef}
      // event listener tell us when we scoll
      onScroll={handleScroll}
      className=" w-full overflow-auto bg-red-500"
      style={{ height: container_height }}
    >
      {/* FAKE SCROLL */}
      <div
        className="w-full bg-blue-400"
        style={{ height: row_height * total_rows }}
      ></div>
    </div>
  );
}
