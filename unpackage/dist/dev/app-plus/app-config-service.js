
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/message/message","pages/index/index","pages/login/login","pages/mine/mine"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#676467","selectedColor":"#F44336","borderStyle":"black","backgroundColor":"#f8f6f7","list":[{"pagePath":"pages/message/message","iconPath":"static/image/icon1.png","selectedIconPath":"static/image/icon1_click.png","text":"信息"},{"pagePath":"pages/index/index","iconPath":"static/image/icon2.png","selectedIconPath":"static/image/icon2_click.png","text":"办公"},{"pagePath":"pages/mine/mine","iconPath":"static/image/icon3.png","selectedIconPath":"static/image/icon3_click.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"myOA","compilerVersion":"2.6.8","entryPagePath":"pages/message/message","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","titleNView":false}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","titleNView":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom","titleNView":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
