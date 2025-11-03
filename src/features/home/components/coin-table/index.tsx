import type { Coin } from "@/features/home/types/api";
import { DataTable } from "@/components/ui/data-table";

import { columns } from "./columns";

interface CoinTableProps {
  data: Coin[];
}

export const CoinTable = ({ data }: CoinTableProps) => {
  return <DataTable columns={columns} data={data} />;
};
