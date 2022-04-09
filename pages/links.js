import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Post() {
    return (
        <Layout headerImage='/images/links.JPG'>
            <div className={utilStyles.centered}>
                <iframe
                    src={'https://beacons.ai/laurengastineau/'}
                    frameBorder='0'
                    scrolling='no'
                    width={500}
                    height='2100px'
                >
                    Browser is not compatible.
                </iframe>
            </div>
        </Layout>
    )
}