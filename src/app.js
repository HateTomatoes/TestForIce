import React from "react";
import {createApp, config} from 'ice';
import VConsole from 'vconsole';

// import './global.css';
// import 'antd-mobile/dist/antd-mobile.css'; // or 'antd-mobile/dist/antd-mobile.less'

console.log('dddd=>', IS_DEBUG);
if(IS_DEBUG){
    var vconsole = new VConsole();
}

// 注意事件冲突
document.body.addEventListener('touchstart', function () { });

// rem适配
const idealViewWidth = window.screen.width;
const BASICVALUE = 1080;
document.documentElement.style.fontSize = `${(idealViewWidth / BASICVALUE) * 100}px`;

Date.prototype.Format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o){
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};


const appConfig = {
    app: {
        // 可选，是否解析路由组件的查询参数
        parseSearchParams: true,
    },
    // router: {
    //     type: 'browser', // 配置 browser 路由
    //     fallback: <div />,
    // },
};

createApp(appConfig);
