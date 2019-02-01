import $ from 'jquery'
import temp from './index.hbs'
import 'static/svg/cyb-logo.svg'

export default async ($box = $("body"),data) => {

  $box.html(temp(data.data.fezdesc));
}
