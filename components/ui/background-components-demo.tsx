"use client";

import { Component } from "@/components/ui/background-components";

export default function DemoOne() {
  return (
    <Component className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="text-2xl font-semibold text-slate-800">
          Soft yellow glow background
        </p>
        <p className="text-slate-500">Drop your content here.</p>
      </div>
    </Component>
  );
}

