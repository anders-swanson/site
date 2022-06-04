import Link from 'next/link'
import Post from "./post"
import utilStyles from '../styles/utils.module.css'

export default function FeaturedPost({ post, txt }) {
    return (
        <div className={utilStyles.centered}>
        <div className={utilStyles.flexGapContainer} style={{'maxWidth': '600px'}}>
          <div>
            {`Do you like exploring the outdoors? Join us as we share recent hiking trips, camping suggestions, 
            and backcountry guides.`}
            <br/><br/>
            {`For ideas on planning your next trip, check out our most recent post, `}
            <Link href={`/blog${post.id}`}>{post.title}</Link>
            {`.`}
            <br/>
            {txt}
          </div>
          <br/>
          <div>
            <Post item={post} imgSizing={800}/>
          </div>
        </div>
      </div>
    )
}