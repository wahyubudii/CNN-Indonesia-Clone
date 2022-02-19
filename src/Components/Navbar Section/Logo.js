export default function Logo({className, link}) {
  const addClassName = className ? `${className}` : ""
  return (
    <>
        <img className={`uppercase text-2xl font-semibold text-black px-2 ${addClassName}`} src={link}/>
    </>
  );
}
