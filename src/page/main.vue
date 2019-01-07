<script>
import Vue from 'vue'
import $ui from '@lib/ui'
new Vue({
    el: '#app',

    methods: {
        closeWin() {
            $ui.openWin('login', null, false, false, true, {
                    type: "fade",
                    duration: 900
            });
        }
    },

    render(h) {
        return (
            <div class="index">
                <h1 onClick={this.closeWin}>点我关闭999</h1>
            </div>
        )
    }
}) 

</script>
<style lang='stylus'>
.index
    width 100vw
    height 100vh
    display flex
    justify-content center
    align-items center
    background #000
    h1
        color #fff
</style>