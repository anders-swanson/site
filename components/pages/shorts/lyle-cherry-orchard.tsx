import Image from "next/image";
import Link from "next/link";

export default function LyleCherryOrchard() {
  return (
    <>
      <div>
        <h3>Lyle Cherry Orchard</h3>
        {`A 5 mile out-and-back, be wary of thick poison oak on this hike. However, if you can navigate around the poison oak, you'll be rewarded with
      a gorgeous flower display at the top. Lyle Cherry Orchard is less popular than the other hikes on this list, so you may find less people here on busy days.`}
        <br />
        <br />
        <Link href="https://www.google.com/maps/place/Lyle+Cherry+Orchard+Trailhead/@45.6875827,-121.2643082,16.13z/data=!4m15!1m8!3m7!1s0x549619965c8ba681:0x95de0d7364fdc3da!2sLyle+Cherry+Orchard+Trail,+Washington+98635!3b1!8m2!3d45.6884674!4d-121.2579113!16s%2Fg%2F11clysz7c0!3m5!1s0x5496199738adb237:0x4e42c49a43a54d4!8m2!3d45.6861767!4d-121.2655607!16s%2Fg%2F11hbgbqlpp">
          The Trailhead
        </Link>
        {` is just east of the town of Lyle, on a small pull-off of Washington Highway 14.`}
      </div>
      <div>
        <Image
          src="https://lh3.googleusercontent.com/pw/AMWts8BdhBYU6JaRnVkn1LTrt1DvZQ7I7yeGzW-n6HvCnD_MFoaelUJLEG-SFA4zYRnMP6-4G3uAlxGl1dn-W5fpI8r0lYoWc4d_3Go18gZup7XK2mQeLfW8AfyrV9MvQcewIADlsjWwMP4tvrOnIPOSobJ0=w798-h533-s-no?authuser=0"
          alt="Spring bloom of Balsamroot"
          width={799}
          height={533}
        />
      </div>
    </>
  );
}
