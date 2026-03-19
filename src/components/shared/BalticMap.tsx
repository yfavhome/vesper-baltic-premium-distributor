import { useState } from "react";
import { motion } from "framer-motion";

interface MapPoint {
  id: string;
  name: string;
  type: "hq" | "warehouse" | "partner";
  desc: string;
  x: number; // % from left
  y: number; // % from top
}

const points: MapPoint[] = [
  // Latvia
  { id: "riga", name: "Rīga", type: "hq", desc: "Headquarters & Main Warehouse", x: 52, y: 42 },
  { id: "tiraine", name: "Tīraine", type: "warehouse", desc: "Showroom & Distribution Center", x: 49, y: 44 },
  { id: "liepaja", name: "Liepāja", type: "partner", desc: "Western Latvia Distribution", x: 32, y: 50 },
  { id: "daugavpils", name: "Daugavpils", type: "partner", desc: "Eastern Latvia Coverage", x: 65, y: 52 },
  // Lithuania
  { id: "vilnius", name: "Vilnius", type: "partner", desc: "Lithuania HQ Partner", x: 57, y: 72 },
  { id: "kaunas", name: "Kaunas", type: "partner", desc: "Central Lithuania Distribution", x: 48, y: 70 },
  { id: "klaipeda", name: "Klaipėda", type: "partner", desc: "Western Lithuania Port Access", x: 33, y: 66 },
  // Estonia
  { id: "tallinn", name: "Tallinn", type: "partner", desc: "Estonia Distribution Partner", x: 52, y: 14 },
  { id: "tartu", name: "Tartu", type: "partner", desc: "Southern Estonia Coverage", x: 62, y: 22 },
];

const typeColors = {
  hq: "bg-primary",
  warehouse: "bg-primary/70",
  partner: "bg-foreground",
};

const typeLabels = {
  hq: "Headquarters",
  warehouse: "Warehouse & Showroom",
  partner: "Distribution Partner",
};

const BalticMap = () => {
  const [activePoint, setActivePoint] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Map SVG — simplified Baltic region */}
      <svg
        viewBox="0 0 500 450"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Water background */}
        <rect width="500" height="450" fill="hsl(var(--secondary))" rx="4" />

        {/* Baltic Sea */}
        <path
          d="M0 0 L200 0 L200 30 L180 50 L160 40 L140 55 L120 45 L100 60 L80 50 L60 65 L40 55 L20 70 L0 60 Z"
          fill="hsl(var(--background))"
          opacity="0.5"
        />

        {/* Estonia */}
        <motion.path
          d="M220 20 L350 15 L360 30 L370 50 L355 70 L340 85 L310 90 L280 95 L250 85 L230 75 L215 55 L220 35 Z"
          fill={hoveredCountry === "estonia" ? "hsl(var(--primary) / 0.15)" : "hsl(var(--background))"}
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="1.5"
          className="cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setHoveredCountry("estonia")}
          onMouseLeave={() => setHoveredCountry(null)}
          whileHover={{ scale: 1.01 }}
        />
        <text x="295" y="55" className="fill-muted-foreground text-[11px] font-body font-semibold uppercase tracking-wider pointer-events-none" textAnchor="middle">Estonia</text>

        {/* Latvia */}
        <motion.path
          d="M130 130 L215 110 L250 115 L310 120 L360 125 L370 145 L365 175 L350 200 L330 215 L290 225 L250 230 L210 225 L175 220 L145 210 L125 195 L115 170 L120 150 Z"
          fill={hoveredCountry === "latvia" ? "hsl(var(--primary) / 0.15)" : "hsl(var(--background))"}
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="1.5"
          className="cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setHoveredCountry("latvia")}
          onMouseLeave={() => setHoveredCountry(null)}
          whileHover={{ scale: 1.01 }}
        />
        <text x="250" y="175" className="fill-muted-foreground text-[11px] font-body font-semibold uppercase tracking-wider pointer-events-none" textAnchor="middle">Latvia</text>

        {/* Lithuania */}
        <motion.path
          d="M120 260 L175 245 L230 250 L290 255 L340 260 L350 280 L345 310 L335 340 L310 365 L275 375 L240 380 L200 375 L165 365 L140 345 L125 320 L115 290 Z"
          fill={hoveredCountry === "lithuania" ? "hsl(var(--primary) / 0.15)" : "hsl(var(--background))"}
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="1.5"
          className="cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setHoveredCountry("lithuania")}
          onMouseLeave={() => setHoveredCountry(null)}
          whileHover={{ scale: 1.01 }}
        />
        <text x="240" y="320" className="fill-muted-foreground text-[11px] font-body font-semibold uppercase tracking-wider pointer-events-none" textAnchor="middle">Lithuania</text>

        {/* Connection lines from HQ */}
        {points.filter(p => p.type !== "hq").map((point) => (
          <line
            key={`line-${point.id}`}
            x1={points[0].x * 5}
            y1={points[0].y * 4.5 - 10}
            x2={point.x * 5}
            y2={point.y * 4.5 - 10}
            stroke="hsl(var(--primary) / 0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Points */}
        {points.map((point) => {
          const cx = point.x * 5;
          const cy = point.y * 4.5 - 10;
          const isActive = activePoint === point.id;

          return (
            <g key={point.id}>
              {/* Pulse ring for HQ */}
              {point.type === "hq" && (
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={12}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  animate={{ r: [8, 16, 8], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              {/* Point */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={point.type === "hq" ? 7 : 5}
                fill={point.type === "hq" ? "hsl(var(--primary))" : point.type === "warehouse" ? "hsl(var(--primary) / 0.7)" : "hsl(var(--foreground))"}
                stroke="hsl(var(--background))"
                strokeWidth="2"
                className="cursor-pointer"
                whileHover={{ scale: 1.5 }}
                onMouseEnter={() => setActivePoint(point.id)}
                onMouseLeave={() => setActivePoint(null)}
                onClick={() => setActivePoint(isActive ? null : point.id)}
              />

              {/* Label */}
              {isActive && (
                <motion.g
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <rect
                    x={cx - 75}
                    y={cy - 55}
                    width="150"
                    height="42"
                    rx="3"
                    fill="hsl(var(--foreground))"
                    opacity="0.95"
                  />
                  <text x={cx} y={cy - 38} textAnchor="middle" className="fill-background text-[11px] font-body font-semibold">
                    {point.name}
                  </text>
                  <text x={cx} y={cy - 22} textAnchor="middle" className="fill-background/70 text-[9px] font-body">
                    {point.desc}
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {(["hq", "warehouse", "partner"] as const).map((type) => (
          <div key={type} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${typeColors[type]}`} />
            <span className="text-xs text-muted-foreground font-body">{typeLabels[type]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalticMap;
