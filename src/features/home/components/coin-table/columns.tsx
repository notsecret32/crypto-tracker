import { Star } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import type { Coin } from "@/features/home/types/api";
import { formatPercent, formatPrice } from "@/features/home/utils/formatters";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<Coin>[] = [
  {
    id: "like",
    size: 50,
    cell: () => <Star className="cursor-pointer size-3" />,
  },
  {
    id: "position",
    size: 50,
    header: () => <Header text="#" textAlign="start" />,
    cell: ({ row }) => <p>{row.index + 1}</p>,
  },
  {
    accessorKey: "name",
    size: 250,
    header: () => <Header text="Name" textAlign="start" />,
    cell: ({ row }) => (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" src={row.original.image} alt="BTC Logo" />
          <p className="text-sm leading-6 font-bold">{row.original.name}</p>
          <p className="uppercase leading-6 font-light text-muted-foreground mt-1">
            {row.original.symbol}
          </p>
        </div>
        <Button variant="outline">Buy</Button>
      </div>
    ),
  },
  {
    accessorKey: "currentPrice",
    header: () => <Header text="Price" textAlign="end" />,
    cell: ({ cell }) => (
      <div className="text-end">
        <p>{formatPrice(cell.row.original.currentPrice)}</p>
      </div>
    ),
  },
  {
    accessorKey: "priceChanged24h",
    size: 84,
    header: () => <Header text="1h %" textAlign="end" />,
    cell: ({ cell }) => <Percent percent={cell.row.original.priceChanged24h} />,
  },

  {
    accessorKey: "marketCap",
    header: () => <Header text="Market Cap" textAlign="end" />,
    size: 200,
    cell: ({ cell }) => (
      <div className="text-end">
        <p>{formatPrice(cell.row.original.marketCap)}</p>
      </div>
    ),
  },
];

interface HeaderProps {
  text: string;
  textAlign?: "start" | "center" | "end";
}

const Header = ({ text, textAlign = "center" }: HeaderProps) => {
  return (
    <div
      className={cn({
        ["text-start"]: textAlign === "start",
        ["text-center"]: textAlign === "center",
        ["text-end"]: textAlign === "end",
      })}
    >
      <p>{text}</p>
    </div>
  );
};

interface PercentProps {
  percent: number;
}

const Percent = ({ percent }: PercentProps) => {
  const { result, className, Icon } = formatPercent(percent);

  return (
    <div className="flex justify-end items-center gap-0.5">
      <Icon className={cn("mt-0.5", className)} size={16} />
      <p className={className}>{result}</p>
    </div>
  );
};
