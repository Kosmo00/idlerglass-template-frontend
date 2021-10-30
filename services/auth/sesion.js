import { withIronSession } from 'next-iron-session'

export default function withSession(handler) {
    return withIronSession(handler, {
        password: 'xt line makes sure browser will expire cookies before seals are consi',
        cookieName: 'session'
    })
}