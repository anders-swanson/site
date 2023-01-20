import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Slider from "../../../components/slider";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";

//+metadata
let metadata = {
  title: "Dalles Mountain Loop",
  date: "2021-04-25",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLU7ss51ZNznlDCgNWaYP9MkawWJ0w-YqWksHfUQ0O87MIWpQnAbyIRSynnZK_0jlsNy62t4OZtfdvQs0T7aHESz60MRdb7_Y38etQpKjayDv3gVVzte8totA1DHOTkilRE_RrxGeIGYsiVCN2bXvlrn=s1067-no?authuser=0",
  tags: ["hiking", "wildflowers", "columbia river gorge", "oregon"],
};

const subText = "13 miles, 1,600 feet gain";
const trailhead =
  "https://www.google.com/maps/place/Crawford+Oaks+Trailhead/@45.6558713,-121.0971517,14.08z/data=!4m12!1m6!3m5!1s0x549621be76f4f723:0xe92aeaedd990341!2sColumbia+Hills+Historical+State+Park!8m2!3d45.642663!4d-121.1055748!3m4!1s0x549621c64b70bb85:0xed2a853923a2b8ff!8m2!3d45.6571086!4d-121.0862031";
const stackerButte =
  "https://www.google.com/maps/place/Stacker+Butte+Trailhead/@45.6780985,-121.0911704,14.67z/data=!4m5!3m4!1s0x5496234deae70d3d:0xe04b8a4d61444b0f!8m2!3d45.6949542!4d-121.0925934";

const trailWithFlowers =
  "https://lh3.googleusercontent.com/pw/AM-JKLVE3OyiOzDpzI60rp3USt08EniGUCiKQ3uXfQUmKegNBH-yF796IRwTBPcz2DGHopd7JNclnCL5aLqhjRrKuQ2Oyyijb3xMHXLTOMd_yGyUHPITLo1IkGF3fK6klTMhtY2P1pC2VYLw8NrIdxfLb0jl=w801-h1067-no?authuser=0";
const trail2 =
  "https://lh3.googleusercontent.com/pw/AM-JKLWm7xv8fO1x4ubCdY8WrL1lxSEHeOWZi7eZK825jnn4e6cZbHKzv739wP3jAKsSSV3Eig1u214gKulCNHC_58OuY85k51YoqLsQAEGjOx05szzvyZJb-pQJwOFKs5mUYR6u230qsAsOKpje5ElInCJn=w801-h1067-no?authuser=0";
const fenceWithFlowers =
  "https://lh3.googleusercontent.com/pw/AM-JKLXf_bJCwTddquYkJxP4jBnTy2eJOvElaErAr2oFQcDphCGNzn96P9ok1biB2BROu4nujfP2jqtO89aXoLJGgJmRDGbdljzI8dTCBQjmgVC2TAp89oIjfDE8jKxGTVgfpFQhzikiIbrARoNQM_9Y5afz=w1597-h1067-no?authuser=0";
const sliderImages = [
  "https://lh3.googleusercontent.com/pw/AM-JKLXNRGZY_ugcWNUu9uIb2taTCm9_Nvnye9sp_SUbzraAv2lOtS792BI0IAYDQQTQrODC-8rdXqBEJf_uu7TA3pUBSoa66BnZRQ-Ten2o5NMAIvOaJcr4jatUHLmo16ad9vnXvjHHa6DWcwJioGzIsrP4=w1597-h1067-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AM-JKLUbwl-a74YXpIoiaW9yFenu5pOVuuvp18HPBe6LeLC3_FBJkG9_imKee-2uwQZORn2-kfcKgD11Ev1oUYnbDcxN2fXXGx7OyDhTlxB4xOn6ok7FI_aBI-ogeIKlr-t0NcR_mBTNwjLgHTAabB8joEI5=w1597-h1067-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AM-JKLWYmSoU6PK9qWNf0vENPasqr2V8N_A7aHvlDwtIXyRkpGiFO0u_QJCDOZgfFThRRb5EoqIi8od-8MJJoGY5Bm5Y5Hm-C1xO5WAzudT5ql6dtyBVas8hv9NXq8MksFn2YZaLMYHZ0Xezce9wBvDwnFcP=w1597-h1067-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AM-JKLVjGsCKxQVPwyzOox3jffRb_WoydKjakVM7GIkox8XeCS3tQZgYv8EeDr3ipwVKa_JI-gYHFpXrEVBE4p5LC3kZBvocwcI7AaG5I5Hctqy9zdMbvQjt8Jhk1dkx6QYjUSFqpXWXuVtlYLWWMixE6OIV=w1597-h1067-no?authuser=0",
];

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      subText={subText}
      description={`Uncover a wildflower hiking loop in the eastern Columbia River Gorge.`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div className={utilStyles.textBlock}>
          We began the Dalles Mountain loop at the{" "}
          <Link href={trailhead}>Crawford Oaks Trailhead</Link>, looped back to
          the trailhead, and then drove a short distance to the{" "}
          <Link href={stackerButte}>Stacker Butte Trailhead</Link>
          {`.
                    It's around 8 miles to complete the Crawford Oaks loop (more if you take all the side trails), and approximately 5
                    miles to hike up to Stacker Butte and back. Both can be completed in the same day, if you are up for it.`}
          <br />
          <br />
          {`It's strongly recommended to visit the Dalles Mountain Ranch during the spring wildflower bloom. The peak bloom varies
                    every year with the weather, usually occurring around early May.`}
        </div>
        <Image alt="trail" height={450} width={300} src={trailWithFlowers} />
        <div className={utilStyles.textBlock}>
          {`During the peak bloom, the rolling hills around the ranch will be covered in yellow Balsamroot. A variety of
                    other flowers contribute to the bloom, including lupine, fleabane, and blanket flower. A the high point of the
                    Crawford Oaks loop, there is an alternate parking lot, and the historic ranch. Most people park here to view 
                    the wildflowers.`}
          <br />
          <br />
          {`If you decide to continue up to Stacker Butte, you'll be rewarding with views of the eastern Columbia River gorge,
                    and even more wildflowers. When flowers are blooming at the Rancher, they're usually just budding at the top of 
                    Stacker Butte, due to the elevation change.`}
        </div>
        <Image alt="trail" height={450} width={300} src={trail2} />
        <div style={{ width: "1200px" }}>
          {`A favorite photo spot near the ranch is an abandoned, rusted out old car among the wildflowers. We didn't find it, 
                    but a lot of people I talked to seemed to be searching for it.`}
        </div>
        <Image
          alt="fence with flowers"
          height={800}
          width={1200}
          src={fenceWithFlowers}
        />
      </div>
      <hr />
      <Slider height={800} width={1200} slides={sliderImages} />
      <RelatedPosts metadata={metadata} tag="columbia river gorge" />
    </Layout>
  );
}
