import { host, port } from '@build/config'
class Ui {
    constructor() {}

    showLoading(title) {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: title || '',
            text: '请稍后...'
        });
    }

    hideLoading() {
        api.hideProgress();
    }

    showToast(msg, location) {
        api.toast({
            msg: msg,
            duration: 2000,
            location: location || 'middle'
        });
    }

    //显示自动关闭的浮动提示
    showBuilding() {
        this.showToast('功能开发中...');
    }

    showNetToast() {
        var isAddingAMW = $store.isAddingAMW();
        if (isAddingAMW) {
            return;
        }

        api.alert(
            {
                msg: '网络异常'
            },
            function(ret, err) {}
        );
    }

    getNameForUrl(url) {
        return url.substring(url.lastIndexOf('/') + 1, url.length);
    }

    /**
    * 获取相应的url 
    */
    getUrl(url) {
        const isDev = process.env.NODE_ENV === 'development' ? true : false;

        let res;
        if (isDev) {
            res = `${host}:${port}/page/${url}.html`
        } else {
            res = `widget://page/${url}.html`;
        }

        console.log(res);

        return res
    }

    /**
     * 打开窗口
     * @param {String} url 地址
     * @param {Object} pageParam 参数
     * @param {Bool} allowEdit 是否允许长按页面时弹出选择菜单
     * @param {Bool} slidBackEnabled 是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只 iOS 有效
     * @param {Bool} reload 页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行
     * @param {Object} animation 动画
     */
    openWin(url, pageParam = null, allowEdit = false, slidBackEnabled = false, reload = false, animation = null) {
        api.openWin({
            name: '' + this.getNameForUrl(url) + '',
            url: this.getUrl(url),
            pageParam: pageParam,
            allowEdit: allowEdit ? true : false,
            slidBackEnabled: slidBackEnabled,
            reload: reload,
            animation: animation ? animation : null,
            bounces: false
        });
    }

    /**
     * 打开 frame
     * @param {String} url 地址
     * @param {Object} pageParam 参数
     * @param {Bool} rect JSON 对象，frame 的位置和大小，设置 margin 后，在不同手机上面会保持与父页面的各方向边距一致，而中间区域会自动扩充
     * @param {Bool} reload 页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行
     * @param {Object} animation 动画
     * @param {Bool} bounces 是否弹动
     */
    openFrame(url, pageParam, rect, reload, animation, bounces) {
        animation = animation || {
            type: 'fade', //动画类型（详见动画类型常量）
            subType: 'from_right', //动画子类型（详见动画子类型常量）
            duration: 100 //动画过渡时间，默认300毫秒
        };
        // console.log(url)

        if (bounces === undefined) {
            bounces = true;
        }

        api.openFrame({
            name: '' + this.getNameForUrl(url) + '',
            url: this.getUrl(url),
            bounces: bounces,
            animation: animation,
            vScrollBarEnabled: true,
            hScrollBarEnabled: false,
            pageParam: pageParam,
            rect: rect || {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto',
                marginLeft: 0,
                marginTop: 0,
                marginBottom: 0,
                marginRight: 0
            },
            reload: reload
        });
    }

    /**
     * 在指定 window 或者 frame 中执行脚本
     * @param {String} winName win名称
     * @param {String} frameName frame名称
     * @param {String} script js代码
     */
    execScript(winName, frameName, script) {
        script = $util.isString(script) ? script : '() ';
        if (winName) {
            if (frameName) {
                api.execScript({
                    // 跨window或者是frame 执行脚本
                    name: winName,
                    frameName: frameName,
                    script: script
                });
            } else {
                api.execScript({
                    name: winName,
                    script: script
                });
            }
        } else {
            api.execScript({
                frameName: frameName,
                script: script
            });
        }
    }

    /**
     * 打开日期时间选择器
     * @param {String}   title    [标题]
     * @param {String}   type     [类型]
     * @param {Function} cb [回调函数]
     */
    openDateTimePicker(title, type, cb) {
        title = title || '选择时间';
        type = type || 'time';
        api.openPicker(
            {
                type: type,
                title: title
            },
            function(ret, err) {
                if (ret) {
                    var res = '';
                    switch (type) {
                        case 'date':
                            res = ret.year + '-';
                            res +=
                                ret.month < 10
                                    ? '0' + ret.month + '-'
                                    : ret.month + '-';
                            res += ret.day < 10 ? '0' + ret.day : ret.day;
                            break;
                        case 'date_time':
                            res = ret.year + '-';
                            res +=
                                ret.month < 10
                                    ? '0' + ret.month + '-'
                                    : ret.month + '-';
                            res += ret.day < 10 ? '0' + ret.day : ret.day;
                            res +=
                                ret.hour < 10
                                    ? '0' + ret.hour + ':'
                                    : ret.hour + ':';
                            res +=
                                ret.minute < 10 ? '0' + ret.minute : ret.minute;
                            break;
                        case 'time':
                            res +=
                                ret.hour < 10
                                    ? '0' + ret.hour + ':'
                                    : ret.hour + ':';
                            res +=
                                ret.minute < 10 ? '0' + ret.minute : ret.minute;
                            break;
                    }
                    cb('', res);
                } else {
                    cb(err, '');
                }
            }
        );
    }

    //显示主页
    openMain() {
        this.openWin(
            'widget://dist/pages/main/main_win',
            null,
            false,
            false,
            true
        );
    }
}

export default new Ui()
