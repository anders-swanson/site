import MapEmbed from "../maps";
import Pinnable from "../pinit";
import utilStyles from "../../styles/utils.module.css";

export default function WashingtonPassCamping({ pageURI }) {
  return (
    <>
      <h1 className={utilStyles.justifyCenter} id="nearby-camping">
        Camping Nearby
      </h1>
      <div>
        {`Because of the trail's distance from population centers and its popularity, I suggest camping in your car or at one of the 
                    nearby campgrounds, and hiking in the morning. Colonial Creek South Campground is 30 minutes west on Highway 20,
                    and has 10 first-come, first-served spots after the summer reservation season ends (usually in September or October). Lone Fir
                    and Klipchuck campgrounds are also first-come, first-served and are located 10-25 minutes east of the trailhead. Lone Fir and 
                    Klipchuck campgrounds offer a range of amenities, including drinking water, pit toilets, and fire pits. Both campgrounds are set
                     in beautiful forested areas and provide easy access to nearby trails. Dispersed camping is limited in this area due
                     to its proximity to North Cascades National Park and the lack of access roads.`}
        <br />
        <br />
        <div className={utilStyles.centered}>
          <Pinnable
            page={pageURI}
            alt="Lone Fire Camping"
            src="https://lh3.googleusercontent.com/pw/AL9nZEXU3mV1LvQExhLJIUkgf-sVaC7I97QVqhfnfdpW9gm3NilIpTk5vKC3ViiHJMtQiI3NVkAfeT129q479B9GeL4ildhapVulQEC7HJ_VuwCIanuXyxU7GbkBUr1fakz6gjQI-9nhvJ_e9JB36XSND1d3=w355-h533-no?authuser=0"
            width={355}
            height={533}
          />
        </div>
        {`In the following section, I've added pins for Colonial Creek South, Lone Fir, and Klipchuck campgrounds. We stayed at Lone Fir 
                    Campground during our trip and found it to be an excellent base camp for exploring the nearby trails.`}
      </div>
      <MapEmbed query="Colonial+Creek+South+Campground/@48.6810889,-121.1001968,14.96z/data=!4m5!3m4!1s0x5484bdfab8f10d75:0x41e7c72111746f86!8m2!3d48.6891658!4d-121.0955492" />
      <MapEmbed query="Lone+Fir+Campground/@48.573151,-120.6167413,14.08z/data=!4m5!3m4!1s0x5484a97bc7e1fd37:0x2a0ffec0be98b780!8m2!3d48.5813061!4d-120.6246965" />
      <MapEmbed query="Klipchuck+Campground/@48.5940161,-120.5320873,14.08z/data=!4m5!3m4!1s0x548355dcfadda2d3:0xd318d4ba1996073f!8m2!3d48.59736!4d-120.5129999" />
    </>
  );
}
