import utilStyles from '../styles/utils.module.css'
import Layout from "../components/layout"
import Contact from '../components/contact'
import Image from 'next/image'
import _const from '../lib/const'
import RelatedPosts from '../components/related_posts'

export default function Post() {
    return (
        <Layout
            headerImage={_const.noHeader}
        >
            <div className={utilStyles.flexGapContainer}>
                <h1>About Us</h1>
                <div>
                    {`Thanks for visiting our travel blog, Trails And Trekking. Our names are Anders and Lauren - we're both originally from Oregon,
                    but we've spent the last two years traveling the Pacific Northwest and beyond. We created this blog to share our passion
                    for exploring the outdoors, and to inspire others to get out adventuring. 
                    I'll give a you quick breakdown of how we got to where we are, and what's in store for us next.`}
                </div>
                <div>
                    <Image
                        alt=''
                        width={800}
                        height={600}
                        src='https://lh3.googleusercontent.com/pw/AL9nZEVrAtSS12cZlnzLeSUjJaaEhYA9YiLp2ze7K66WG4Jst083guDxMs6cVqng7xFHSyF1lJgIsHa4QlbIM4VsXcnKYEGFHKLcyDGL63NV-5HOscHg4xZnO_wJFBNjOjMNLTmsOdNcAzFRhRHGMPl7hFNT=w800-h600-no?authuser=0'
                    />
                </div>
                <div>
                    {`Lauren and I both graduated with Bachelor's degrees in Computer Science in 2019, and found ourselves working corporate jobs as software engineers
                    near Portland, Oregon. We had been on several trips together at this point and knew we wanted to travel more,
                    but weren't sure how to actualize our dream while keeping the security net of a stable job.`}
                </div>
                <div>
                    <Image
                        alt=''
                        width={450}
                        height={600}
                        src='https://lh3.googleusercontent.com/pw/AL9nZEWNgWhbFFcFeRPh0XM3_A1NmemckC1See6LNJzF7a1mJ9uiIogo6Vs1fAGWI687KkWOAaa_83NPR5cGCiMggn71fgdIUx0RN1VrEkM_sYR2XUCls7ElRROI3Iq1h9LSAbOQOOLXKr97I8DPQagEICfB=w450-h600-no?authuser=0'
                    />
                </div>
                <div>
                    {`With the advent of remote work in 2020, our jobs transitioned to being fully remote, which allowed us to work anywhere
                    with a reliable internet connection. While we were both working full-time, we quickily realized this was an opportunity to travel more
                    while maintaining a steady paycheck from our 9-5's.
                    In the summer of 2021, we had our first foray into a semi-nomadic lifestyle and rented a modest, month-to-month apartment near Bend, Oregon.
                    Our time in Bend turned out to be one of the best summers of our lives, and we resolved to continue traveling the next year (and to
                    bring our cat along whenever we could).`}
                </div>
                <div>
                    <Image
                        alt=''
                        src='https://lh3.googleusercontent.com/pw/AL9nZEUVMbHYcuF5b9rQctog-Dlx8d5UXCRVtKaFmnT3C9KlqmDK4hdHSvS8OpZKJ-wLAtlG6TfDFeJgeICktBeb9Da7b66BrI8b1Iy87PVfWFhCTaR6_-36-7uObDcqm6W2d-ahHzI_ySzoV2G7KOXwU5DY=w800-h533-no?authuser=0'
                        width={800}
                        height={533}
                    />
                </div>
                <div>
                    {`As 2022 kicked off, we temporarily relocated to Portland and began looking a new destination to visit when spring rolled around.
                    To make remote work easier, we planned to stay within the same time zone, and decided to try northern Washington State, about 5 hours north of Portland.
                    We ended up spending 5 months in Washington hiking trails in the North Cascades, and went on several other trips to backpack in southwestern Canada.
                    The North Cascades were by far the most beautiful trails we'd ever hiked, and we fell in love with the incredible alpine wilderness that fills this
                    part of country.`}
                </div>
                <div>
                    <Image
                        alt=''
                        src='https://lh3.googleusercontent.com/RzSFN7WyLGNKmgjhdDzd_zx6c7ANyvqZaBPZaMqICbuCKnN0VhUWtfjXJ3JIVdm2gE0WhK3K0hkUS-hQZkkxm95LU2xoTea5nfj4Y4HSvRVEzSZX8HIghXns-Xuz7XIZBUwD3F8q6Hu3aocfPWyWzeaKwZ5YO6FCKTbEgnoHK6RUU_SXv0RpRpD31NbmAMYx-u4dDjdDKHSOVbqzVV-v0WBQZDBuJKxKP_AHsyDRwSPEwf3rmHQiwLLSLZpRDME8SFQZFvlzyXgh1SE_H7ZgCTab14Ln3wOdCp15UVgXxfHQdmW9i1E1TFXqTl0nB-TjpLR-qvhjJlIt7SeF3ryY85pksAEQkjEAioXP4S2mTGEvMUv4zW-060ZEnY2pu6ENz27iSlNeDU3ylGLGfe0ALjqJmX2RalrhcYv1vOiaCAMK-RmudPHZQM8veGQVBogPY_Uqtylm9BhI9WC0QtQiiIlPP0yIMRWwchVduKDVe0iyrWrMBMhRmeqW2GidEHPeKy2P_e0T7yDdbrGzjrINNUg7jGux-pbq7RotZrjMBpjnei9t8HzYKa68VG2-17ccperUPhFPubjEsFIa9q7WdDwibBZnZXkSP7mul8WHEvfz0doEzR7t8Secna4zaqLSsUfPnjmDTlOSvks0z7VjWrGu8OGeuoxobjII6gu5NkeSip2Rn78dNTDCCqG_smfRpDRfoHMXWlwMm8CmWD_3aCyd-CV707-e18GoC0tiAhwlXG4dltHTFLhjufRs4F_meV5_zgQnnxa1UrlBgwPiFF6NEI3rZNOPqVSoad7VHuK57ugjIRLSPjot21k7WwGIw6Np2Bwc4UyE-gcFRSVaZ5Ib6EjtOmUyg70MDeXTtYbCf0GZV8MRUNo4SlgqF8GPygEaCghdKTJI6Rt5_jVjDKgz5v6bgC8h-90av7HNByT2zfDHzfhYxY4XjEvru_LiVCIKETN1NcZ0FOUwMI8=w533-h800-no?authuser=0'
                        width={533}
                        height={800}
                    />
                </div>
                <div>
                    {`After our stay in Washington, we went on a 35-day stint in Oahu, Hawai'i, and had a completely different experience than 
                    anything we'd done before. The lush, tropical hikes had astounding scenery, and were surprisingly physically and technically challenging -
                    if you ever hike Oahu, be prepared for more insanely steep, muddy trails that give you a full-body workout.`}
                </div>
                <div>
                    <Image
                        alt=''
                        src='https://lh3.googleusercontent.com/pw/AL9nZEWeBNkr8Yrg6GzLLHGYm8yJlbg2byjlaRTZiXP6zZmUlK3XUh7KOLaXAln0hR35EO_Tej9Bbhgpqbt-OABMQUYzZlBTuhnttrEd3WQ463cGhk-bryg_WSGfXKsViHzoXMaguJJr00DgVmCOSUjtB-tu=w355-h533-no?authuser=0'
                        width={355}
                        height={533}
                    />
                </div>
                <div>
                    {`Right now, we're back in rainy Portland, Oregon, planning our next adventure. If you're interested to see where we've been, check out some of our other
                    posts on the site.`}
                </div>
                <Contact/>
            </div>
            <RelatedPosts
                text='Suggested Posts'
                tag='guides'
                metadata={{'title': ''}}
            />   
        </Layout>
    )
}