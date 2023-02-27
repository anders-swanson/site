import Link from "next/link";
import styles from "./hike_info.module.css";
import { HikeDifficulty, BestSeason } from "../lib/hike_info_types";

interface HikeInfoProps {
  distance?: string;
  elevation?: string;
  trailhead?: string;
  permits?: string;
  difficulty?: HikeDifficulty;
  season?: BestSeason;
}

interface InfoProps {
  k: string;
  v?: any;
  node?: React.ReactNode;
}

export default function HikeInfo({
  distance,
  elevation,
  trailhead,
  permits,
  difficulty,
  season,
}: HikeInfoProps) {
  const OptionalInfo = ({ k, v, node }: InfoProps) => {
    return (
      <>
        {v && (
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>
              {node && <>{node}</>}
              {` ${k.toUpperCase()}`}
            </div>
            <div>{v}</div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={styles.infoContainer}>
      <OptionalInfo k="Length" v={distance} node={<DistanceSVG />} />
      <OptionalInfo k="Elevation" v={elevation} node={<MountainSVG />} />
      <OptionalInfo k="Difficulty" v={difficulty} node={<HikerSVG />} />
      <OptionalInfo k="Season" v={season} node={<LeafSVG />} />
      <OptionalInfo k="Permits" v={permits} />
      {trailhead && (
        <OptionalInfo
          k="Trailhead "
          v={
            <Link href={trailhead} target="_blank">
              Maps Location
            </Link>
          }
          node={<PinSVG />}
        />
      )}
    </div>
  );
}

function HikerSVG() {
  return (
    <svg
      fill="#000000"
      height="20px"
      width="20px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <g>
        <path d="M63.5,20c5.5,0,10-4.5,10-10c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10C53.5,15.5,58,20,63.5,20z" />
        <path
          d="M39.7,50.5l7-28.9c0.4-1.5-0.6-3.1-2.1-3.5l-8.3-2c-1.6-0.4-3.1,0.6-3.5,2.1l-7,28.9c-0.4,1.5,0.6,3.1,2.1,3.5l8.3,2
   C37.7,53,39.3,52.1,39.7,50.5z"
        />
        <path
          d="M104,31.6c-1.1,0-2,0.9-2.3,2L85,124.5c0,0.1,0,0.1,0,0.2c0,1.3,1,2.3,2.3,2.3c1.2,0,2.1-0.9,2.3-2l16.7-90.8v-0.2
   C106.3,32.7,105.3,31.6,104,31.6z"
        />
        <path
          d="M64.4,52.5l1.3-5.8l1,4.6c0.9,3,3.7,3.3,3.7,3.3l16.2,4.1c0.3,0.1,0.6,0.1,1,0.1c2.7,0,4.8-2.1,4.8-4.8
   c0-2.3-1.6-4.2-3.7-4.7l-14.1-3.5L70.8,30c-1.8-8.8-10.2-8.6-10.2-8.6c-8.1-0.2-10.2,8.3-10.2,8.3l-21.1,88.7
   c-0.1,0.5-0.1,0.9-0.1,1.4c0,3.9,3.1,7,7,7c3.2,0,5.9-2.1,6.7-5L55,72l11.5,49.6c0.7,3.1,3.5,5.3,6.8,5.3c3.9,0,7-3.1,7-7
   c0-0.5-0.1-1-0.2-1.5L64.4,52.5z"
        />
      </g>
    </svg>
  );
}

function MountainSVG() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.18596 18.1957C3.10451 18.329 3.20043 18.5 3.35661 18.5H20.1935C20.3379 18.5 20.4347 18.3516 20.3766 18.2195L15.1918 6.43601C15.1205 6.27377 14.8889 6.2777 14.8231 6.44228L12.5803 12.0492C12.5538 12.1155 12.5646 12.1909 12.6087 12.2471L14.2863 14.3822C14.6275 14.8165 14.5521 15.4451 14.1178 15.7863C13.6835 16.1275 13.0549 16.0521 12.7137 15.6178L8.41831 10.151C8.33217 10.0414 8.1631 10.0513 8.09039 10.1703L3.18596 18.1957Z"
        fill="#000000"
      />
      <path
        d="M14.2863 14.3822L14.6795 14.0733L14.6795 14.0733L14.2863 14.3822ZM14.1178 15.7863L13.8089 15.3932L13.8089 15.3932L14.1178 15.7863ZM12.7137 15.6178L13.1068 15.3089L13.1068 15.3089L12.7137 15.6178ZM12.5803 12.0492L12.1161 11.8635L12.5803 12.0492ZM12.6087 12.2471L12.2156 12.556L12.6087 12.2471ZM8.41831 10.151L8.81147 9.84208L8.41831 10.151ZM8.09039 10.1703L7.66375 9.90954L8.09039 10.1703ZM15.1918 6.43601L15.6495 6.23464L15.1918 6.43601ZM14.8231 6.44228L15.2873 6.62798L14.8231 6.44228ZM3.18596 18.1957L2.75931 17.935L3.18596 18.1957ZM20.3766 18.2195L19.9189 18.4208L20.3766 18.2195ZM20.1935 19H3.35661V18H20.1935V19ZM15.6495 6.23464L20.8342 18.0181L19.9189 18.4208L14.7342 6.63738L15.6495 6.23464ZM12.1161 11.8635L14.3588 6.25659L15.2873 6.62798L13.0445 12.2349L12.1161 11.8635ZM13.0019 11.9382L14.6795 14.0733L13.8932 14.6911L12.2156 12.556L13.0019 11.9382ZM14.6795 14.0733C15.1913 14.7247 15.0781 15.6677 14.4267 16.1795L13.8089 15.3932C14.026 15.2226 14.0638 14.9082 13.8932 14.6911L14.6795 14.0733ZM14.4267 16.1795C13.7753 16.6913 12.8323 16.5781 12.3205 15.9267L13.1068 15.3089C13.2774 15.526 13.5918 15.5638 13.8089 15.3932L14.4267 16.1795ZM12.3205 15.9267L8.02516 10.4599L8.81147 9.84208L13.1068 15.3089L12.3205 15.9267ZM2.75931 17.935L7.66375 9.90954L8.51704 10.431L3.6126 18.4564L2.75931 17.935ZM13.0445 12.2349C13.0843 12.1355 13.0681 12.0224 13.0019 11.9382L12.2156 12.556C12.0612 12.3595 12.0233 12.0956 12.1161 11.8635L13.0445 12.2349ZM8.02516 10.4599C8.15437 10.6244 8.40798 10.6094 8.51704 10.431L7.66375 9.90954C7.91822 9.49313 8.50997 9.45835 8.81147 9.84208L8.02516 10.4599ZM14.7342 6.63738C14.8413 6.88075 15.1886 6.87485 15.2873 6.62798L14.3588 6.25659C14.5893 5.68056 15.3996 5.66679 15.6495 6.23464L14.7342 6.63738ZM3.35661 19C2.80996 19 2.47426 18.4014 2.75931 17.935L3.6126 18.4564C3.73476 18.2565 3.59089 18 3.35661 18V19ZM20.1935 18C19.9769 18 19.8317 18.2225 19.9189 18.4208L20.8342 18.0181C21.0378 18.4807 20.6989 19 20.1935 19V18Z"
        fill="#000000"
      />
    </svg>
  );
}

function LeafSVG() {
  return (
    <svg
      fill="#000000"
      height="15px"
      width="15px"
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          d="M476.188,24.146c-6.748-3.504-60.728,38.022-185.304,67.086C230.347,105.355,62.5,153.527,65.286,392.815
   L0,431.218l20.338,35.598c63.073-40.692,236.014-120.042,409.766-323.621c0,0-26.875,134.419-334.096,311.056
   c103.685,53.758,249.604,53.758,360.979-76.806C568.346,246.888,476.188,24.146,476.188,24.146z"
        />
      </g>
    </svg>
  );
}

function PinSVG() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.29 14.667L11 16.097V3.81l3-1.5v5.968a6.182 6.182 0 0 1 1-1.104V2.307l3.024 1.503-.003 1.974A6.275 6.275 0 0 1 19 5.7l.02.001.005-2.51L14.5.94l-4 2-4-2L2 3.191V17.9l4.5-2.811 4 2.5 3.15-1.968q-.202-.485-.36-.955zM6 14.223l-3.001 1.876-.023-12.29L6 2.308zm4 1.875l-3-1.875V2.309l3 1.5zM19 7a4.96 4.96 0 0 0-4.9 5.086c0 2.807 2.678 6.606 4.9 10.914 2.222-4.308 4.9-8.107 4.9-10.914A4.96 4.96 0 0 0 19 7zm0 13.877c-.298-.543-.598-1.077-.89-1.6-1.548-2.762-3.01-5.37-3.01-7.191a3.905 3.905 0 1 1 7.8 0c0 1.82-1.462 4.429-3.01 7.19-.292.524-.592 1.058-.89 1.601zm0-11.043A2.166 2.166 0 1 0 21.13 12 2.147 2.147 0 0 0 19 9.834zm0 3.332A1.167 1.167 0 1 1 20.13 12 1.15 1.15 0 0 1 19 13.166z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
}

function DistanceSVG() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="#000000"
      fill="none"
    >
      <path d="M17.94,54.81a.1.1,0,0,1-.14,0c-1-1.11-11.69-13.23-11.69-21.26,0-9.94,6.5-12.24,11.76-12.24,4.84,0,11.06,2.6,11.06,12.24C28.93,41.84,18.87,53.72,17.94,54.81Z" />
      <circle cx="17.52" cy="31.38" r="4.75" />
      <path d="M49.58,34.77a.11.11,0,0,1-.15,0c-.87-1-9.19-10.45-9.19-16.74,0-7.84,5.12-9.65,9.27-9.65,3.81,0,8.71,2,8.71,9.65C58.22,24.52,50.4,33.81,49.58,34.77Z" />
      <circle cx="49.23" cy="17.32" r="3.75" />
      <path d="M17.87,54.89a28.73,28.73,0,0,0,3.9.89" />
      <path
        d="M24.68,56.07c2.79.12,5.85-.28,7.9-2.08,5.8-5.09,2.89-11.25,6.75-14.71a16.72,16.72,0,0,1,4.93-3"
        strokeDasharray="7.8 2.92"
      />
      <path d="M45.63,35.8a23,23,0,0,1,3.88-.95" />
    </svg>
  );
}