import { useEffect } from "react";
import { toast } from "sonner";
import { fakeLocations } from "../data/fake-locations";

export const useFakeBill = (interval = 10000) => {
  useEffect(() => {
    const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const timer = setInterval(() => {
      const location = random(fakeLocations);
      const minutesAgo = Math.floor(Math.random() * 59) + 1;
      const avatar = `https://i.pravatar.cc/64?img=${Math.floor(Math.random() * 70) + 1}`;

      toast.custom((t) => (
        <div className="flex items-center gap-3 bg-white border border-gray-200 shadow-lg rounded-xl p-4 min-w-[280px]">
          <img
            src={avatar}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border border-gray-100"
          />
          <div className="flex-1 text-sm text-gray-700 leading-tight">
            <p className="font-medium text-gray-900">Someone recently</p>
            <p>
              bought from{" "}
              <span className="font-semibold text-[#FDB813]">{location}</span>{" "}
              <span className="text-gray-500">{minutesAgo} minutes ago</span>
            </p>
          </div>
          <button
            onClick={() => toast.dismiss(t)}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            ✕
          </button>
        </div>
      ));
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);
};
