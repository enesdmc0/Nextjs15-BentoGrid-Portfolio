import X8 from "@/components/x8"

export default function Home() {
  return (
    <main className="h-screen bg-[#0d0d0d] p-5">
      <div className="border-[2.5px] border-[#f8f9f91a] h-full grid grid-cols-12 grid-rows-12 rounded-3xl p-5 gap-5">
        <div className="row-span-4 col-span-5 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-4 col-span-2 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-4 col-span-2 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-4 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-5 col-span-2 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-5 col-span-4 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-5 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-5 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden p-2">
          <X8 />
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-3 col-span-5 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-3 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-3 col-span-1 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>

        <div className="row-span-3 col-span-3 relative border border-[#f8f9f91a] bg-[#f8f9f905] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-bg1 bg-contain opacity-5 pointer-events-none mix-blend-difference	"></div>
        </div>
      </div>
    </main>
  );
}
