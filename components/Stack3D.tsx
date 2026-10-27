"use client";

import { useState } from "react";
import { layers } from "@/lib/content";

const SPREAD = 70; // px between plates
const ACCENT = "#c8f05a";

function PlateInner({ index }: { index: number }) {
  // Small abstract UI hints drawn on each plate
  if (index === 0)
    return (
      <span className="flex w-full flex-col gap-2">
        <span className="h-3.5 rounded-full border border-[#2e3948]" />
        <span className="h-3.5 rounded-full border border-[#2e3948]" />
        <span className="h-3.5 w-[70%] rounded-full border border-[#2e3948]" />
      </span>
    );
  if (index === 1)
    return (
      <span className="font-mono text-[12px] leading-[1.7] text-dim">
        POST /webhooks/whatsapp
        <br />
        GET /search?hs=85
        <br />
        POST /ingest
      </span>
    );
  if (index === 2)
    return (
      <span className="flex w-full gap-2">
        <span className="h-[54px] flex-[2] rounded-[10px] border border-[#2e3948]" />
        <span className="h-[54px] flex-1 rounded-[10px] border border-[#2e3948]" />
      </span>
    );
  return (
    <span className="grid w-full grid-cols-3 gap-2">
      <span className="aspect-[3/4] rounded-lg border border-[#2e3948]" />
      <span className="aspect-[3/4] rounded-lg border border-[#2e3948]" />
      <span className="aspect-[3/4] rounded-lg border border-[#2e3948]" />
    </span>
  );
}

export default function Stack3D() {
  const [active, setActive] = useState(1);
  const cur = layers[active];

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="stack-stage relative flex h-[340px] w-full max-w-[520px] items-end justify-center pb-6 [--spread:44px] sm:h-[470px] sm:items-center sm:pb-0 sm:[--spread:70px]">
        <div className="stack-bob h-[200px] w-[200px] sm:h-[290px] sm:w-[290px]">
          <div className="stack-iso relative h-full w-full">
            {layers.map((layer, i) => {
              const on = i === active;
              return (
                <button
                  key={layer.short}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${layer.short} layer`}
                  className="plate absolute inset-0 flex cursor-pointer flex-col justify-between rounded-[22px] p-4 text-left text-fg sm:p-[22px]"
                  style={{
                    transform: `translateZ(calc(var(--spread, ${SPREAD}px) * ${i} + ${on ? 30 : 0}px))`,
                    border: `1.5px solid ${on ? ACCENT : "#2a3341"}`,
                    background: on ? "rgba(22,28,20,0.94)" : "rgba(17,21,28,0.88)",
                    boxShadow: "0 30px 60px rgba(0,0,0,.45)",
                  }}
                >
                  <span
                    className="font-mono text-[12px] sm:text-[13px]"
                    style={{ color: on ? ACCENT : "#8e99a8" }}
                  >
                    0{4 - i} / {layer.short.toUpperCase()}
                  </span>
                  <PlateInner index={i} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[520px] flex-col gap-3.5 rounded-[18px] border border-line bg-surface p-5">
        <div role="group" aria-label="Pick a layer of the stack" className="flex flex-wrap gap-2">
          {[3, 2, 1, 0].map((i) => {
            const on = i === active;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`min-h-9 cursor-pointer rounded-full border px-3 py-2 font-mono text-[12px] transition ${
                  on
                    ? "border-accent bg-accent text-ground"
                    : "border-line2 bg-transparent text-fg hover:border-[#3a4656]"
                }`}
              >
                {layers[i].short}
              </button>
            );
          })}
        </div>
        <p className="font-heading text-xl font-semibold">{cur.title}</p>
        <p className="text-sm leading-relaxed text-muted">{cur.body}</p>
        <p className="font-mono text-[12px] text-accent">{cur.chips}</p>
      </div>
    </div>
  );
}
