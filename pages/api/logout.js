import withSession from "../../services/auth/sesion"

export default withSession(async (req, res) => {
    req.session.destroy()
    res.json({isLoggedIn: false})
})