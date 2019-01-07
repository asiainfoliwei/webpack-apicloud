#1. A Cli For Apicloud

##1.1 运行步骤

- 手机下载官方万能loader
下载地址：<https://docs.apicloud.com/Download/download/>
- 修改文件并运行
1.修改config.js文件的host 修改成你的局域网ip
2.同理修改src／index.html 中api.openFrame 里的url 替换成局域网ip
3.npm install
4.npm run dev (本地环境) 或者 npm run build (线上环境)

##1.2 使用方法
- 在src/page 下新建vue文件(必须使用jsx)
- 打开Win和Frm 使用libs/ui 中的openWin 和 openFrm，其中第一个参数填写page下的地址
    如：如果打开login.vue,第一个参数填写login即可（具体可参考login.vue 中的写法）


##1.3 脚手架功能
- 开发热重载（hrm）
- vue 文件中的style中的px自动转化成vw，并且自动添加前缀
- 可以使用import
- 理论上vue-cli中的配置的功能都可以使用

##1.4 TODO
脚手架性能优化：webpack 打包优化，线上添加压缩，使用压缩js

Author: ZARR







