import{r as e,R as t,m as a,a as r}from"./vendor.e7f61901.js";function l(){const[r,l]=e.exports.useState(0);return e.exports.useEffect((()=>{console.log(r)}),[r]),t.createElement("div",{className:"bg-gray-700 min-h-full"},t.createElement("header",{className:"text-gray-50 text-center space-y-4"},t.createElement("img",{src:"/digitala-prospekt/assets/logo.ecc203fb.svg",className:"w-60 h-60 mx-auto animate-pulse",alt:"logo"}),t.createElement(a.h1,{animate:{rotate:360},className:"test text-2xl font-semibold"},"React + Tailwind + Vite"),t.createElement("button",{className:"px-4 py-2 rounded-full bg-green-600 hover:bg-opacity-80",type:"button",onClick:()=>l((e=>e+1))},"Count is: ",r),t.createElement("p",null,"Edit ",t.createElement("code",{className:"bg-gray-800 p-1"},"App.tsx")," and save to test HMR updates."),t.createElement("p",{className:"space-x-2"},t.createElement("a",{className:"text-blue-400",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"React"),t.createElement("span",null,"|"),t.createElement("a",{className:"text-green-500",href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},"Tailwind"),t.createElement("span",null,"|"),t.createElement("a",{className:"text-indigo-400",href:"https://vitejs.dev",target:"_blank",rel:"noopener noreferrer"},"Vite"))))}r.render(t.createElement(t.StrictMode,null,t.createElement(l,null)),document.getElementById("root"));