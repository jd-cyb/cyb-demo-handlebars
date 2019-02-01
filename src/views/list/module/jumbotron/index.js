import $ from 'jquery'
import temp from './index.hbs'
import {list} from 'views/public/api'

export default async ($box = $("body")) => {
  const res = await list()
  $box.html(temp(res.data.jumbotron))
}
