import { homeStatisticBlocks } from "./home.config";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {homeStatisticBlocks.map((el, index) => (
        <div key={index} className="rounded-xl bg-white p-[10px]">
          <div className="flex items-center gap-[13px]">
            <div
              style={{ backgroundColor: el.iconBackgroundColor }}
              className="rounded-lg p-[6px]"
            >
              {el.icon}
            </div>

            <p className="text-[35px] font-medium text-black">{el.amount}</p>
          </div>

          <p className="mt-11 text-sm font-medium">{el.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
