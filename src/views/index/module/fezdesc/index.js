import $ from 'jquery'
import temp from './index.hbs'
import Service from './service'
import 'static/svg/cyb-logo.svg'

export default ($box = $("body")) => {
  Service.renderData().then((data) => {
    $box.html(temp(data));
  });
}
