import { h } from 'preact'
import { Router } from 'preact-router'

import App from '~/components/App/App'

const Main = () => (
	<Router>
		<App path="/"/>
	</Router>
)

export default Main
