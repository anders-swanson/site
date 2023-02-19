import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import MapEmbed from "../../maps";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
const pageURI = "/blog/hawaii/kalawahine-to-k2";

//+metadata
export const metadata = {
  title: "Kalawahine Trail to K2 Summit",
  date: "2023-02-18",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8DueSioi1tRaUXgWpokBOldKsRmhosCMExcLSGeGtghhmiPAvCBndxm1slYCvt3io44LMGJDOeFmIgEpkgsTRhRFgP9R2z8VrFGa2AWuNEoMFgm13Zf0xJZQqyiKpKnaRBlFkW6VpECnQV14WV7kMMp=s800-no?authuser=0",
  tags: ["hawai'i", "hiking"],
  preview:
    "Summit K2 via the Kalawahine Trail on O'ahu's beautiful Ko'olau Range.",
  subText: "8.3 miles, 2,750 feet gain",
};

export default function K1K2({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.centered}>
        <Pinnable
          page={pageURI}
          alt="Ko'olau Range, O'ahu, Hawai'i"
          src="https://lh3.googleusercontent.com/pw/AMWts8BhlRIN-xe36lmnC_CGc94kFQBCvAES0VeKv-9gxAjGHq-B1QxJpNbzrNK03GGwywFy-cxxGBxBTVaIg4a9iXYgFJTwaIAPRyyxlKNlEiOsqOdfuSh1SjEXImW8ZOaleCpbwN_wH7QpmikzRCJGkNq_=w355-h533-no?authuser=0"
          width={533}
          height={800}
        />
      </div>
      <br />
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`The K1/K2 Summit Hike, also known as Pu'u Konahuanui, climbs some of the highest and most significant peaks in the Ko'olau Range.
          As you climb K1 and K2, you'll be rewarded with breathtaking views of the Ko'olau Range and a top-down look at the lush greenery of O'ahu's rain forests.
          The K2 hike was one of the most adventurous hikes we tackled during our time on O'ahu, and it spends plenty of time above the trees with gorgeous views.`}
          <br />
          <br />
          {`This trail is quite technical compared to the average hike, involving steep climbs with the use of in-place ropes. 
          To add to the difficulty, the trail to K2 is coated in a thick layer of slippery mud. Once you finally reach the top, take a look back and marvel at the rugged hills you climbed.`}
        </div>
      </div>
      <ReadMoreLink
        enabled={readMore}
        text="hiking K2 Via Kalawahine Trail"
        uri={pageURI}
      >
        <div className={utilStyles.flexGapContainer}>
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The K2 hike starts at the Kalawahine Trailhead off Tantalus Drive, a 15-20 minute drive from Honolulu. You can find plenty of parking spots along Tantalus Drive on the shoulder.
          This trail is only moderately traveled, so you should not have difficulty finding parking most days. When you are parking, take care not to block any nearby driveways.`}
            <br />
            <br />
            {`Check out the pin below to see the location of the trailhead on Tantalus Drive. I've also included a photo of the signs at the trailhead that let you
            know you're on the Kalawahine Trail.`}
          </div>
          <MapEmbed lat="21.330596" long="-157.821420" />
          <div>
            <Pinnable
              page={pageURI}
              alt="Kalawahine Trailhead on Tantalus Drive"
              src="https://lh3.googleusercontent.com/pw/AMWts8APBP1vPy0a8AsIRSe46Vq7-WK7AQX-UgERUTp4oxQ3UHDGccLQ9h1_Rf6S84w3_xHvta8tjPzTcx9KUCwWK5yp_UodATHP3BTPt_MZIKzaQol-9Zz1lAJ2s2Aecwtxs5-DsYxaP9lxC0DlLL3lQDa9=w355-h533-no?authuser=0"
              width={533}
              height={800}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>
          <div>
            {`The Kalawahine Trail starts with a gentle uphill walk through the rain forest. The first couple miles stay in the forest, without much to see
            other than the vegetation. Keep a look out for Gauva trees on along the trail, which grow plentifully and many be fruiting (Guava is sweet and edible).`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Bamboo forest in Round Top Forest Reserve, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8CaUQK18fLlLOGLyteezI--ooDPzfab-wSAfjmKrQ14HUBWRfxUjXOt2RjxiPIebIGfihK1avQdkfmUvbMrSiLG22mqe1iUUo6OdZdKhBgDsGtAaIpxS9BH5Lm3WxiUP6P1SagwECAG4Pna7Dnw0Fb3=w355-h533-no?authuser=0"
                width={533}
                height={800}
              />
            </div>
            <br />
            {`Follow the Kalawahine Trail as it merges with the Pauoa Flats trail, hiking for about 2 miles until you reach Pauoa Flats. There is a small clearing here,
            with a view of the valley looking down towards the Pali Highway.`}
            <br />
            <br />
            {`The trail to the K2 summit (Konahuanui Trail) begins through some dense brush
            at the far end of the clearing. From the viewpoint it barely looks like a trail, but once you push through the brush it opens up.`}
            <br />
            <br />
            {`Past Pauoa Flats, the trail becomes extremely steep, often with sharp dropoffs on either side. This is also the most beautiful section of the trail, as you rise above the tree tops
            and can see a stunning panorama of the surrounding valleys.
            If it's raining or there are strong winds, I strongly suggest to turn around at Pauoa Flats. The remaining 1.6 miles to K2 are dangerous to attempt if the weather is unfavorable.`}
            <br />
            <br />
            <div className={utilStyles.flexWrapContainer}>
              <Pinnable
                page={pageURI}
                alt="Pauoa Flats, Oahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8AAMeNyhy8SLjKkM7P-EkvEe6D2s_M3HTzFVkTUeOio46XY_RWpUPXcSbsm1H3GdUBydAG9r4Zm9FhVim7McEVpL051_5_mdOMXVFWQwHM3VGxuGC3tR4unRJjy24u7IYz8CUpzMsCSsEJB4Lnx0DVA=w355-h533-no?authuser=0"
                width={533}
                height={800}
              />
              <Pinnable
                page={pageURI}
                alt="Climbing the Konahuanui Trail, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8BQvsF_Yymk1HnSp9v86NiBNlx9anvpc_jzoQ8zOGJhGcR6uWC5JEd8aHf8_n_cd-XzkMovGbnKlKm1EwP-_zvD9kTrl5WytIGaF5OjVXbrphUGFFbo-Rt6wOtqIIJapkPT1TWoitmF1LjisEfXqg9O=w355-h533-no?authuser=0"
                width={533}
                height={800}
              />
            </div>
            <br />
            {`The last 1.6 miles to K2's summit are both slippery and tiring, rapidly gaining elevation through many, many scramble sections. Some of these
            sections have in-place ropes, while others require you to find handholds where you can. We found it best to take this part slow, resting as needed and only
            continuing once we felt ready.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Konahuanui Trail, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8DmlIPu4gy1RDDqQacF2tZotzNSzEhxW4LAQB6YZ09saPN3pwc-rF3iCi8twDCCeU2-BUO6o11YHmrQAABHAZfWk66W6IdnqFIUJvHMxHtEe0T8OQ2xoF-t60RsKTiYwi_FnZ4Ej0qNTwZPFY6daOEX=w355-h533-no?authuser=0"
                width={800}
                height={800}
              />
            </div>
            <br />
            {`Keep climbing and you'll eventually reach the summit of K2. Because of the mud, steepness, and necessity of rest breaks, it took us quite a while to hike that last mile.
            The view back down the valley is spectacular, and hopefully the clouds break for good views around the summit. It remained pretty socked in when we reached the peak,
            so we didn't get to see much of the eastern side of O'ahu from K2.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Looking down from K2, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8AaZstyDQVGX3Z6_tcp2njucQySIlI62zqO_-4aVpLP4w5VZKyns6uBKeOp5oWJwCIZApksSKXv0eY5gJdTcdSRqY688teVYrTNsbe5qtoI0QoOwWK1SkKSWuDM22UCHv3elvHqoYba7ABY0qyX_j-L=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
            <br />
            <br />
            {`If you're feeling adventurous, you can hike another 1/2 mile north from K2 to K1, which is another nearby mountain peak. We decided to turn around at K2, but met another pair of hikers who said the trail to K1 was 
            similar in difficulty to the hike up. Either way, make sure you save plenty of energy for the hike down. Going down these muddy hikes is challenging, so take your time
            and hike carefully.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Heading down from K2, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8DueSioi1tRaUXgWpokBOldKsRmhosCMExcLSGeGtghhmiPAvCBndxm1slYCvt3io44LMGJDOeFmIgEpkgsTRhRFgP9R2z8VrFGa2AWuNEoMFgm13Zf0xJZQqyiKpKnaRBlFkW6VpECnQV14WV7kMMp=s800-no?authuser=0"
                width={800}
                height={800}
              />
            </div>
            <br />
            {`Descend with care, and you'll return to your car on Tantalus Drive at last. By the time we made it back, we were caked in mud from the waist down. I recommend bringing a change
            of clothes for this hike, or at least a pair of clean shoes to swap into afterwards.`}
          </div>
        </div>
        <br />
        <Contact />
      </ReadMoreLink>
    </>
  );
}
