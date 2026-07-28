export default function Loading() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 animate-pulse">
      <div className="h-8 bg-slate-800 rounded-xl w-1/3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-12 bg-slate-800 rounded-xl"></div>
        <div className="h-12 bg-slate-800 rounded-xl"></div>
      </div>
      <div className="h-12 bg-slate-800 rounded-xl"></div>
      <div className="h-20 bg-slate-800 rounded-xl"></div>
      <div className="h-32 bg-slate-800 rounded-xl"></div>
      <div className="h-14 bg-slate-800 rounded-xl"></div>
    </div>
  );
}