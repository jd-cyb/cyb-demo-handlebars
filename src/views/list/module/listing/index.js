import $ from 'jquery'
import temp from './index.hbs'
import {frames} from 'views/public/api'

export default async ($box = $("body"),data) => {
  const res = await frames()
  console.log(res)
  $box.html(temp(res.data))
}
