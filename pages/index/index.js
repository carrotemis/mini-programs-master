//index.js
import {
  translate
} from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    query: '',
    hideCloseIcon: true,
    translation: [],
    curLang: {},
  },
  onLoad(options) {
    if (options.query) {
      this.setData({
        query: options.query
      })
    }
  },
  onShow() {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        curLang: app.globalData.curLang
      })
      this.onConfirm()
    }
  },
  onInput(e) {
    this.setData({
      'query': e.detail.value
    })
    if (this.data.query.length > 0) {
      this.setData({
        hideCloseIcon: false
      })
    } else {
      this.setData({
        hideCloseIcon: true
      })
    }
  },
  onTapClose() {
    this.setData({
      hideCloseIcon: true,
      query: '',
      translation: ''
    })
  },
  onConfirm() {
    if (!this.data.query) {
      return
    }
    translate(this.data.query, {
      from: 'auto',
      to: this.data.curLang.lang
    }).then((res) => {
      this.setData({
        translation: res.trans_result
      })

      let history = wx.getStorageSync('history') || []
      history.unshift({
        query: this.data.query,
        translation: res.trans_result[0].dst
      })
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    })
  }
})