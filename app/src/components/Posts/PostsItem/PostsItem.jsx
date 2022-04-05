import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletePostQuery } from '../../../redux/actionCreators/postsActionCreator'

const postsItemVariants = {
  start: {
    scaleY: 0,
    opacity: 0,
    zIndex: -1,
  },
  end: {
    scaleY: 1,
    opacity: 1,
    zIndex: 1,
  },
}

const PostsItem = ({ user, post, id }) => {
  const deleteTrashHold = 100
  const dispatch = useDispatch()
  const followX = useMotionValue(0)
  const xInput = [-deleteTrashHold, 0, deleteTrashHold]
  const background = useTransform(followX, xInput, [
    'linear-gradient(180deg, #ff0000 0%, #ff0000 100%)',
    'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
    'linear-gradient(180deg, #ff0000 0%, #ff0000 100%)',
  ])

  let isDrag = false

  const navigate = useNavigate()

  const dragStartHandler = () => {
    isDrag = true
  }

  const dragEndHandler = () => {
    if (Math.abs(followX.get()) > deleteTrashHold) {
      dispatch(deletePostQuery(id))
    }

    setTimeout(() => {
      isDrag = false
    })
  }

  const clickHandler = () => {
    if (!isDrag) navigate(`/posts/${id}`)
  }

  return (
    <motion.div
      className="list-group-item list-group-item-action d-flex justify-content-between"
      drag="x"
      style={{ x: followX, background, width: '300px' }}
      dragConstraints={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      onDragStart={dragStartHandler}
      onClick={clickHandler}
      variants={postsItemVariants}
      onDragEnd={dragEndHandler}
      role="button"
      exit={{
        scaleY: 0,
        opacity: 0,
        zIndex: -1,
      }}
    >
      <span className="pe-4">
        {user}
      </span>
      <span>
        {post}
      </span>
    </motion.div>
  )
}

export default PostsItem
