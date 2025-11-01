import { CoinTable } from "@/features/home/components/coin-table";
import { HomeHeader } from "@/features/home/components/header";

export const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <div className="px-4 pt-4">
        <CoinTable />
      </div>
    </div>
  );
};
