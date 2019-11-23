// 小程序系统的方法
const setSystemInfo = (isSync = false) => {
  if (isSync) {
    wx.setStorageSync('systemInfo', wx.getSystemInfo())
  } else {
    wx.setStorageSync('systemInfo', wx.getSystemInfoSync())
  }
}
module.exports = {
  setSystemInfo
}