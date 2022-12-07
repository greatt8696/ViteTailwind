import React from "react";
import { User, Boxes, Book, LogIn, LogOut } from "lucide-react";

const Main = ({ on, off, menuData }) => {
  const DURATION = 250;
  const menuSize = menuData.length;
  const stepTime = DURATION / menuSize;

  const setDataAddDelay = menuData.map((data, idx) => ({
    ...data,
    style: { animationDelay: `${stepTime * idx}ms` },
  }));

  return (
    <div onMouseEnter={on} onMouseLeave={off}>
      <div className="introY w-48 py-2 px-3 bg-slate-400/90  rounded-lg backdrop-blur-sm flex-col space-y-2 absolute top-[58px] ">
        {setDataAddDelay.map(({ title, link, IconTag, style }, idx) => (
          <div
            key={idx}
            className="introX py-2 px-4 w-full rounded-lg cursor-pointer flex hover:bg-black/50 transition-all"
            style={style}
            onClick={link}
          >
            <IconTag color="white" size={24} />
            <p className="mx-auto text-white font-bold whitespace-nowrap">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
