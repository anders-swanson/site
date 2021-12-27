import Layout from "../../../components/layout"

//+metadata
let metadata = {
    "title": "Stebbins Creek Trail",
    "desc": "",
    "date": "2020-01-02",
    "image": "/images/cover.jpeg",
    "tags": ["camping"]
}

export default function Post() {
    return (
        <Layout headerImage={metadata.image} headerText={metadata.title}>        
            <h1>BAR BAR</h1>
        </Layout>
    )
}