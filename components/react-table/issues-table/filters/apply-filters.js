const applyFilters = (filter, state) => {
    let filtered_state = [...state]
    if (filter.title !== '') {
        filtered_state = filterByTitle(filtered_state, filter.title)
    }
    if (filter.status !== '') {
        filtered_state = filterByState(filtered_state, filter.status)
    }
    if (filter.initial_date_closed !== '') {
        filtered_state = filterByInitialDate(filtered_state, filter.initial_date_closed)
    }
    if (filter.final_date_closed !== '') {
        filtered_state = filterByFinalDate(filtered_state, filter.final_date_closed)
    }
    if (filter.labels.length > 0) {
        filtered_state = filterByLabels(filtered_state, filter.labels)
    }
    if (filter.assignee !== '') {
        filtered_state = filterByAssignee(filtered_state, filter.assignee)
    }
    return filtered_state
}

const _escapeRegExp = (stringToGoIntoTheRegex) => {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

const filterByTitle = (state, value) => {
    const value_with_valid_regex = _escapeRegExp(value)
    const regex = new RegExp(`${value_with_valid_regex}`, 'g')
    return state.filter(issue => regex.test(issue.basic_data.title))
}

const filterByState = (state, value) => {
    return state.filter(issue => issue.basic_data.state === value)
}

const filterByInitialDate = (state, value) => {
    return state.filter(issue => {
        if (issue.basic_data.closed_at === null) {
            return true
        }
        return new Date(issue.basic_data.closed_at) >= new Date(value)
    })
}

const filterByFinalDate = (state, value) => {
    console.log(state)
    return state.filter(issue => {
        if (issue.basic_data.closed_at === null) {
            return true
        }
        return new Date(issue.basic_data.closed_at) <= new Date(value)
    })
}

const filterByLabels = (state, value) => {
    return state.filter(issue => {
        for (let i = 0; i < value.length; i++) {
            if (!issue.labels.includes(value[i])) {
                return false
            }
            return true
        }
    })
}

const filterByAssignee = (state, value) => {
    return state.filter(issue => issue.assignee.username === value)
}

export default applyFilters
