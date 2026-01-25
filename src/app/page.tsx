"use client";

const row_height = 40;
const container_height = 400;
const total_rows = 50000;

export default function Home() {
  return (
    <div
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
