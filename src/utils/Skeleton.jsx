import React from 'react';
import SkeletonItem from 'utils/SkeletonItem';

export default function Skeleton() {
  return (
    <div className="mt-5 flex flex-col gap-5  px-2 sm:px-3">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
