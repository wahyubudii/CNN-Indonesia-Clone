export default function Logo({className, link}) {
  const addClassName = className ? `${className}` : ""
  return (
    <div className="">
        <img className={`-mt-[15px] uppercase text-2xl font-semibold text-black px-2 absolute left-8 w-[75px] left-[375px] ${addClassName}`} src={link}/>
    </div>
  );
}
