import{j as e}from"./index-qtsJ8Jwt.js";function i({value:r=0,onRate:n,size:a="text-xl"}){return e.jsx("div",{className:"flex gap-1",children:[1,2,3,4,5].map(t=>{const o=r>=t;return e.jsx("button",{type:"button",onClick:()=>n?.(t),className:`
              ${a}
              w-9 h-9 flex items-center justify-center
              transition-transform duration-200
              ${o?"text-yellow-400":"text-yellow-400/30"}
              hover:scale-125 cursor-pointer
              bg-transparent border-0
            `,"aria-label":`Rate ${t} stars`,children:"★"},t)})})}export{i as R};
