"use client";;
import React, { useState } from "react";
import { cn } from "../../utils/cn";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 max-md:h-100 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img
  src={card.src}
  alt={card.title}
  className="object-cover absolute inset-0 w-full h-full"
/>
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-4 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
        <div className="flex flex-col">
            <div className="text-lg md:text-xl font-small bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
            </div>
            <div className="text-md md:text-lg font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.role}
            </div>
        </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full max-md:w-[90%] max-md:grid-cols-2">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          title={card.title}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>)
  );
}
