export default function Docs({params}: {params:{
    slug: string
}}){
    return (
        <h1>docs page {params.slug[1]}</h1>
    )
}