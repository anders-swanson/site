import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Video from "../../../components/video"
import { ImagePathBuilder } from "../../../lib/common"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Goldbug Hot Springs",
    "desc": "",
    "date": "2021-09-05",
    "image": "/images/idaho/goldbug-hotsprings/cover.jpg",
    "tags": ["backpacking", "hot springs", "waterfall"]
}

const image = ImagePathBuilder('/images/idaho/goldbug-hotsprings')
const goldbug = 'https://www.google.com/maps/place/Goldbug+Hot+Springs+Trailhead/@44.9025503,-113.9459512,15z/data=!4m5!3m4!1s0x535820e9ac394b2d:0x47a4f614255ba06!8m2!3d44.8980974!4d-113.9569976'
const subText = '3.92 miles, 950 feet elevation gain, 1 night'

const mov1 = `https://rr2---sn-nx5s7nee.c.drive.google.com/videoplayback?expire=1642653057&ei=Qa3oYdu9HbDk-LYP4NKTWA&ip=2601:1c2:700:5fe0:9caf:e847:1d68:d4be&cp=QVRJVEdfUlBTSFhPOkhxSTFxdmlvRzlNQXZfcjRlUmYxbnFPajVaRWtnc252MEd2aTN3MUEtcDE&id=ff938dd6b3624d9f&itag=37&source=webdrive&requiressl=yes&mh=oj&mm=32&mn=sn-nx5s7nee&ms=su&mv=m&mvi=2&pl=34&ttl=transient&susc=dr&driveid=1LFPqXrTvzQxlreWcOFllNuMPCxF7NOKJ&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=1.927&lmt=1642638591990274&mt=1642638263&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAK0EeX9B-vbSoxvA0VZjNMe6mw4ynsHNmmnJpGtRw7y3AiEA36E7U6kSs-xKQgLSMW3yZ5uwUYhXMapxU62U5Rs9Dq0=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgQMc0dRPVGdj28PrE5PdHGK7Ip7pxdGVoxjAnmmmaKuMCIQDbrnjsSFvDEtF05tghK0sSeX4PWrBFTNhsv4QnFmpBcg==&cpn=YDT78lWMB39-aOAe&c=WEB_EMBEDDED_PLAYER&cver=1.20220116.00.00`
const mov2 = `https://rr2---sn-nx5s7n76.c.drive.google.com/videoplayback?expire=1642652801&ei=QazoYfrcGpuT-LYP7rG38AE&ip=2601:1c2:700:5fe0:9caf:e847:1d68:d4be&cp=QVRJVEdfUVhOQlhPOkhxSTB5cWNvRzlNQXZfejl5UmYxbnFPaTNVWWtnc252MEZkZDd3MUEtcDE&id=1ed5ec0260acc633&itag=37&source=webdrive&requiressl=yes&mh=tZ&mm=32&mn=sn-nx5s7n76&ms=su&mv=m&mvi=2&pl=34&sc=yes&ttl=transient&susc=dr&driveid=11nVprXG0BiN5qmr0SrIWrVpUBHEIOXXe&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=8.800&lmt=1642638356847243&mt=1642638023&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgMH6rkAgJDIHwfLBPHsNgsrBQKGzspmr7d-HvjZAgjwwCIQCrAWYhzSio92OVZa3wl6aNHD4KDHVdVxYzRmUTJhUfzQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIgRtcUU2ZEOhIlhPOKQJli6oXCp-JeeRJM7OCOETEyMBoCIQDFJH6PnRsBC2n0W13u1wPHfUtf3J9UqUUT2QL1_z9DHA==&cpn=TTs8SYhSPrhWV0CH&c=WEB_EMBEDDED_PLAYER&cver=1.20220116.00.00`


export default function Post() {
    return (
        <Layout headerImage={metadata.image} headerText={metadata.title} subText={subText}> 
            <div className={utilStyles.flexWrapContainer}>
                <div style={{'width': '1400px'}}>
                    <Link href={goldbug}>Goldbug hot springs</Link> is located in a steep canyon, with springs emerging from several sources towards the top.
                    <br/><br/>
                    This spring is popular, and the trailhead is right off highway 93 on a residential street (the surrounding area
                    is remote and rural). Please be mindful of the landowners and park in designated spaces for the trailhead, and do
                    not leave any trash near the trailhead or the springs. 
                    <br/><br/>
                    The hike to the spring is about 2 miles up the canyon, 
                    gaining almost 900 feet of elevation along the way - be sure to bring plenty of water if the weather is hot. If 
                    you hike past the top of the springs, there are a few small campsites. Larger campsites can be found on the 
                    lower trail, but they are farther from the springs.
                    The steepness of the canyon creates a cascade of hot springs into multiple pools, the water temperature varying 
                    depending on how far you are from the source. 
                    <br/><br/>
                    The topmost pool is heart-shaped, and offers a beautiful view down the canyon towards the Salmon river. Take plenty 
                    of time to explore the springs, soaking pools, and cascading hot waterfalls.
                    <br/><br/>
                </div>
                <Video
                    height={600}
                    width={400}
                    src={mov1}
                />
                <Image
                    height={600}
                    width={400}
                    alt='springs'
                    src={image('springs1.jpg')}
                />
                <Video
                    height={600}
                    width={400}
                    src={mov2}
                />            
            </div>
            <hr/>
            <div className={utilStyles.flexContainer}>
                <Image
                    height={400}
                    width={1200}
                    alt='smoke mountains'
                    src={image('mountain.jpg')}
                />
            </div>
        </Layout>
    )
}