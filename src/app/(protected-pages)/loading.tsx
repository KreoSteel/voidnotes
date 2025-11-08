export default function Loading() {
   return (
      <div className="h-full w-full bg-surface py-8 px-10">
         <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center justify-between">
               <div className="h-8 w-32 bg-muted animate-pulse rounded" />
               <div className="h-10 w-32 bg-muted animate-pulse rounded" />
            </div>
            <div className="h-10 w-full bg-muted animate-pulse rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {Array.from({ length: 6 }).map((_, i) => (
                  <div
                     key={i}
                     className="h-44 bg-muted animate-pulse rounded-lg"
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
