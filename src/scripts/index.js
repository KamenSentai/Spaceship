/* Imports */

import '~/styles/index.scss'

import Grabber from './components/Grabber'
import Laser from './components/Laser'
import Space from './components/Space'

/* Initialization */

new Grabber('.area').init()
new Laser().init()
new Space().init()
