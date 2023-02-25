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
          src="https://lh3.googleusercontent.com/pw/AMWts8ChYPBLH_d0JkFOpAoTXXglyIpWu47FuRxgkyx9NyIvbPog-UiInbSZUxMHYw5fzcZ1NPFdj32VKFj_qNwYC2DsZ7ACm-w4xMBsShVPAG06AJlNyzy0ZXBZOudwnkelKrc7IotwVVGxS4QO1Zz3e0LC=w533-h799-no?authuser=0"
          width={533}
          height={799}
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
              src="https://lh3.googleusercontent.com/pw/AMWts8DpR4dGhPMpzFdLAMR9KCaam6slsj4_i-LFc0YtYo9SCtMnkU9J3ToSro8YVGzzCUDEzq0cP0JJPovGLZO5sEngUFQ2ixf1CVwg8v37Y-lP6WY6FMFFIP_8jioS03i1wkSOm4JW0nH2YQernnxb7wcf=w533-h799-no?authuser=0"
              width={533}
              height={799}
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
                src="https://lh3.googleusercontent.com/pw/AMWts8BmPHl5C0Rvq6WAnp9OIBUBH1HK21kS90PkQFCn2X0oQjryBKOiuJ9147tYtKITnnADVZjUCMBv-gj6Yj0TLRYRPTgHOMJSLYKXQVV1ts6oOIIzxF0Cb2yNOKRzvzZxjsqnjOEWG0u1_3xNvRlxW1Se=w533-h799-no?authuser=0"
                width={533}
                height={799}
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
                src="https://lh3.googleusercontent.com/pw/AMWts8Dsv5nTNDOmJTinEtvQVGhz4geMgMYOzGe18-9L134qUq-o4Ek75gmEF-Y3ht9Gi7-B1-aGC4Ab1vYkp4p4xGIfKR7rC2hokTjQQSNQ-Z39Ix8cY3U94ZMShcf_-ufkOOsmYzo6146r4nVJA6ngaGm1=w533-h799-no?authuser=0"
                width={533}
                height={799}
              />
              <Pinnable
                page={pageURI}
                alt="Climbing the Konahuanui Trail, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8CKNrcwXeHsbUxWHoSUhvoSgN4M4BFbNTl-R9vz9ZegmFsSi52sVWX6Jn1EoJad5Xuor8vkWEW8Q39H9qBse-l1jUL0xn4_rX72uqCmwoQ2e5TqgRnO8sVcQRQaIz7tx4daTmN4BSqz-cYql0E9yadD=w533-h799-no?authuser=0"
                width={533}
                height={799}
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
                src="https://lh3.googleusercontent.com/pw/AMWts8AnYDEFVPbXWOEhNWsnnzyKR9CXFS1Anj1J6TzeZkgaSjbApVINsgyg9sQhFrI5Gbh-Bgd7pyG5xPDJIq9MlufprBrKqxWV7BtqPiayr7FlB305JTyP9liMLUl5m12p7eW5i83dxU3aVosv3NCVfBkT=w533-h799-no?authuser=0"
                width={533}
                height={799}
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
                src="https://lh3.googleusercontent.com/pw/AMWts8DYKMRKqByzM1bIOKFXz3ydp9Cl_fFlE1N1pp-2zanh2pHxClKpTVfyuSbanxHlmR2NgIVNEcIFlFAgEBZvt84fJigGl-_bUbqhVcgZeXp9CWm6wp4iEI7QiWDvqMVsj6fcLV_Cz6OT__C7ih947rK_=w533-h799-no?authuser=0"
                width={533}
                height={799}
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
