import { ThemeSwitch } from "@/components/theme-switch";

import { CoinSearch } from "./coin-search";

export const HomeHeader = () => {
  return (
    <div className="flex justify-between items-center border-b p-4">
      <h1 className="font-bold text-xl">Crypto Tracker</h1>
      <div className="flex gap-4">
        <CoinSearch />
        <ThemeSwitch />
      </div>
    </div>
  );
};
