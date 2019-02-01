import $ from 'jquery'
import header from 'views/public/module/header'
import footer from 'views/public/module/footer'
import detailTmp from './template/detail.hbs'
import jumbotronTmp from './template/jumbotron.hbs'


import { common,frames,detail } from 'views/public/api'
import urlParam from 'views/public/utils/url-param'

(async () => {
  const resCommon = await common()
  await header($("#js-header"),resCommon)
  await footer($("#js-footer"),resCommon)

  const resParam = await urlParam('id')
  const resFrames = await frames({id:resParam})
  const resDetail = await detail({id:resParam})

  $("#js-jumbotron").html(jumbotronTmp(resFrames.data))
  $("#js-detail").html(detailTmp(resDetail.data))
})()

