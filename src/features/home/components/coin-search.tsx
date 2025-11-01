import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { SearchButton } from "./search-button";

export const CoinSearch = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <SearchButton onClick={() => setOpen(true)} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search coin" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Cryptoassets">
            <CommandItem className="flex justify-between">
              <span>BTC</span>
              <span>$2,187,132,681,658</span>
              <span>$109,666.71</span>
            </CommandItem>
            <CommandItem className="flex justify-between">
              <span>ETH</span>
              <span>$463,919,783,223</span>
              <span>$3,843.43</span>
            </CommandItem>
            <CommandItem className="flex justify-between">
              <span>Tether</span>
              <span>$183,369,601,516</span>
              <span>$0.9995</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
