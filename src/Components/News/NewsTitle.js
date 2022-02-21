export default function NewsTitle({data, variant}) {
    const variants = {
        "small": "text-[13px] leading-5",
        "large": "text-[22px]"
    }

    const selectVariant = variants[variant]
    
    return (
        <p className={`${selectVariant} text-black-900 opacity-70 font-semibold`}>{data.title}</p>
    )
}