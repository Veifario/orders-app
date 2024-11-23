import { Search } from "lucide-react";

import ClientCard from "@/components/shared/ClientCard/ClientCard";
import TextInput from "@/components/ui/Input/TextInput";

const Clients = () => {
  return (
    <div className="space-y-3">
      <TextInput icon={<Search />} placeholder="Search..." />

      <div className="space-y-2">
        {Array.from({ length: 50 }).map((__, index) => (
          <ClientCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
