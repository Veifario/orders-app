import { useEffect } from "react";
import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import ClientCard from "@/components/shared/ClientCard/ClientCard";
import TextInput from "@/components/ui/Input/TextInput";

import { customersThunk } from "@/store/thunks/customers.thunk";

const Customers = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading } = useAppSelector(
    (state) => state.customers.customersList,
  );

  useEffect(() => {
    const promise = dispatch(customersThunk.getAll());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <div className="space-y-3">
      <TextInput icon={<Search />} placeholder="Search..." />

      <div className="space-y-2">
        {isLoading
          ? Array.from({ length: 10 }).map((__, index) => (
              <div
                key={index}
                className="h-[76px] w-full animate-pulse rounded-xl bg-lightGray"
              />
            ))
          : data.map((__, index) => <ClientCard key={index} />)}
      </div>
    </div>
  );
};

export default Customers;
