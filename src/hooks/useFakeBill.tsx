import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { fakeLocations } from "../data/fake-locations";

export const useFakeBill = (interval = 10000) => {
  const { t: i18nT } = useTranslation();
  const tr = i18nT as unknown as (key: string, options?: Record<string, unknown>) => string;
  useEffect(() => {
    const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const timer = setInterval(() => {
      const location = random(fakeLocations);
      const minutesAgo = Math.floor(Math.random() * 59) + 1;
      const avatar = `https://i.pravatar.cc/64?img=${Math.floor(Math.random() * 70) + 1}`;

      toast.custom((toastId) => (
        <div className="flex items-center gap-3 bg-white border border-gray-200 shadow-lg rounded-xl p-4 min-w-[280px]">
          <img
            src={avatar}
            alt={tr("common.user", { defaultValue: "User" })}
            className="w-10 h-10 rounded-full object-cover border border-gray-100"
          />
          <div className="flex-1 text-sm text-gray-700 leading-tight">
            <p className="font-medium text-gray-900">
              {tr("toast.someoneRecently", { defaultValue: "Someone recently" })}
            </p>
            <p>
              {tr("toast.boughtFromPrefix", { defaultValue: "bought from" })}{" "}
              <span className="font-semibold text-[#FDB813]">{location}</span>{" "}
              <span className="text-gray-500">
                {minutesAgo === 1
                  ? tr("toast.minuteAgo", { defaultValue: "1 minute ago", count: minutesAgo })
                  : tr("toast.minutesAgo", { defaultValue: "{{count}} minutes ago", count: minutesAgo })}
              </span>
            </p>
          </div>
          <button
            onClick={() => toast.dismiss(toastId)}
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
