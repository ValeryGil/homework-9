import { useDispatch } from 'react-redux'
import { addPostQuery } from '../../../redux/actionCreators/postsActionCreator'
import Form from '../Form/Form'

const PostForm = () => {
  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    dispatch(addPostQuery(formData, e))
  }

  return (
    <Form
      onSubmit={submitHandler}
    />
  )
}

export default PostForm
