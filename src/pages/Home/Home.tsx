import { useEffect } from "react";

import { homeStatisticBlocks } from "./home.config";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { userThunk } from "@/store/thunks/user.thunk";
import { ordersThunk } from "@/store/thunks/orders.thunk";

const Home = () => {
  const dispatch = useAppDispatch();

  const { data: statsList, isLoading } = useAppSelector(
    (state) => state.orders.stats,
  );

  useEffect(() => {
    const promise = dispatch(userThunk.getUserInfo());
    const statPromise = dispatch(ordersThunk.getStats());
    return () => {
      promise.abort();
      statPromise.abort();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2">
      {isLoading
        ? Array.from({ length: 5 }).map((__, index) => (
            <div
              key={index}
              className="h-[126.5px] animate-pulse rounded-xl bg-lightGray"
            />
          ))
        : statsList.map((el) => (
            <div
              key={el.id}
              className="flex flex-col justify-between rounded-xl bg-white p-[10px] pt-0"
            >
              <div className="flex items-center gap-[13px]">
                <div
                  style={{
                    backgroundColor: homeStatisticBlocks.find(
                      (block) => block.title === el.name,
                    )?.iconBackgroundColor,
                  }}
                  className="rounded-lg p-[6px]"
                >
                  {
                    homeStatisticBlocks.find((block) => block.title === el.name)
                      ?.icon
                  }
                </div>

                <p className="text-[35px] font-medium text-black">
                  {el.orders_count}
                </p>
              </div>

              <p className="mt-11 text-sm font-medium">{el.name}</p>
            </div>
          ))}
    </div>
  );
};

export default Home;
