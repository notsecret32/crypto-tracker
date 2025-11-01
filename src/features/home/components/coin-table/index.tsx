import { DataTable } from "@/components/ui/data-table";

import { columns, data } from "./columns";

export const CoinTable = () => {
  return <DataTable columns={columns} data={data} />;
};
