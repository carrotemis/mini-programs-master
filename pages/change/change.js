//change.js
const app = getApp()

Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },
  onLoad() {
    this.setData({
      curLang: app.globalData.curLang
    })
  },
  onTapItem(e) {
    let langObj = e.currentTarget.dataset
    wx.setStorageSync('language', langObj)
    this.setData({
      curLang: langObj
    })
    app.globalData.curLang = langObj
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})