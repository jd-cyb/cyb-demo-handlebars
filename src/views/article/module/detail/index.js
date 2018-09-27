import temp from './index.hbs'

import jumbotronTemp from './jumbotron.hbs'

import Service from './service'

import urlParam from 'views/public/utils/url-param'

import $ from 'jquery'

export default ($box = $("body")) => {
  urlParam('id').then((data) => {
    return Promise.all([Service.renderData(data),Service.detail(data)])
  }).then((data) => {
    console.log(data)
    $box.html(temp(data[1]))
    $("#js-jumbotron").html(jumbotronTemp(data[0]))
  })
}
