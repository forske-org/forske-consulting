import { Fragment } from 'react'

export default async function Page () {
    return (
        <Fragment>
            <h1>Code Packages</h1>
            <p>The Forske node packages can be found <a href='https://www.npmjs.com/search?q=%40forske' target='_blank'>here</a></p>
            <p>The Forske python packages can be found <a href='https://www.pypi.org' target='_blank'>here</a></p>
        </Fragment>
    )
}
