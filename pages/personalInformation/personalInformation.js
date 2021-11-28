var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: '',
    user_name : '',
    available_amount: 0,
    reserve_recoder : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me = this
    me.setData({
      user_id : wx.getStorageSync('user_id'),
      user_name : app.globalData.userName,
      available_amount: wx.getStorageSync('available_amount')
    })
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
    /**
     * 用于隐藏home按钮
     */
    wx.hideHomeButton({
      success: (res) => {},
    })
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
    
  },

  toDetail:function(){
    var me = this;
    wx.navigateTo({
      url: '/pages/personalDetail/personalDetail?openId=' + me.data.openId,
    })
  },

  toBook:function(){
    //设置app.state方便读取不同的数据
    app.state = 1;
    wx.navigateTo({
      url: '/pages/bookBorrow/bookBorrow',
    })
  },

  toNote:function(){
    app.state = 2;
    wx.navigateTo({
      url: '/pages/notebook/notebook',
    })
  },
  toIndex:function(){
    wx.reLaunch({
      url: '/pages/home/home',
    })
  },
  toReserveBorrow:function(){
    wx.navigateTo({
      url: '../reserveBorrow/reserveBorrow',
    })
  },
  toReserveDonate:function(){
    wx.navigateTo({
      url: '/pages/reserveDonate/reserveDonate',
    })
  }
})