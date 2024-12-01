import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import TextInput from "@/components/ui/Input/TextInput";
import CustomerCard from "@/components/shared/CustomerCard/CustomerCard";

import { useDebounce } from "@/hooks/useDebounce";

import { customersThunk } from "@/store/thunks/customers.thunk";

const Customers = () => {
  const dispatch = useAppDispatch();

  const isInitialMount = useRef(true);

  const [inputValue, setInputValue] = useState("");

  const { data, isLoading } = useAppSelector(
    (state) => state.customers.customersList,
  );

  const searchValue = useDebounce(inputValue);

  useEffect(() => {
    const promise = dispatch(customersThunk.getAll());
    return () => {
      promise.abort();
    };
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(
        customersThunk.filter({
          search: searchValue || undefined,
        }),
      );
    }
  }, [searchValue]);

  return (
    <div className="space-y-3">
      <TextInput
        icon={<Search />}
        placeholder="Search..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <div className="space-y-2">
        {isLoading
          ? Array.from({ length: 10 }).map((__, index) => (
              <div
                key={index}
                className="h-[76px] w-full animate-pulse rounded-xl bg-lightGray"
              />
            ))
          : data.map((customer) => (
              <CustomerCard key={customer.id} customer={customer} />
            ))}
      </div>
    </div>
  );
};

export default Customers;
