import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPostsQuery } from '../../../redux/actionCreators/postsActionCreator'
import PostsItem from '../PostsItem/PostsItem'

const postsListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
}

const PostsList = () => {
  const posts = useSelector((store) => store.posts)
  const filter = useSelector((store) => store.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPostsQuery(filter))
  }, [filter])

  return (
    <div className="d-flex justify-content-center">
      {
        posts.length ? (
          <motion.div variants={postsListVariants} initial="start" animate="end" className="list-group">
            <AnimatePresence>
              {posts.map((post) => (
                <PostsItem key={post.id} {...post} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : null
      }
    </div>
  )
}

export default PostsList
