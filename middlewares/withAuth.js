import withSession from "../services/auth/sesion";

const _withAuth = (handler) => {
  return async context => {
    const { req } = context
    const user = req.session.get('user')
    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
    const newCtx = {
      ...context,
      user,
    }
    return handler(newCtx)
  }
}
const withAuth = handler => {
  return withSession(_withAuth(handler))
}
export default withAuth