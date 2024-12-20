import { cn } from "@/lib/utils";

interface BorderBeamProps {
  children: React.ReactNode;
}

export const BorderBeam = ({ children }: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": 100,
          "--duration": 15,
          "--anchor": 90,
          "--border-width": 1.5,
          "--color-from": "#ffaa40",
          "--color-to": "#9c40ff",
          "--delay": `-0s`,
        } as React.CSSProperties
      }
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className={cn(
        "absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // pseudo styles
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
      )}
    >
      {children}
    </div>
  );
};
