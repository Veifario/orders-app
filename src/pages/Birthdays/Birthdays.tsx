// import { mainInstance } from "@/services/config";
import { useEffect, useState } from "react";

const Birthdays = () => {
  const [data] = useState([{ name: "Alisher" }, { name: "Test user" }]);

  useEffect(() => {
    // mainInstance.get("/users/today-birthday").then((res) => setData(res.data));
  }, []);

  return (
    <div className="space-y-3">
      {data.map((el) => (
        <div className="rounded-xl bg-white px-3 py-4">
          Bugun {el.name} tug'ilgan kuni
        </div>
      ))}
    </div>
  );
};

export default Birthdays;
