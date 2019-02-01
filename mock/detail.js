import Mock from 'mockjs';

export default (req, res) => {
  res.send({
    errno: 0,
    msg: '',
    data: Mock.mock(`随机80个中文：@cword(80) <br>随机日期：@date <br><img src="@image('200x100')">`)
  })
}
