import router from '../routes/router'

export function authGuard(to) {
    let token = localStorage.getItem('token')

    if (token) {
        return true
    }

    router.push('/login')
}