import React, { useId, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";

export type StarRatingProps = {
  max?: number;
  value?: number; // 0..max, can be .5 increments if allowHalf=true
  size?: number;
  readOnly?: boolean;
  allowHalf?: boolean;
  className?: string;
  onChange?: (nextValue: number) => void;
  onHoverChange?: (hoverValue: number | null) => void;
  ariaLabel?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function roundToStep(value: number, step: number) {
  const inv = 1 / step;
  return Math.round(value * inv) / inv;
}

export default function StarRating({
  max = 5,
  value = 0,
  size = 22,
  readOnly = false,
  allowHalf = true,
  className,
  onChange,
  onHoverChange,
  ariaLabel = "Rating"
}: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const uid = useId();

  const step = allowHalf ? 0.5 : 1;
  const safeValue = useMemo(() => clamp(value, 0, max), [value, max]);
  const displayValue = hoverValue !== null ? hoverValue : safeValue;

  const notifyHover = (next: number | null) => {
    setHoverValue(next);
    onHoverChange?.(next);
  };

  const getPartialPercent = (starIndex: number) => {
    // starIndex: 0-based. Star covers (starIndex .. starIndex+1]
    const starStart = starIndex;
    const starEnd = starIndex + 1;

    if (displayValue >= starEnd) return 100;
    if (displayValue <= starStart) return 0;

    const within = displayValue - starStart; // (0..1)
    if (!allowHalf) return within >= 1 ? 100 : 0;

    // snap to half
    const snapped = within >= 0.5 ? 0.5 : 0;
    return snapped === 0.5 ? 50 : 0;
  };

  const computeValueFromPointer = (starIndex: number, clientX: number, rect: DOMRect) => {
    const x = clamp(clientX - rect.left, 0, rect.width);
    const percent = rect.width > 0 ? x / rect.width : 1;

    const raw = starIndex + (allowHalf && percent < 0.5 ? 0.5 : 1);
    return clamp(raw, 0, max);
  };

  const commit = (next: number) => {
    if (readOnly) return;
    const rounded = clamp(roundToStep(next, step), 0, max);
    onChange?.(rounded);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (readOnly) return;

    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      commit(safeValue + step);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      commit(safeValue - step);
    }
    if (e.key === "Home") {
      e.preventDefault();
      commit(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      commit(max);
    }
    if (e.key === "Enter" || e.key === " ") {
      // keep standard behavior: do nothing special; value already set with arrows/click
      e.preventDefault();
    }
  };

  return (
    <div
      className={className ? `star-rating ${className}` : "star-rating"}
      role="slider"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={safeValue}
      tabIndex={readOnly ? -1 : 0}
      onKeyDown={handleKeyDown}
      style={{ display: "inline-flex", gap: 6, alignItems: "center" }}
    >
      {Array.from({ length: max }).map((_, i) => {
        const fill = getPartialPercent(i);
        const gradId = `${uid}-star-${i}-${fill}`;

        return (
          <button
            key={i}
            type="button"
            disabled={readOnly}
            aria-label={`${i + 1} star`}
            onMouseLeave={() => notifyHover(null)}
            onMouseMove={(e) => {
              if (readOnly) return;
              const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
              const next = computeValueFromPointer(i, e.clientX, rect);
              notifyHover(next);
            }}
            onClick={(e) => {
              if (readOnly) return;
              const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
              const next = computeValueFromPointer(i, e.clientX, rect);
              commit(next);
            }}
            style={{
              all: "unset",
              cursor: readOnly ? "default" : "pointer",
              width: size,
              height: size,
              display: "grid",
              placeItems: "center"
            }}
          >
            {/* SVG gradient clip for partial fill */}
            <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
                  <stop offset={`${fill}%`} stopColor="#FFC107" />
                  <stop offset={`${fill}%`} stopColor="#E0E0E0" />
                </linearGradient>
              </defs>
              <foreignObject x="0" y="0" width="24" height="24">
                <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
                  <FaStar size={size} color={`url(#${gradId})` as unknown as string} />
                </div>
              </foreignObject>
            </svg>

            {/* Fallback if foreignObject is blocked */}
            <span style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
              {fill >= 100 ? "★" : fill >= 50 ? "½★" : "☆"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
