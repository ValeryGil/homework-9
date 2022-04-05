import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostQuery, updatePostQuery } from '../../../../redux/actionCreators/postsActionCreator'

const usePostsDetail = (closeModal) => {
  const { postsId } = useParams()
  const [loading, setLoading] = useState(false)
  // const controller = useRef(new AbortController())
  const dispatch = useDispatch()
  const post = useSelector((store) => store.posts.find((postEl) => postEl.id === +postsId)) || {}

  useLayoutEffect(() => {
    dispatch(getPostQuery(postsId, setLoading))
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    dispatch(updatePostQuery(postsId, formData, closeModal))
  }

  return {
    post,
    submitHandler,
    loading,
  }
}

export default usePostsDetail
