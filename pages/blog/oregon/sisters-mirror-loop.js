import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import { CentralCascadesWildernessPermit } from "../../../lib/common";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";

//+metadata
let metadata = {
  title: "Sister's Mirror Loop",
  date: "2021-06-19",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLVt-06h0-ZNCa9E70jtJ1fQfV5jUNvYj3y5tp-D-St27MDYy9Knzq67xipiMh-UaRQcIrpbIt8qAmKrXNNvvOd-Psq6EoOYuCfYKC6fBP1yfOQ6N-gEW16OMg0kzsqVCT0IZWfvd-wB9hI3zvoixQaF=s1067-no?authuser=0",
  tags: ["backpacking", "lakes", "oregon", "sisters"],
  disabled: true,
};

const subText = "18.61 miles, 2,011 feet gain, 1 night";
const trailhead =
  "https://www.google.com/maps/place/Quinn+Meadow+Horse+Camp/@43.9975329,-121.7890709,17z/data=!3m1!4b1!4m5!3m4!1s0x54b8abda495b57bb:0xab653de931fb5259!8m2!3d43.9975291!4d-121.7868822";
const sistersMirror =
  "https://www.google.com/maps/place/Quinn+Meadow+Horse+Camp/@43.9975329,-121.7890709,17z/data=!3m1!4b1!4m5!3m4!1s0x54b8abda495b57bb:0xab653de931fb5259!8m2!3d43.9975291!4d-121.7868822";

const cover =
  "https://lh3.googleusercontent.com/pw/AM-JKLXY_dPQ7BXWgFQcEHN6LR6_VhWevDbd3m9oAUCHLyiaSP2_Ey3XmE-y4SCyOAEw5vJ9n8SCEXM71pP8mV2zHHkXEVRCGffYx2WixbrWvYBpb891okhZdxgCkBmSojxD3-WBy_l71XIsE-S4QvKMqUPQ=w1616-h376-no?authuser=0";
const log =
  "https://lh3.googleusercontent.com/pw/AM-JKLX7r30CWphB34HdF73b2kDnwcTA8l2vmm0nDFoqYUhJWYRJcNep_dYvOpjvQU-vXGM5uupIX46Pu5wfoZIZhR9rr4uJZFNWQQLAQjtQyPsTvuojntVmjNDhGWhuAa5obUIic5t-OBuPbM0La43TLIJM=w1597-h1067-no?authuser=0";
const silhouette =
  "https://lh3.googleusercontent.com/pw/AM-JKLUZU7yXDOUqetNw7e9sFZPzEoJyvxpsb0NIqr7L5r-a7M-LIjeQ3j7GfjhYBR6pCZNJWGxRCbXkYqN0AdNl7Tt6ZSEIRnAM8FIrErKsN88M21rg9PNMh7N7pj0507o44EoePuIDECtCrD-bOQnu1il3=w1597-h1067-no?authuser=0";
const floating =
  "https://lh3.googleusercontent.com/pw/AM-JKLXlchDAM0w6T1SfLxbJFZJN84SdhA8DTg8Jy6akS58_HjZvM5TODRLBIOfDHemErG46vqcyDYs2kZ4YVVYBdlFXMZ1zzOfbxQGdHfXdRBrdnXKIiwtRYg9AbNLIRas2VgjhzXEeZfi8EtSx_TpPPYoR=w1597-h1067-no?authuser=0";
const tent =
  "https://lh3.googleusercontent.com/pw/AM-JKLWtRhZkMR9VI_fOIvMbUqvNH8yVBeJAnEcMZhs4CMyZM1H_3ZQvHCSV5AWtvk3TUitOA7FKHVJQ9OyPfNR9TnYR0_55M_xZtjXMj3YHjKXpXGg6WJgp2xdCN41_Qo8bpCZkRX25AudCfG1eLhuk3KTS=w801-h1067-no?authuser=0";
const lake =
  "https://lh3.googleusercontent.com/pw/AM-JKLX8VqQV-1AdLRXIMgZ1lXHlAt4MzaGb8KdrC2a-BaVGgZGmRWjkgAqkrJ9N0gRwkLZwtnqhSldErSvRhOIzWHra6GdvRPWRiy1djSalznAgHfCuMYjjYI1D7hd_k4ePX6xWPSXGXk4j9CAtsVy5FJuq=w1597-h1067-no?authuser=0";
const mirror =
  "https://lh3.googleusercontent.com/pw/AM-JKLVRpCzXWY6r3nkKCEQJ1_Aq3EizaElsiJ4qpN4xZywSSndxM2DXhuqKxeYjeIeIQZa9so-JLyQ40u2jl78fEQkeIK90OztO76Xgwvf7E2QEFTq1xmV83nRCTx4AicurqYvQMBwIArrBfjyPTi5LuvmJ=w1597-h1067-no?authuser=0";

export default function Post() {
  return (
    <Layout
      headerImage={cover}
      headerText={metadata.title}
      subText={subText}
      description={`Lakes abound on this backpacking loop near South Sister.`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div className={utilStyles.textBlock}>
          Starting at the <Link href={trailhead}>Quinn Meadows Horse Camp</Link>
          , we completed a one-night backpacking loop of{" "}
          <Link href={sistersMirror}>{`Sister's Mirror Lake`}</Link>
          {`. On the way up we passed Horse lake, and took the
                    Red Hill trail to Sister's Mirror. About three miles from the Mirror Lakes area, the trail was completely lost under
                    snow, and we relied on GPS to reach to the lake, trail blazes were not visible. On second day, we took the Mirror
                    Lakes trail back towards Quinn Meadows, there was hard pack snow almost the entire way to the trailhead.`}
          <br />
          If you are thinking of doing this loop before melt out, consider
          bringing a GPS, spikes, and a topo-trail map. Route-finding would be
          difficult to impossible without these items.
        </div>
        <Image alt="trail" height={450} width={600} src={log} />
        <div className={utilStyles.textBlock}>
          {`We camped on the shore of Sister's Mirror lake, in the Mirror Lakes area near South Sister. There's a huge amount of
                    lakes in this area, and you could easily spend a day wandering between them. The lakes range in size from tiny ponds to 
                    average-sized lakes like Sister's Mirror.
                    The area is popular for day hikers and backpackers, but due to the snowpack in mid-June, we saw only one other couple 
                    camping.`}
          <br />
          <br />
          Please note that the{" "}
          <Link href={CentralCascadesWildernessPermit}>
            Central Cascades Wilderness
          </Link>{" "}
          is a permitted entry zone. The trailheads used in this trip are
          limited for overnight use.
        </div>
        <Image alt="silhouette" height={450} width={600} src={silhouette} />
        <div style={{ width: "1200px" }}>
          While not required, bringing your floaty is recommended. The water
          might be a bit cold in June!
        </div>
        <Image alt="floating" height={800} width={1200} src={floating} />
      </div>
      <hr />
      <div className={utilStyles.flexWrapContainer}>
        <Image height={450} width={300} alt="tent" src={tent} />
        <Image height={450} width={600} alt="lake" src={lake} />
        <Image height={600} width={900} alt="mirror" src={mirror} />
      </div>
      <RelatedPosts metadata={metadata} tag="sisters" />
    </Layout>
  );
}
