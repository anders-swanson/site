import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import { CentralCascadesWildernessPermit } from "../../../lib/common";
import Image from "next/image";
import Link from "next/link";
import RelatedPosts from "../../../components/related_posts";

//+metadata
let metadata = {
  title: "One Night Backpacking Trips for Beginners",
  date: "2022-03-23",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLXNcW2fsTXlo5zhyrAEHcS4TojjXhtA-IVO-695wQI_6dIEZk11MuURrGNGs9AyPd2R000ZJCP-A75sgm0YqIEMQ5pk9oByucw5zp5lzKaoun145l-JpNVACjN_wRizngzQ0JgGeQBMuhLsLulzZSMWbA=s599-no?authuser=1",
  tags: ["backpacking", "guides", "oregon"],
};

const killenCreekTrailhead =
  "https://www.google.com/maps/place/Killen+Creek+Trailhead/@46.265345,-121.5707579,13.21z/data=!4m9!1m2!2m1!1shigh+camp+mt+adams!3m5!1s0x5496fad09064a871:0x116bf95df4b0c597!8m2!3d46.2884481!4d-121.5523052!15sChJoaWdoIGNhbXAgbXQgYWRhbXNaFCISaGlnaCBjYW1wIG10IGFkYW1zkgEKdHJhaWxfaGVhZJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VORGRqZG1RM1puUlJBQg";
const greenLakesTrailhead =
  "https://www.google.com/maps/place/Green+Lakes+Trailhead/@44.0365077,-121.7602828,13.83z/data=!4m5!3m4!1s0x54b8ac40ce8b6647:0x45000b3b0fe8dc40!8m2!3d44.031087!4d-121.7363949";
const jackLakeTrailhead =
  "https://www.google.com/maps/place/Jack+Lake+Trailhead/@44.4904044,-121.8111457,14.96z/data=!4m5!3m4!1s0x54bf11588b62d415:0xb3594c706ec5555d!8m2!3d44.4919137!4d-121.7941744";
const timberlineLodgeTrailhead =
  "https://www.google.com/maps/place/Timberline+Lodge+Trailheads/@45.3322327,-121.7125659,17.58z/data=!4m15!1m9!3m8!1s0x54be1eaaa37312a3:0x6738b4912b8ca4f2!2sTimberline+Lodge!5m2!4m1!1i2!8m2!3d45.3310658!4d-121.7113589!3m4!1s0x54be1c0003729767:0x78c190bba8454c33!8m2!3d45.330519!4d-121.709081";

const paradiseParkCamp1 =
  "https://www.google.com/maps/@45.3529244,-121.7478289,17.46z";
const paradiseParkCamp2 =
  "https://www.google.com/maps/@45.3553334,-121.7496171,17.46z";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Explore trip ideas for 1-night beginner backpackers near Portland, Oregon.`}
      ogImage={metadata.image}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`You've got all your gear, and you're ready to hit the trail - only problem is, you're not sure where to go! 
                    If you live near the Portland metro area, check out our recommendations below for beginner friendly backpacking trips.
                    These trip ideas are all within a few hours drive of Portland, and are great adventures to get started with backpacking.`}
          <br />
          <br />
          {`If you're inspired to try any of these trips, make sure you are physically fit enough to hike at least 5-6 miles per day,
                    wearing all of your backpacking gear. I've accidentally signed myself up for trips I wasn't physically prepared for,
                    and it can turn a fun weekend of adventure into a grueling slog. Please be prepared and hike responsibly - you are 
                    responsible for your own safety in the backcountry.`}
        </div>

        <h1 className={utilStyles.justifyCenter} id="green-lakes">
          Green Lakes
        </h1>
        <br />
        <div>
          {`Most years, the `}
          <Link href={greenLakesTrailhead}>Green Lakes trail</Link>
          {` doesn't fully ice off until July, and is best visited
                    late in the summer. The bugs can get pretty bad here earlier in the season, but by late August, almost all the mosquitoes have died off
                    and you can hike in peace.`}
          <br />
          <br />
          {`If you can make it out here, Green Lakes is one of the most beautiful and accessible campgrounds in the Three Sisters Wilderness. It's
                    a 4.5 mile hike out (9-10 round trip), and follows the Green Lakes Trail the entire way. There's a decent amount of campsites scattered 
                    around the three lakes -but note that visitors between May and the last Friday of September, are required to carry a `}
          <Link href={CentralCascadesWildernessPermit}>
            Central Cascades Wilderness Permit
          </Link>
          {` for both overnight and day trips.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="green lakes 1"
              src="https://lh3.googleusercontent.com/iUhxxC4Sw2yF8cWtdn3TNGrY_n_zY2n1hLPy83rHc1N0NOh_aFfEIlR4zEDd4W7KEhTUkk4CthfSY-wPzAWPy-vkTu4wfvPXkgtDh8CRZMBv4DQyYJWE930EKQqNegFXfpOK8QhnDx4XfzOQ9e9XSxM0FYmIXNF-n0xe9arsdob8l5_rZvPja9amJ-9lJgHzK5dfOkpA6QLAOF_ANKuHnVHzx3R2GOsaH6Mml6dKopafVLukB_xsCRKEpP3qjv3z1z4T-njd4_GOfXX0PI21EMN7cYJr8sLHGFqSAAeQwoPr_9zPzjZRvKGGOhWm2NudFzr-IMetNotl08niy2FBKCNhLqlwviW6edhUb0b79RLMhsOzrZMsxg1J--2d_vMyA16ZEw-ZZ8wFExg8Ms1hBn6JrlaInwd4zyHG2Sed7V-iIubFqKPb5uPU5yRu8PXE34V84cH1lW3G5eetq0_7zqQresYpXrgfzYCSYZ012serueUkKF3P_YTzb2tn-JfDFHB3Nmgp44CBqyXK_QayIcmjo5eZf__c1rvjJJDQwycxmktlnqUoc0m6jrVnu4qFbxmrPauwvqTlUFGKvqzIl7m4fTKsz5RQlru4lmoAy1IHt5e8r_W5-Wc66GlUlWiZmtfXf_nHRQHZbMf_t1UmFpPVBXA61nIGdwwaAPLIygbuDWxh3FcQ3o98EnE1bm3ND4tgruobTZb0A9NHo3eUeOdHAgyuPNQbCJyDXJyJnlbSDTQeNOJa9e72BPvwN3u3T-Hi909taxGeqNWDw8Mh591ABdN7KK2fdg=w449-h599-no?authuser=1"
              width={450}
              height={600}
            />
          </div>
          <br />
          <br />
          {`If you get lucky with the weather, a great time do camp here is in late September/Early October, after the permit system ends for the year. One of my
                    favorite trips in 2021 was a Friday night, after-work hike up to Green Lakes the first week of October. It can get a bit cold later in the year (below freezing),
                    so make sure you pack warmly.`}
        </div>
        <br />
        <br />
        <div className={utilStyles.centered}>
          <Image
            alt="green lakes 2"
            src="https://lh3.googleusercontent.com/rcVirMfrvgGX6WDz-qe1PACH1WP478SYTkBW-L9OmfUwY5JwTEQ97PhIJHE36BZzxWItSJzXCmDG32OkPAU3v_salYwciVUr6a9lQQ8X7SBDK2ut_TJ9XNVxsMqAh8kuwdrfLyppAA-Y1IAl77VYVnVxw8NNNq0D68F1OpTqZ4dQbM8B32I6vPH_ZHVLhbGsb8PEQevxAGL-4A2oBNtxcdPCValN9vwA0iQmuwBjHt30LE3kU1cTc1z4WA6E6iWVTMB3d7Nmo8VKhuT7jylUVowKvIBq4jyc7Z2Az5bre2LqywNZpuvHypQb111Mq8M7ecfmVgYHLfvfqyUqwBIE6ZcjOz9SGHGPy4z4ywSP7i6lTrp4T4NF-19OTARDFj61eI7lAj_Fn87LdhT-5IR-0jwOo2lmqfZsPnuWKN0LQehKt0jtKiPZ3x8p1IAo1X2PxwDCzYR0TT-XBUplkWfPvs-fNk8SZAHME0R4Rel8KC3fSZUlMVeuC8e6Ra4oIhv3A6ssOjlXtnGC7EsQansiJ9H781UQk7chFNPgb3-OTJ4gN7EmGe18KN5KSmItXX_lqInqz2jHKWcD_n6NiQRZhlPg0dE3dfhtFnBn1wzAI9XmyyG8R-ixBU5iJL40dGM8ISVefl9eg6RmFmSPJD7bgDYAAU6JUtEgh2WOTihLUsdcybZh-mex7jFyuaa3qytplXxLKetm2mGWy1SUmHSWAIWgvExp7dfMu035IiJcrRKQy3MuC8KRRFXKFVx4H6XXtSNJ_MQ5cHdflYgTSm0uZoUzjjF9VaGopA=w449-h599-no?authuser=1"
            width={450}
            height={600}
          />
        </div>

        <h1
          style={{ width: "1200px" }}
          className={utilStyles.centered}
          id="paradise-park"
        >
          Paradise Park Lollipop Loop
        </h1>
        <div className={utilStyles.flexWrapContainer}>
          <div>
            {`This lollipop loop starts at `}
            <Link href={timberlineLodgeTrailhead}>Timberline Lodge</Link>
            {`, and heads northwest to
                        a beautiful alpine meadow. Above timberline, you'll have breathtaking views of Mt. Hood, and the meadows supply an ample selection
                        of wildflowers. Paradise Park specifically refers to the area above timberline on Mt. Hood's southwest slope, and is some of the
                        best terrain on Mt. Hood that can be easily accessed.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Image
                alt="mt hood from paradise park"
                src="https://lh3.googleusercontent.com/cMFgBjpk2rEPar3XK_aKVKk6B4A6x78M9s97zcrec9OTu0OCv7QeCaBzNDyEMlsg5Ldz7fpt0vaxSSOCuuP06tPS9QYKzJGlpcjMhV2yQSEUOwVsQj0JJIp-cUYr5rx4vkkXirBRb2NViWVHFXHnhXqPuyKSsqiuPELvaqOV6_0hGU20UT0ovYOj7Jjlyk2QLeGrHdo-PCBJQuBFAv7qMhsd4rZiF-h7qlJdS6Ub6EGT1_9G4nyPr7RR9xzzg23yO2LovWjt-qQEzME82n_HmLzrYyyKUZ18NVd3fmVatgmsYrA-hS2s7Ye37YCzrouV9AZREew86ToKWfbo_-alOTq_BAgHiKcMqx3TRpuyizaElQWVh8LjryBgGu0XRK-UoEQWxu4z_M_TEGm2bPvGIYqSo5jvA0RmKqXJv-6eIKcuOhH2rQN-ae0jJ0xbNYkfaddeTSODkfr830pgU4FifWBDeRf5z0_hMtzh24UJDeNwBthiW38shmaDXUhurpQEjSfD9Y8wrh10Jt9-irAm9CFCpD8DaStEUNxpK4evQKcum1v_PDYV3_L1nmzF7qD2llhPGkUdre9RnpHtTB9bODdOyBLquD6Xr6H9zV6rQ5dV68FKCtfgNniYRdmXUYL1zVXSo8QMxX3R_dmRzQCqv-tOVrJYGkigCzcVf6SgPmo_I6DkhXx3o-9G0CKLAfZNcmfCmEI8wc__VjSuc45ZMn4OesGS87ugviFB9ajppiCPy7j_I9UwrlNa79rENlPdyGBXiwXa2M2jduKqZxqiQOk_9zl-Mjg71w=w599-h449-no?authuser=1"
                width={600}
                height={415}
              />
            </div>

            <br />
            <br />
            {`The total trip distance is about 12 miles, but may be longer if you explore any spurs. From Timberline Lodge, follow the PCT/Timberline
                        trail nortwest for about 3.8 miles, at which point you'll meet the Paradise Park trail. Along the way you'll pass the Hidden Lake trail (skip it),
                        and the Zigzag overlook. Once you get to the Paradise Park trail, turn right. This is the start of the lollipop loop, and you'll ascend
                        a short distance to gorgeous alpine meadows.`}
            <br />
            <br />
            {`There are a collection of scattered campsites around here, near `}
            <Link href={paradiseParkCamp1}>Lost Creek</Link>
            {`, and `}
            <Link href={paradiseParkCamp2}>Rushing Water Creek</Link>
            {`. The campsites are at around 5.4-5.7 miles from the trailhead.
                        After traversing the alpine meadows, the Paradise Park trail descends to meet the Timberline trail - once you intersect the Timberline trail,
                        take a left. Follow the Timberline trail back to Timberline Lodge (6.5-7 miles from the campsites).`}
          </div>
        </div>

        <h1 className={utilStyles.justifyCenter} id="high-camp">
          Mt. Adams High Camp
        </h1>
        <br />
        <div>
          <b>Disclaimer</b>
          {`: The road to `}
          <Link href={killenCreekTrailhead}>Killen Creek Trailhead</Link>
          {` from Takh Lakh Lake is unpaved and deeply rutted.
                    It's doable in a regular passenger vehicle, but you should be comfortable driving on rougher roads.`}
          <br />
          <br />
          {`High Camp is an alpine meadow at around 6,900' on the slopes of Mt. Adams, with ample views and wildflowers in season.`}
          <br />
          {`The trail to High Camp starts at `}
          <Link href={killenCreekTrailhead}>Killen Creek Trailhead</Link>
          {`, near Takh Lakh lake.
                    The out-and-back trip is around 4.5 miles each way, and has about 2,264 feet of elevation gain. This trip is pretty nostalgic for me, as I
                    used to do it almost every year in the late summer as a kid. I was last here in August 2020, and it was just as gorgeous as I remembered.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="high camp"
              width={600}
              height={400}
              src="https://lh3.googleusercontent.com/bU3CVMO48LY3UACgin5RG_4srJmtbhoCtAyAtRHsS0XQvrpucfsedBMYaVJMBVB-vEVILbryrxm92GW9vJCofbbmz9E_BEgtQvxQjCZFAYlmG87pD_ta7jrBPzZ9hf3N5DksgRJUZsAZ2TfXWpEEFVy8Gc9G6qhjZVgwJRFJ73Z-Et3ZCSE34XO8sOW2VpCUomCs-f3NN9yWV8Qlb-Dtn-vUaStK0pRbKpM3cVbBqibN4mfXwMiz0ZQBqtB5-gRgd_KB2Kg3XTSQhQ7ROm5s44ZlAPce-vd-T7B-PBm3e2MhXoIppIqWFx5yluaefIa3gcuvC1vxuW1kKbEf5qMC-8PRxt2CDguO4UucTQbfqFOXovi_9ISxuqvgtnlAYRZGR04MVSp6LrSrPXBZb32y02Etiw1YdP9QpCCcTOOB1Dx7W1wsWIabiOuHjpqfhLH-RUsyDbi0Dn0p4ORrCXYqrxK2iz55bS77PovH2_oQZSz-5Onm-jq9m8Vg293nA5SgniGCWYATdNjSvYBTJ498_5lh01yTyg4dZYybt2Q40BFNsEohUZ8QPTMxOA_cxPH5Qima7rKr8i_kmsGZfvHAnozXosWThl82k-StXBdbMETkOrDxWKFre3EPK5DvomZzzD-i7uPOhRueQCBzIY9EyFd8CTGDKv1I-ha9koy3FSy-Ds8W8P2-PukoHbA3Ab1l1tvxLoyt9JW0yuGdQRjyHpSQr4KDOLyv-NTqnEIwVl9jrtFATX9Wm_5ycURbzLt36URcyvu5WZo9xSFuI5lfEtE11dCV0rlmdw=w599-h449-no?authuser=1"
            />
          </div>
          <br />
          <br />
          {`Once you get to the trailhead, hike up the Killen Creek trail until it meets the meets the PCT in a T-junction. At the PCT, turn right and head south. 
                    Shortly after turning onto the PCT, take a left turn on the trail that heads up towards Mt. Adams - This is the trail to High Camp.
                    the High Camp trail climbs to a meadow and the camping area - if you're intending to go higher, keep in mind that a Cascade
                    Volcano Pass is required for anyone above 7,000' (essentially anywhere above High Camp). I've never seen a ranger up here, but it's never
                    fun to get a ticket/fine.`}
          <br />
          <br />
          {`There are free (primitive) campsites around the meadow - But be sure to find a spot that is
                    already clear of vegetation, as camping directly in the meadow will harm the plant life. The camping spots here are pretty dispersed, but
                    there will be social trails to and from them. The ecosystem here is sensitive, so please stay on existing trails and pack out everything
                    you bring in.`}
        </div>

        <h1 id="canyon-creek-meadows">Canyon Creek Meadows</h1>
        <br />
        <div>
          {`The shortest of the bunch, Canyon Creek Meadows is a 7.5 mile loop on the east side of Three Fingered Jack. Start at the `}
          <Link href={jackLakeTrailhead}>Jack Lake Trailhead</Link>
          {`, and head north on the Old Summit trail. Once you intersect the Canyon Creek
                    trail, turn left. Follow this trail until you reach a T-junction, and then contiue straight towards the campsites.
                    This area is terrible for mosquitoes until late summer, so I recommend coming here in August-October (before snow covers everything in the fall).`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="sitting in meadow"
              src="https://lh3.googleusercontent.com/YF5EHBJ0JfbWy2qB00GqPWjGVwvFz9Ir9kJsr8Y8CYUlAA9O7P8AZXbFcMP7b4FPBgdxgOkVcZrCnI2_hKXrL-O95Wgv5GG5WkMvdz4M-xr-ia2_3tc4i-d2keFbot5qlS5q8wbNLNL1kLxYAsHhbdVQVxXWmZX9gzu8W6SqTY-ub6GhRvUhnB7KrDy4U3mecVM1Fqvul9ZRiByNZK3oB6usMfKtjsG1-uXSLN_Ttt2kH2menklqaHMKGzBsVBx08-RYKbIFFuRWwAgV2J9QcFMSXMBLPIiVXSHoqENFE3-JdPFoaJEZc25dmxnIES5QEw-RVIZk7kxZsvyiZ6Y8CZrE4kxnO4UtolZNRHMFgeeAw0du7W627Pp-W3KkzWFBvdNPBPxHV_ATXnz1MgBvY7VQk6kcRxhQLqF2UWkTUY0SkWNCcybWszpSmPD9ED6yESdDtmjaphpFeHSDaklSzC1KIo_MMJhx0iMVKwMCmx0WbXtLZHIrC_v3od-hC8lKAldDwK9BqvNXCqgTOEbaqND8uekEkOh5RwBcVzoDzVvQ_xc8qQioQwa-Odbu1SCTqymaYgwFqRZQgebBxdfn-GN-0EDe8O-IqNJkPYOWS1k2ar4i9Fd_NwfeXVUF2sXAlzavpG_gTc5R5RDZAjeVY1Uqkapp6NwPEcz3dxAvDisppzsCEH5MjS92bXfNTXI3IA1Q4MN2Owrb9IjHNkbTs2C1X17M_YiuDeq6IHMsC1FGJmBrLF9xIoKIl7GC5eXZci-M8KViEoQASzechhK8b9wAFy_NXFWYOw=w449-h599-no?authuser=1"
              width={450}
              height={600}
            />
          </div>
          <br />
          <br />
          {`The campsites are nestled in a wooded area near the meadows (yes, there are awesome wildflowers). Spend some time to explore here - you can
                    hike right up to Jack Glacier (the only glacier on Three Fingered Jack), and poke around the meadows to look at the flowers. If you're lucky,
                    you might see one of the resident mountain goats.`}
          <br />
          <br />
          {`To loop back, return to the Canyon Creek trail from your campsite and continue north until you reach the Old Summit trail. Turn right and 
                    follow this trail back to Jack Lake trailhead. Similar to the Green Lakes trail, Canyon Creek Meadows falls within the `}
          <Link href={CentralCascadesWildernessPermit}>
            Central Cascades Wilderness Permit
          </Link>
          {` area. Make sure you secure a pass if 
                    you're planning to visit during the permit season.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Image
              alt="standing in meadow"
              src="https://lh3.googleusercontent.com/Dr7duHghOR4kuKDBlDObYZFO122XqxUSTMQInCiqpzpUAJxIDwYjD0aeTpmxz94s7l_Ep6JmIUZ7DXedIwjQVz795Xa9HLv--6SD2aK8jtBRQ9TCI-SgCmNIBqAyMWYdgM-3gk5oGihrh4QB2s4ekqxxVCwjA8W97140oFnt2SfDMuTcTewukosZ0EQH6uZoLvQSBrn_RKeExhFshXZ5xnS-d_wOry4Vc-j9UyOB5iIxSniaDlZZB-U5fCzdHDWyGBPLC0_4SD8RXaMDBKkIBxXiT0wPuJCKlDwlFYce_Gxg-xJFPn9qN7ib504NmSKPsVREYqjoJ60HjCUI6KuZDJI3foBPAS5-jOfhctUTvstWSwzd_zLd_oO6kR479Ohg9iUAwEr1kC-xiMUQVO4hDx0LPkjYLTtoofcmbOG7Q2oKMwcuqNkCyyGlGdS7Kv3_vndwDCJWuDfbL5QWmtHjjFB4Ugh5pwYSn8zyw3XW1_elxIsuOr3IZFWqgjTn6RRQtRvgJnV2qBDSkVA8SmHbMin92_uJjYAcfNIrj4k7WRtPl9VeOCAHnzr_tP6kM1STVA9tLRpK2-n_nqheCgxMOmTODPF5bJgAAbZ3px_-w9WS1onMz0rS-t2oJzuqQ8PiFIpzlp-bcGJlNR2bpHuH9Q4O78ml0y7xuzwRh5ghv2Vf5r_y-N46shAlxBydbKvQzgFsRfmrc-SaEniMb9SoNA4Kb4lmForAWsJWJcOvWa2_QzNJUI0DDT960NIZ4teavarj4YfF5sf4E4sxjC6pla1qADsKhWo6Zw=w449-h599-no?authuser=1"
              width={450}
              height={600}
            />
          </div>
          <br />
          <br />
        </div>
      </div>
      <RelatedPosts metadata={metadata} tag="guides" />
    </Layout>
  );
}
