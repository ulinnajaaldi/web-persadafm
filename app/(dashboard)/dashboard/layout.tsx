import React from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pt-10">{children}</div>
    </>
  );
}
