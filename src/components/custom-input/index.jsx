import React from 'react';
import { Search } from 'lucide-react';

export const CustomInput = ({ value, setValue, onClick, ...props }) => {
   return (
      <div className="w-full flex justify-end absolute -top-6 px-4 right-0">
         <div className="w-full max-w-xs flex gap-[.1rem] overflow-hidden rounded-sm">
            <input
               {...props}
               onChange={({ target }) => setValue(target.value)}
               value={value}
               className="w-full p-1 outline-none bg-zinc-300 text-zinc-800 placeholder:text-zinc-600 hover:bg-zinc-100 focus:bg-white duration-200 text-base font-normal"
            />
            <button
               className="bg-zinc-300 p-2 group grid place-items-center hover:bg-zinc-100 duration-200"
               onClick={onClick}
            >
               <Search color="#27272a" className="group-hover:scale-110 duration-200" />
            </button>
         </div>
      </div>
   );
};
