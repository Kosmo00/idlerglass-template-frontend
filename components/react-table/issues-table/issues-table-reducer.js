import { useReducer } from "react"

export const FILTER_TITLE = 'filter_title'
export const FILTER_STATUS = 'filter_status'
export const FILTER_INITIAL_DATE = 'filter_initial_date'
export const FILTER_FINAL_DATE = 'filter_final_date'
export const FILTER_LABELS = 'filter_labels'
export const FILTER_ASSIGNEE = 'filter_assignee'

const initial_filter_state = {
  title: '',
  status: '',
  initial_date_closed: '',
  final_date_closed: '',
  labels: [],
  assignee: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case FILTER_TITLE:
      return { ...state, title: action.value }
    case FILTER_STATUS:
      return { ...state, status: action.value }
    case FILTER_INITIAL_DATE:
      return { ...state, initial_date_closed: action.value }
    case FILTER_FINAL_DATE:
      return { ...state, final_date_closed: action.value }
    case FILTER_LABELS:
      return { ...state, labels: action.value }
    case FILTER_ASSIGNEE:
      return { ...state, assignee: action.value }
    default:
      return state
  }
}

const useIssuesTableReducer = () => {
  const [state, dispatch] = useReducer(reducer, { ...initial_filter_state })
  return [state, dispatch]
}

export default useIssuesTableReducer
