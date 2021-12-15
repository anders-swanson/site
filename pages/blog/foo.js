import Layout from "../../components/layout"

//+metadata
let metadata = {
    "title": "Foo Page",
    "desc": "Foo!",
    "date": "2020-01-01",
    "image": "/images/cover.jpeg",
    "tags": ["hiking"]
}

export default function Post() {
    return (
        <Layout headerImage={metadata.image} headerText={metadata.title}>                 
            <h1>Hello World!</h1>
        </Layout>
    )
}