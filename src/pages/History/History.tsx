import TextInput from "@/components/ui/Input/TextInput";
import { Search, TextSearch } from "lucide-react";

const History = () => {
  return (
    <div className="space-y-2">
      <div className="flex w-full gap-2">
        <div className="w-full">
          <TextInput icon={<Search />} placeholder="Search..." />
        </div>

        <div className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-white">
          <TextSearch size={27} />
        </div>
      </div>
    </div>
  );
};

export default History;
