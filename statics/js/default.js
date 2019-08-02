$(function () {


    ceshiNet();

    getlastNewsInfo();

    //初始模板样式
    var defaultSkin = G.getCookie("skin") || "Blue";
    $("#skinBox a[data-skin='" + defaultSkin + "']").addClass("on");
    _setSkin(defaultSkin);
    //切换模板
    $("#skinChange").mouseover(function () {
        $(this).unbind("mouseout");
        $(this).find("#skinBox a").unbind("click");
        $(this).find("#skinBox").addClass("active");
        $(this).find("#skinBox a").click(function () {
            var skin = $(this).attr("data-skin");
            _setSkin(skin);
            G.setCookie("skin", skin);
            $("#skinBox a").removeClass("on");
            $(this).addClass("on");
            $("#skinBox").removeClass("active");
        });
        $(this).mouseout(function () {
            $(this).find("#skinBox").removeClass("active");
        });
    });
    function _setSkin(skin) {
        var skinClass = skin == "Violet" ? "Yellow" : skin;
        var version = $("#skinChange").attr("version");
        $("#skinClass").attr("href", "/statics/css/member" + skin + ".css?version=" + version);
    }
    //开奖声音
    $("#soundSwitch").unbind("click").click(function () {
        var myClass = $(this).attr("class");
        $(this).removeClass();
        if (myClass == "lbOn") {
            $(this).addClass("lbOff");
            __sysinfo.voice = 0;
        } else {
            $(this).addClass("lbOn");
            __sysinfo.voice = 1;
        }
    });
    //最新开奖顯示或隱藏
    $("#look_history").unbind("click").click(function () {
        if ($("#history").html().length > 50) {
            if ($(this).attr("class").indexOf("active") == -1) {
                $(this).addClass("active");
                $(".history_wrap").animate({ "height": "+=165px" });
            } else {
                $(this).removeClass("active");
                $(".history_wrap").animate({ "height": "-=165px" });
            }
        }
    });
    //rightBox事件
    $(".rightBox div.left li").unbind("click").click(function () {
        $(".rightBox div.left li").removeClass("active");
        $(".rightBox div.right ul").removeClass("active");
        $(this).addClass("active");
        var name = $(this).attr("name");
        $("#" + name).addClass("active");
    });

    //navText事件
    $("#navText a").unbind("click").click(function () {
        var data_title = $(this).find("span").html();
        if ($(this).attr("id") == "quit") {
            G.alert({ content: "确定退出系统吗？",
                ok: function () {
                    location = "/login?t=" + __sysinfo.autoTid;
                    return true;
                },
                cancel: function () { }
            });
        } else if ($(this).attr("id") == "lineching") {
            var table = ["<div id='result'><div id='lineching' class='history_wrap'><table class='infoList'><tbody>"];
            for (var i = 0; i < __sysinfo.data.ipJson.length; i++) {
                table.push("<tr>");
                table.push("<td style='width:40px;height:30px;' class='bcg'>线路" + (i + 1) + ":</td><td style='height:30px;text-align:left;'><input type='text' class='input' style='width:120px;height:14px;' disabled='disabled' value='响应时间:測速中'> <input type='radio' style='vertical-align:middle' name='radio' value='" + __sysinfo.data.ipJson[i] + "'></td>");
                table.push("</tr>");
            }
            table.push("</tbody></table></div></div>");
            var content = table.join("");
            G.alert({ title: "切换线路", content: content, width: 230, cancelVal: "測速",
                initialize: function () {
                    SelectBoxSet(0);
                },
                ok: function () {


                    var urlval = $("#lineching input[type='radio']:checked").val();
                    if (urlval) {
                        G.mask();
                        urlval = urlval + "/index?t=" + __sysinfo.autoTid;
                        location.href = urlval;
                        return true;
                    }
                },
                cancel: function () {
                    // if (S.lineStop) {
                    //     SelectBoxSet(0);
                    // }
                    return true;
                }
            });
        } else {
            var data_mesg = $(this).attr("data-mesg");
            if (data_mesg === "Introduction") {
                G.mask();
                $.ajax({
                    type: "get",
                    // url: "/Introduction.htm",
                    url: "/",
                    cache: true,
                    dataType: 'text',
                    data: null,
                    success: function (text) {
                        text = '<div class="WFBox" id=\'introduction\'>\n' +
                            '    <div class="MenuBox2">\n' +
                            '        <label></label>\n' +
                            '    </div>\n' +
                            '\n' +
                            '\n' +
                            '\n' +
                            '    <!--重慶时时彩-->\n' +
                            '    <div class="contentNode" style="display:none;" id="conNode_3">\n' +
                            '        <div class="box mt7">\n' +
                            '            <h1>重要声明:</h1>\n' +
                            '            <ul>\n' +
                            '                <li><label>1.</label><span>如果客户怀疑自己的资料被盜用，应立即通知本公司，并更改详细资料，以前的使用者名称及密码将全部无效。</span></li>\n' +
                            '                <li><label>2.</label><span>客户有责任确保自己的账户及登入资料的保密性。以使用者名称及密码进行的任何网上投注将被视为有效。</span></li>\n' +
                            '                <li><label>3.</label><span>公布赔率时出现的任何打字错误或非故意人为失误，本公司保留改正错误和按正确赔率结算投注的权力。您居住所在地的法律有可能规定网路博奕不合法；若此情況属实，本公司将不会批准您使用付账卡进行交易。</span></li>\n' +
                            '                <li><label>4.</label><span>每次登入时客户都应该核对自己的账户结余额。如对余额有任何疑问，请在第一时间內通知本公司。</span></li>\n' +
                            '                <li><label>5.</label><span>一旦投注被接受，则不得取消或修改。</span></li>\n' +
                            '                <li><label>6.</label><span>所有号码赔率将不时浮动，派彩时的赔率将以确认投注时之赔率为准。</span></li>\n' +
                            '                <li><label>7.</label><span>所有投注都必须在开奖前时间內进行否则投注无效。</span></li>\n' +
                            '                <li class="line"><label>9.</label><span>所有投注派彩彩金皆含本金。</span></li>\n' +
                            '            </ul>\n' +
                            '            <h1>河内5分彩规则说明:</h1>\n' +
                            '            <ul>\n' +
                            '                <li class="line">&nbsp;&nbsp;该游戏的投注时间、开奖时间和开奖号码与河内5分彩完全同步，北京时间（GMT+8）每天白天从上午00：00开到24:00,每5分钟开一次奖,每天开奖288期。 </li>\n' +
                            '            </ul>\n' +
                            '            <p>※ 第一球~第五球</p>\n' +
                            '            <ul>\n' +
                            '                <li><label>●</label><span><strong>第一球特~第五球特：</strong>第一球特、第二球特、第三球特、第四球特、第五球特：指下注的每一球特与开出之号码其开奖顺序及开奖号码相同，视为中奖，如第一球开出号码8，下注第一球为8者视为中奖，其余情形视为不中奖。</span></li>\n' +
                            '                <li><label>●</label><span><strong>单双大小：</strong><b>根据相应单项投注第一球特 ~ 第五球特开出的球号，判断胜负。</b></span></li>\n' +
                            '                <li><label>&nbsp;</label><span><strong>单双：</strong>根据相应单项投注的第一球特 ~ 第五球特开出的球号为双数叫特双，如2、6；特码为单数叫特单，如1、3。</span></li>\n' +
                            '                <li><label>&nbsp;</label><span><strong>大小：</strong>根据相应单项投注的第一球特 ~ 第五球特开出的球号大于或等于5为特码大，小于或等于4为特码小。</span></li>\n' +
                            '                <li><label>●</label><span><strong>总和单双大小：</strong></span></li>\n' +
                            '                <li><label>&nbsp;</label><span><strong>单双：</strong>根据相应单项投注的第一球特 ~ 第五球特开出的球号数字总和值是双数为总和双，数字总和值是单数为总和单。</span></li>\n' +
                            '                <li class="line"><label>&nbsp;</label><span><strong>大小：</strong>根据相应单项投注的第一球特 ~ 第五球特开出的球号大于或等于23为特码大，小于或等于22为特码小。</span></li>\n' +
                            '            </ul>\n' +
                            '            <p>※ 二字定 ～ 四字定</p>\n' +
                            '            <ul>\n' +
                            '                <li><label>●</label><span>下注号码与开出之号码与下注顺序与号码相同则为中奖，其余则不中奖。如开出12345，12XXX、1X3XX、123XX、12X3X、1234X、X2345为中奖</span></li>\n' +
                            '            </ul>\n' +
                            '         \n' +
                            '           \n' +
                            '\n' +
                            '            <div class="clear"></div>\n' +
                            '        </div>\n' +
                            '        <div class="clear"></div>\n' +
                            '    </div>\n' +
                            '\n' +
                            '\n' +
                            '\n' +
                            '    <!--北京賽車(PK10)-->\n' +
                            '    <div class="contentNode" style="display:none;" id="conNode_4">\n' +
                            '        <div class="box mt7">\n' +
                            '            <h1>重要聲明:</h1>\n' +
                            '            <ul>\n' +
                            '                <li><label>1.</label><span>如果客户怀疑自己的资料被盜用，应立即通知本公司，并更改详细资料，以前的使用者名称及密码将全部无效。</span></li>\n' +
                            '                <li><label>2.</label><span>客户有责任确保自己的账户及登入资料的保密性。以使用者名称及密码进行的任何网上投注将被视为有效。</span></li>\n' +
                            '                <li><label>3.</label><span>公布赔率时出现的任何打字错误或非故意人为失误，本公司保留改正错误和按正确赔率结算投注的权力。您居住所在地的法律有可能规定网路博奕不合法；若此情況属实，本公司将不会批准您使用付账卡进行交易。</span></li>\n' +
                            '                <li><label>4.</label><span>每次登入时客户都应该核对自己的账户结余额。如对余额有任何疑问，请在第一时间內通知本公司。</span></li>\n' +
                            '                <li><label>5.</label><span>一旦投注被接受，则不得取消或修改。</span></li>\n' +
                            '                <li><label>6.</label><span>所有号码赔率将不时浮动，派彩时的赔率将以确认投注时之赔率为准。</span></li>\n' +
                            '                <li><label>7.</label><span>每注最高投注金额按不同[場次]及[投注項目]及[会員账号]設定浮动。如投注金额超過上述設定，本公司有权取消超過之投注金额。</span></li>\n' +
                            '                <li><label>8.</label><span>所有投注都必须在开奖前时间內进行否则投注无效。</span></li>\n' +
                            '                <li class="line"><label>9.</label><span>所有投注派彩彩金皆含本金。</span></li>\n' +
                            '            </ul>\n' +
                            '            <h1>北京赛车(原名：北京福彩“PK拾”)规则说明:</h1>\n' +
                            '            <ul>\n' +
                            '                <li class="line">&nbsp;&nbsp;该游戏的投注时间、开奖时间和开奖号码与“北京PK拾”完全同步，北京时间（GMT+8）每天白天从上午09:10开到晚上23:50，每20分钟开一次奖,每天开奖44期。</li>\n' +
                            '            </ul>\n' +
                            '            <p>※ 1～10 两面：<b>指 单、双；大、小。</b></p>\n' +
                            '            <ul>\n' +
                            '                <li><label>●</label><span><strong>单、双：</strong>号码为双数叫双，如4、8；号码为单数叫单，如5、9。</span></li>\n' +
                            '                <li class="line"><label>●</label><span><strong>大、小：</strong>开出之号码大于或等于6为大，小于或等于5为小。</span></li>\n' +
                            '            </ul>\n' +
                            '            <p>※ 第一名～第十名 车号指定</p>\n' +
                            '            <ul>\n' +
                            '                <li class="line"><label>●</label><span>每一个车号为一投注组合，开奖结果“投注车号”对应所投名次视为中奖，其余情形视为不中奖。 </span></li>\n' +
                            '            </ul>\n' +
                            '            <p>※ 1～5龙虎</p>\n' +
                            '            <ul>\n' +
                            '                <li><label>●</label><span><strong>冠　军 龙/虎：</strong>“第一名”车号大于“第十名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。</span></li>\n' +
                            '                <li><label>●</label><span><strong>亚　军 龙/虎：</strong>“第二名”车号大于“第九名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。</span></li>\n' +
                            '                <li><label>●</label><span><strong>第三名 龙/虎：</strong>“第三名”车号大于“第八名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。</span></li>\n' +
                            '                <li><label>●</label><span><strong>第四名 龙/虎：</strong>“第四名”车号大于“第七名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。</span></li>\n' +
                            '                <li class="line"><label>●</label><span><strong>第五名 龙/虎：</strong>“第五名”车号大于“第六名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。</span></li>\n' +
                            '            </ul>\n' +
                            '            <p>※ 冠军车号＋亚军车号＝冠亚和值</p>\n' +
                            '            <ul>\n' +
                            '                <li><label>●</label><span><strong>冠亚和单双：</strong>“冠亚和值”为单视为投注“单”的注单视为中奖，为双视为投注“双”的注单视为中奖，其余视为不中奖。</span></li>\n' +
                            '                <li><label>●</label><span><strong>冠亚和大小：</strong>“冠亚和值”大于11时投注“大”的注单视为中奖，小于或等于11时投注“小”的注单视为中奖，其余视为不中奖。</span></li>\n' +
                            '                <li><label>●</label><span><strong>冠亚和指定：</strong>“冠亚和值”可能出现的结果为3～19，  投中对应“冠亚和值”数字的视为中奖，其余视为不中奖。</span></li>\n' +
                            '            </ul>\n' +
                            '            <div class="clear"></div>\n' +
                            '        </div>\n' +
                            '        <div class="clear"></div>\n' +
                            '    </div>\n' +
                            '\n' +
                            '\n' +
                            '\n' +
                            '\n' +
                            '</div>';
                        G.maskClose();
                        G.alert({ title: data_title, content: text, width: 820, height: 680,
                            initialize: function () {
                                var titleNavAry = ["<select data-id='gameIndex'>"];
                                $("#menuList li a").each(function () {
                                    titleNavAry.push("<option value='" + $(this).attr("data-index") + "'>" + $(this).html() + "</option>");
                                });
                                titleNavAry.push("</select>");
                                $("#introduction .MenuBox2 label").html(titleNavAry.join(""));
                                var data_index = $("#menuText").attr("data-index");
                                $("#introduction #conNode_" + data_index).show();
                                $("#introduction select[data-id='gameIndex']").val(data_index).unbind("change").change(function () {
                                    $("#introduction .contentNode").hide();
                                    $("#introduction #conNode_" + $(this).val()).show();
                                });
                            },
                            ok: function () { return true; }
                        });
                    }, error: function () { G.maskClose(); }
                });
            } else {
                //加载模块
                var actionAry = data_mesg.split("&");
                var data_action = data_mesg;
                if ((G.isAction({ key: "Result", ary: actionAry }) || G.isAction({ key: "UserInfo", ary: actionAry })
                    || G.isAction({ key: "BetDetails", ary: actionAry }) || G.isAction({ key: "IssueHistory", ary: actionAry })) && !G.query("gameIndex", "?" + data_action)) {
                    data_action = data_action + "&gameIndex=" + $("#menuText").attr("data-index");
                }
                try {
                    eval(actionAry[0] + '({data_action: data_action})');
                } catch (e) { }
            }
        }
    });




    S.loginDefautl = "/login/?e=" + +new Date();
    //初始化页面信息
    // G.ajax("membergamedefault", function (json) {
        var  json = '{"userName":"29chenv","credits":0.0,"paytype":0,"maxPayout":1000000,"downBak":1,"ipJson":["http://ub1.pk369369.com","http://ub2.pk369369.com","http://ub3.pk369369.com","http://ub4.pk369369.com"],"gameList":{"3":[{"gamedata\u0026gameIndex\u003d3\u0026type\u003d2":"一字定"},{"gamedata\u0026gameIndex\u003d3\u0026type\u003d9":"二字定"},{"gamedata\u0026gameIndex\u003d3\u0026type\u003d19":"快打"},{"gamedata\u0026gameIndex\u003d3\u0026type\u003d20":"快选"},{"gamedata\u0026gameIndex\u003d3\u0026type\u003d22":"txt导入"}]}}';
        json = $.parseJSON(json);
        __sysinfo.data = json;
        if (json) {
            $("#userName").html(json.userName);
            $("#creditSpan").html(json.credits);
            $("#usableCreditSpan").html(json.ky);
            if (json.state) {
                $("#state").html("(" + json.state + ")");
            }
            //可选彩种列表
            var len = 0, data_menuList = [], data_ary;
            for (var i in json.gameList) {
                data_ary = getSwitch(i);
                if (len == 0) { //默认彩种
                    $("#menuText").attr("data-index", data_ary[1]).find("span").html(data_ary[0]);
                    S.loadingWrap = true;
                    gametop(data_ary[1], true); //加载彩种玩法盘
                }


                data_menuList.push("<li><a href='javascript:void(0)' data-index='" + data_ary[1] + "'>" + data_ary[0] + "</a></li>");
                len++;
            }
            $("#menuList").html(data_menuList.join(""));
            gamechangeevent();
        }
    // });
});

//获取最新公告
function getlastNewsInfo() {
    // G.ajax("/lastNewsInfo",function (json) {
        var json = '{"id":2,"content":"尊敬的各级用户，公司现在只有22个电脑和手机登录版机器人免费试用到本月28号，是您做群的好帮手，如有需要，请下载博信安全聊天软件www.pgyer.com/ComG添加客服账号10086为好友联系！先到先得，机不可失！！！"}';
        if (json && json.content && json.content != G.getCookie(__sysinfo.autoTid + "lastNewsInfo")){
            G.alert({ content: json.content, title: "通知", width: 600,height:400,close:function () {

                    G.setCookie(__sysinfo.autoTid + "lastNewsInfo",json.content);

                },okVal:"已阅读",ok:function () {
                    return true;
                }});

        }

    // },function () {
    //
    // });
    setTimeout("getlastNewsInfo()",1000 * 5 * 60);
}

//检测线路
function ceshiNet() {
    var host = "http://" +window.location.host;
    ping({url:host,afterPing:function (index,time){

            if (time > 700){
                var content = "当前线路网络不好,是否要切换线路&nbsp;&nbsp;<button name='yes' style='color: red;padding: 2px'>是</button> &nbsp;&nbsp;<button name='no' style='color: red;padding: 2px'>否</button>";
                var elmOffset = $("#mainIframe").offset();
                var top = elmOffset.top; //控件top坐標
                var left = 0; //控件left坐標
                var myDiv = "<div id='myxTips' style='left:" + left + "px; top:" + top + "px;'><div id='myxTipsLeft'></div><div id='myxTipsContent'>" + content + "</div></div>";
                $("#myxTips").remove();
                $("body").append(myDiv);
                $("#myxTips button[name='yes']").unbind("click").click(function () {
                    $("#myxTips").remove();
                    var table = ["<div id='result'><div id='lineching' class='history_wrap'><table class='infoList'><tbody>"];
                    for (var i = 0; i < __sysinfo.data.ipJson.length; i++) {
                        table.push("<tr>");
                        table.push("<td style='width:40px;height:30px;' class='bcg'>线路" + (i + 1) + ":</td><td style='height:30px;text-align:left;'><input type='text' class='input' style='width:120px;height:14px;' disabled='disabled' value='响应时间:測速中'> <input type='radio' style='vertical-align:middle' name='radio' value='" + __sysinfo.data.ipJson[i] + "'></td>");
                        table.push("</tr>");
                    }
                    table.push("</tbody></table></div></div>");
                    var content = table.join("");
                    G.alert({ title: "切换线路", content: content, width: 230, cancelVal: "測速",
                        initialize: function () {
                            SelectBoxSet(0);
                        },
                        ok: function () {


                            var urlval = $("#lineching input[type='radio']:checked").val();
                            if (urlval) {
                                G.mask();
                                urlval = urlval + "/index?t=" + __sysinfo.autoTid;
                                location.href = urlval;
                                return true;
                            }
                        },
                        cancel: function () {
                            setTimeout("ceshiNet()",60000 * 5);
                            return true;
                        }
                    });

                });
                $("#myxTips button[name='no']").unbind("click").click(function () {
                    $("#myxTips").remove();
                });
            }else {
                setTimeout("ceshiNet()",60000 * 5);
            }


        }
        ,interval : 1,idx:0});

}

//彩种事件
function gamechangeevent() {
    //彩种選项
    $(".menu").mouseenter(function () {
        $(this).find("div").show();
    });
    $(".menu").mouseleave(function () {
        $(this).find("div").hide();
    });
    $("#menuList a").click(function () {
        var gameIndex = $(this).attr("data-index");
        var data_txt = $(this).html();
        var defaultIndex = $("#menuText").attr("data-index");
        $("#result2").remove();
        $("#menuText").attr("data-index", gameIndex).find("span").html(data_txt);
        $(".menu").find("div").hide();
        if (defaultIndex != gameIndex) {
            S.loadingWrap = true;
            gametop(gameIndex, true);
        }
    });
}

//绑定模块
function middleBind(msg) {
    if (msg.data_action && S.stop) {
        S.stop = false;
        if (S.request) { //中断AJAX连接
            S.request.abort();
        }
        if (S.intervalTime) { //关闭setInterval
            clearInterval(S.intervalTime);
        }
        if (S.intervalOpenTime) {
            clearInterval(S.intervalOpenTime);
        }

        //加载模块
        var actionAry = msg.data_action.split("&");
        if ((G.isAction({ key: "Result", ary: actionAry }) || G.isAction({ key: "UserInfo", ary: actionAry })
            || G.isAction({key:"BetDetails", ary: actionAry}) || G.isAction({key:"IssueHistory", ary: actionAry})
        ) && !G.query("gameIndex", "?" + msg.data_action)) {
            msg.data_action = msg.data_action + "&gameIndex=" + $("#menuText").attr("data-index");
        }

        if (!G.query("gameIndex", "?" + msg.data_action)) msg.data_action = msg.data_action + "&gameIndex=" + $("#menuText").attr("data-index");

        if ( G.isAction({key:"BetDetails", ary: actionAry}) || G.isAction({key:"IssueHistory", ary: actionAry}) || G.query("type", "?" + msg.data_action) <= 19){
            $("#rightBox").html("");
        }

        try {
            eval(actionAry[0] + '({data_action: msg.data_action})');

        } catch (e) { }
        S.intervalTime = setTimeout(function () { S.stop = true; }, 700);
    }
}

function getSwitch(i) {
    var ary = [];
    switch (i) {
        case "1":
            ary[0] = "香港樂透(HK)";
            ary[1] = "1";
            break;
        case "2":
            ary[0] = "廣東快樂十分";
            ary[1] = "2";
            break;
        case "3":
            ary[0] = "河内5分彩";
            ary[1] = "3";
            break;
        case "15":
            ary[0] = "极速時時彩";
            ary[1] = "15";
            break;
        case "4":
            ary[0] = "北京赛车(PK10)";
            ary[1] = "4";
            break;
        case "14":
            ary[0] = "极速賽車";
            ary[1] = "14";
            break;
        case "5":
            ary[0] = "江蘇骰寶(快3)";
            ary[1] = "5";
            break;
        case "6":
            ary[0] = "北京快乐8";
            ary[1] = "6";
            break;
        case "7":
            ary[0] = "重慶幸運農場";
            ary[1] = "7";
            break;
        case "8":
            ary[0] = "幸運飛艇";
            ary[1] = "8";
            break;
        case "10":
            ary[0] = "廣西快樂十分";
            ary[1] = "10";
            break;
        case "13":
            ary[0] = "广西快3";
            ary[1] = "13";
            break;
    }
    return ary;
}

//历史开奖
function Result(msg) {
    G.mask();
    // G.ajax(msg.data_action, function (json) {
    var json = $.parseJSON('{"table":["<tr class=\'\'><td>20190802179<br />08-02 14:55</td><td><i class=\'SSCNo_5\'></i><i class=\'SSCNo_3\'></i><i class=\'SSCNo_1\'></i><i class=\'SSCNo_9\'></i><i class=\'SSCNo_7\'></i></td><td class=\'sw45\'>25</td><td class=\'red sw35\'>大</td><td class=\'sw35\'>单</td></tr>","<tr class=\'\'><td>20190802178<br />08-02 14:50</td><td><i class=\'SSCNo_5\'></i><i class=\'SSCNo_0\'></i><i class=\'SSCNo_2\'></i><i class=\'SSCNo_2\'></i><i class=\'SSCNo_3\'></i></td><td class=\'sw45\'>12</td><td class=\'sw35\'>小</td><td class=\'red sw35\'>双</td></tr>","<tr class=\'\'><td>20190802177<br />08-02 14:45</td><td><i class=\'SSCNo_7\'></i><i class=\'SSCNo_0\'></i><i class=\'SSCNo_0\'></i><i class=\'SSCNo_3\'></i><i class=\'SSCNo_7\'></i></td><td class=\'sw45\'>17</td><td class=\'sw35\'>小</td><td class=\'sw35\'>单</td></tr>","<tr class=\'\'><td>20190802176<br />08-02 14:40</td><td><i class=\'SSCNo_9\'></i><i class=\'SSCNo_0\'></i><i class=\'SSCNo_2\'></i><i class=\'SSCNo_1\'></i><i class=\'SSCNo_6\'></i></td><td class=\'sw45\'>18</td><td class=\'sw35\'>小</td><td class=\'red sw35\'>双</td></tr>","<tr class=\'\'><td>20190802175<br />08-02 14:35</td><td><i class=\'SSCNo_1\'></i><i class=\'SSCNo_2\'></i><i class=\'SSCNo_1\'></i><i class=\'SSCNo_3\'></i><i class=\'SSCNo_5\'></i></td><td class=\'sw45\'>12</td><td class=\'sw35\'>小</td><td class=\'red sw35\'>双</td></tr>","<tr class=\'\'><td>20190802174<br />08-02 14:30</td><td><i class=\'SSCNo_7\'></i><i class=\'SSCNo_2\'></i><i class=\'SSCNo_1\'></i><i class=\'SSCNo_3\'></i><i class=\'SSCNo_1\'></i></td><td class=\'sw45\'>14</td><td class=\'sw35\'>小</td><td class=\'red sw35\'>双</td></tr>","<tr class=\'\'><td>20190802173<br />08-02 14:25</td><td><i class=\'SSCNo_0\'></i><i class=\'SSCNo_4\'></i><i class=\'SSCNo_8\'></i><i class=\'SSCNo_9\'></i><i class=\'SSCNo_4\'></i></td><td class=\'sw45\'>25</td><td class=\'red sw35\'>大</td><td class=\'sw35\'>单</td></tr>","<tr class=\'\'><td>20190802172<br />08-02 14:20</td><td><i class=\'SSCNo_9\'></i><i class=\'SSCNo_3\'></i><i class=\'SSCNo_6\'></i><i class=\'SSCNo_4\'></i><i class=\'SSCNo_5\'></i></td><td class=\'sw45\'>27</td><td class=\'red sw35\'>大</td><td class=\'sw35\'>单</td></tr>","<tr class=\'\'><td>20190802171<br />08-02 14:15</td><td><i class=\'SSCNo_6\'></i><i class=\'SSCNo_3\'></i><i class=\'SSCNo_1\'></i><i class=\'SSCNo_3\'></i><i class=\'SSCNo_1\'></i></td><td class=\'sw45\'>14</td><td class=\'sw35\'>小</td><td class=\'red sw35\'>双</td></tr>","<tr class=\'\'><td>20190802170<br />08-02 14:10</td><td><i class=\'SSCNo_1\'></i><i class=\'SSCNo_7\'></i><i class=\'SSCNo_0\'></i><i class=\'SSCNo_8\'></i><i class=\'SSCNo_0\'></i></td><td class=\'sw45\'>16</td><td class=\'sw35\'>小</td><td class=\'red sw35\'>双</td></tr>"]}');
        G.maskClose();
        var gameIndex = parseInt(G.query("gameIndex", "?" + msg.data_action));
        var data_thead, data_width, data_table = ["<div id='result'>"];
        data_table.push("<div class='MenuBox2'><label></label></div>");
        data_table.push("<div class='history_wrap MenuPadding-top'>");
        switch (gameIndex) {
            case 1: //香港HK
                data_width = 910;
                data_thead = "<tr><th class='w12'>期数日期</th><th>开奖号码</th><th colspan='3'>总和</th><th>7色波</th><th colspan='6'>特码两面</th></tr>";
                break;
            case 7:
            case 2: //广东快乐十分
                data_width = 690;
                data_thead = "<tr><th class='w15'>期数日期</th><th>开奖号码</th><th colspan='4'>总和</th><th colspan='4'>1-4龙虎</th></tr>";
                break;
            case 15:
            case 3: //重庆时时彩
                data_width = 780;
                data_thead = "<tr><th class='w15'>期数日期</th><th>开奖号码</th><th colspan='3'>总和</th></tr>";
                break;
            case 4:
            case 8: //北京赛车PK10
            case 14: //极速赛车
                data_width = 750;
                data_thead = "<tr><th class='w15'>期数日期</th><th>开奖号码</th><th colspan='3'>冠亚军和</th><th colspan='5'>1~5龙虎</th></tr>";
                break;
            case 5: //江苏快3
                data_width = 320;
                data_thead = "<tr><th>期数日期</th><th>开奖号码</th><th colspan='2'>总和</th></tr>";
                break;
            case 6: //北京快乐8
                data_width = 970;
                data_thead = "<tr><th class='w10'>期数日期</th><th>开奖号码</th><th colspan='4'>总和</th><th colspan='2'>比数量</th></tr>";
                break;
            case 10: //广西快乐十分
                data_width = 500;
                data_thead = "<tr><th class='w25'>期数日期</th><th>开奖号码</th><th colspan='4'>总和</th><th>龙虎</th></tr>";
                break;
            case 13: //广西快3
                data_width = 320;
                data_thead = "<tr><th>期数日期</th><th>开奖号码</th><th colspan='2'>总和</th></tr>";
                //data_width = 825;
                //data_thead = "<tr><th class='w12'>期数日期</th><th>开奖号码</th><th colspan='2'>千百</th><th colspan='2'>千拾</th><th colspan='2'>千个</th><th colspan='2'>百拾</th><th colspan='2'>百个</th><th colspan='2'>拾个</th></tr>";
                break;
        }
        data_table.push("<table><thead>" + data_thead + "</thead>");
        data_table.push("<tbody>");
        data_table.push(json.table.join(""));
        data_table.push("</tbody></table>");
        data_table.push("<div id='fondiv' style='text-align:center;padding:1px 0;margin-top:2px;'><a href='javascript:void(0);'>点击获取更多...</a><span id='nodataTitle' class='hiden'>无数據加載！</span></div>");
        data_table.push("</div>");
        data_table.push("</div>");
        var content = G.overflowDiv({ content: data_table.join(""), height: 590 });
        var generatedCount = 1, my_action;
        G.alert({ title: "历史开奖", content: content, width: data_width,
            initialize: function () {
                $("#result tbody tr.bc").removeClass("bc");
                $("#result tbody tr:odd").addClass("bc");
                var titleNavAry = ["<select data-id='gameIndex'>"];
                $("#menuList li a").each(function () {
                    titleNavAry.push("<option value='" + $(this).attr("data-index") + "'>" + $(this).html() + "</option>");
                });
                titleNavAry.push("</select>");
                $("#result .MenuBox2 label").html(titleNavAry.join(""));
                var data_index = G.query("gameIndex", "?" + msg.data_action);
                $("#result select[data-id='gameIndex']").val(data_index).unbind("change").change(function () {
                    Result({ data_action: "Result&gameIndex=" + $(this).val() });
                });
                $("#result #fondiv").find("a").unbind("click").click(function () {
                    generatedCount++;
                    my_action = G.urlReplace({ url: "?" + msg.data_action, paramName: "page", val: generatedCount, pad: true }).replace("?", "");
                    appendHtm();
                });
                function appendHtm() {
                    G.myLayerImg();
                    G.ajax(my_action, function (json) {
                        G.myLayerImgClose();
                        if (json && json.table.length > 0) {
                            $("#result tbody").append(json.table.join(""));
                            $("#result tbody tr.bc").removeClass("bc");
                            $("#result tbody tr:odd").addClass("bc");
                        } else {
                            $("#result #fondiv").find("a").hide();
                            $("#result #fondiv").find("span").show();
                        }
                    }, function () { G.myLayerImgClose(); });
                }
            },
            ok: function () { return true; }
        });

    // }, function () { G.maskClose(); });
}

//登录日志
function LoginLog(msg) {
    G.mask();
    // G.ajax(msg.data_action + "&name=" + __sysinfo.data.userName, function (json) {
    var json = $.parseJSON('[[132934,"2019-08-02 10:54:57","***",""],[128662,"2019-08-01 22:49:07","***",""],[128629,"2019-08-01 22:45:06","***",""],[128149,"2019-08-01 21:57:22","***",""],[126362,"2019-08-01 19:01:30","***",""],[126353,"2019-08-01 19:00:24","***",""],[126321,"2019-08-01 18:57:12","***",""],[126296,"2019-08-01 18:53:22","***",""],[126206,"2019-08-01 18:43:37","***",""],[125505,"2019-08-01 17:26:51","***",""]]');
        G.maskClose();
        var data_table = ["<div id='result'>"];
        data_table.push("<div class='history_wrap'>");
        data_table.push("<table>");
        data_table.push("<thead><tr><th>ID编号</th><th>登录时间</th><th>IP地址</th><th>IP归属</th></tr></thead>");
        data_table.push("<tbody>");
        if (json && json.length > 0) {
            for (var i = 0; i < json.length; i++) {
                data_table.push("<tr>");
                for (var n = 0; n < json[i].length; n++) {
                    data_table.push("<td>" + json[i][n] + "</td>");
                }
                data_table.push("</tr>");
            }
        }
        data_table.push("</tbody>");
        data_table.push("</table>");
        data_table.push("<div id='fondiv' style='text-align:center;padding:1px 0;margin-top:2px;'><a href='javascript:void(0);'>点击获取更多...</a><span id='nodataTitle' class='hiden'>无数據加載！</span></div>");
        data_table.push("</div>");
        data_table.push("</div>");
        var content = G.overflowDiv({ content: data_table.join("") });
        var generatedCount = 1, my_action;
        G.alert({ title: "登录日誌", content: content, width: 470,
            initialize: function () {
                $("#result tbody tr:odd").addClass("bc");
                $("#result #fondiv").find("a").unbind("click").click(function () {
                    generatedCount++;
                    my_action = G.urlReplace({ url: "?" + msg.data_action, paramName: "page", val: generatedCount, pad: true }).replace("?", "");
                    appendHtm();
                });
                function appendHtm() {
                    G.myLayerImg();
                    G.ajax(my_action, function (json) {
                        G.myLayerImgClose();
                        if (json && json.length > 0) {
                            var table = [];
                            for (var i = 0; i < json.length; i++) {
                                table.push("<tr>");
                                for (var n = 0; n < json[i].length; n++) {
                                    table.push("<td>" + json[i][n] + "</td>");
                                }
                                table.push("</tr>");
                            }
                            $("#result tbody").append(table.join(""));
                            $("#result tbody tr:odd").addClass("bc");
                        } else {
                            $("#result #fondiv").find("a").hide();
                            $("#result #fondiv").find("span").show();
                        }
                    }, function () { G.myLayerImgClose(); });
                }
            },
            ok: function () { return true; }
        });

    // }, function () { G.maskClose(); });
}



//修改密码
function ChangePwd(msg) {
    var data_stop = true;
    var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"
        + "<tbody>"
        + "<tr>"
        + "<td valign='top'>"
        + "<table id='changepwd' class='infoList'>"
        + "<tbody>"
        + "<tr>"
        + "<td height='30' width='100' align='right'>原始密码&nbsp;</td>"
        + "<td height='30'>&nbsp;<input name='voldpassword' class='input' style='width:130px;' autocomplete='off' type='password'></td>"
        + "</tr>"
        + "<tr>"
        + "<td height='30' align='right'>新設密码&nbsp;</td>"
        + "<td height='30' align='left'>&nbsp;<input name='vnewpassword' autocomplete='off' class='input' style='width:130px;' type='password'></td>"
        + "</tr>"
        + "<tr>"
        + "<td height='30' align='right'>确認密码&nbsp;</td>"
        + "<td height='30' align='left'>&nbsp;<input name='vrenewpassword' autocomplete='off' class='input' style='width:130px;' type='password'></td>"
        + "</tr>"
        + "</tbody>"
        + "</table>"
        + "</td>"
        + "</tr>"
        + "</tbody>"
        + "</table>";
    G.alert({ title: "修改密码", content: content,width:380,
        okVal: "确定修改",
        cancelVal:"重置",
        ok: function () {
            var voldpassword = $("input[name='voldpassword']");
            var vnewpassword = $("input[name='vnewpassword']");
            var vrenewpassword = $("input[name='vrenewpassword']");
            if (voldpassword.val() == "") {
                G.myTips({ content: "请填写原始密码", obj: voldpassword, myclick: true });
            } else if (voldpassword.val().length < 6 || voldpassword.val().length > 20 || !G.StringSign(voldpassword.val())) {
                G.myTips({ content: "密码 6-20位,且必需包含字母、和数字！", obj: voldpassword, myclick: true });
            } else if (vnewpassword.val() == "") {
                G.myTips({ content: "请填写新密码", obj: voldpassword, myclick: true });
            } else if (vnewpassword.val().length < 6 || vnewpassword.val().length > 20 || !G.safety(vnewpassword.val())) {
                G.myTips({ content: "密码 6-20位,且必需包含字母、和数字！", obj: vnewpassword, myclick: true });
            } else if (vnewpassword.val() != vrenewpassword.val()) {
                G.myTips({ content: "两次如数密码不一致，请核实后重新輸入！", obj: vrenewpassword, myclick: true });
            } else if (vnewpassword.val() == voldpassword.val()) {
                G.myTips({ content: "旧密码与新密码一致，请更换新密码。", obj: vnewpassword, myclick: true });
            } else if (data_stop) {
                data_stop = false;
                G.mask();
                var data = [];
                data.push("voldpassword:" + voldpassword.val());
                data.push("vnewpassword:" + vnewpassword.val());
                G.ajax("cheangepwd&voldpassword=" + voldpassword.val() + "&vnewpassword=" + vnewpassword.val(), function (json) {
                    data_stop = true;
                    G.maskClose();
                    if (json.result == 1) {
                        G.alert({ content: "密码更改成功。", ok: function () { return true; } });
                    } else {
                        alert(json.result);
                        data_stop = true;
                    }
                }, function () { G.maskClose(); });
            }
        },
        cancel: function () { $("#changepwd input[type='password']").val(""); return true; }
    });
}

//个人信息
function UserInfo(msg) {
    G.mask();
    // G.ajax(msg.data_action, function (json) {
        var json = $.parseJSON('{"userName":"29chenv","fatherName":"29chenv","rebateId":0,"state":"启用","credits":0.0,"yuer":0.0,"list":{"1":[1.0,1000,10000,9.97,0.013,9.84,0.197,0.001,0.01],"15":[1.0,1000,10000,9.97,0.013,9.84,0.197,0.001,0.01],"29":[1.0,1000,10000,9.97,0.013,9.84,0.197,0.001,0.01],"43":[1.0,1000,10000,9.97,0.013,9.84,0.197,0.001,0.01],"57":[1.0,1000,10000,9.97,0.0,9.97,0.197,0.001,0.01],"108":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"208":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"308":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"408":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"508":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"608":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"708":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"808":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"908":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"1008":[1.0,1000,5000,99.7,0.0,99.7,0.197,0.001,0.1],"1108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"2108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"3108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"4108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"5108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"6108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"7108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"8108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"9108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"10108":[0.1,100,1000,997.0,0.0,997.0,0.197,0.001,1.0],"11108":[0.1,10,30,9970.0,0.0,9970.0,0.197,0.001,10.0],"21108":[0.1,10,30,9970.0,0.0,9970.0,0.197,0.001,10.0],"31108":[0.1,10,30,9970.0,0.0,9970.0,0.197,0.001,10.0],"41108":[0.1,10,30,9970.0,0.0,9970.0,0.197,0.001,10.0],"51108":[0.1,10,30,9970.0,0.0,9970.0,0.197,0.001,10.0]}}');
        G.maskClose();

        var gameIndex = parseInt(G.query("gameIndex", "?" + msg.data_action));



        var data_table = ["<div id='result'>"];
        data_table.push("<div class='history_wrap'>");
        data_table.push("<table>");
        data_table.push("<thead><tr><th colspan='2'>基本信息</th></tr></thead>");
        data_table.push("<tbody>");
        data_table.push("<tr><td class='bcg' style='width:40%;text-align:right; padding-right:5px;'>会员账号:</td><td style='text-align:left;padding-left:10px;'>" + json.userName + "</td></tr>");
        data_table.push("<tr><td class='bcg' style='width:40%;text-align:right; padding-right:5px;'>状态:</td><td style='text-align:left;padding-left:10px;'>" + json.state + "</td></tr>");
        data_table.push("<tr><td class='bcg' style='width:40%;text-align:right; padding-right:5px;'>信用额度:</td><td style='text-align:left;padding-left:10px;'>" + json.credits + "</td></tr>");
        data_table.push("<tr><td class='bcg' style='width:40%;text-align:right; padding-right:5px;'>可用额度:</td><td style='text-align:left;padding-left:10px;'>" + json.yuer + "</td></tr>");
        data_table.push("</tbody>");
        data_table.push("</table>");
        data_table.push("<div style='clear:both;margin-top:5px;'></div>");

        data_table.push("<div style='width:49.9%;float:left;'>");
        data_table.push("<table>");
        data_table.push("<thead><tr><th>项目类型</th><th>单注最低</th><th>单注最高</th><th>单项最高</th><th>赔率上限</th><th>赚水</th><th>赔率</th></tr></thead>");
        data_table.push("<tbody>");
        if (gameIndex == 3) {
            data_table.push("<tr><td class='bcg'>一定位</td><td colspan='7'></td></tr>");
            data_table.push("<tr sort='1'><td class='bcg'>第一球</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='15'><td class='bcg'>第二球</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='29'><td class='bcg'>第三球</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='43'><td class='bcg'>第四球</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='57'><td class='bcg'>第五球</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr><td class='bcg'>二定位</td><td colspan='7'></td></tr>");
            data_table.push("<tr sort='108'><td class='bcg'>口口XX</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='208'><td class='bcg'>口X口X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='308'><td class='bcg'>口XX口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='508'><td class='bcg'>X口口X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='608'><td class='bcg'>X口X口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='808'><td class='bcg'>XX口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr><td class='bcg'>五位二定</td><td colspan='7'></td></tr>");
            data_table.push("<tr sort='408'><td class='bcg'>口XXX口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='708'><td class='bcg'>X口XX口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='908'><td class='bcg'>XX口X口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='1008'><td class='bcg'>XXX口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
        }else if (gameIndex == 4){
            data_table.push("<tr sort='22'><td class='bcg'>1-10单码</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            // data_table.push("<tr sort='32'><td class='bcg'>1-10单双</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            // data_table.push("<tr sort='34'><td class='bcg'>1-10大小</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='36'><td class='bcg'>1-5龙虎</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='18'><td class='bcg'>冠亚单</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='19'><td class='bcg'>冠亚双</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='21'><td class='bcg'>冠亚小</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");

        }
        data_table.push("</tbody>");

        data_table.push("</table>");
        data_table.push("</div>");

        data_table.push("<div style='width:49.9%;float:right;'>");
        data_table.push("<table>");
        data_table.push("<thead><tr><th>项目类型</th><th>单注最低</th><th>单注最高</th><th>单项最高</th><th>赔率上限</th><th>赚水</th><th>赔率</th></tr></thead>");
        data_table.push("<tbody>");
        if (gameIndex == 3) {
            data_table.push("<tr><td class='bcg'>三定位</td><td colspan='7'></td></tr>");
            data_table.push("<tr sort='1108'><td class='bcg'>口口口X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='2108'><td class='bcg'>口口X口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='4108'><td class='bcg'>口X口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='7108'><td class='bcg'>X口口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr><td class='bcg'>五位三定</td><td colspan='7'></td></tr>");
            data_table.push("<tr sort='3108'><td class='bcg'>口口XX口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='5108'><td class='bcg'>口X口X口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='6108'><td class='bcg'>口XX口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='8108'><td class='bcg'>X口口X口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='9108'><td class='bcg'>X口X口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='10108'><td class='bcg'>XX口口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");

            data_table.push("<tr><td class='bcg'>四定位</td><td colspan='7'></td></tr>");
            data_table.push("<tr sort='11108'><td class='bcg'>口口口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='21108'><td class='bcg'>口口口X口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='31108'><td class='bcg'>口口X口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='41108'><td class='bcg'>口X口口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='51108'><td class='bcg'>X口口口口</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
        }else if (gameIndex == 4){
            data_table.push("<tr sort='1'><td class='bcg'>冠亚和-3,4,18,19</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='3'><td class='bcg'>冠亚和-5,6,16,17</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='5'><td class='bcg'>冠亚和-7,8,14,15</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='7'><td class='bcg'>冠亚和-9,10,12,13</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            data_table.push("<tr sort='9'><td class='bcg'>冠亚和-11</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");

        }
        data_table.push("</tbody>");
        data_table.push("</table>");
        data_table.push("</div>");

        data_table.push("<table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center;'><tfoot><tr><td style='padding-top:15px;'><span class='btn grayBtn' id='submit'>保存设置</span></td></tfoot></table>");
        data_table.push("</div>");
        data_table.push("</div>");

        var obj = $(data_table.join(""));
        for (var i in json.list) {
            for (var n = 1; n < 5; n++) {
                obj.find("tr[sort='" + i + "'] td").eq(n).html(json.list[i][n-1]);
            }

            var hsHtml = ["<select data-id='s_huishui'>"],flHtml = ["<select data-id='s_odds'>"];
            var hj = json.list[i][7] ;
            var fj = json.list[i][8];
            var maxhb = json.list[i][6];
            var hb = json.list[i][4];
            var fl = json.list[i][5];
            var odds = json.list[i][3];

            var hbs = "",fls = "";

            for (var k =0 ; k < 500;k++){

                if (hb == maxhb) hbs = "selected";
                if (fl == odds) fls = "selected";

                hsHtml.push("<option  value='"+maxhb+"' "+hbs+">"+maxhb+"</option>");
                flHtml.push("<option  value='"+odds+"' "+fls+">"+odds+"</option>");
                hbs = "";
                fls = "";
                maxhb = floatSubtr(maxhb,hj);
                odds = floatSubtr(odds,fj);
                maxhb = Number(maxhb.toFixed(5)), odds = Number(odds.toFixed(5));
                if (maxhb < 0 || odds < 0) break;
            }
            hsHtml.push("</select>");
            flHtml.push("</select>");
            obj.find("tr[sort='" + i + "'] td").eq(5).html(hsHtml.join(""));
            obj.find("tr[sort='" + i + "'] td").eq(6).html(flHtml.join(""));

        }




        var content = G.overflowDiv({ content: "<div id='result'><div class='history_wrap'>" + obj.find(".history_wrap").html() + "</div></div>", height: 700 });
        G.alert({ title: "信用资料", content: content, width: 1200,okVal:"关闭",

            ok: function () { return true; },
            initialize:function (obj) {
                obj.find("select[data-id='s_huishui']").unbind("change").change(function () {
                    var selectedIndex = $(this).get(0).selectedIndex;
                    var trObj = $(this).parent().parent();
                    var sortArr = [];
                    if (trObj.attr("sort") == 1){
                        sortArr = [1,15,29,43,57];
                    }else if (trObj.attr("sort") == 108){
                        sortArr = [108,208,308,508,608,808];
                    }else if (trObj.attr("sort") == 408){
                        sortArr = [408,708,908,1008];
                    }else if (trObj.attr("sort") == 1108){
                        sortArr = [1108,2108,4108,7108];
                    }else if (trObj.attr("sort") == 3108){
                        sortArr = [3108,5108,6108,8108,9108,10108];
                    }else if (trObj.attr("sort") == 108){
                        sortArr = [108,208,308,408,508,608,708,808,908,1008];
                    }else if (trObj.attr("sort") == 11108){
                        sortArr = [11108,21108,31108,41108,51108];
                    }

                    if (sortArr.length > 0){
                        for (var i = 0; i < sortArr.length;i++){
                            obj.find("tr[sort='"+sortArr[i]+"'] select[data-id='s_huishui']").each(function () {
                                $(this).get(0).selectedIndex = selectedIndex;
                            });
                            obj.find("tr[sort='"+sortArr[i]+"'] select[data-id='s_odds']").each(function () {
                                $(this).get(0).selectedIndex = $(this).get(0).options.length - selectedIndex - 1;
                            });
                        }
                    }else {
                        $(this).parent().parent().find("select[data-id='s_odds']").get(0).selectedIndex = $(this).get(0).options.length - selectedIndex - 1;

                    }


                });
                obj.find("select[data-id='s_odds']").unbind("change").change(function () {

                    var selectedIndex = $(this).get(0).selectedIndex;
                    $(this).parent().parent().find("select[data-id='s_huishui']").get(0).selectedIndex = $(this).get(0).options.length - selectedIndex - 1;

                });


                //数据提交
                var data_stop = true;
                obj.find("#submit").unbind("click").click(function () {
                    var data = [], sort;
                    obj.find("tbody tr").each(function () {
                        sort = $(this).attr("sort");
                        if (sort != undefined) {

                            data.push(sort + ":" +  $(this).find("select[data-id='s_huishui']").val());
                        }
                    });
                    if (data_stop) {
                        data_stop = false;
                        G.mask();
                        if (S.request) { S.request.abort(); }
                        S.request = G.ajax(msg.data_action + "&myName=" + __sysinfo.myName + "&data=" + data.join("|"), function (json) {
                            data_stop = true;
                            G.maskClose();
                            if (json.result == 1) {
                                G.alert({ content: "保存成功。", ok: function () { return true; } });
                            } else {
                                G.alert({ content: json.result, ok: function () { return true; } });
                            }
                        }, function () { G.maskClose(); data_stop = true; });
                    }
                });
            }

        });

    // }, function () { G.maskClose(); });
}

//报表详情
function BetDetails(msg) {
    $("#rightBox").html("");
    $("#numNavList li.active").removeClass("active");
    // 下注明细
    var json = $.parseJSON('{"betList":[],"dateAry":["2019-08-02","2019-08-01","2019-07-31","2019-07-30","2019-07-29","2019-07-28","2019-07-27"],"numAry":[20190802177,20190802176,20190802175,20190802174,20190802173,20190802172,20190802171,20190802170,20190802169,20190802168,20190802167,20190802166,20190802165,20190802164,20190802163,20190802162,20190802161,20190802160,20190802159,20190802158,20190802157,20190802156,20190802155,20190802154,20190802153,20190802152,20190802151,20190802150,20190802149,20190802148,20190802147,20190802146,20190802145,20190802144,20190802143,20190802142,20190802141,20190802140,20190802139,20190802138,20190802137,20190802136,20190802135,20190802134,20190802133,20190802132,20190802131,20190802130,20190802129,20190802128,20190802127,20190802126,20190802125,20190802124,20190802123,20190802122,20190802121,20190802120,20190802119,20190802118,20190802117,20190802116,20190802115,20190802114,20190802113,20190802112,20190802111,20190802110,20190802109,20190802108,20190802107,20190802106,20190802105,20190802104,20190802103,20190802102,20190802101,20190802100,20190802099,20190802098,20190802097,20190802096,20190802095,20190802094,20190802093,20190802092,20190802091,20190802090,20190802089,20190802088,20190802087,20190802086,20190802085,20190802084,20190802083,20190802082,20190802081,20190802080,20190802079,20190802078,20190802077,20190802076,20190802075,20190802074,20190802073,20190802072,20190802071,20190802070,20190802069,20190802068,20190802067,20190802066,20190802065,20190802064,20190802063,20190802062,20190802061,20190802060,20190802059,20190802058,20190802057,20190802056,20190802055,20190802054,20190802053,20190802052,20190802051,20190802050,20190802049,20190802048,20190802047,20190802046,20190802045,20190802044,20190802043,20190802042,20190802041,20190802040,20190802039,20190802038,20190802037,20190802036,20190802035,20190802034,20190802033,20190802032,20190802031,20190802030,20190802029,20190802028,20190802027,20190802026,20190802025,20190802024,20190802023,20190802022,20190802021,20190802020,20190802019,20190802018,20190802017,20190802016,20190802015,20190802014,20190802013,20190802012,20190802011,20190802010,20190802009,20190802008,20190802007,20190802006,20190802005,20190802004,20190802003,20190802002,20190802001],"currentPage":1,"totalPage":1,"gameIndex":3}');
    // G.ajax(msg.data_action, function (json) {
        G.maskClose();
        if (json.result && json.result != 1){
            G.alert({ content: json.result, ok: function () { return true; } });
            return ;
        }
        msg.data_action = G.urlReplace({url: msg.data_action, paramName: "data", val: "", pad: false});

        var titleNavAry = ["<label>彩种:<select name='gameIndex'>"];
        $("#menuList li a").each(function () {
            titleNavAry.push("<option value='" + $(this).attr("data-index") + "'>" + $(this).html() + "</option>");
        });
        titleNavAry.push("</select></label>");

        var htmlData = ["<div class='shell-top' id='shell-top'>"];
        htmlData.push("<div id='title-nav' style='margin-top: 5px'>");
        htmlData.push("&nbsp;&nbsp;" + titleNavAry.join(""));
        htmlData.push("&nbsp;&nbsp;<label>日期:<select name='beforeDate'></select></label>");
        htmlData.push("&nbsp;&nbsp;<label>期数:<select name='issue'></select></label>");
        htmlData.push("&nbsp;&nbsp;<label>状态:<select name='settlement'><option value='0' selected='selected'>全部</option><option  value='1'>中奖</option><option value='2'>退码</option></select></label>");
        htmlData.push("&nbsp;&nbsp;<label>订单号：<input type='text' class='text-input sw90' name='no'>&nbsp;&nbsp;<a href=\"javascript:void(0);\" name=\"search\">查詢</a>&nbsp;&nbsp;<a href='javascript:void(0);' name='batchtuima'>批量退码</a></label>");
        htmlData.push("</div>");
        htmlData.push("</div>");
        htmlData.push("<div id='result2'> <div class='history_wrap'>");
        htmlData.push("<table >");
        htmlData.push("<thead><th width='15%'>注单编号</th><th width='15%'>下单时间</th><th width='7%'>号码</th><th width='7%'>赔率</th><th width='7%'>金额</th><th width='7%'>中奖</th><th width='7%'>回水</th><th width='7%'>盈亏</th><th width='7%'>状态</th ><th width='12%'>全选<input id='quanxian' type='checkbox'><input id='tuima' type='button' value='退码'></th></thead>");
        htmlData.push("<tbody id='betList'>");

        var my_count = [0, 0, 0,0,0];///笔数、金额、中奖、回水、盈亏
        if (json.betList && json.betList.length > 0) {
            for (var i = 0; i < json.betList.length; i++) {
                htmlData.push("<tr>");

                var bg = json.betList[i][9] == "退码" ? "style='background: #FFC184'" : "";
                bg = bg == "" ? (json.betList[i][11] == 1 ? "style='background: #FFFFB9'" : "") : bg;

                if (json.betList[i][9] == "成功"){
                    my_count[0]++;
                    my_count[1] = floatAdd(parseFloat(json.betList[i][5]),my_count[1]);
                    if (json.betList[i][6] != "--"){
                        my_count[2] = floatAdd(parseFloat(json.betList[i][6]),my_count[2]);
                    }
                    my_count[3] = floatAdd(parseFloat(json.betList[i][7]),my_count[3]);;
                    my_count[4] = floatAdd(parseFloat(json.betList[i][8]),my_count[4]);;
                }

                for (var n = 1; n < json.betList[i].length - 2; n++) {
                    htmlData.push("<td "+bg+">" + json.betList[i][n] + "</td>");
                }

                if (json.betList[i][10] == 1) {
                    htmlData.push("<td "+bg+"><input data-id='" + json.betList[i][0] + "' type='checkbox'></td>");
                } else {
                    htmlData.push("<td "+bg+">--</td>");
                }

                htmlData.push("</tr>");
            }
        }else {
            htmlData.push("<tr><td colspan='10'>暂无数据！</td></tr>");
        }
        htmlData.push("<tr><td colspan='3'>合计</td><td>"+my_count[0]+"</td><td>"+my_count[1]+"</td><td>"+my_count[2]+"</td><td>"+my_count[3]+"</td><td>"+my_count[4]+"</td><td colspan='2'></td></tr>");

        htmlData.push("</tbody>");
        htmlData.push("</table>");
        htmlData.push("</div></div>");

        $("#gameBox").html(htmlData.join(""));


        pageMiddle({currentPage:json.currentPage,totalPage:json.totalPage,obj:$("#gameBoxTool"),referrer:msg.data_action},function (myPage) {
            BetDetails({ data_action: myPage });
        });

        //加载日期列表
        if (json.dateAry) {
            for (var i = 0; i < json.dateAry.length; i++) {
                $("#title-nav select[name='beforeDate']").append("<option value='" + json.dateAry[i] + "'>" + json.dateAry[i] + "</option>");
            }
        }
        //加载期数列表
        if (json.numAry) {
            for (var i = 0; i < json.numAry.length; i++) {
                $("#title-nav select[name='issue']").append("<option value='" + json.numAry[i] + "'>" + json.numAry[i] + "</option>");
            }
        }


        //绑定默认选中值=彩种
        var gameIndex = G.query("gameIndex", "?" + msg.data_action);
        if (gameIndex) {
            $("#title-nav select[name='gameIndex']").val(gameIndex);
        }
        //绑定默认选中值=状态
        var settlement = G.query("settlement", "?" + msg.data_action);
        if (settlement) {
            $("#title-nav select[name='settlement']").val(settlement);
        }
        //绑定默认选中值=日期
        var beforeDate = G.query("beforeDate", "?" + msg.data_action);
        if (beforeDate) {
            $("#title-nav select[name='beforeDate']").val(beforeDate);
        }
        //绑定默认选中值=期数
        var timesNum = G.query("issue", "?" + msg.data_action);
        if (timesNum) {
            $("#title-nav select[name='issue']").val(timesNum);
        }

        var no = G.query("no", "?" + msg.data_action);
        if (no) {
            $("#title-nav input[name='no']").val(no);
        }

        $("#quanxian").unbind("change").change(function () {

            var checked = $(this).attr("checked") ? true : false;

            $("#betList").find("input[type='checkbox']").attr("checked",checked);

        });

        $("#tuima").unbind("click").click(function () {
            var idAry = [];
            $("#betList").find("input[type='checkbox']:checked").each(function () {
                idAry.push($(this).attr("data-id"));
            });
            if (idAry.length == 0) {
                G.alert({ content: "至少勾选1个需要“退码”的订单！", ok: function () { return true; } });
            } else {
                fromMesgAction(idAry.join(","))
            }
        });

        $("#title-nav a[name='batchtuima']").unbind("click").click(function () {
            var no = $("#title-nav input[name='no']").val();
            if (!G.StringSign(no)){
                G.alert({ content: "请输入订单号", ok: function () { return true; } });
                return;
            }else {
                G.alert({ content: no +"订单号 确定退码吗",cancel:function () {
                        return ;
                    }, ok: function () {
                        fromMesgAction(no);
                        return true;
                    }});

            }

        });

        //select选中获取数据
        $("#title-nav select").unbind("change").change(function () {
            if ($(this).attr("name") == "beforeDate")$("#title-nav select[name='issue']").html("");
            fromMesgAction();
        });

        $("#title-nav a[name='search']").unbind("click").click(function () {
            fromMesgAction();
        });


        $("#mainIframe").find("div[class='gameLeft']").attr("style","width: auto");
        $("#mainIframe").find("div[class='game_wrap']").attr("style","width: auto");
        $("#mainIframe").find("div[class='game_item_warp']").attr("style","width: 1200px");
        $("#gameBoxTool").attr("style","width: 1180px;text-align:center");


        function fromMesgAction(tuimaData) {
            var gameIndex = $("#title-nav select[name='gameIndex']").val();
            var settlement = $("#title-nav select[name='settlement']").val();
            var beforeDate = $("#title-nav select[name='beforeDate']").val();
            var issue = $("#title-nav select[name='issue']").val();
            var no = $("#title-nav input[name='no']").val();
            var referrer = G.urlReplace({ url: "?" + msg.data_action, paramName: "page", pad: false });
            referrer = G.urlReplace({ url: referrer, paramName: "gameIndex", val: gameIndex, pad: true });
            referrer = G.urlReplace({ url: referrer, paramName: "settlement", val: settlement, pad: true });
            referrer = G.urlReplace({ url: referrer, paramName: "beforeDate", val: beforeDate, pad: true });
            referrer = G.urlReplace({ url: referrer, paramName: "issue", val: issue, pad: true });
            if (tuimaData && tuimaData.length > 0) {
                referrer = G.urlReplace({url: referrer, paramName: "data", val: tuimaData, pad: true});
            }else {
                referrer = G.urlReplace({url: referrer, paramName: "data", val: "", pad: true});
            }
            referrer = G.urlReplace({ url: referrer, paramName: "no", val: no, pad: true });
            referrer = referrer.replace("?", "");
            G.mask();
            BetDetails({ data_action: referrer });
        }
    // },function () {
    //     G.maskClose();
    // });

}

//期报表
function IssueHistory(msg) {
    $("#rightBox").html("");
    $("#numNavList li.active").removeClass("active");
    // G.ajax(msg.data_action, function (json) {
    var json = $.parseJSON('{"betList":[]}');
        $("#mainIframe").find("div[class='gameLeft']").attr("style","");
        $("#mainIframe").find("div[class='game_wrap']").attr("style","");
        $("#mainIframe").find("div[class='game_item_warp']").attr("style","");
        $("#gameBoxTool").attr("style","display: none");

        var titleNavAry = ["<label>彩种:<select name='gameIndex'>"];
        $("#menuList li a").each(function () {
            titleNavAry.push("<option value='" + $(this).attr("data-index") + "'>" + $(this).html() + "</option>");
        });
        titleNavAry.push("</select></label>");

        var htmlData = ["<div class='shell-top' id='shell-top'>"];
        htmlData.push("<div id='title-nav' style='margin-top: 5px'>");
        htmlData.push("&nbsp;&nbsp;" + titleNavAry.join(""));
        // htmlData.push("&nbsp;&nbsp;<label>日期:<select name='beforeDate'><option value='0'>今天</option><option value='1'>昨天</option></select></label>");
        htmlData.push("</div>");
        htmlData.push("</div>");
        htmlData.push("<div id='result2'> <div class='history_wrap'>");
        htmlData.push("<table >");
        htmlData.push("<thead><th width='15%'>期数</th><th width='10%'>笔数</th><th width='7%'>下注金额</th><th width='10%'>中奖</th><th width='10%'>回水</th><th width='10%'>盈亏</th></thead>");
        htmlData.push("<tbody id='betList'>");
        var my_count = [0, 0, 0,0,0];///笔数、金额、中奖、回水、盈亏


        if (json.betList && json.betList.length > 0) {
            for (var i = 0; i < json.betList.length; i++) {
                htmlData.push("<tr>");
                if (json.betList[i][6] == 1) {
                    my_count[0] += json.betList[i][1];
                    my_count[1] = floatAdd(parseFloat(json.betList[i][2]), my_count[1]);
                    my_count[2] = floatAdd(parseFloat(json.betList[i][3]), my_count[2]);
                    my_count[3] = floatAdd(parseFloat(json.betList[i][4]), my_count[3]);
                    my_count[4] = floatAdd(parseFloat(json.betList[i][5]), my_count[4]);
                }
                for (var n = 0; n < json.betList[i].length - 1; n++) {
                    if (json.betList[i][6] == 1 || n < 3) {

                        if (n == 0){
                            htmlData.push("<td > <a href='javascript:void(0)' style='cursor: pointer' class='blue' data-issue='"+json.betList[i][n]+"'>" + json.betList[i][n] + "</a></td>");
                        }else {
                            htmlData.push("<td >" + json.betList[i][n] + "</td>");
                        }
                    }else {
                        htmlData.push("<td ></td>");
                    }
                }
                htmlData.push("</tr>");
            }
            htmlData.push("<tr><td>合计</td><td>"+my_count[0]+"</td><td>"+my_count[1]+"</td><td>"+my_count[2]+"</td><td>"+my_count[3]+"</td><td>"+my_count[4]+"</td></tr>");

        }else {
            htmlData.push("<tr><td colspan='10'>暂无数据！</td></tr>");
        }

        htmlData.push("</tbody>");
        htmlData.push("</table>");
        htmlData.push("</div></div>");
        $("#gameBox").html(htmlData.join(""));

        //绑定默认选中值=彩种
        var gameIndex = G.query("gameIndex", "?" + msg.data_action);
        if (gameIndex) {
            $("#title-nav select[name='gameIndex']").val(gameIndex);
        }

        //绑定默认选中值=日期
        var beforeDate = G.query("beforeDate", "?" + msg.data_action);
        if (beforeDate) {
            $("#title-nav select[name='beforeDate']").val(beforeDate);
        }

        $("#title-nav select").unbind("change").change(function () {
            fromMesgAction();
        });

        $("#betList a").unbind("click").click(function () {
            var gameIndex = $("#title-nav select[name='gameIndex']").val();
            BetDetails({data_action:"BetDetails&issue=" + $(this).attr("data-issue") + "&gameIndex=" + gameIndex});
        });

        function fromMesgAction() {
            var gameIndex = $("#title-nav select[name='gameIndex']").val();
            var beforeDate = $("#title-nav select[name='beforeDate']").val();
            var referrer = G.urlReplace({ url: "?" + msg.data_action, paramName: "gameIndex", val: gameIndex, pad: true });
            referrer = G.urlReplace({ url: referrer, paramName: "beforeDate", val: beforeDate, pad: true });

            referrer = referrer.replace("?", "");
            IssueHistory({ data_action: referrer });
        }
    // });
}
//快选日志
function KXLog(msg) {
    $("#rightBox").html("");
    $("#numNavList li.active").removeClass("active");
    // G.ajax(msg.data_action, function (json) {
    var json = $.parseJSON('{"currentPage":1,"totalPage":1,"list":[]}');
        $("#mainIframe").find("div[class='gameLeft']").attr("style","");
        $("#mainIframe").find("div[class='game_wrap']").attr("style","");
        $("#mainIframe").find("div[class='game_item_warp']").attr("style","");
        $("#gameBoxTool").attr("style","display: none");

        var titleNavAry = ["<label>彩种:<select name='gameIndex'>"];
        $("#menuList li a").each(function () {
            titleNavAry.push("<option value='" + $(this).attr("data-index") + "'>" + $(this).html() + "</option>");
        });
        titleNavAry.push("</select></label>");

        var htmlData = ["<div class='shell-top' id='shell-top'>"];
        htmlData.push("<div id='title-nav' style='margin-top: 5px'>");
        htmlData.push("&nbsp;&nbsp;" + titleNavAry.join(""));
        htmlData.push("&nbsp;&nbsp;<label>类型:<select name='type'><option value='0'>全部</option><option value='2'>二定</option><option value='3'>三定</option><option value='4'>四定</option> </select></label>");
        htmlData.push("</div>");
        htmlData.push("</div>");
        htmlData.push("<div id='result2'> <div class='history_wrap'>");
        htmlData.push("<table >");
        htmlData.push("<thead><th width='10%'>订单号</th><th width='10%'>期数</th><th width='5%'>金额</th><th width='30%'>内容</th><th width='7%'>操作</th></thead>");
        htmlData.push("<tbody id='kxLogs'>");


        if (json.list && json.list.length > 0) {
            for (var i = 0; i < json.list.length; i++) {
                htmlData.push("<tr>");

                for (var n = 0; n < json.list[i].length - 2; n++) {
                    htmlData.push("<td >" + json.list[i][n] + "</td>");
                }
                htmlData.push("<td ><a href='javascript:;' data='"+json.list[i][json.list[i].length - 1]+"' data-type='"+json.list[i][json.list[i].length - 2]+"'>再次生成</a></td>");
                htmlData.push("</tr>");
            }

        }else {
            htmlData.push("<tr><td colspan='10'>暂无数据！</td></tr>");
        }

        htmlData.push("</tbody>");
        htmlData.push("</table>");
        htmlData.push("</div></div>");
        $("#gameBox").html(htmlData.join(""));

        $("#gameBoxTool").attr("style","width: 850px;text-align:center");

        pageMiddle({currentPage:json.currentPage,totalPage:json.totalPage,obj:$("#gameBoxTool"),referrer:msg.data_action},function (myPage) {
            KXLog({ data_action: myPage });
        });

        //绑定默认选中值=彩种
        var gameIndex = G.query("gameIndex", "?" + msg.data_action);
        if (gameIndex) {
            $("#title-nav select[name='gameIndex']").val(gameIndex);
        }

        var type = G.query("type", "?" + msg.data_action);
        if (gameIndex) {
            $("#title-nav select[name='type']").val(type);
        }

        $("#title-nav select").unbind("change").change(function () {
            fromMesgAction();
        });

        $("#kxLogs a").unbind("click").click(function () {
            $("#numNavList li.active").removeClass("active");
            $("#numNavList a[data-action='gamedata&gameIndex=3&type=20']").parent().addClass("active");


            var data = $(this).attr("data");
            var type = $(this).attr("data-type");
            initkx(type,data);
        });


        function fromMesgAction() {
            var gameIndex = $("#title-nav select[name='gameIndex']").val();
            var type = $("#title-nav select[name='type']").val();
            var referrer = G.urlReplace({ url: "?" + msg.data_action, paramName: "gameIndex", val: gameIndex, pad: true });
            referrer = G.urlReplace({ url: referrer, paramName: "type", val: type, pad: true });

            referrer = referrer.replace("?", "");
            KXLog({ data_action: referrer });
        }
    // });
}
//结算报表-日期查询
function History(msg) {
    G.mask();
    // G.ajax(msg.data_action, function (json) {
        var json = $.parseJSON('[["2019-07-22","07-22 星期一",0,0,0,0],["2019-07-23","07-23 星期二",0,0,0,0],["2019-07-24","07-24 星期三",0,0,0,0],["2019-07-25","07-25 星期四",0,0,0,0],["2019-07-26","07-26 星期五",0,0,0,0],["2019-07-27","07-27 星期六",0,0,0,0],["2019-07-28","07-28 星期日",0,0,0,0],["2019-07-29","07-29 星期一",0,0,0,0],["2019-07-30","07-30 星期二",0,0,0,0],["2019-07-31","07-31 星期三",0,0,0,0],["2019-08-01","08-01 星期四",0,0,0,0],["2019-08-02","08-02 星期五",0,0,0,0],["2019-08-03","08-03 星期六",0,0,0,0],["2019-08-04","08-04 星期日",0,0,0,0]]');
        console.log(json);
        G.maskClose();
        var txt_right, data_cunt = [0, 0, 0, 0];
        var data_table = ["<div id='result'>"];
        data_table.push("<div class='history_wrap'>");
        data_table.push("<table>");
        data_table.push("<thead>");
        data_table.push("<tr>");
        data_table.push("<th rowspan='2' width='170'>交易日期</th>");
        data_table.push("<th colspan='3' style='text-align:right;font-weight:normal;' id='myche'>");
        data_table.push("<label style='margin:0 12px;'>总项<input type='radio' name='che' value='0' checked='checked' style='position:absolute; margin-top:3px; margin-left:2px;' /></label>");
        data_table.push("</th>");
        data_table.push("<th rowspan='2' width='170'>实际结果</th>");
        data_table.push("</tr>");
        data_table.push("<tr>");
        data_table.push("<td class='bcg'>注单数</td>");
        data_table.push("<td class='bcg'>下注金额</td>");
        data_table.push("<td class='bcg'>退水后结果</td>");
        data_table.push("</tr>");
        data_table.push("</thead>");
        data_table.push("<tbody>");
        for (var i = 0; i < 7; i++) {
            data_table.push("<tr data-date='" + json[i][0] + "' class='cursor'>");
            for (var n = 1; n < json[i].length; n++) {
                txt_right = n == 3 ? "style='text-align:right;padding-right:5px;'" : n >= 4 ? "style='text-align:right;padding-right:5px;color:red;'" : "";
                data_table.push("<td " + txt_right + ">" + json[i][n] + "</td>");
                if (n > 1) {
                    data_cunt[n - 2] += parseFloat(json[i][n]);
                }
            }
            data_table.push("</tr>");
        }
        data_table.push("<tr>");
        data_table.push("<td class='bcg bold'>上周</td>");
        data_table.push("<td class='bcg bold'>" + data_cunt[0] + "</td>");
        data_table.push("<td class='bcg bold' style='text-align:right;padding-right:5px;'>" + data_cunt[1] + "</td>");
        data_table.push("<td class='bcg bold' style='text-align:right;padding-right:5px;color:red;'>" + G.forDight(data_cunt[2], 1) + "</td>");
        data_table.push("<td class='bcg bold' style='text-align:right;padding-right:5px;color:red;'>" + G.forDight(data_cunt[3], 1) + "</td>");
        data_table.push("</tr>");
        data_table.push("</tbody>");
        data_table.push("</table>");
        data_table.push("<div style='clear:both;margin-top:10px;'></div>");
        data_table.push("<table>");
        data_table.push("<thead>");
        data_table.push("<tr>");
        data_table.push("<th rowspan='2' width='170'>交易日期</th>");
        data_table.push("<th colspan='3' style='text-align:right;font-weight:normal;'>&nbsp</th>");
        data_table.push("<th rowspan='2' width='170'>实际结果</th>");
        data_table.push("</tr>");
        data_table.push("<tr>");
        data_table.push("<td class='bcg'>注单数</td>");
        data_table.push("<td class='bcg'>下注金额</td>");
        data_table.push("<td class='bcg'>退水后结果</td>");
        data_table.push("</tr>");
        data_table.push("</thead>");
        data_table.push("<tbody>");
        data_cunt = [0, 0, 0, 0];
        for (var i = 7; i < json.length; i++) {
            data_table.push("<tr data-date='" + json[i][0] + "' class='cursor'>");
            for (var n = 1; n < json[i].length; n++) {
                txt_right = n == 3 ? "style='text-align:right;padding-right:5px;'" : n >= 4 ? "style='text-align:right;padding-right:5px;color:red;'" : "";
                data_table.push("<td " + txt_right + ">" + json[i][n] + "</td>");
                if (n > 1) {
                    data_cunt[n - 2] += parseFloat(json[i][n]);
                }
            }
            data_table.push("</tr>");
        }
        data_table.push("<tr>");
        data_table.push("<td class='bcg bold'>本周</td>");
        data_table.push("<td class='bcg bold'>" + data_cunt[0] + "</td>");
        data_table.push("<td class='bcg bold' style='text-align:right;padding-right:5px;'>" + data_cunt[1] + "</td>");
        data_table.push("<td class='bcg bold' style='text-align:right;padding-right:5px;color:red;'>" + G.forDight(data_cunt[2], 1) + "</td>");
        data_table.push("<td class='bcg bold' style='text-align:right;padding-right:5px;color:red;'>" + G.forDight(data_cunt[3], 1) + "</td>");
        data_table.push("</tr>");
        data_table.push("</tbody>");
        data_table.push("</table>");

        data_table.push("</div>");
        data_table.push("</div>");
        var content = data_table.join("");
        var data_stop = true;
        G.alert({ title: "结算报表", content: content, width: 750,
            initialize: function () {
                $("#result tr.cursor").unbind("click").click(function () {
                    var mydate = $(this).attr("data-date");
                    var myIndex = $("#result #myche input[name='che']:checked").val();
                    if (data_stop) {
                        data_stop = false;
                        G.mask();
                        $("#myWarpr").remove();
                        $("#mymask").remove();
                        var data_action = msg.data_action + "&mydate=" + mydate + "&myIndex=" + myIndex;
                        G.ajax(data_action, function (json) {
                            G.maskClose();
                            HistoryGame(json, msg.data_action, data_action);
                        }, function () { G.maskClose(); });
                    }
                });
            },
            ok: function () { return true; }
        });
    // }, function () { G.maskClose(); });
}
function HistoryGame(json, data_action, myaction) {
    var data_cunt = [0, 0, 0, 0, 0];
    var data_table = ["<div id='result'>"];
    data_table.push("<div class='MenuBox1'><label class='cursor'><<返回</label></div>");
    data_table.push("<div class='history_wrap MenuPadding-top'>");
    data_table.push("<table>");
    data_table.push("<thead><tr><th>彩种类型</th><th>注单笔数</th><th>下注总额</th><th>结果</th><th>退水</th><th>实际结果</th></tr></thead>");
    data_table.push("<tbody>");
    if (json && json.length > 0) {
        var txt_right;
        for (var i = 0; i < json.length; i++) {
            data_table.push("<tr class='cursor' mystate='" + json[i][0] + "'>");
            for (var n = 1; n < json[i].length; n++) {
                txt_right = n >= 3 && n <= 5 ? "style='text-align:right;padding-right:5px;'" : n == 6 ? "style='text-align:right;padding-right:5px;color:red;'" : "";
                data_table.push("<td " + txt_right + ">" + json[i][n] + "</td>");
                if (n > 1) {
                    data_cunt[n - 2] += parseFloat(json[i][n]);
                }
            }
            data_table.push("</tr>");
        }
    } else {
        data_table.push("<tr><td colspan='6'>无未结算记录！</td></tr>");
    }
    data_table.push("<tr class='bc bold'><td>当前页合计</td><td>" + data_cunt[0] + "</td><td style='text-align:right;padding-right:5px;'>" + data_cunt[1] + "</td><td style='text-align:right;padding-right:5px;'>" + G.forDight(data_cunt[2], 1) + "</td><td style='text-align:right;padding-right:5px;'>" + G.forDight(data_cunt[3], 1) + "</td><td style='text-align:right;padding-right:5px;color:red;'>" + G.forDight(data_cunt[4], 1) + "</td></tr>");
    data_table.push("</tbody>");
    data_table.push("</table>");
    data_table.push("</div>");
    data_table.push("</div>");
    var content = data_table.join("");
    var data_stop = true;
    G.alert({ title: "结算报表", content: content, width: 750,
        initialize: function () {
            $("#result label.cursor").unbind("click").click(function () {
                if (data_stop) {
                    data_stop = false;
                    $("#myWarpr").remove();
                    $("#mymask").remove();
                    History({ data_action: data_action });
                }
            });
            $("#result tr.cursor").unbind("click").click(function () {
                if (data_stop) {
                    var action = myaction + "&mystate=" + $(this).attr("mystate");
                    G.mask();
                    G.ajax(action, function (json) {
                        G.maskClose();
                        $("#myWarpr").remove();
                        $("#mymask").remove();
                        HistoryList(json, data_action, action);
                    }, function () { G.maskClose(); });
                }
            });
        },
        ok: function () { return true; }

    });
}
function HistoryList(json, myaction, action) {
    var data_table = ["<div id='result'>"];
    var my_count = [0, 0, 0, 0,0,0];
    data_table.push("<div class='MenuBox1'><label class='cursor'><<返回</label></div>");
    data_table.push("<div class='history_wrap MenuPadding-top'>");
    data_table.push("<table>");
    data_table.push("<thead><tr><th>期数</th><th>笔数</th><th>下注金额</th><th>中奖</th><th>回水</th><th>盈亏</th></tr></thead>");
    data_table.push("<tbody>");
    if (json && json.length > 0) {
        var txt_right;
        for (var i = 0; i < json.length; i++) {
            data_table.push("<tr>");
            for (var n = 0; n < json[i].length; n++) {
                if (n >= 1) {
                    txt_right = "style='text-align:right;padding-right:5px;'";
                    if (n == 1) {
                        my_count[0]++;
                        my_count[1] += parseInt(json[i][n]);
                    } else if (n == 2) {
                        my_count[2] += parseFloat(json[i][n]);
                    } else if (n ==3) {
                        my_count[3] += parseFloat(json[i][n]);
                    } else if (n ==4) {
                        my_count[4] += parseFloat(json[i][n]);
                    }else if (n ==5) {
                        my_count[5] += parseFloat(json[i][n]);
                    }
                    if (parseFloat(json[i][n]) < 0) txt_right = "style='text-align:right;padding-right:5px;color:red;'";

                }  else {
                    txt_right = "";
                }
                data_table.push("<td " + txt_right + ">" + json[i][n] + "</td>");
            }
            data_table.push("</tr>");
        }
    } else {
        data_table.push("<tr><td colspan='8'>无未结算记录！</td></tr>");
    }
    data_table.push("</tbody>");
    data_table.push("<tfoot>");
    data_table.push("<tr>");
    data_table.push("<th >当前页合计：<span name='data-count'>0</span>期</th>");
    data_table.push("<th style='text-align:right;padding-right:5px;'><span name='data-a'>0</span></th>");
    data_table.push("<th style='text-align:right;padding-right:5px;'><span name='data-b'>0</span></th>");
    data_table.push("<th style='text-align:right;padding-right:5px;'><span name='data-c'>0</span></th>");
    data_table.push("<th style='text-align:right;padding-right:5px;'><span name='data-d'>0</span></th>");
    if (my_count[5] < 0)data_table.push("<th style='text-align:right;padding-right:5px;color: red'><span name='data-e'>0</span></th>");
    else data_table.push("<th style='text-align:right;padding-right:5px;'><span name='data-e'>0</span></th>");

    data_table.push("</tr>");
    data_table.push("</tfoot>");
    data_table.push("</table>");
    data_table.push("<div id='fondiv' style='text-align:center;padding:1px 0;margin-top:2px;'><a href='javascript:void(0);'>点击获取更多...</a><span id='nodataTitle' class='hiden'>无数據加載！</span></div>");
    data_table.push("</div>");
    data_table.push("</div>");
    var content = G.overflowDiv({ content: data_table.join(""), height: 520 });
    var data_stop = true;
    var generatedCount = 1;
    G.alert({ title: "结算报表", content: content, width: 950,
        initialize: function () {
            $("#result tbody tr:odd").addClass("bc");
            $("#result tfoot span[name='data-count']").html(my_count[0]);
            $("#result tfoot span[name='data-a']").html(my_count[1]);
            $("#result tfoot span[name='data-b']").html(G.forDight(my_count[2], 1));
            $("#result tfoot span[name='data-c']").html(G.forDight(my_count[3], 1));
            $("#result tfoot span[name='data-d']").html(G.forDight(my_count[4], 1));
            $("#result tfoot span[name='data-e']").html(G.forDight(my_count[5], 1));


            if (json.length == 0) {
                $("#result #fondiv").remove();
            }
            $("#result label.cursor").unbind("click").click(function () {
                if (data_stop) {
                    data_stop = false;
                    $("#myWarpr").remove();
                    $("#mymask").remove();
                    History({ data_action: myaction });
                }
            });
            $("#result #fondiv").find("a").unbind("click").click(function () {
                generatedCount++;
                my_action = G.urlReplace({ url: "?" + action, paramName: "page", val: generatedCount, pad: true }).replace("?", "");
                appendHtm();
            });
            function appendHtm() {
                G.myLayerImg();
                G.ajax(my_action, function (json) {
                    G.myLayerImgClose();
                    if (json && json.length > 0) {
                        var table = [], txt_right;
                        var my_count = parseInt($("#result tfoot span[name='data-count']").html());
                        var my_a = parseFloat($("#result tfoot span[name='data-a']").html());
                        var my_b = parseFloat($("#result tfoot span[name='data-b']").html());
                        var my_c = parseFloat($("#result tfoot span[name='data-c']").html());
                        for (var i = 0; i < json.length; i++) {
                            table.push("<tr>");
                            for (var n = 0; n < json[i].length; n++) {
                                //txt_right = n >= 4 && n <= 6 ? "style='text-align:right;padding-right:5px;'" : n == 7 ? "style='text-align:right;padding-right:5px;color:red;'" : "";
                                if (n >= 4 && n <= 6) {
                                    txt_right = "style='text-align:right;padding-right:5px;'";
                                    if (n == 4) {
                                        my_count++;
                                        my_a += parseFloat(json[i][n]);
                                    } else if (n == 5) {
                                        my_b += parseFloat(json[i][n]);
                                    } else if (n == 6) {
                                        my_c += parseFloat(json[i][n]);
                                    }
                                } else if (n == 7) {
                                    txt_right = "style='text-align:right;padding-right:5px;color:red;'";
                                } else {
                                    txt_right = "";
                                }
                                table.push("<td " + txt_right + ">" + json[i][n] + "</td>");
                            }
                            table.push("</tr>");
                        }
                        $("#result tbody").append(table.join(""));
                        $("#result tbody tr:odd").addClass("bc");
                        $("#result tfoot span[name='data-count']").html(my_count);
                        $("#result tfoot span[name='data-a']").html(my_a);
                        $("#result tfoot span[name='data-b']").html(G.forDight(my_b, 1));
                        $("#result tfoot span[name='data-c']").html(G.forDight(my_c, 1));
                        $("#result tfoot span[name='data-d']").html(G.forDight(my_b + my_c, 1));
                    } else {
                        $("#result #fondiv").find("a").hide();
                        $("#result #fondiv").find("span").show();
                    }
                }, function () { G.myLayerImgClose(); });
            }
        },
        ok: function () { return true; }
    });
}