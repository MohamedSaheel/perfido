import Image from 'next/image'
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center h-full">
      <Image src="/assets/images/loading.gif" alt="" width={50} height={50} />
    </div>
  );
}