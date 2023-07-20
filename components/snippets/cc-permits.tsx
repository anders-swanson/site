import Link from "next/link";
import {
  CentralCascadesDayUse,
  CentralCascadesWildernessPermit,
} from "../../lib/common";

export default function CCPermitInfo({
  zone = "",
  isDayUse = true,
  wilderness = "Three Sisters",
}) {
  let dayUseMessage = `Day hikers and backpackers at ${zone}`;
  if (!isDayUse) {
    dayUseMessage = `Backpackers at ${zone}`;
  }

  return (
    <div>
      {`${dayUseMessage} are required to carry a `}
      <Link href={CentralCascadesWildernessPermit}>Overnight Permit</Link>
      {isDayUse && (
        <>
          {` or `}
          <Link href={CentralCascadesDayUse}>Day Use Ticket</Link>
        </>
      )}
      {` when visiting this the ${wilderness} wilderness. Permits must be purchased online prior to the date of your trip.`}
      <br />
      <br />
      {`The ${wilderness} permit season runs from June 15th to October 15th, becoming highly competitive during peak summer months. 40% of overnight permits are released on April 4th,
      at 7AM PDT
      , and another 60% are released on a 7-day rolling window from June through October.`}
      {isDayUse && (
        <>
          {` Day use permits are additionally released on 10-day and 2-day rolling windows, allowing the possibility of snagging a permit shortly before a day trip.`}
        </>
      )}
      <br />
      <br />
      {`All permits are reservable on a first-come, first-served basis.
      To increase your odds of getting a permit, log into `}
      <Link href={CentralCascadesWildernessPermit}>recreation.gov</Link>
      {` by 7AM the week before you want to backpack, and select your desired trailhead as soon as it becomes available. Permits sell out quickly for popular trailheads!`}
      <br />
      <br />
      {`You may hike without a permit before June 15th or after October 15th, but please be prepared for the possibly of deep snow and difficult or dangerous weather conditions.`}
    </div>
  );
}
