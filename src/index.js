import AppService from './moduls/app.service'
import {config} from './moduls/config'
import './moduls/header.component'

console.log('config key:', config.key)

const service = new AppService('Hello world')
console.log();