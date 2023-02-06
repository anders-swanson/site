import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import Contact from "../../contact";
import MapEmbed from "../../maps";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
const pageURI = "/blog/washington/blue-lake";

//+metadata
export const metadata = {
  title: "Olomana Three Peaks Hike on O'ahu",
  date: "2023-02-04",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8DosnsEG1-D3bd6P3JzqTANWoD4S9JgQFr_uC5CM_z1zz5rJJMuOpEyhCuX1qu76CeMk0-be3GfvEEl-nlniLCq0rilBcslHg_SW_gfJ1jGV88jfdTpzA5uWFmCJozZBq3GzZyydnvoGNL7BvwHTR3E=s800-no?authuser=0",
  tags: ["hawai'i", "hiking"],
  preview:
    "Hike the Three Peaks trail to Olomana on O'ahu's scenic eastern side.",
  subText: "4.5 miles, 1,600 feet gain",
};

export default function Olomana({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.centered}>
        <Pinnable
          page={pageURI}
          alt="Olomana Third Peak, O'ahu, Hawai'i"
          src="https://lh3.googleusercontent.com/pw/AMWts8DO4nQbYP4R-aBSNJ2jHXds5Xl8_6HuwHH5Pllhv2EFho9E78uvMponge-_YjL-STL4fA9VaHt9ac8kr4nVus80gHgh7fTiRn3exCuA8MgdGlJWeNfcf3EOCHMpmA2AFSh5JUJAX5bHwWAxIwWJTjQK=w800-h533-no?authuser=0"
          width={800}
          height={533}
        />
      </div>
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`Scramble the mercilessly steep slopes of Olomana's three peaks for an astounding view of O'ahu's eastern side and the Ko'olau Range. One 
          of the most fun hikes on O'ahu, you'll climb up several rope sections and hoist yourself up rocky boulder faces to reach the first and highest summit.`}
          <br />
          <br />
          {`The Olomana trail has multiple steep drop-offs and is not suitable for those afraid of heights. Be aware that this hike is incredibly muddy and dangerous
          after or during rainstorms, and should only be hiked on dry days. There are many rescue operations per year on Olomana, so please be careful and hike responsibly.`}
        </div>
      </div>
      <ReadMoreLink enabled={readMore} text="hiking Blue Lake" uri={pageURI}>
        <div className={utilStyles.flexGapContainer}>
          <h1 className={utilStyles.justifyCenter} id="getting-there">
            Getting There and Parking
          </h1>
          <div>
            {`To access the Olomana trail, park on Auloa Road across the street from the bus stop. Park on the small gravel strip opposite the bus stop, taking
            care not to obstruct the asphalt sidewalk: Note that hikers have reported receiving tickets for parking on the asphalt. The following pin shows the 
            public parking location on Auloa Road.`}
          </div>
          <MapEmbed lat="21.376233" long="-157.763602" />
          {`From the parking area, it's a 0.6 mile to the Olomana trailhead. This section is entirely along Loop Road, which is an access road for the Royal Hawaiian Golf Club.
          While this is open for public access, parking is not permitted on Loop Road, nor at the trailhead. I've included a photo of the trailhead off Loop Road, as well
          as a GPS pin of its location to help you find the start of the trail.`}
          <MapEmbed lat="21.368404" long="-157.760973" />
          <div>
            <Pinnable
              page={pageURI}
              alt="Olomana Trailhead on Loop Road"
              src="https://lh3.googleusercontent.com/pw/AMWts8Cp2fOcNqvunxP9PESBIC7_YJoRomSz7g3W0bzZZYpetNRoDryfrn7VNRqH-W9qKaCe077kEbl4aaYIVpeIxeiaPNG_XUoYRjFVBqR30WgIUa1hKB99etYHFW5L2E-LRv50MnZri3F48eoxZ6okN3T1=w800-h533-no?authuser=0"
              width={800}
              height={533}
            />
          </div>

          <h1 className={utilStyles.justifyCenter} id="hike-details">
            Hike Details
          </h1>

          <div>
            {`The Olomana trail is seriously steep, and requires some moderate rock climbing to reach the first summit. The trail begins in a dense rain forest,
            ascending rapidly with periodic views of the surrounding valley and nearby ocean. We made frequent stops on our way up, the humidity of the day
            combined with the trail's steep grade quickly tired us out.`}
            <br />
            <br />
            {`Starting from the parking area on Auloa Road, you'll cover about 4.5 miles round trip if you hike to the first peak, including over 1,600 feet of elevation gain.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Hiking the Olomana Trail on O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8CuDXdgLJne3fLrn9pjhWDUC9Mh4nimBggLKANbg2t_-j04v2TqTXnPhmruimFHsU9oedSmgF-d0EAm-Cbmo0w4IvZ2fcQzSLzH38MPw7bFr4INOgX6-CkmKUX7ILeOzb_zzNWXWcPRTYrIx6nFN4to=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
            <br />
            {`There are multiple rope sections to climb to the first peak, the most difficult of which scales at 15-foot boulder. If you're physically fit and have a limited fear of
            heights, these climbing sections should be doable.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Using ropes to climb up Olomana, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8DxdQxD5KirQmR2NiPoi6A1b4hv80_omPRhnG1J0AhljOOgzgR47iEfSpuZ5z8I8MJ8UhjWWSWvgW8043Z4LTiHkfhdqYaexAW5qDKIdL0iO8DqNF-jvhEfWjTz2jNv0RhAkRN3a414mOCaPKTz2PWU=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
            {`After a very sweaty and tiring couple of miles, you'll eventually reach the first peak. The panoramic view from Olomana's summit covers the Ko'olau Range,
            ranging from well north of Kāne'ohe to Kailua.`}
            <br />
            <br />
            {`We opted to turn around at the first peak, but the trail continues 
            to the second and third peaks. Hiking further is not advised, especially so if you intend to reach the third peak.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="First peak of Olomana, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8DXJYvOKm4aP7dXmydW_2UxaDGobNH7904lGkkvZGDXV4MTsPCCkw3wgSClrvcZp8bzm8YnPkqKujDjXwu9mykOwJG_81DvzLaF9APcI7kELuPrASbcmBKnHzg2BsELHgAw9WHw8JwsWHUUNE7Twp9V=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
            {`Looking south you can see Kailua, and the Mokes (the offshore islands)`}
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Kailua from Olomana, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8BEOZugUX6RypxJNqEj2aW7ir50PrSxY842Pf5sADnszigy2kPmlK33T_MvSPeV8kXfKv6iD6JrwAcCXwphJGqXGbp0aACJwQhl7lwP1ea62aSGK_VvcwboJvBDL-ooIn9Tq0SJd7W3Z9YOJSS0qEf4=w800-h533-no?authuser=0"
                width={800}
                height={533}
              />
            </div>
            {`The second peak is relatively close to the first, but lower in elevation. We decided to turn around at this point,
            the trail having precipitous drop-offs on either side.`}
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Olomana second peak, O'ahu, Hawai'i"
                src="https://lh3.googleusercontent.com/pw/AMWts8DelGODaBJhOh8DET5lpaVdgPTdMoLPL2VIv8SEQHeQ4bn42vkTNStOMkHlDkZGGn843mZZX0qLZ7MMB2v_yZZQGXmZIL1WfzTyRP_ItjUyze6Ls1W2E5zrriwyXxPCG4XKVGaPm8C8OEq3BOwtc3LG=w355-h533-no?authuser=0"
                width={355}
                height={533}
              />
            </div>
          </div>
        </div>
        <Contact />
      </ReadMoreLink>
    </>
  );
}
