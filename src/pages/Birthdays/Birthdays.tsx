import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { birthdaysThunk } from "@/store/thunks/birthdays.thunks";
import { ChevronRight } from "lucide-react";

const Birthdays = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, isLoading } = useAppSelector((state) => state.birthdays.list);

  useEffect(() => {
    dispatch(birthdaysThunk.getAll());
  }, []);

  const handleFilter = (birthday: string) => {
    navigate("/customers", { state: { birthday } });
  };

  return (
    <div className="space-y-3">
      {isLoading
        ? Array.from({ length: 5 }).map((__, index) => (
            <div
              key={index}
              className="h-14 w-full animate-pulse rounded-xl bg-lightGray"
            />
          ))
        : data.map((el) => (
            <div
              className="flex items-center justify-between rounded-xl bg-white px-3 py-4"
              onClick={() => handleFilter(el.birthday)}
            >
              <p>Bugun, {el.full_name} tug'ilgan kuni</p>

              <ChevronRight className="text-desert" />
            </div>
          ))}
    </div>
  );
};

export default Birthdays;
