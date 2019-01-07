<script>
import Vue from 'vue'
import $ui from '@lib/ui'
import $cons from '@lib/constant'
new Vue({
    el: '#app',
    data: {
        formData: {
            UserName: '123',
            Password: ''
        }
    },

    mounted() {
        this.init();
        this.initEvt();
    },

    methods: {
        init() {
            api.setWinAttr({ // 设置 window 属性
                'slidBackEnabled': false, // 是否支持滑动返回
                'vScrollBarEnabled': false // 是否显示垂直滚动条
            });
        },

        initEvt() {
            api.addEventListener({
                name: $cons.EventTypes.KEYBACK
            }, function (ret, err) {
                api.closeWidget({}); // 应用 管理关闭指定widget，也可以关闭应用
            });
        },
        handleFocus(e) {
            e.target.focus()
        },
        login() {
            $ui.openWin('main', null, false, false, true, {
                    type: "fade",
                    duration: 900
            });
        },

        fotget() {}
    }, 

    render(h) {
        return (
            <div class="login-container">
                <div class="form">
                    <input type="tel" class="tel" placeholder="手机号" maxlength="11" v-model={this.formData.UserName}  onClick={this.handleFocus}/>
                    <input type="password" class="pwd" placeholder="密码1" v-model={this.formData.Password}  onClick={this.handleFocus}/>>
                    <div class="btns">
                        <button class="login-btn"  onClick={this.login}>登录9</button>
                    </div>
                    <a class="forgot-pwd" onClick={this.fotget}>忘记密码?</a>
                </div>
            </div>
        )
    }
}) 

</script>
<style lang='stylus'>
*
    margin: 0 
    padding: 0 
    font-weight: normal 
    list-style: none 
    font-family: 'PingFangSC-Light' 
    text-decoration: none 
    box-sizing: border-box 

html
    height: 100% 
    background: none 

body
    background-size: 100% 
    min-height: 100% 
    width: 100% 
    margin: auto 
    padding: 0 
    background: url(" ../static/splash2.jpg") no-repeat fixed bottom 
    background-size: cover 

input::-webkit-input-placeholder
    color: #50C1D3 
    letter-spacing: 1px 

input:-moz-placeholder
    color: #50C1D3 
    letter-spacing: 1px 

input::-moz-placeholder
    color: #50C1D3 
    letter-spacing: 1px 

input:-ms-input-placeholder
    color: #50C1D3 
    letter-spacing: 1px 

.login-container
    width: 100% 
    height: 100% 
    height: 100vh 
    min-height: 100% 
    min-height: 100vh 

    display: flex 
    flex-direction: column 
    justify-content: flex-end 

.form
    padding: 0 40px 20px 
    font-size: 0 

.form input
    width: 100% 
    height: 96px 
    line-height: 96px 
    line-height: normal 
    border-bottom: 1px solid #50C1D3 
    border-radius: 0 
    padding-left: 70px 
    font-size: 32px 
    vertical-align: top 
    outline: none 
    -webkit-appearance: none 
    color: #50C1D3 

.tel
    margin-top: 150px 
    display flex
    background: url(' ../static/login_tel2.png') no-repeat left center 
    background-size: 33px 53px 

.pwd
    margin-top: 28px 
    background: url(' ../static/login_pwd2.png') no-repeat left center 
    background-size: 36px 41px 

.btns
    display: flex 
    justify-content:flex-end 

    width: 100% 
    height: 78px 
    line-height: 78px 
    margin: 58px 0 0 
    padding: 0 

.login-btn
    display block
    width: 100% 
    height: 78px 
    padding: 0 
    line-height: 78px 
    font-size: 32px 
    border-radius: 14px 
    text-align: center 
    outline: none 
    background: #50C1D3 
    color: #ffffff 

.login-btn:active
    background: #2f7560 
    color: #acacac 

.forgot-pwd
    display: block 
    margin-top: 20px 
    padding: 20px 0 
    width: 100% 
    font-size: 26px 
    color: #50C1D3 
    text-align: center 

.forgot-pwd:active
    color: #acacac 
</style>