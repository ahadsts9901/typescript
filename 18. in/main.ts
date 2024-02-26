interface User {
    email: string,
    userName: string
}

interface Admin {
    email: string,
    userName: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin): boolean {

    if ("isAdmin" in account) {
        return account.isAdmin
    } else {
        return false
    }

}