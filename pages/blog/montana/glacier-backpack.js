import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from '../../../components/slider'

//+metadata
let metadata = { 
    "title": "Glacier via Chief Mountain",
    "desc": "",
    "date": "2021-08-28",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLWApIcPOrd5ioi3DJX5ahuj-1RqjTPm9pYZ_4K0u8pwfDrNHe_Cr31ff8tiQx9-gSeDECijH834LfP5jQ-4Q9VdffUZremTuJiAZxm9zgsOceG8IUk1f53qDWjTivqzqqbDnWm7aWAVLUJb-pSDz_6Z=s1075-no?authuser=1",
    "tags": ["backpacking", "lakes"]
}

const subText = '59.04 miles, 7471 feet gain, 3 nights'
const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXIj1g2Ls4knxXhrHXEYM68jF-YPOZ-z5VXL645gbyG50lQSvRBhtquPAysASh1g8Hh2qyIu3boI1eToBauM7kjlUix1cqfJ5-WIcVhlgPxegxNQ_4Mjvev-CVDCwYUXRAAnyhLIxm9xfjBLj1_miCz=w1609-h1075-no?authuser=1'
const image1 = 'https://lh3.googleusercontent.com/pw/AM-JKLUkyZS10srB4-5QJ4Ezq2G3E6rdFjLpTM0nzntUIDktFFPn7gS-liBUs10K6CGiTzrf8XU86eB2vcBfJ_agCMwBjHwG_ycSLB3c8UoU_ncljA2P46JlFDGAvmhsMRaWwxDycdS0cJygZgGoN-T6mudd=w1609-h1075-no?authuser=1'
const image2 = 'https://lh3.googleusercontent.com/pw/AM-JKLXCCl2eMQSBsLEAJEe0UZRlLoPahdYSY2pVAdOoQ2yzUVF1iQn04WH-aqv7CbfjHdaSiffkNqtabkYH6Rna8Ecs9JiNi3LFFdPNZ-i_Vc5NzAdfrtw1k2x2ppVqlokmVdwkBUO2JxLf1ype_4QEQE5_=w1609-h1075-no?authuser=1'
const image3 = 'https://lh3.googleusercontent.com/pw/AM-JKLVYS8P3ZwZnv1yoRJ7yYs2axz8sD-kHIArUWmbb5HEIb9BeYmmOx-2oTrWDbsN-iVZ62LYnxq9BOq8390seV2aw8jm1_sEvR21dsOsOhwVWdxQfo2DPk8918449EUQ1RbqtI-YOdvi6UC5QYcgQYH88=w1609-h1075-no?authuser=1'
const image4 = 'https://lh3.googleusercontent.com/pw/AM-JKLVpOSPuLu_TSne3XwgF66824R4laN68I2iu2rF9c7MIcPr6YrgyweyLQ88RocxsdLV25c6SETTV8gFnQKrGRJwcmGbcfdl1czsvEgkArmjqyQfu4__7wGJenFCenibyujuk1x2yDel-ZLnPjxrPlF6Q=w1609-h1075-no?authuser=1'
const image5 = 'https://lh3.googleusercontent.com/pw/AM-JKLXqdcGxi9huHtW_UfjPzBRUDtJzLa9zn2zm_wxJ_FuvDi2MsTglEWgFqJzJGLCdL2huorQMVaLFSpmkAOOqFltQM0sTaBLitMfHNPnyVSsmaWyo7I0MFFI9hBMzA15TijIoaFGXsPl-kmfMpZi3Dm8d=w807-h1075-no?authuser=1'
const image6 = 'https://lh3.googleusercontent.com/pw/AM-JKLWSYXJv5JLaxdNQnzKfnose41q-qjEHkJdA3jANnURIFuLdx2z6o5qrwBI-AablqhYXQBB3574-lOz9M2BwUDgUAScPsynHDoTH920ZpSSAnYJ37kDZD3wp8WqvASW4W0-B3QVPo73WVHEFBu-sL6E0=w807-h1075-no?authuser=1'
const image7 = 'https://lh3.googleusercontent.com/pw/AM-JKLUq0u6mV9NzydRfFIZ9VXXCPmWsAK67xbsoAvfKjYmswXwoJpGC9h9RilD3In_TP_l7SRfmTk0lMXFGDqPDKIlvfaLZcT_ZunBFZwOIBtNrtDVze_ojzHXxEQfHx4L88blQxt2KsAc7f29UFTqospUX=w807-h1075-no?authuser=1'
const slides = [
    'https://lh3.googleusercontent.com/pw/AM-JKLUOoF6zBKVTDaGZQm-FkcWI0c1Ly20TvAEqYLFwlW5cqQqCdfw6FxyJIGtZT4XB6gYfkU2XRjJz7w0v3fKMXQVBnF5FVc1F6rDex4GaLuIfIMz-HJJeXZwVv51furk3VwIBeBMD1CrrST1ARxN_F5ie=w1609-h1075-no?authuser=1',
    'https://lh3.googleusercontent.com/pw/AM-JKLUhFf-5GlbiJWStS0hETheADCYHpr8xR4ds7bCaSp6lMmTWvMOsBXLJkA0WoUpmFRYhS6eZXXPwjG5VnH-vqyR6NaLuVOOLSFDHuV9eMz62-FA9aRghyTx4W-pmTNHhoD29edGiOz9iOnMK_sR7y3Ed=w1434-h1075-no?authuser=1',
    'https://lh3.googleusercontent.com/pw/AM-JKLUxae0LpovkEibUtUOxq4RFywC7EE9FdNCLXdOujD2csLlTy89lMPQR5Zig12EpBzBVEofnL7POBwgc0mibM2UyicC0lgCJtdz04O9byEldfSDQntUSs9ki-QU1UsR8mhHRnaHa7DZsxtRmSasxWFL2=w1609-h1075-no?authuser=1'
]

export default function Post() {
    return (
        <Layout headerImage={cover} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    {`We backpacked for three nights in Glacer National Park, beginning at the Chief Mountain trailhead at the very 
                    northeast corner of the park. The area accessible via Chief Mountain is remote, and likely to be
                    frequented by backpackers.`}
                    <br/><br/>
                    {`Backcountry camping in Glacier National Park is restricted to designated campgrounds, a permit being required for
                    each campsite/night you are in the park. Permits can be purchased in advance via a lottery system,
                    or you can try your luck by checking one of the ranger stations in the park for any available walk-up permits
                    (around 50% of the permits are reserved for walk-ups).`}
                </div>
                <Image
                        alt='cosley'
                        height={450}
                        width={700}
                        src={image1}
                />
                <div className={utilStyles.textBlock}>
                    {`Our first night was at Glenns Lake Head, a 10 mile trek from Chief Mountain. On the way, we passed through meadows
                    and valleys, before climbing up to Cosley Lake, which connects to Glenns Lake. These lakes (like most in Glacier),
                    are finger lakes, surrounded on their sides by towering peaks. Depending on the season, there may be 
                    more or less snow on the peaks.`}
                    <br/><br/>
                    {`Our next site after Glenns Head was Elizabeth Lake Head, in Glacier's Belly area. After setting up our camp, we hiked
                    further past Elizabeth Lake to Helen Lake. Helen Lake is backed by a steep, snowy headwall, and was probably the most beautiful
                    place we saw in Glacier.`}
                </div>
                <Image
                        alt='lauren helen lake'
                        height={450}
                        width={700}
                        src={image2}
                />
                <div className={utilStyles.textBlock}>
                    {`On our third day, we had a short hike to our next campsite, so we decided to make the climb up to Ptarmigan Tunnel.
                    The Ptarmigan Tunnel hike is a tough climb to a man-made pass. The tunnel pass provides access through the mountains to
                    a popular trail that starts near Many Glacier.
                    On the way up to the tunnel, you are granted a sweeping, gorgeous view of the Belly valley, from Elizabeth Lake to Helen Lake.`}
                    <br/><br/>
                    {`The tunnel is kept open during the warmer seasons, and closed by the park service in the winter to prevent animals
                    from hibernating in it. It's an amazing experience to pass through the tunnel, as it feels like a portal between two
                    totally different sections of the park.`}
                </div>
                <Image
                        alt='ptarmigan trail'
                        height={450}
                        width={700}
                        src={image4}
                />
                <div className={utilStyles.textBlock}>
                   {`Coming down from the Ptarmigan Tunnel, we headed back towards Cosley Lake, for our final night in Glacier.
                   On our last day, the hike out from Cosley Lake clocked in at around 9 miles to Chief Mountain Trailhead.`}
                   <br/><br/>
                   {`If you decide to backpack Glacier, make sure you are up-to-date with the park's recommendation for bear safety. Bears
                   (both black and brown) and numerous in the park, and we ran into one black bear during our trip, which passed us on the trail
                   going the opposite direction. Each hiker we encountered had a similar story about a bear encounter. 
                   you're required to hang your food (and other scented items/cookware) on provided poles while camping. You are 
                   recommend to bring bear spray, and make plenty of noise while on the trail to avoid startling any bears.`}
                </div>
                <Image
                        alt='ptarmigan trail'
                        height={450}
                        width={700}
                        src={image3}
                />
                <div className={utilStyles.flexWrapContainer}>
                    <Image
                        height={400}
                        width={400}
                        alt='5'
                        src={image5}
                    />
                    <Image
                        height={400}
                        width={400}
                        alt='6'
                        src={image6}
                    />
                    <Image
                        height={400}
                        width={400}
                        alt='7'
                        src={image7}
                    />
                </div>
                
                <Slider
                    height={900}
                    width={1200}
                    slides={slides}

                />                
            </div>
        </Layout>
    )
}
