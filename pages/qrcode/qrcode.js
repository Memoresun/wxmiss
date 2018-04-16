
let qr = require('../../utils/wxqrcode.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    href:'http://memorecool.cn'
  },

  /**
   *  生成二维码
   */
  createQrcode: function(href,size){
    var qrcode = qr.createQrCodeImg(href,{
      size:size
    })
    this.setData({
      'qrcode':qrcode
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var href = this.data.href;
    var res = wx.getSystemInfoSync()
    var scale = parseInt(278 * 750/res.windowWidth);
    this.createQrcode(href,scale);    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})