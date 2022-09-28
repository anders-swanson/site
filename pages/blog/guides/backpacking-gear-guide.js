import HeaderText from "../../../components/header_text"
import ImageGrid from "../../../components/image_grid"
import Layout from "../../../components/layout"
import utilStyles from '../../../styles/utils.module.css'

//+metadata
let metadata = {
    "title": "Backpacking Gear Guide",
    "date": "2022-09-27",
    "image": "https://lh3.googleusercontent.com/pw/AL9nZEWokLaiP_-Rg2J3riCugLMqDMOgsM_2ZbDQjH7p5-fjnCmDQajineWfBxHKvVt1YM2JOS_JPCFXVoYa-6ZDcbD9-Vjb5jG6twOD949h0RfhlT6QmzYeNUdDgI0tAfUKcXuSBBFeEq_HKtCzFPOnlbll=s698-no?authuser=0",
    "tags": ["backpacking", "guide"]
}

const backgroundImage = 'https://lh3.googleusercontent.com/pw/AL9nZEVYk7S03VbTbPmMXNWg61YYuZ_hQdE75O5_Cj2yRHu6t5KKuCLnkgW3PWGxz0nlH8jwzA4bUHFzFBNiDDKFAxbVHkm81yS19htj9X4FYVrhofToP2MZbjGPcschCRiytpfcARvEsV4rPvintQ7d4SK8=w600-h900-no?authuser=0'
const backpack = 'https://lh3.googleusercontent.com/pw/AL9nZEVeiy7kwsE4krQklIaCMZYZ9WJX6mrSGfRROlfHu-_tBNbl1CZgmywLXUUEMd2LvNGivMvKrUKbEvr2K6OaVRFJYDFXkODBx7R5W1jaYmjrJRKZkXgnn1D1y0zYZtQCs33W_OJFOGwxDzWWpjNPDegP=w600-h800-no?authuser=0'

export default function Post() {
    return (
        <Layout
            headerImage='none'
            headerText={metadata.title}
            description={`Our go-to backpacking gear for weekend and multi-day trips, that we've used for years and thousands of miles.`}
            ogImage={metadata.image}
        >
            <HeaderText
                backgroundImage={backgroundImage}
            >
                <br/>
                <h1 className={utilStyles.floatyText}>{`My Backpacking Gear`}</h1>
                <div style={{
                    'fontFamily': 'font-family: "Poppins",sans-serif',
                    'fontWeight': '500',
                    'justifyContent': 'center',
                    'color': 'white',
                }}>
                    {`This guide contains the backpacking gear I bring on `}<b>every trip</b>{`. I use this gear for `}<b>weekend</b>{` and `}<b>multi-day</b>{` trips.
                    I look for gear that balances cost, durability & weight. This gear has lasted me over `}<b>4 years</b>{` and  `}<b>1000+ miles</b>{`. Click the photos below to shop my gear.`}
                    <br/><br/>
                    - Lauren 💙
                    <br/><br/><br/>
                    <small style={{
                        'fontWeight': '600',
                    }}>
                        {`This guide contains affiliate links, which means that by using these links, I will earn a small commission
                        at no additional cost to you. This helps support my adventures and allows me to make more resources like this for you. Thank you!`}
                    </small>
                </div>
            </HeaderText>
            <ImageGrid
                title={`The “Big 3” & Tent Gear`}
                backgroundImage={backgroundImage}
                items={[
                    {
                        text: `Lauren’s Backpacking Pack`,
                        image: backpack,
                        link: `https://www.rei.com/product/205558/deuter-aircontact-core-45-10-sl-pack-womens?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_e2b35d3c1`
                    },
                    {
                        text: `Sleeping Bag`,
                        image: backpack,
                        link: `https://www.rei.com/product/187790/big-agnes-torchlight-camp-20-sleeping-bag-womens?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6ad`
                    },
                    {
                        text: `2-Person Tent`,
                        image: backpack,
                        link: `https://www.rei.com/product/164367/rei-co-op-trail-hut-2-tent-with-footprint-print?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_a2b3713a5`
                    },
                    {
                        text: `Anders' Backpacking Pack`,
                        image: backpack,
                        link: `https://www.rei.com/product/148589/rei-co-op-flash-55-pack-mens?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6b1`
                    },
                    {
                        text: `Inflatable Sleeping Pad`,
                        image: backpack,
                        link: `https://www.rei.com/product/171693/therm-a-rest-basecamp-sleeping-pad?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_f2b359639`
                    },
                    {
                        text: `Foam Sleeping Pad`,
                        image: backpack,
                        link: `https://www.rei.com/product/829826/therm-a-rest-z-lite-sol-sleeping-pad?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6c1`
                    },
                    {
                        text: `Inflatable Pillow`,
                        image: backpack,
                        link: `https://www.rei.com/product/829826/therm-a-rest-z-lite-sol-sleeping-pad?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6c1`
                    },
                    {
                        text: `Spacious 2-Person Tent`,
                        image: backpack,
                        link: `https://www.rei.com/product/185632/rei-co-op-half-dome-sl-2-tent-with-footprint?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_c2b36af4d`
                    },
                ]}
            />
            <ImageGrid
                title={`Water Filter & Meal Prep`}
                backgroundImage={backgroundImage}
                items={[
                    {
                        text: `Water Filter`,
                        image: backpack,
                        link: `https://www.rei.com/product/100546/katadyn-befree-replacement-filter?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_c2b36af55`
                    },
                    {
                        text: `Water Squeeze Bottle`,
                        image: backpack,
                        link: `https://www.amazon.com/dp/B083L8G5CV?&linkCode=sl1&tag=laureng0a-20&linkId=fb129daa959a724d318dd8de3467fc81&language=en_US&ref_=as_li_ss_tl`
                    },
                    {
                        text: `Stove + Cooking Kit`,
                        image: backpack,
                        link: `https://www.rei.com/product/106902/msr-pocketrocket-stove-kit?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6ed`
                    },
                    {
                        text: `Bear Can`,
                        image: backpack,
                        link: `https://www.rei.com/product/768902/bearvault-bv500-journey-bear-canister?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6f1`
                    },
                    {
                        text: `Bear Bag`,
                        image: backpack,
                        link: `https://www.rei.com/product/109165/ursack-major-xl-bear-sack-15-liters?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_c2b36af65`
                    },
                    {
                        text: `Spork`,
                        image: backpack,
                        link: `https://www.rei.com/product/131279/humangear-gobites-uno-spork?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_d2b33f009`
                    },
                    {
                        text: `Electric Lighter`,
                        image: backpack,
                        link: `https://www.rei.com/product/188703/sol-fire-lite-fuel-free-lighter?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b715`
                    },
                    {
                        text: `Pocket Knife`,
                        image: backpack,
                        link: `https://www.rei.com/product/826026/leatherman-sidekick-multi-tool?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_d2b33f021`
                    },
                    {
                        text: `Stormproof Matches`,
                        image: backpack,
                        link: `https://www.rei.com/product/898080/uco-titan-stormproof-matches?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_c2b36af79`
                    },
                ]}
            />
            <ImageGrid
                title={`Toiletries`}
                backgroundImage={backgroundImage}
                items={[
                    {
                        text: `Body Wipes`,
                        image: backpack,
                        link: `https://www.rei.com/product/186387/sea-to-summit-wilderness-wipes-package-of-36?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_e2b35d981`
                    },
                    {
                        text: `Itch Relief`,
                        image: backpack,
                        link: `https://www.rei.com/product/118807/after-bite-outdoor-insect-bite-treatment?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_e2b35d985`
                    },
                    {
                        text: `Bug Repellent`,
                        image: backpack,
                        link: `https://www.rei.com/product/799528/sawyer-jungle-juice-100-pump-spray-insect-repellent-98-percent-deet-2-fl-oz?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_d2b33f03d`
                    },
                    {
                        text: `Face Wipes`,
                        image: backpack,
                        link: `https://www.sephora.com/product/facial-radiance-pads-P278317?om_mmc=aff-linkshare-redirect-x9A7w7fjzpE&country_switch=us&lang=en&skuId=1309608&gclsrc=aw.ds&c3ch=Linkshare&c3nid=x9A7w7fjzpE&affid=x9A7w7fjzpE-pbtRA70DYdLIOVbMcCcebQ&ranEAID=x9A7w7fjzpE&ranMID=2417&ranSiteID=x9A7w7fjzpE-pbtRA70DYdLIOVbMcCcebQ&ranLinkID=10-1&browserdefault=true`
                    },
                    {
                        text: `First Aid Kit`,
                        image: backpack,
                        link: `https://www.rei.com/product/132220/hart-outdoor-weekend-first-aid-kit?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_a2b3713f9`
                    },
                ]}
            />
        </Layout>
    )
}

