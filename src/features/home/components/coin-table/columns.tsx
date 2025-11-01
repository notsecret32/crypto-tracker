import type { ColumnDef } from "@tanstack/react-table";

import type { Coin } from "@/features/home/types/table";
import { Star } from "lucide-react";

export const columns: ColumnDef<Coin>[] = [
  {
    id: "like",
    cell: () => <Star className="cursor-pointer size-3" />,
  },
  {
    id: "position",
    header: "#",
    cell: ({ row }) => <p>{row.index + 1}</p>,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "priceChange1H",
    header: "1h %",
  },
  {
    accessorKey: "priceChange24H",
    header: "24h %",
  },
  {
    accessorKey: "priceChange7D",
    header: "7d %",
  },
  {
    accessorKey: "marketCap",
    header: "Market Cap",
  },
  {
    accessorKey: "volume",
    header: "Volume (24h)",
  },
];

export const data: Coin[] = [
  {
    name: "BTC",
    price: 109413.39,
    priceChange1H: -0.09,
    priceChange24H: 0.74,
    priceChange7D: -1.24,
    marketCap: 2182149215153,
    volume: 58542115938,
  },
  {
    name: "BTC",
    price: 109413.39,
    priceChange1H: -0.09,
    priceChange24H: 0.74,
    priceChange7D: -1.24,
    marketCap: 2182149215153,
    volume: 58542115938,
  },
  {
    name: "BTC",
    price: 109413.39,
    priceChange1H: -0.09,
    priceChange24H: 0.74,
    priceChange7D: -1.24,
    marketCap: 2182149215153,
    volume: 58542115938,
  },
];
