import { Search as LucideSearch } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

interface SearchProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SearchButton = ({ onClick }: SearchProps) => {
  return (
    <Button
      className="p-2 w-64 flex justify-start items-center cursor-pointer"
      variant="outline"
      onClick={onClick}
    >
      <LucideSearch className="text-muted-foreground" />
      <p className="text-muted-foreground">Search</p>
      <Kbd className="ml-auto">/</Kbd>
    </Button>
  );
};
