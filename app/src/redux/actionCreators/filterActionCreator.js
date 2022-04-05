import { SET_FILTER } from '../types/filterTypes'

// eslint-disable-next-line import/prefer-default-export
export const setFilter = (newFilterValue) => ({
  type: SET_FILTER,
  payload: newFilterValue,
})
