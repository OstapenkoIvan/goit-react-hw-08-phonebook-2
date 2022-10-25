import React from 'react';

export default function SkeletonItem() {
  return (
    <div
      role="status"
      className="flex  animate-pulse items-center justify-between gap-2 rounded-lg border border-gray-300 p-2 drop-shadow-md sm:p-4"
    >
      <div className="flex flex-col gap-2 ">
        <div className=" h-6 w-[265px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-6 w-[220px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
        <div className=" h-8 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700 sm:w-[90px]"></div>
        <div className=" h-8 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
