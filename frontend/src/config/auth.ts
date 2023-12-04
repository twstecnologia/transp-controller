import Cookies from 'js-cookie'

export function getAuthCookie() {
    const cookies = Cookies.get('token')
    return cookies
}