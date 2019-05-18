//history.js
const app = getApp()

Page({
  data: {
    history: [],
    historyLength: ''
  },
  onShow() {
    let history = wx.getStorageSync('history')
    this.setData({
      history: history,
      historyLength: history.length
    })
  },
  onTapItem(e) {
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  }
})