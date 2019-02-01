import $ from 'jquery'
import header from 'views/public/module/header'
import footer from 'views/public/module/footer'
import jumbotron from './module/jumbotron'
import listing from './module/listing'


import { common,index } from 'views/public/api'

(async () => {
  const resCommon = await common()
  const resIndex = await index()

  await header($("#js-header"),resCommon)
  await footer($("#js-footer"),resCommon)

  await jumbotron($("#js-jumbotron"))
  await listing($("#js-listing"))
})()


