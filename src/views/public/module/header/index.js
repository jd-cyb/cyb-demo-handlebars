import temp from './header.hbs'
import Service from './service'

export default ($box = $("body")) => {
  let tempData = {}
  Promise.all([
    Service.siteName(),
    Service.navList()
  ]).then((data) => {
    tempData.sysName = data[0]
    tempData.nav = data[1]
    $box.html(temp(tempData))
  })
}
