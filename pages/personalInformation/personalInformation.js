Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },

  toDetail:function(){
    var me = this;
    wx.navigateTo({
      url: '/pages/personalDetail/personalDetail?openId=' + me.data.openId,
    })
  },

  toBookcase1:function(){
    //设置app.state方便读取不同的数据
    app.state = 1;
    wx.navigateTo({
      url: 'pages/bookcase',
    })
  },

  toBookcase2:function(){
    app.state = 2;
    wx.navigateTo({
      url: 'pages/bookcase',
    })
  },
toIndex:function(){
  wx.reLaunch({
    url: '/pages/home/home',
  })
}
})