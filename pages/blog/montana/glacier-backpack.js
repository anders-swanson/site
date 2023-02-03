import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Slider from "../../../components/slider";

//+metadata
let metadata = {
  title: "Glacier via Chief Mountain",
  date: "2021-08-28",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLUzo50M6Tj_iJPOm_MA25fgJ7e9cnDWe40vM4ex1Oe2G8zSt-Zyj5T7x1pq97ilS6x049V-b79tpekYevsxAinyMhRoS1BluwT6-Hkgy3SueG-RP60M7y4pr3yQvLlNVkR3i0e5JFoKL2vdHhLmSVTthw=w798-h799-no?authuser=0",
  tags: ["backpacking", "lakes", "montana"],
};

const subText = "59.04 miles, 7471 feet gain, 3 nights";

const image1 =
  "https://lh3.googleusercontent.com/pw/AM-JKLWKx3TRni8GRRX0xrD66KrssXzQ4tu62yovjc0P2lqK8Tz27P6u4mjw1WXc15Xb5BWCgQyDFQi3d1BaZZiiRClq7F8CJvVkWT-fo4jL79pOFne6KGjm4elgCeq_vYqID7lYdNmCs19SUZXoTQla8IJP=w800-h535-no?authuser=0";
const image2 =
  "https://lh3.googleusercontent.com/pw/AM-JKLUcyWQfluhzUW5bsrVdJ0gjxlTxAbIQabZHhDq_fcBMw9iK_UNyEmQIwEQ-sE4LqneRHxfwqzsF4ktkPrhvlequD9IlxDiEWt-HVUEkJPg5XBqU79bnj9CM4fSvBlGvBIQPkPCBZ6oO5jTLWWtVaZB5=w800-h535-no?authuser=0";
const image3 =
  "https://lh3.googleusercontent.com/pw/AM-JKLWUA3oNDukbXsFClFp5WhvuEaBpWAtWBFwM_UsIuPFKypHqNPSZYuvFtoqfgZyiVSax5geyPWkYWjoVMqp44TK5I9WU_8aDbiqZ9-yae6O6pMs3ytPjHv-WtVm2GjPVbJOn4OCK6mKA3CaeGQ3xAZsU=w800-h535-no?authuser=0";
const image4 =
  "https://lh3.googleusercontent.com/pw/AM-JKLUludpbF0RmgMTZg7r20pnQi1JdswyjaV9EwO8m9z3A8CBGxtNQ8izDBfa1CPmWpl5YJR7MR4UQV74g-RqC0mYeDRvFkOvahsuotfZhX4djfb7vWRHqpmf4qnTRIE-XG4XFPzOJONbKYcD-QPcvuDT4=w800-h535-no?authuser=0";
const image5 =
  "https://lh3.googleusercontent.com/pw/AM-JKLUjZnTkY8NkCCloEH6ooj3puBQJjJPN8MruLlHzToyDghmsMTAqOZ9m8Xt0yLfnlbBUfdQuJU4c8ZSuofZB8wCFuYo9IMk9TfM66XrcD-HeGrm5dbI_nP48l4Zk39VqIoJEbT8E7UZrBH6y33l6plvG=s800-no?authuser=0";
const image6 =
  "https://lh3.googleusercontent.com/pw/AM-JKLWcrd2BzG_wXJt4XwgFd6C9Vg_XInhtQ1cOUA1oBTmZ2neAy6RDWQVL0N8nqRBwy6FUWKURUaYaelkHqFCtfpjmXWIb8sQUBIa4Dj1BaSwRAPLfWyFj-GWLzV29RV08Fy9WzpgJu3lnFvmrke7q7acl=s800-no?authuser=0";
const image7 =
  "https://lh3.googleusercontent.com/pw/AM-JKLUgDLqXVyqdTGEkLjH809llsl64-cpj4FzR6rICaSQuhAbUa7HGeIaX9PvzRiCatid5NDnNkOxFa5-TFKuPhtKJYWHAEe4f_Q0kUoLW0xkiYTbhU2nNqN61Yw7eRpjPZ7s7Fr-CakTT7JM-jgUP5rN8=s600-no?authuser=0";
const slides = [
  "https://lh3.googleusercontent.com/pw/AM-JKLUc7Lh4C-p8SwRhIu35V9qZNPd20U8cFXbV4FuDj2ES1ctDbG2Tsd8V3DfD1HXprOcYqLrlf8pV-WiKWzKGQUAupz6P_EiHBqoQAON8jz57b5VQl7jLjJMnWseb1dF82RnXU8wE-be1OvAmyO7LT0Rs=w800-h535-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AM-JKLXoJONZ6-dygWPLl5j7VYvJM9pg9KEwHgD4oTV2mxA9avaOqcPKibXfVk-uUChLqgR8WXlZfp4G5SUia3cr8tIAoBubyT4zZygLNejc6i9_NFhvGRCOhCb7wIXGC1ZGvkMy9W0GrF2Pdnd9deV6ElvB=w800-h535-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AM-JKLXfsbptvP9e1ICbP6Jx59T0n9jqpFaJknx-uX8_w2pt2m3zYZRcd0KD0Mo3UGKXFmn7cF5KPZJRGZFVF9D-pr_J5qRDStWUtV6JpGAqEn-_PUk5Xpzblu06y1h0pf-TjyQ1GP8HXmI9z4Ke6tdcfBiR=w800-h600-no?authuser=0",
];

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      subText={subText}
      description={`Join us as we share our three night, sixty mile backpacking trip in Glacer National Park.`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "backpacking",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div className={utilStyles.textBlock}>
          {`We backpacked for three nights in Glacer National Park, beginning at the Chief Mountain trailhead at the very 
                    northeast corner of the park. The area accessible via Chief Mountain is remote, and likely to be
                    frequented by backpackers.`}
          <br />
          <br />
          {`Backcountry camping in Glacier National Park is restricted to designated campgrounds, a permit being required for
                    each campsite/night you are in the park. Permits can be purchased in advance via a lottery system,
                    or you can try your luck by checking one of the ranger stations in the park for any available walk-up permits
                    (around 50% of the permits are reserved for walk-ups).`}
        </div>
        <Image
          alt="Cosley Lake, Glacier National Park"
          height={450}
          width={700}
          src={image1}
        />
        <div className={utilStyles.textBlock}>
          {`Our first night was at Glenns Lake Head, a 10 mile trek from Chief Mountain. On the way, we passed through meadows
                    and valleys, before climbing up to Cosley Lake, which connects to Glenns Lake. These lakes (like most in Glacier),
                    are finger lakes, surrounded on their sides by towering peaks. Depending on the season, there may be 
                    more or less snow on the peaks.`}
          <br />
          <br />
          {`Our next site after Glenns Head was Elizabeth Lake Head, in Glacier's Belly area. After setting up our camp, we hiked
                    further past Elizabeth Lake to Helen Lake. Helen Lake is backed by a steep, snowy headwall, and was probably the most beautiful
                    place we saw in Glacier.`}
        </div>
        <Image
          alt="Helen Lake, Glacier National Park"
          height={450}
          width={700}
          src={image2}
        />
        <div className={utilStyles.textBlock}>
          {`On our third day, we had a short hike to our next campsite, so we decided to make the climb up to Ptarmigan Tunnel.
                    The Ptarmigan Tunnel hike is a tough climb to a man-made pass. The tunnel pass provides access through the mountains to
                    a popular trail that starts near Many Glacier.
                    On the way up to the tunnel, you are granted a sweeping, gorgeous view of the Belly valley, from Elizabeth Lake to Helen Lake.`}
          <br />
          <br />
          {`The tunnel is kept open during the warmer seasons, and closed by the park service in the winter to prevent animals
                    from hibernating in it. It's an amazing experience to pass through the tunnel, as it feels like a portal between two
                    totally different sections of the park.`}
        </div>
        <Image
          alt="Foot of Cosley Lake, Glacier National Park"
          height={450}
          width={700}
          src={image4}
        />
        <div className={utilStyles.textBlock}>
          {`Coming down from the Ptarmigan Tunnel, we headed back towards Cosley Lake, for our final night in Glacier.
                   On our last day, the hike out from Cosley Lake clocked in at around 9 miles to Chief Mountain Trailhead.`}
          <br />
          <br />
          {`If you decide to backpack Glacier, make sure you are up-to-date with the park's recommendation for bear safety. Bears
                   (both black and brown) and numerous in the park, and we ran into one black bear during our trip, which passed us on the trail
                   going the opposite direction. Each hiker we encountered had a similar story about a bear encounter. 
                   you're required to hang your food (and other scented items/cookware) on provided poles while camping. You are 
                   recommend to bring bear spray, and make plenty of noise while on the trail to avoid startling any bears.`}
        </div>
        <Image
          alt="Midway up the Ptarmigan Trail, Glacier National Park"
          height={450}
          width={700}
          src={image3}
        />
        <div className={utilStyles.flexWrapContainer}>
          <Image
            height={400}
            width={400}
            alt="Chief Mountain Trail, Glacier National Park"
            src={image5}
          />
          <Image
            height={400}
            width={400}
            alt="Glenn Lake head, Glacier National Park"
            src={image6}
          />
          <Image
            height={400}
            width={400}
            alt="Small river in Glacier National Park"
            src={image7}
          />
        </div>

        <Slider height={600} width={800} slides={slides} />
      </div>
    </Layout>
  );
}
