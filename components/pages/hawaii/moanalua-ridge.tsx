import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import MapEmbed from "../../maps";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import HikeInfo from "../../hike_info";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
const pageURI = "/blog/hawaii/moanalua-ridge";

//+metadata
export const metadata = {
  title: "Moanalua Ridge Trail on O'ahu",
  date: "2023-02-26",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8Aj2YMJTXW9d6MHPZKjjJ3vt_mq6gmg9is9uM0X6VvWWXRuvrvp_s3FtpB2aGsYyvPvVijhUra2G0t8deUocbgOmWnjk0DuXKFP-8GhlQ2JomYyHLtfRqILhC41mHmtf6B5IB0f189V0H0Xii6brqCv=s653-no?authuser=0",
  tags: ["hawai'i", "hiking"],
  preview:
    "Hike the challenging but breathtaking Moanalua Ridge for a view that's well worth the effort.",
};

export default function Moanalua({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <HikeInfo
          distance="10 miles round-trip"
          elevation="2,900 feet"
          difficulty={HikeDifficulty.VERY_HARD}
          season={BestSeason.YEAR_ROUND}
          trailhead="https://www.google.com/maps?ll=21.374094,-157.879939&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=5360102199614774508"
        />
        <div>
          {`Looking for a challenging day hike on O'ahu that will reward you with incredible views? The Moanalua Ridge trail is known for its steep ridges and difficult climb, as well as its 
          views of the island's vibrant, lush rain forests.`}
          <br />
          <br />
          {`The roughly ten mile out-and-back is deceptively difficult: scrambling up the ridge's muddy slopes is a grueling test of endurance.
          Despite the challenge, the Moanalua Ridge trail is a must-do for experienced hikers, guaranteed to leave you with an unforgettable adventure.`}
        </div>
        <br />
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Moanalua Ridge, O'ahu, Hawai'i"
            src="https://lh3.googleusercontent.com/pw/AMWts8Bf-hjejpFq0ANl3gCGv-7CEr_TYPFEOvVw1Rqrndy-3wdqqdJAdRGSM65X1fqi6b_EPxf8ATT1m5NDqbJZN1nbvaTnRMKBU7Re7dR6e3ogan52sLUD8PXlOSew_k-bginpJMuPq8g5sN7A8tr_qB5g=w799-h533-no?authuser=0"
            width={799}
            height={533}
          />
        </div>
      </div>
      <ReadMoreLink
        enabled={readMore}
        text="hiking Moanalua Ridge"
        uri={pageURI}
      >
        <div className={utilStyles.flexGapContainer}>
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`The Moanalua Ridge trail begins on a gravel road at the far side of the Moanalua neighborhood park. Look for parking in the adjacent neighborhood.
            Leaving your car at the neighborhood park's lot or blocking driveways/mailboxes is likely to land you a ticket, and you may see signs warning of this.`}
            <br />
            <br />
            {`On busy days, the nearest available parking may be up to 1/2 mile from the trailhead, which can add some extra distance to your hike.
            After you park, walk up Ala Aulani street towards Moanalua neighborhood park. You should see a gravel road leading out of the parking lot heading towards a gate;
            this is the beginning of the Moanalua Ridge trail.`}
          </div>
          <MapEmbed
            query={`Moanalua+Valley+Trail+Start+(Kulana'ahane)/@21.3739403,-157.8803524,19.04z/data=!4m9!1m2!2m1!1smoanalua+valley!3m5!1s0x7c006eb587e8bc79:0x4a62e88d2fd41cec!8m2!3d21.3740943!4d-157.8799386!15sCg9tb2FuYWx1YSB2YWxsZXlaESIPbW9hbmFsdWEgdmFsbGV5kgELaGlraW5nX2FyZWHgAQA`}
          />

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>
          <div>
            {`The first 2.7 miles of the Moanalua Ridge trail follow an overgrown road through dense forest - while it's relatively flat and easy hiking, don't expect any sweeping views or photo opportunities.
            At the 2.7 mile mark, you'll come to a sort of a couple of two-way junctions: At the first fork, take a left to stay on the Moanalua Ridge trail.
            Shortly after the fork, you'll come to another junction. This time, take a right for the Moanalua Ridge trail.`}
            <br />
            <br />
            {`The next 1.9 miles after are where things start to get interesting. Once you pass the three-way junction, the trail starts climbing in earnest and you'll quickly rise above the
            thick valley forest. At this point, the views of the ridge and valley begin to come into view. 
            Be sure to take plenty of rest breaks during the climb to appreciate the beauty of the surrounding landscape.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Hiking Moanalua Ridge, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8CPetvZy47V2jSrtaz7Rj5ynyIpZC2r6alAk0M3MEFmssd-asVRj3ELb087pMKzo4XSfXM-r7Dn_SA86LhzGrFi4OAH9WHpnms73uNnkFPCxRcLsJ32iyaZcTab4OXdjaCsLIWHPZBASc39Wyrl0iB1=w533-h799-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <div className={utilStyles.flexWrapContainer}>
              <Pinnable
                page={pageURI}
                alt="Looking back down Moanalua Valley, Oahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8DPQyp9thtu5crEUBtSdbJ6NsTq8qx-mg_ZHezeJssmkt3MNS-mjohEsuHB9TJWSzKq7VY9DtQdS54GSzs19fyc5kFdGEW7JDkPNhBrjbhD6J9XVMRzdVGbAgUN6fdI_IHKGj6anc8qHcKmMjW7RwhN=w533-h799-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            {`The trail up the ridge is extremely exposed, rugged, and muddy. Many other hikers were using microspikes during our trip, and we regretted not having ours.
            The extra grip on the slick trail will prevent slips and falls.`}
            <br />
            <br />
            {`On the way up there are multiple roped sections, as well as hand-and-foot scrambles. Having microspikes and/or gloves for these parts can be very helpful.`}
            {`Keep climbing and eventually you'll reach the summit. If you're lucky, the almost ever-present clouds around the Ko'olau Range will clear for a beautiful view of the island.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Moanalua Trail, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8AECVblBfH4M-NPKlyb4pRvcQMRHOVdBhsdfiNqnuGq7lsrp2R4vLxK1SnM5K8OojRhZwn1QtaPNClVsF_fDV2MuY0sbUw-vLuuB4g7CIFjWtFkv6E0NpUDwYKn2zf5yviQrOal1yQ2QK8LxGLcJzHj=w565-h754-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            {`If there are strong winds or any forecast of rain, you're better off to attempt this hike on another day. It's simply not worth it to try hiking the ridge
            during bad weather, as the conditions can quickly become dangerous. When you're planning your hike, look for dry, sunny days with calm or no winds.`}
            <br />
            <br />
            {`Bring plenty of water and snacks on this hike. A full out-and-back to the summit will take 4-7+ hours depending on your fitness level. The heat and humidity combined
            with the hike's intensity can be very tiring.`}

            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="View from Moanalua Trail, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8DAG5hKOLruvRSLFms2EukHeea0CSY7r1MbWBj-4SkbduZdZrO05XvoVk_ru0K3kwvVk4cIrLbWBVYUU_7TE1ReVCsYOT6MHu-IknAv0rXdZaupi6qe3i3qlvjqd5Uv_cJV-F6l5Vsfhy1dkPN879Qu=w533-h799-no?authuser=0"
                width={533}
                height={799}
              />
            </div>
            <br />
            {`Depending on how tired you are, the way down can often be more difficult than the climb up. Take care not to slip and safely navigate your way back to the car. While this was not
            the muddiest hike we did on O'ahu, we were still decently caked in the stuff by the time we made it back.`}
          </div>
        </div>
        <br />
        <Contact />
      </ReadMoreLink>
    </>
  );
}
