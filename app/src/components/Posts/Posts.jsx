import { createContext, useContext } from 'react'
import PostForm from './PostForm/PostForm'
import PostsList from './PostsList/PostsList'
import SearchPostForm from './SearchPostForm/SearchPostForm'

const PostsContext = createContext()

const Posts = () => (
  <>
    <PostForm />
    <hr className="mb-2" />
    <SearchPostForm />
    <PostsList />
  </>
)

export default Posts

const usePostsContext = () => useContext(PostsContext)

export {
  PostsContext,
  usePostsContext,
}
