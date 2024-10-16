import React from 'react'
import Image from "next/image";

export const Grid6 = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 h-full gap-1">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="h-32 relative w-full lg:h-full hover:scale-105 transition-all duration-500">
              <Image src={`/${i+1}.avif`} alt="" fill className="object-cover  " />
            </div>
          ))}
        </div>
      );
}
