import { Spinner } from "@/components/ui/spinner";
import { useGetMarketQuery } from "@/features/home/api";
import { HomeHeader } from "@/features/home/components/header";
import { CoinTable } from "@/features/home/components/coin-table";

export const HomePage = () => {
  const { data, isFetching } = useGetMarketQuery({ currency: "usd" });

  return (
    <div>
      <HomeHeader />
      <div className="px-4 pt-4">
        {isFetching || !data ? <Spinner /> : <CoinTable data={data} />}
      </div>
    </div>
  );
};
