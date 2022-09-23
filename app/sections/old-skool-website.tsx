export const OldSkoolWebsite = () => {
  return (
    <div className="h-screen w-full bg-[url(/img/planets.jpeg)]">
      <div className="flex h-full w-full">
        <div className="relative z-10 w-6 overflow-visible border-r border-r-[#999] bg-[url(/img/planets.jpeg)] bg-[length:100px_100px] shadow-[1px_0_0_0_rgb(237,237,237)]">
          left
        </div>
        <div className="flex w-full flex-col">
          <div className="h-6 overflow-visible border-b border-b-[#999] bg-[url(/img/planets.jpeg)] shadow-[0_1px_0_0_rgb(237,237,237)]">
            top
          </div>
          <div>bottom</div>
        </div>
      </div>
    </div>
  );
};
