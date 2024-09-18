import { signOut } from '@/auth'
import Symbol from '@/ui/symbol'

export async function Signout () {
    return (
        <form action={async () => {
            'use server'
            await signOut()
        }}>
            <button type='submit'>
                <Symbol colour={'white'}>logout</Symbol>
            </button>
        </form>
    )
}

export default Signout
