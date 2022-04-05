import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { setFilter } from '../../../redux/actionCreators/filterActionCreator'

const SearchPostForm = () => {
  const [searchInput, setSearchInput] = useState('')
  const isMount = useRef(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isMount.current) {
      const filter = {
        search: searchInput,
      }
      const prepareFilterFromURL = encodeURIComponent(JSON.stringify(filter))
      const query = `filter=${prepareFilterFromURL}`
      setSearchParams(query)
      dispatch(setFilter(query))
    } else {
      isMount.current = true
      const parsedQuery = JSON.parse(searchParams.get('filter'))
      if (parsedQuery && parsedQuery.search) {
        setSearchInput(parsedQuery.search)
        dispatch(setFilter(parsedQuery))
      }
    }
  }, [searchInput])

  const changeHandler = (e) => setSearchInput(e.target.value)

  return (
    <form className="d-flex flex-column align-items-center">
      <div className="mb-2">
        <input
          type="text"
          name="user"
          placeholder="Text Name..."
          className="form-control my-2"
          onChange={changeHandler}
          value={searchInput}
        />
      </div>
    </form>
  )
}

export default SearchPostForm
