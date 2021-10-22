import { useEffect } from "react"
import Router from 'next/router'
import useSWR from 'swr'
import fetcher from '../fetchers/useFetch'

const useUser = ({
    redirectTo = false, // url to redirect
    redirectIfFound = false // true if you want redirect if isLoggedIn 
} = {}) => {
    const { data: user, mutate: mutateUser } = useSWR('/api/user', fetcher)
    useEffect(() => {
        if (!redirectTo || !user) {
            return
        }
        if (
            (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
            (redirectIfFound && user?.isLoggedIn)
        ) {
            Router.push(redirectTo)
        }
    }, [user, redirectIfFound, redirectTo])

    return { user, mutateUser }
}

export default useUser