import React from 'react';

const AreaDescriptionSection = () => (
  <div className=" bg-slate-100 rounded-md relative flex justify-between items-center my-2 mx-3">
    <div className="p-4 flex-grow border-r-2">
      <p className="font-body text-xs font-medium text-secondary">Områdesbeskrivning</p>
      <h1 className="font-body font-bold text-xl leading-10 text-primary">Norra Hamnen</h1>
      <p className="font-body text-xs pb-3 text-primary">
        Bjurfors Beyond presenterar en stilsäker femrummare i eftertraktade SeaU med två balkonger och fria vyer över
        havet och Norra Hamnen.
      </p>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 m-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </div>
  </div>
);

export default AreaDescriptionSection;
