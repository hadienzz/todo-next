import { accounts } from "../../../data"

export const getAccount = (prevState, formData) => {
    const enteredAccount = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    const selectedAccount = accounts.find((account) => account.username === enteredAccount.username && account.password === enteredAccount.password)

    if (!selectedAccount) {
        throw new error('Failed to find your account')
    }
} 