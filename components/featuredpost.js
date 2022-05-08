import Link from 'next/link'
import Post from "./post"
import utilStyles from '../styles/utils.module.css'

export default function FeaturedPost({ post, txt }) {
    return (
        <div className={utilStyles.centered}>
        <div className={utilStyles.flexGapContainer} style={{'maxWidth': '600px'}}>
          <div>
            {`Welcome to Trails and Trekking! You'll find pages about hiking, camping, and the outdoors here. While you're here, check out our
            featured post, `}<Link href={`/blog${post.id}`}>{post.title}</Link>{`.`}
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