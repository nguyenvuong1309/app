import { Search } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search by Address"
          className="pl-4 pr-4 py-2 w-full rounded-lg border-teal-600"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Button
        className="bg-teal-600 hover:bg-teal-700 rounded-lg p-2"
        size="icon"
      >
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
}
