export default async (name, url) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
    r_txt = url ? url : window.location.search

  let r = r_txt.substr(1).match(reg)

  return (r ? decodeURIComponent(r[2]) : null)
}
