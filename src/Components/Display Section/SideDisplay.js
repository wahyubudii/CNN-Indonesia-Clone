export default function SideDisplay({data}) {
  return (
    <a href={data.link} className="hover:text-[#c00] transition-all" target="_blank">
      <div className="flex pb-2">
        <div className="px-3">
          <img src={data.image.small} className="w-40 h-[75px]" />
        </div>
        <div className="w-8/12">
          <p className="text-[13px] text-black-900 items-start opacity-70 font-semibold leading-5">
            {data.title}
          </p>
          <p className="text-[12px] text-[#c00] font-semibold">Teknologi</p>
          <p className="text-[12px] text-black-900 opacity-50 ">
            15 menit lalu
          </p>
        </div>
      </div>
    </a>
  );
}
