import withSession from '../../services/auth/sesion'

export default withSession(async (req, res) => {
    const { username, avatar, token } = await req.body
    const user = {
        username,
        avatar,
        token
    }
    req.session.set('user', user)
    await req.session.save()
    res.json(user)
    console.log(res)
})