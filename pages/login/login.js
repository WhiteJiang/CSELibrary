// pages/login/login.js
// created by:White Jiang
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    password: '',
    userName: '',
    availableAmount: '',
    autoLogin : 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me = this
    //自动登录
    console.log(wx.getStorageSync('userId'))
    if(wx.getStorageSync('userId') != null){
      me.setData({
        autoLogin: 1,
      })
      this.submit()
    }
  },

  submit:function () {
    var me = this
    //自动登录
    if(me.data.autoLogin == 1){
      wx.request({
        url: 'https://arcsin2.cloud/CSELibrary//LoginServlet',
        header: {
          'content-type': 'application/json' // 默认值
        },
        data :{
          user_id: wx.getStorageSync('userId'),
          password: wx.getStorageSync('password')
        },
        success : (res) =>{
          console.log(res)
          if (res.data != null) {
            console.log('自动登录成功'),
            me.setData({
              userName: res.data.user_name,
              availableAmount: res.data.available_amount
            })
            console.log(me.data.userName),
            wx.setStorageSync('userName', me.data.userName),
            wx.setStorageSync('availableAmount', me.data.availableAmount),
            wx.redirectTo({
              url: '../home/home',
            })
          }
          //登录失败
          else{
            me.setData({
              autoLogin: 0,
            })
            wx.setStorageSync('userId', null),
            wx.setStorageSync('password', null),
            wx.setStorageSync('userNmae', null),
            wx.setStorageSync('availableAmount', 0)
          }
        }
      })
    }
    else{
      wx.request({
        url: 'https://arcsin2.cloud/CSELibrary//LoginServlet',
        data :{
          user_id: me.data.userId,
          password: me.data.password
        },
        success : (res) =>{
          console.log(res)
          if (res.data != null) {
            console.log('登录成功'),
            me.setData({
              userName: res.data.user_name,
              availableAmount: res.data.available_amount
            })
            wx.setStorageSync('userId', me.data.userId),
            wx.setStorageSync('password', me.data.password),
            wx.setStorageSync('userNmae', me.data.userName),
            wx.setStorageSync('availableAmount', me.data.availableAmount),
            wx.redirectTo({
              url: '../home/home',
            })
          }
        }
      })
    }
  },
  countInput: function(e) {
      var me = this
      if(e.detail.value != null){
        me.setData({
          userId: e.detail.value
        })
      }
  },
  passwordInput: function(e) {
    var me = this
    if(e.detail.value != null){
      me.setData({
        password: e.detail.value
      })
    }
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