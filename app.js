//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [{
        'name': '中文',
        'lang': 'zh',
        'index': 0
      },
      {
        'name': '粤语',
        'lang': 'yue',
        'index': 1
      },
      {
        'name': '英文',
        'lang': 'en',
        'index': 2
      },
      {
        'name': '日语',
        'lang': 'jp',
        'index': 3
      },
      {
        'name': '韩语',
        'lang': 'kor',
        'index': 4
      },
      {
        'name': '法语',
        'lang': 'fra',
        'index': 5
      },
      {
        'name': '西班牙语',
        'lang': 'spa',
        'index': 6
      },
      {
        'name': '泰语',
        'lang': 'th',
        'index': 7
      },
      {
        'name': '阿拉伯语',
        'lang': 'ara',
        'index': 8
      },
      {
        'name': '俄语',
        'lang': 'ru',
        'index': 9
      },
      {
        'name': '葡萄牙语',
        'lang': 'pt',
        'index': 10
      },
      {
        'name': '德语',
        'lang': 'de',
        'index': 11
      },
      {
        'name': '意大利语',
        'lang': 'it',
        'index': 12
      },
      {
        'name': '希腊语',
        'lang': 'el',
        'index': 13
      },
      {
        'name': '荷兰语',
        'lang': 'nl',
        'index': 14
      },
      {
        'name': '波兰语',
        'lang': 'pl',
        'index': 15
      },
      {
        'name': '丹麦语',
        'lang': 'dan',
        'index': 16
      },
      {
        'name': '瑞典语',
        'lang': 'swe',
        'index': 17
      },
      {
        'name': '繁体中文',
        'lang': 'cht',
        'index': 18
      },
      {
        'name': '越南语',
        'lang': 'vie',
        'index': 19
      }
    ]
  }
})