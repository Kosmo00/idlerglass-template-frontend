import { useReducer } from "react"

export const FILTER_TITLE = 'filter_title'

let initial_state

const initial_filter_state = {
  title: '',
  status: '',
  initial_date_closed: null,
  final_date_closed: null,
  labels: [],
  assignee: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case FILTER_TITLE:
      return [...filterByTitle(state, action.value)]
    default:
      return [...state]
  }
}

const useIssuesTableReducer = (issues) => {
  initial_state = issues
  const [state, dispatch] = useReducer(reducer, issues)
  return [state, dispatch]
}

const escapeRegExp = (stringToGoIntoTheRegex) => {
  return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

const filterByTitle = (state, value) => {
  const value_with_valid_regex = escapeRegExp(value)
  const regex = new RegExp(`${value_with_valid_regex}`, 'g')
  return state.filter(issue => regex.test(issue.basic_data.title))
}


export default useIssuesTableReducer
