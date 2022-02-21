export default function NewsImage({data, variant}) {
    const varians = {
        "small": "w-40 h-[75px]",
        "large": "w-[740px]"
    }

    const selectVarian = varians[variant]

    return (
        <img src={selectVarian === "small" ? data.image.small : data.image.large} className={`${selectVarian}`}/>
    )
}