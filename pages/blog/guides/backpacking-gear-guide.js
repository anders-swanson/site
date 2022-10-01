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
                <h1
                    className={utilStyles.floatyText}
                    style={{'fontSize': '6.0vw'}}
                >
                    {`My Backpacking Gear`}
                </h1>
                <div style={{
                    'fontFamily': 'font-family: "Poppins",sans-serif',
                    'fontWeight': '500',
                    'fontSize': '3.5vw',
                    'color': 'white',
                    'margin': 'auto',
                    'marginRight': '50px',
                    'marginLeft': '50px',
                    'background': 'rgba(0, 0, 0, .5)',
                    'maxWidth': '1200px',
                    'display': 'flex',
                    'padding': '5%',
                    'lineHeight': '1.2',
                }}>
                    <div>
                    <p>    
                        {`This guide contains the backpacking gear I bring on `}<b>every trip</b>{`. I use this gear for `}<b>weekend</b>{` and `}<b>multi-day</b>{` trips.
                        I look for gear that balances cost, durability & weight. This gear has lasted me over `}<b>4 years</b>{` and  `}<b>1000+ miles</b>{`. Click the photos below to shop my gear.`}
                    </p>
                    <p>
                        {`- Lauren 💙`}
                    </p>
                    <br/>
                    <p style={{
                        'fontSize': '3vw',
                    }}>
                        {`This guide contains affiliate links, which means that by using these links, I will earn a small commission
                        at no additional cost to you. This helps support my adventures and allows me to make more resources like this for you. Thank you!`}
                    </p>
                    </div>
                </div>
                <br/><br/>
            </HeaderText>
            <ImageGrid
                title={`The “Big 3” & Tent Gear`}
                backgroundImage={backgroundImage}
                items={[
                    {
                        text: `Lauren’s Backpacking Pack`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEXvYz6TDM06TkVT0WQjcAiMMiPcBOlAFU6WZsi7sJE4fBqbgOeWKI3loDDcCb8mdpMH0Q_TmAxPnRj0MMgi4RewLM81-l4y_H1v2jFoShHHhqpvGTmjp4PlYuPbtjh3Z2sE6-3DiG5oOK9Wa8LTVQX5=w1062-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/205558/deuter-aircontact-core-45-10-sl-pack-womens?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_e2b35d3c1`
                    },
                    {
                        text: `Sleeping Bag`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEVtPfqwDdIkehn8iM17u4jmntl-_OCz1RLzR1n2yfukAvJhS52xUEtcqGrZdfto6lhoK7YTN3iaEilMd-5m8GJQBeDyvaaG96QHWd5U5HwAR6g5l6Q44l3RtkULTOqX6QGQv5vcXNlyMIBHk46Usn3F=w1010-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/187790/big-agnes-torchlight-camp-20-sleeping-bag-womens?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6ad`
                    },
                    {
                        text: `2-Person Tent`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEVS3O7erhsE0AqZbwZhPxxwAxg643pnwNsgWT9W7RuA8oD8T8BEuqwZ0mNYdWN7e-Nz96hCTk09WrMzBWyXU3ZRmOMGS_JEftyZhtj8QiCYHkdZNaIptryCBoUPFThfIvKhF-znxuSWVsE84C9sqlI8=w1068-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/164367/rei-co-op-trail-hut-2-tent-with-footprint-print?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_a2b3713a5`
                    },
                    {
                        text: `Anders' Backpacking Pack`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEV2nlkZJZf9TEBSIABPBy_1dL26-AgHiFflFx6CzHu1z2sIEKsv-m0HmWc75nwZwfcZc4F3-1WcAv8YianqRLhWmf_oHsPU1LX0NNPumveGuRkLbF_pkGJkYW8ubdY1UjFHfpeUnjeOUPe2ilgdkwgG=w1052-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/148589/rei-co-op-flash-55-pack-mens?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6b1`
                    },
                    {
                        text: `Inflatable Sleeping Pad`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEVPoyt3vWb4CWXVjMAYTQ7mLz-3h38Qb8yuwblNo1L4stI-9gOLvThZRsFY3Qws93x5SuREvUTHHFVEWItuEhZOBwkNGqeDyFiVBF3QsyA7ogTp_KeofyLDORf2zQOTbse_T0tsvvBZxivSDkRdO5Xb=w1024-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/171693/therm-a-rest-basecamp-sleeping-pad?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_f2b359639`
                    },
                    {
                        text: `Foam Sleeping Pad`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEV1bzcD7XJHpzvWtj_tllrzaA3gNMq65PAER7U1VUffNyn87sGfPvGqFzR9s0jQLGiddbJsKcKW8wb2fvyQjBI7dN6qz4wF8LGQ97xAXzbh19-8j2SxtLPzD5G2Rh9YKN2OMfxiNM1Ol_22Dy2IuRat=w1060-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/829826/therm-a-rest-z-lite-sol-sleeping-pad?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6c1`
                    },
                    {
                        text: `Inflatable Pillow`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEXMe6O0ZWxvMbg-AZdI1RCwjb5tWuQy47OqPuXkYgJFtbnOiUXA3B1FlFfrNm_cH0MyCf-_Q3cS-zG03PU9m-n1_GtTVI4sjoGR1bL2ls0mDHs1XcvHwQUfL8Zz9i3e3lwogokR1klIEMSAY_aVSg7E=w1076-h1362-no?authuser=0',
                        link: `https://amzn.to/3DivXOm`
                    },
                    {
                        text: `Spacious 2-Person Tent`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEVv5RVdIeZuoz1W_rBtkhZRCnh0qfzlnHLlzmo2ItaC_HzGU5izZDP6hczRiQgvxnUs3cdGT6xfPUo5GEekPsRgSC3ongMt7Pi2Q3YXoqSnyPGzpBk08Tnnp0l5rbK9OOeR2Q-IKbQT4VldINVdM8xh=w1064-h1362-no?authuser=0',
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
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEWTrOLaemtbKAJSIX7Sm5egF2HA1om8D5qgls1y_K-Zi9Wq9nyVpkHJiDpflYkt_dApMKkj4BxD5dXWUHMne_ap-O54VDR69rJR0Obs23HRhlY_r768qTe0gXFahwv6fEXf4AMmgpuqYkTMGAeRUIQz=w1062-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/100546/katadyn-befree-replacement-filter?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_c2b36af55`
                    },
                    {
                        text: `Water Squeeze Bottle`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEWoAWZFcdeAdMQZZOLCzli2V2tWQmL_090-jYGjoI_K3LpAROthkq2l5JhwJ6WOwZAstwUU_OwWYBWFvAcqVE8KmhA3qt66TBuQnxrJEY-rc6MLXaulIZAup-TtICkaYD1xMN2R9Cxh5qgIm1iK7hDJ=w1040-h1362-no?authuser=0',
                        link: `https://www.amazon.com/dp/B083L8G5CV?&linkCode=sl1&tag=laureng0a-20&linkId=fb129daa959a724d318dd8de3467fc81&language=en_US&ref_=as_li_ss_tl`
                    },
                    {
                        text: `Stove + Cooking Kit`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEUHTOr5yYPUQnMC3g-X-vC2SKDYE1XXrkgfcCCOqaHmDiursWTpySJMbnKulsa_OkQWrxT89tm7I9vteyLxkTPSCAecTcwdEVOfwxqeC72M0Dw-iAulmCqPuRdl7FNox5oGgXOjlxm_GZkhy971oSVl=w1044-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/106902/msr-pocketrocket-stove-kit?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6ed`
                    },
                    {
                        text: `Bear Can`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEWT1pWQYMGFfOuypOHmiiOwX2ftIqTpHY3nwHxbzGJ1ah22dc76hbTveUOomWBo9ptnmzl93FfsnF4qPQa5B8h5mnIUXGCw0LjYhYj0uj8Aqzo0vnhQDXZjp55Eb9iDr3nW1IxrjKn0sTr6YA8RUlI9=w1056-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/768902/bearvault-bv500-journey-bear-canister?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b6f1`
                    },
                    {
                        text: `Bear Bag`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEVF9Nv4DXE3B1pF5gCrkkUwfWVCt-2ccip-SVDXr9waU9Tj6iBT4sE5gz8h6LNduVZo3tpXCS70mkwYaFr2OX8H8WbhQZkGGj0j2xiCdeD36PC5ZX2DVeaCcTYlri85YnCs_3LkfPSxE4sgI1roGeAV=w958-h1229-no?authuser=0',
                        link: `https://www.rei.com/product/109165/ursack-major-xl-bear-sack-15-liters?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_c2b36af65`
                    },
                    {
                        text: `Spork`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEUtZbyKoEPfZXbHpTl96VING79adOiguOdoUQs5SO2lB7E-fhiVXZA7Cseqv6JMEraTzgn0CmIvESI0faoH20r4mP4RaIu80PYtlgUZTpzkEU00ULehxT7eVyVIhiU6CVQMSZXeutnwhTqX-VYzmbDQ=w1022-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/131279/humangear-gobites-uno-spork?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_d2b33f009`
                    },
                    {
                        text: `Electric Lighter`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEXRVcrWC21zvhJhzLZKgGu3RElecgqZrvwCmJ4lb3824q-UqWwe0k2lAdMzbu1o2kUF2tYE0lLF8tGs4TqBCx-EWcDOUT28s9N_Z2ZJXNCbZZEPo2fQvDMZZ8U3Cs4o1oTs5G2mOTyar3cZzOiDr5Pm=w1072-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/188703/sol-fire-lite-fuel-free-lighter?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_b2b36b715`
                    },
                    {
                        text: `Pocket Knife`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEWEf4-J530lH_zZLIS2hlvkH8sVchHP96dlVqJ5SKuCznNGEt8jsMVS5X9Xqg-ECgh0Wa0hTh6qM6ggDOQRgtYmPc0arFK59UIGD0m-f0hPzZ580ID-lvq-dQS3z4ckuV5axhk8RzA3prIiWMRc_ZAR=w1060-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/826026/leatherman-sidekick-multi-tool?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_d2b33f021`
                    },
                    {
                        text: `Stormproof Matches`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEVMErA4NU2QSC-K2O_uRK49AU8QK5C7ZhQ9T-BmbxfC2rv-Pl9HPC8QaBzAQjjzevmjkw31a6IH28jq85NEMpLFQ_qbfa4btaMi6glOHLrKheexgS2bWrKR0SB8bVzC5hI7AeyeQvGCAyCFbkO5Kq7_=w825-h1062-no?authuser=0',
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
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEVPoyt3vWb4CWXVjMAYTQ7mLz-3h38Qb8yuwblNo1L4stI-9gOLvThZRsFY3Qws93x5SuREvUTHHFVEWItuEhZOBwkNGqeDyFiVBF3QsyA7ogTp_KeofyLDORf2zQOTbse_T0tsvvBZxivSDkRdO5Xb=w1024-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/186387/sea-to-summit-wilderness-wipes-package-of-36?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_e2b35d981`
                    },
                    {
                        text: `Itch Relief`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEX703ZLQmzTq6vyzejm4cFDXpGc991siQbuotV5BCsrn51-rESf5ZCn7QHU7Q06epllLbTL7a9bA6tvTyHxlGfchPXvPVIBYukRB11pYs1DFtm-7xSZrL_3meM33-Dceq3YgfwxN_2rsbaK4HtaskFt=w1056-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/118807/after-bite-outdoor-insect-bite-treatment?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_e2b35d985`
                    },
                    {
                        text: `Bug Repellent`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEUj9ue8F7mLB0D1OW2Mo1TkyYrucCtIZyUzsnC_CjQAtfdJYui-OVAYUo2xsTzyg7z83QsCPhYyxIBrGFwHjE4O2SmIrp6Cs7LoEgNuNHTxlErHkQAGYyYEaAVvAbJ2oWKb28uKIZpveX_Z8xp0Qpsx=w1062-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/799528/sawyer-jungle-juice-100-pump-spray-insect-repellent-98-percent-deet-2-fl-oz?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_d2b33f03d`
                    },
                    {
                        text: `Face Wipes`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEU5Gv7023V-ntCj5KLhsa9pWzZ50BpbqyInU7lliQlZJB1EikM6CK5a3CUmPuz8vnRXFjS_7bX6bMiPQZQPrX1EAw5B5b4IxtLqs-_yzxbrGmyYSvEWzblwaJQRcRa49jooixNE343RpnOskxvdc6oe=w1052-h1362-no?authuser=0',
                        link: `https://www.sephora.com/product/facial-radiance-pads-P278317?om_mmc=aff-linkshare-redirect-x9A7w7fjzpE&country_switch=us&lang=en&skuId=1309608&gclsrc=aw.ds&c3ch=Linkshare&c3nid=x9A7w7fjzpE&affid=x9A7w7fjzpE-pbtRA70DYdLIOVbMcCcebQ&ranEAID=x9A7w7fjzpE&ranMID=2417&ranSiteID=x9A7w7fjzpE-pbtRA70DYdLIOVbMcCcebQ&ranLinkID=10-1&browserdefault=true`
                    },
                    {
                        text: `First Aid Kit`,
                        image: 'https://lh3.googleusercontent.com/pw/AL9nZEWhB8G-qb_TOQdy05-37TBJuYw02ODO5gzfpnvCoVCK1g_Lk25AaGRA72URUD1Fvq7Ekv3q9UURkODsCXDWcvdQWXwNLNqeyeQ_z3sutFI59O-ZmLg0X5L6a5TSWks6UEdtGZMVXorWDlYYgwPpDbst=w1070-h1362-no?authuser=0',
                        link: `https://www.rei.com/product/132220/hart-outdoor-weekend-first-aid-kit?cm_mmc=aff_AL-_-246005-_-307117-_-NA&avad=307117_a2b3713f9`
                    },
                ]}
            />
        </Layout>
    )
}
