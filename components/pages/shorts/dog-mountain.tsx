import Image from "next/image";
import Link from "next/link";
import { BestSeason, HikeDifficulty } from "../../../lib/hike_info_types";
import HikeInfo from "../../hike_info";

export default function DogMountain({ info = false }) {
  return (
    <>
      <div>
        <h3>Dog Mountain</h3>
        {info && (
          <HikeInfo
            distance="6.8 mile loop"
            elevation="2,700 feet"
            difficulty={HikeDifficulty.MODERATE}
            season={BestSeason.SPRING_SUMMER_FALL}
            permits={
              <Link href="https://www.recreation.gov/timed-entry/10091444">
                Limited Entry Permit
              </Link>
            }
            trailhead="https://www.google.com/maps/place/Dog+Mountain+Trail/@45.7046017,-121.7866986,13.41z/data=!4m6!3m5!1s0x54960a66933a3b5f:0xd04dd4a086009cc5!8m2!3d45.6992035!4d-121.7079899!16s%2Fg%2F11bw5xl9vt"
          />
        )}
        {`An extremely popular 6.8 mile loop, Dog Mountain is well-known for its spring flower display. A day use permit from `}
        <Link href="https://www.recreation.gov/timed-entry/10091444?tab=tours">
          Recreation.gov
        </Link>
        {` is required to hike weekends and holidays from April 29th through June 19th.`}
        <br />
        <br />
        {`The `}
        <Link href="https://www.google.com/maps/place/Dog+Mountain+Trail/@45.6992105,-121.7081278,19.04z/data=!4m6!3m5!1s0x54960a66933a3b5f:0xd04dd4a086009cc5!8m2!3d45.6992035!4d-121.7079899!16s%2Fg%2F11bw5xl9vt">
          Dog Mountain Trailhead
        </Link>
        {` is just off Highway 14 on the Washington side of the Columbia, a 1 hour drive from Portland. Dog Mountain is the steepest hike on this list, gaining over 2,700 feet 
          for its duration.`}
      </div>
      <div>
        <Image
          src="https://lh3.googleusercontent.com/pw/AMWts8AjH3qxU2xZsaeaMxKQN9Zpguutxn5F44tNZymJW6_mXc7hF4Q0kVgkNz6Zrd6dOuCrlRNfhEHsMfj7BjbhbpTEY43n5u1XfsmvOml4C_EAD7q3sDWc2csBX8g1OJgr_-BD3gfYXZdesQMGIu5-Lq6N=w799-h533-s-no?authuser=0"
          alt="Resting on the way up Dog mountain"
          width={799}
          height={533}
        />
      </div>
    </>
  );
}
