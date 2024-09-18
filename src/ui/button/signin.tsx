import { auth, signIn } from '@/auth'
import Symbol from '@/ui/symbol'

export async function Signin () {
    return (
        <form action={async () => {
            'use server'
            await signIn('google')
        }}>
            <button type='submit'>
                <Symbol colour={'white'}>login</Symbol>
            </button>
        </form>
    )
}

export default Signin
