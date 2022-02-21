export default function NewsType({data, variant}) {
    const variants = {
        "small": "text-[12px]",
        "large": "text-sm"
    }

    const selectVariant = variants[variant]
    
    return (
        <p className={`${selectVariant} text-[#c00] font-semibold`}>Nasional</p>
    )
}