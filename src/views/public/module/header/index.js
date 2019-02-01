import temp from './header.hbs'

import {navList,siteName} from './service'

export default async ($box = $("body"),res) => {

  const sysName = await siteName(res)

  const nav = await navList(res)

  $box.html(temp({sysName:sysName,nav:nav}))
}
