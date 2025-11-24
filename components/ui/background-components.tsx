"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

interface BackgroundComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Component = ({
  className,
  children,
  ...props
}: BackgroundComponentProps) => {
  const [count, setCount] = useState(0);

  return (
    <div
      className={cn(
        "min-h-screen w-full relative overflow-hidden bg-white",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        radial-gradient(circle at center,rgb(174, 192, 201) 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />
      <div className="relative z-10 space-y-4">
        {children}
        <div className="flex items-center gap-3 text-sm text-slate-600">
          {/* <span>Glow intensity clicks:</span>
          <button
            type="button"
            onClick={() => setCount((prev) => prev + 1)}
            className="rounded-full border border-yellow-300 px-4 py-1 text-slate-900 transition hover:bg-yellow-200/60"
          >
            {count}
          </button> */}
        </div>
      </div>
    </div>
  );
};

