// pages/personalDetail/personalDetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id:'',
    user_name:'',
    password:'',
    available_amount:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me = this
    me.setData({
      user_id : app.globalData.userId,
      user_name : app.globalData.userName,
      password : app.globalData.password,
      available_amount : app.globalData.availableAmount
    })
  },

  userNameInput:function(e){
    var me = this
    if(e.detail.value != null){
      me.setData({
        user_name: e.detail.value
      })
    }
  },

  modify:function(){
    var me = this
    wx.request({
      url: 'https://arcsin2.cloud/CSELibrary//ChangeNameServlet',
      data:{
        user_id : me.data.user_id,
        user_name: me.data.user_name,
        password: me.data.password,
        available_amount: me.data.available_amount
      },
      success : (res) =>{
        console.log(res)
        if (res.data != null) {
          console.log('修改成功')
          me.setData({
            user_name: res.data.user_name,
          })
          app.globalData.userName =  res.data.user_name,
          wx.setStorageSync('user_name', me.data.user_name),
          wx.reLaunch({
            url: '../personalInformation/personalInformation',
          })
        }
      }
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