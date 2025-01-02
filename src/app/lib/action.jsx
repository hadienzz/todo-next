import { accounts } from "../../../data"

export const getAccount = (prevState, formData) => {
    const selectedAccount = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    console.log(selectedAccount)
    console.log(accounts[0])
    console.log(selectedAccount.username === accounts[0].username && selectedAccount.password === accounts[0].password)
} 