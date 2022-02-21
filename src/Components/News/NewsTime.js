export default function NewsTime({data, variant, children}) {
    const variants = {
        "small": "text-[12px]",
        "large": "text-sm"
    }

    const selectVariant = variants[variant]
    
    return (
        <p className={`${selectVariant} text-black-900 opacity-50`}>{children}</p>
    )
}