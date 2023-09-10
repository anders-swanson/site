import links from "../../lib/links";
import { LinkT } from "../tablink";

export default function OlympicPermits() {
  return <div>
    {`A wilderness permit is required to backpack Olympic National Park between May 15th and October 15th.
    Permits go on sale April 15th at 7AM PST, with the most popular locations selling out rapidly.
    Less popular campsites may remain available throughout the summer, and you can sometimes get lucky with cancellations.`}
    <br/><br/>
    {`Permits are reserved from `}
    <LinkT href={links.permits.olympic}>Recreation.gov</LinkT>
    {` when available.`}
    {`. For additional information about the Olympic wilderness, visit the `}
    <LinkT href="https://www.nps.gov/olym/planyourvisit/wilderness-reservations.htm">National Parks website</LinkT>{`.`}
  </div>
}

export function OlympicPermitLink() {
  return <LinkT href={links.permits.olympic}>Olympic Wilderness Permit</LinkT>
}

export function OlympicBears() {
  return <div>
    {`Olympic National Park has a noticeable population of Black Bears, necessitating proper storage of food and scented items.
  Most campsites in the park require the use of bear canisters, though a few also have bear wires with a pulley system (bring your own rope, just in case).`}
    <br/><br/>
    {`It's not uncommon to see Black Bears in the Olympic National Park, along with other wildlife. The `}
    <LinkT href="https://www.nps.gov/olym/planyourvisit/wildlife-safety.htm">parks service website</LinkT>
    {` is a great place to learn more about the wildlife in the park. We saw a huge amount of other wildlife while hiking, like ptarmigan, deer, and marmots!`}
  </div>
}