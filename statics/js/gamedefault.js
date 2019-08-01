function gametop(gameIndex, isNumTo) {
    for (var i in __sysinfo.data.gameList) {
        if (i == gameIndex) {
            showgametop({ gameIndex: i, isNumTo: isNumTo, gameList: __sysinfo.data.gameList[i] });
        }
    }
}
function showgametop(msg) {
    if (msg.gameIndex == 1) {
        $(".game_pic #game_logo").attr("src", "/statics/images/member/HK.png");
        $(".game_pic a").attr("href", "http://www.hkjc.com/home/chinese/index.asp");
        $("#game_name p[name='row_small']").html("每周二、四、六 <b><span id='begintime'></span>-<span id='endtime'></span></b>開盘");
    } else {
        $("#game_name p[name='row_small']").html("<b><span id='intervaltime'></span></b>一期，每天<b><span id='begintime'></span>-<span id='endtime'></span></b>銷售");
        if (msg.gameIndex == 2) {
            $(".game_pic #game_logo").attr("src", "/Images/Member/KLC.png");
        } else if (msg.gameIndex == 3) {
            $(".game_pic #game_logo").attr("src", "/statics/images/SSC.png");
        } else if (msg.gameIndex == 4) {
            $(".game_pic #game_logo").attr("src", "/statics/images/PK.png");
        } else if (msg.gameIndex == 5) {
            $(".game_pic #game_logo").attr("src", "/images/Member/KS.png");
        } else if (msg.gameIndex == 6) {
            $(".game_pic #game_logo").attr("src", "/images/Member/KLB.png");
        } else if (msg.gameIndex == 7) {
            $(".game_pic #game_logo").attr("src", "/images/Member/NC.png");
        } else if (msg.gameIndex == 8) {
            $(".game_pic #game_logo").attr("src", "/Images/Member/FT.png");
        } else if (msg.gameIndex == 10) {
            $(".game_pic #game_logo").attr("src", "/Images/Member/GX.png");
        } else if (msg.gameIndex == 13) {
            $(".game_pic #game_logo").attr("src", "/Images/Member/KS.png");
        } else if (msg.gameIndex == 14) {
            $(".game_pic #game_logo").attr("src", "/Images/Member/pkjs.png");
        } else if (msg.gameIndex == 15) {
            $(".game_pic #game_logo").attr("src", "/Images/Member/SSCJS.png");
        }
    }

    var boxList = [], active;

    for (var i = 0; i < msg.gameList.length; i++) {
        active = i == 0 ? "active" : "";
        for (var n in msg.gameList[i]) {
            boxList.push("<li class='subBtn " + active + "'><a href='javascript:void(0)' data-action='" + n + "'>" + msg.gameList[i][n] + "</a></li>");

        }

    }
    $("#closedTime").html("").addClass("time_loading");
    $("#updateTime").html("...");
    $("#cqlResult").html("");
    $("#hot_Cool").html("");
    $("#numNavList").html(boxList.join(""));

    var data_action = $("#game_box_title li.active a[data-action]").attr("data-action");
    if (msg.isNumTo) {
        data_action = data_action + "&isNumTo=1";
    }
    middleBind({ data_action: data_action });
}


//数据加载（调用方法前已中断所有连接及时间轴）

var checkgamedatatime;

function gamedata(msg) {

    clearTimeout(checkgamedatatime);

    game_loading_wrap(true);
    var data_action = "member" + msg.data_action ;
    var gameIndex = G.query("gameIndex", "?" + msg.data_action);
    var type = G.query("type", "?" + msg.data_action);
    var my_type = type;
    if (gameIndex == 3 && type >= 9 && type <= 18) my_type = 9;

    $("#game_box_title li").removeClass("active");
    if ($("#result2").length == 0) $("#game_box_title li a[data-action='gamedata&gameIndex=" + gameIndex + "&type="+my_type+"']").parent("li").addClass("active");
    $("#game_big_name").html($("#menuText span").html());
    if (gameIndex != 1) {
        $(".rightBox div.left li").addClass("active");
        $(".rightBox div.right ul").addClass("active");
        $(".rightBox div.left li[name='lmResult']").css("display", "block");
        $(".rightBox div.left li[name='putResult']").removeClass("active");
        $(".rightBox div.right #putResult").removeClass("active");
    }
    $(".rightBox div.left li[name='knResult']").remove();
    $(".rightBox div.right #knResult").remove();
    // S.request = G.ajax(data_action , function (json) {
    //memberdata
    //data_action的值为  membergamedata&gameIndex=3&type=22
    //目的是为了取type等于多少来区分是哪一个栏目
    //所以这里先用type来做选择
    var data_action_arr = data_action.split('&');
    var type = data_action_arr[2].substr(5);
    var json;
    console.log(type);
    if(type==2){
        json = $.parseJSON('{"openDateList":{"number":20190802006,"endTime":224,"lotteryTime":244,"nextNumber":1},"win":0.0,"credit":0.0,"usableCredit":0.0,"phase":[5,283,"5","00:00","24:00"],"openNumList":{"newnumber":20190802005,"numList":[6,3,5,4,8]},"oddsList":{"1":"9.97","2":"9.97","3":"9.97","4":"9.97","5":"9.97","6":"9.97","7":"9.97","8":"9.97","9":"9.97","10":"9.97","15":"9.97","16":"9.97","17":"9.97","18":"9.97","19":"9.97","20":"9.97","21":"9.97","22":"9.97","23":"9.97","24":"9.97","29":"9.97","30":"9.97","31":"9.97","32":"9.97","33":"9.97","34":"9.97","35":"9.97","36":"9.97","37":"9.97","38":"9.97","43":"9.97","44":"9.97","45":"9.97","46":"9.97","47":"9.97","48":"9.97","49":"9.97","50":"9.97","51":"9.97","52":"9.97","57":"9.97","58":"9.97","59":"9.97","60":"9.97","61":"9.97","62":"9.97","63":"9.97","64":"9.97","65":"9.97","66":"9.97"},"bianseList":{}}');
    }else if(type==9){
        json = $.parseJSON('{"openDateList":{"number":20190802009,"endTime":257,"lotteryTime":277,"nextNumber":1},"win":0.0,"credit":0.0,"usableCredit":0.0,"phase":[8,280,"5","00:00","24:00"],"openNumList":{"newnumber":20190802007,"numList":[4,6,0,8,7]},"oddsList":{"108":"99.7","109":"99.7","110":"99.7","111":"99.7","112":"99.7","113":"99.7","114":"99.7","115":"99.7","116":"99.7","117":"99.7","118":"99.7","119":"99.7","120":"99.7","121":"99.7","122":"99.7","123":"99.7","124":"99.7","125":"99.7","126":"99.7","127":"99.7","128":"99.7","129":"99.7","130":"99.7","131":"99.7","132":"99.7","133":"99.7","134":"99.7","135":"99.7","136":"99.7","137":"99.7","138":"99.7","139":"99.7","140":"99.7","141":"99.7","142":"99.7","143":"99.7","144":"99.7","145":"99.7","146":"99.7","147":"99.7","148":"99.7","149":"99.7","150":"99.7","151":"99.7","152":"99.7","153":"99.7","154":"99.7","155":"99.7","156":"99.7","157":"99.7","158":"99.7","159":"99.7","160":"99.7","161":"99.7","162":"99.7","163":"99.7","164":"99.7","165":"99.7","166":"99.7","167":"99.7","168":"99.7","169":"99.7","170":"99.7","171":"99.7","172":"99.7","173":"99.7","174":"99.7","175":"99.7","176":"99.7","177":"99.7","178":"99.7","179":"99.7","180":"99.7","181":"99.7","182":"99.7","183":"99.7","184":"99.7","185":"99.7","186":"99.7","187":"99.7","188":"99.7","189":"99.7","190":"99.7","191":"99.7","192":"99.7","193":"99.7","194":"99.7","195":"99.7","196":"99.7","197":"99.7","198":"99.7","199":"99.7","200":"99.7","201":"99.7","202":"99.7","203":"99.7","204":"99.7","205":"99.7","206":"99.7","207":"99.7"},"bianseList":{}}');
    }else if(type==19){
        json = $.parseJSON('{"openDateList":{"number":20190802013,"endTime":229,"lotteryTime":249,"nextNumber":1},"win":0.0,"credit":0.0,"usableCredit":0.0,"phase":[12,276,"5","00:00","24:00"],"openNumList":{"newnumber":20190802012,"numList":[2,4,1,6,8]},"betList":[]}');
    }else if(type==20){
        json = $.parseJSON('{"openDateList":{"number":20190802013,"endTime":138,"lotteryTime":158,"nextNumber":1},"win":0.0,"credit":0.0,"usableCredit":0.0,"phase":[12,276,"5","00:00","24:00"],"openNumList":{"newnumber":20190802012,"numList":[2,4,1,6,8]}}');
    }else if(type==22){
        json = $.parseJSON('{"openDateList":{"number":20190802013,"endTime":110,"lotteryTime":130,"nextNumber":1},"win":0.0,"credit":0.0,"usableCredit":0.0,"phase":[12,276,"5","00:00","24:00"],"openNumList":{"newnumber":20190802012,"numList":[2,4,1,6,8]}}');
    }

        $("#game_small_name").html($("#game_box_title li.active a").html());
        $("#profit").html(json.win) //今天输赢
        $("#usableCreditSpan").html(json.usableCredit); //可用额
        $("#creditSpan").html(json.credit); //额度
        $("#phase1").html(json.phase[0]);
        $("#phase2").html(json.phase[1]);
        $("#intervaltime").html(json.phase[2] + "分钟");
        $("#begintime").html(json.phase[3]);
        $("#endtime").html(json.phase[4]);
        $("#newPhase").html(json.openNumList.newnumber);
        var numList = json.openNumList.numList;
        var No = function () { if (gameIndex == 1) return "HK"; else if (gameIndex == 2) return "KLC"; else if (gameIndex == 3 || gameIndex == 15) return "SSC"; else if (gameIndex == 4 || gameIndex == 8 || gameIndex == 14) return "PK"; else if (gameIndex == 5) return "KS"; else if (gameIndex == 6) return "KLB"; else if (gameIndex == 7) return "NC"; else if (gameIndex == 10) return "GX"; else if (gameIndex == 13) return "KS"; };
        for (var i = 0; i < numList.length; i++) {
            numList[i] = "<i class='" + No() + "No_" + numList[i] + "'></i>";
        }
        $("#prevBall").html(numList.join(""));
        $("#NowJq").html(json.openDateList.number || "NO");
        var closeTime = json.openDateList.endTime;
        var lotteryTime = json.openDateList.lotteryTime;
        var time = closeTime == 0 && lotteryTime == 0 ? 0 : closeTime > 0 ? closeTime : lotteryTime > 0 ? lotteryTime : 0;
        var closeText = closeTime == 0 && lotteryTime == 0 || closeTime > 0 ? "封盘" : "开奖";
        $("#closeText").html(closeText);

        //最新5笔下注
        if (json.putResult) {
            var result = [], on;
            for (var i = 0; i < json.putResult.length; i++) {
                on = i % 2 == 0 ? "on" : "";
                result.push("<li class='" + on + "'>" + json.putResult[i] + "</li>");
            }
            if (result.length > 0) {
                $("#putResult").html(result.join(""));
            }
        }

        //加载对应模板
        if ($("#result2").length == 0) {
            if (json.oddsList) {
                GameMiddle({gameIndex: gameIndex, type: type, data: json});
            } else if (type == 19) {
                fastbet({gameIndex: gameIndex, type: type, data: json});
            } else if (type == 20) {
                kuaixian(2);
            }else if (type == 21){
                kuaiyi();
            }else if (type == 22){
                txtdaoru();
            }
        }
        //倒计时
        if ((closeTime == 0 && lotteryTime == 0) ) {
            $("#updateTime").html("...");
            $("#closedTime").removeClass("time_loading").html("<span>0</span><span>0</span>分<span>0</span><span>0</span>秒");

            checkgamedatatime = setTimeout(function () {

                var myaction = G.urlReplace({ url: "?" + msg.data_action, paramName: "isCl", val: "1", pad: true });
                myaction = G.urlReplace({ url: myaction, paramName: "isNumto" }).replace("?", "");
                middleBind({ data_action: myaction });
            }, 10000);

            return;
        }
        var updateTime = 93, timeAry;
        S.intervalTime = setInterval(function () {
            time--;
            if (time > 0) {
                if (gameIndex == 1) {
                    settimer = G.settimer(time).replace(/:/g, '');
                } else {
                    settimer = G.settimes(time).replace(/:/g, '');
                }
                timeAry = [];
                for (var n = 0; n < settimer.length; n++) {
                    timeAry.push(settimer.substring(n, n + 1));
                }
                if (gameIndex == 1) {
                    $("#closedTime").removeClass("time_loading").html("<span>" + timeAry[0] + "</span><span>" + timeAry[1] + "</span>時<span>" + timeAry[2] + "</span><span>" + timeAry[3] + "</span>分<span>" + timeAry[4] + "</span><span>" + timeAry[5] + "</span>秒");
                } else {
                    $("#closedTime").removeClass("time_loading").html("<span>" + timeAry[0] + "</span><span>" + timeAry[1] + "</span>分<span>" + timeAry[2] + "</span><span>" + timeAry[3] + "</span>秒");
                }
            } else { //封盘或开奖时间结束
                clearInterval(S.intervalTime);
                S.loadingWrap = false;
                $("#closedTime").html("").addClass("time_loading");
                $("#updateTime").html("...");
                var isCl = "1";
                if ($("#betList").length > 0) isCl = "0";
                var myaction = G.urlReplace({ url: "?" + msg.data_action, paramName: "isCl", val: isCl, pad: true });
                myaction = G.urlReplace({ url: myaction, paramName: "isNumto" }).replace("?", "");
                middleBind({ data_action: myaction });
            }

            // updateTime--;
            // if (updateTime < 0) {
            //     $("#updateTime").html("...");
            //     var isCl = "1";
            //     if ($("#betList").length > 0) isCl = "0";
            //     //只读取时间戳
            //     G.ajax(G.urlReplace({ url: "?" + data_action, paramName: "isCl", val: isCl, pad: true }).replace("?", ""), function (json) {
            //         updateTime = 93;
            //         closeTime = json.openDateList.endTime;
            //         lotteryTime = json.openDateList.lotteryTime;
            //         time = closeTime == 0 && lotteryTime == 0 ? 0 : closeTime > 0 ? closeTime : lotteryTime > 0 ? lotteryTime : 0;
            //         if ((closeTime == 0 && lotteryTime == 0) || (!closeTime || !lotteryTime)) {
            //             clearInterval(S.intervalTime);
            //             $("#updateTime").html("...");
            //             $("#closedTime").removeClass("time_loading").html("<span>0</span><span>0</span>分<span>0</span><span>0</span>秒");
            //             return;
            //         }
            //
            //     });
            // } else {
            //     $("#updateTime").html(updateTime + "秒");
            // }
        }, 1000);

        //读取最新开奖
        (function () {
            if (S.intervalOpenTime) {
                clearInterval(S.intervalOpenTime);
            }
            var _continueNum = function () {
                var newnumber = json.openNumList.newnumber || 0;
                //autoNewNumber
                // G.ajax("AutoNewNumber&gameIndex=" + gameIndex, function (json) {
                    var json = $.parseJSON('{"result":"20190802006"}');
                    var m = json.result;
                    // var m = json.result;
                    if (m == "continue") {
                        S.intervalOpenTime = setTimeout(_continueNum, 5000);
                    } else if (newnumber > 0 && G.NumberSign(m) && parseInt(m) > parseInt(newnumber)) {
                        setTimeout(function () {
                            if (__sysinfo.voice == 1) {
                                if ($("#Sound").length == 0) {
                                    $("body").append("<div id='Sound'><embed src='/images/ClewSound.swf' loop='false' autostart='false' mastersound='' width='0' hidden='true' height='0'></div>");
                                    setTimeout(function () { $("#Sound").remove(); }, 5000);
                                }
                            }
                            S.loadingWrap = false;
                            var myaction = G.urlReplace({ url: "?" + msg.data_action, paramName: "isCl" });
                            myaction = G.urlReplace({ url: myaction, paramName: "isNumto", val: "1", pad: true }).replace("?", "");
                            middleBind({ data_action: myaction });
                        }, 2000);
                    }
                // }, function () {
                //     if (S.intervalOpenTime) {
                //         clearInterval(S.intervalOpenTime);
                //     }
                // });
            };
            _continueNum();
        })();
    // });
}

function game_loading_wrap(stop) {
    if (S.loadingWrap) {
        if (stop) {
            $(".game_loading_wrap").css("display", "block");
            $("#gameBox").css("display", "none");
        } else {
            $(".game_loading_wrap").css("display", "none");
            $("#gameBox").css("display", "block");
        }
    }
}

//Game一級導航
function gameBoxTitleClick() {
    $("#game_box_title a[data-action]").unbind("click").click(function () {
        S.loadingWrap = true;
        $("#result2").remove();
        var data_action = $(this).attr("data-action");
        middleBind({ data_action: data_action });
    });
}
function gameTitleClick() {
    $("#gameTitle li").unbind("click").click(function () {
        if (!S.stop) {
            return false;
        }
        $("#gameBox li span.in a.radioSim").removeClass("radioPoint");
        $("#gameTitle li").removeClass("active");
        $(this).addClass("active");
        if ($(this).attr("data-mysort")) {
            var sort, myodds;
            var data_dow = $(this).attr("data-dow");
            var mystr = $(this).find("h3").html();
            var data_mysort = parseInt($(this).attr("data-mysort"));
            var gameIndex = $("#menuText").attr("data-index");
            if (gameIndex == 1) {
                if (data_mysort == 154 || data_mysort >= 676 && data_mysort <= 679) {
                    myodds = $(this).find("h4").html();
                    if (!G.DecimalSign(myodds)) {
                        myodds = "-";
                        $("#gameBox li span.in a.radioSim").addClass("radiodsable");
                    } else {
                        $("#gameBox li span.in a.radioSim").removeClass("radiodsable");
                    }
                    $("#gameBox li span.p a.red").html(myodds);
                }
            } else if (gameIndex == 2) {
                if (data_mysort == 323 || data_mysort == 324 || data_mysort == 325 || data_mysort == 326 || data_mysort == 327 || data_mysort == 328 || data_mysort == 329) {
                    myodds = $(this).find("h4").html();
                    if (!G.DecimalSign(myodds)) {
                        $("#gameBox li span.in a.radioSim").addClass("radiodsable");
                    } else {
                        $("#gameBox li span.in a.radioSim").removeClass("radiodsable");
                    }
                    $("#gameBox legend").html(mystr);
                }
            } else if (gameIndex == 13) {
                if (data_mysort == -1) {
                    $("#gameBox li.auto").addClass("hiden");
                    $("#gameBox li." + data_dow).removeClass("hiden");
                    $("#clearBtn").click();
                }
            }
        }
        var data_action = $(this).attr("data-action"); //參數判斷是否重新加載數據
        if (data_action) {
            S.loadingWrap = true;
            middleBind({ data_action: data_action });
        }
    });
}

//赔率刷新加载
function loadOdds(oddsList) {
    var gameBox = $("#gameBox");
    var gameIndex = $("#menuText").attr("index");
    var oddsEvent, inputEvent;
    for (var i in oddsList) {
        if (gameIndex == 1 && i == 154) {
            //hxOddsSum({ odds: oddsList[i], duplex: 6, upodds: __info.autoOdds[0] });
        } else if (gameIndex == 1 && (parseInt(i) >= 684 && parseInt(i) <= 732 || parseInt(i) >= 610 && parseInt(i) <= 675 || parseInt(i) >= 1187 && parseInt(i) <= 1198 || parseInt(i) >= 746 && parseInt(i) <= 1137)) {
            //hxOddsSum({ odds: oddsList[i], duplex: 7, upodds: __info.autoOdds[1] });
        } else if (gameIndex == 2 && parseInt(i) >= 323 && parseInt(i) <= 329) {

        } else {
            oddsEvent = gameBox.find("li[data-sort='" + i + "'] span.p a.oddsEvent");
            inputEvent = gameBox.find("li[data-sort='" + i + "'] span.in input[type='text']");
            if (G.DecimalSign(oddsList[i])) {
                inputEvent.attr("disabled", "");
                if (oddsEvent.html() != oddsList[i])
                    oddsEvent.html(oddsList[i]);
            } else {
                inputEvent.attr("disabled", "disabled").val("");
                oddsEvent.html("-");
            }
        }
    }
}

//兩面長龍
function clsort(clList) {
    var key, val, on, lmResult = [], vak;
    if (clList) {
        clList.sort(function (a, b) {
            var _a = a.split(":")[1], _b = b.split(":")[1];
            return parseInt(_b) - parseInt(_a);
        });
        for (var i = 0; i < clList.length; i++) {
            key = clList[i].split(":");
            val = key[0].split(" ");
            on = i % 2 != 0 ? "on" : "";
            vak = val[1] ? " - <b class='red'> " + val[1] + "</b>" : "";
            lmResult.push("<li class='" + on + "'><span>" + key[1] + "期</span>" + val[0] + vak + "</b></li>");
        }
        if (lmResult.length > 0) {
            $("#lmResult").html(lmResult.join(""));
        } else {
            $("#lmResult").html("");
        }
    }
}
function addCqlResult(msg) {
    if (msg.trendLi) {
        var dib, s;
        var count = msg.trendLi.length;
        var result = "<div class='trend_title'><ul class='base-clear'>";
        for (var i = 0; i < count; i++) {
            s = i == 0 ? "active" : "";
            result += "<li index='" + i + "' class='tab_btn " + s + "'><a href='javascript:void(0)'>" + msg.trendLi[i] + "</a></li>";
        }
        result += "</ul></div>";

        result += "<div class='trend_con'><ul class='base-clear'>";
        for (var i = 0; i < count; i++) {
            s = i == 0 ? "active" : "";
            dib = [];
            if (msg.trendContent[i]) {
                for (var k = 0; k < msg.trendContent[i].length; k++) {
                    dib.push("<span class='dib'>");
                    dib.push("<em>" + msg.trendContent[i][k] + "</em>");
                    for (var n = k + 1; n < msg.trendContent[i].length; n++) {
                        if (msg.trendContent[0][n] && msg.trendContent[i][n] == msg.trendContent[i][k]) {
                            dib.push("<em>" + msg.trendContent[i][n] + "</em>");
                            k++;
                        } else {
                            break;
                        }
                    }
                    dib.push("</span>,");
                }
            }
            var jon = dib.join("").split(",");
            dib = [];
            for (var q = 0; q < 25; q++) {
                if (jon[q] && jon[q] != "")
                    dib.unshift(jon[q]);
            }
            result += "<li class='tab_item " + s + " dib-wrap'>" + dib.join("") + "</li>";
        }
        result += "</ul></div>";
        $("#cqlResult").html(result);
        $("#cqlResult div.trend_title li.tab_btn").unbind("click").click(function () {
            $("#cqlResult div.trend_title li.tab_btn").removeClass("active");
            var index = $(this).addClass("active").attr("index");
            $("#cqlResult div.trend_con li.tab_item").removeClass("active");
            $("#cqlResult div.trend_con li:eq(" + index + ")").addClass("active");
        });
    }
}
function bindGameFun() {
    var gameIndex = $("#menuText").attr("data-index");


    var obj = $("#gameBox");
    obj.find("input[type='text']").keyup(function () {
        //$(this).val($(this).val().replace(/^\d+(\.\d+)?$/g, ''));
        G.clearNoNum($(this));
    });
    obj.find("input[type='text']").focus(function () {
        if (!$(this).hasClass("check")) {
            $(this).val($("#tool_ys_input").val());
            $(this).addClass("check");
        } else {
            $(this).val("");
            $(this).removeClass("check");
        }
    });
    obj.find("li span.p a.oddsEvent").unbind("click").click(function () {
        var n1 = $(this).parents("li").attr("data-title");
        var n2 = $(this).parents("li").attr("data-name");
        var sort = $(this).parents("li").attr("data-sort");
        var odds = $(this).html();
        myWarp({ gameIndex: gameIndex, odds: odds, n1: n1, n2: n2, sort: sort, obj: $(this) });
    });
    //勾选項
    obj.find("li span.in a").unbind("click").click(function () {
        var myclass = $(this).attr("class");
        var mymax = parseInt($("#gameTitle li.active").attr("data-max"));
        if (myclass.indexOf("radiodsable") == -1) {
            if (myclass.indexOf("radioPoint") == -1) {
                $(this).addClass("radioPoint");
                enachRadioPoint($(this), mymax);
            } else {
                $(this).removeClass("radioPoint");
            }
        }
    });

    $("#clearBtn").unbind("click").click(function () {
        obj.find("input[type='text']").val("").removeClass("check");
        $("#gameBox li span.in a.radioSim").removeClass("radioPoint");
        obj.find("a[class='kxhotbtn']").each(function () {
            $(this).attr("class","kxbtn");
        });
        $("#ipdw_1").val("");
        $("#ipdw_2").val("");
    });
    var data_type = parseInt(G.query("type", "?" + $("#game_box_title li.active a").attr("data-action")));
    $("#gameSubmit").unbind("click").click(function () {
        if (gameIndex == 1 && (data_type == 4 || data_type == 16 || data_type == 22 || data_type == 29)) {
            gameHxSubmit(data_type);
        } else if ((gameIndex == 2 || gameIndex == 7) && data_type == 12) {
            gameHxSubmit(data_type);
        } else {
            gameSubmit();
        }
    });
    obj.find("input[type='text']").keydown(function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            $("#gameSubmit").click();
            return false;
        }
    });

    obj.find("div[class='dsdx'] a").unbind("click").click(function () {
        var classAttr =  $(this).attr("class");
        var check;
        if (classAttr == "kxhotbtn"){
            $(this).attr("class","kxbtn");
            check = false;
        }
        else {
            $(this).attr("class","kxhotbtn");
            check = true;
        }

        selectDSDX(obj,$(this).attr("data-index"));


    });

    obj.find("table[class='t_dw'] a").unbind("click").click(function (){
        var classAttr =  $(this).attr("class");
        if (classAttr == "kxhotbtn"){
            $(this).attr("class","kxbtn");
        }
        else {
            $(this).attr("class","kxhotbtn");
        }
        selectDW(obj,this);

    });
    obj.find("table[class='t_dw'] input").keyup(function (){
        selectDW(obj,$(this));
    });

    obj.find("div[class='triangle-topleft']").unbind("click").click(function () {
        var sort = $(this).attr("data-index");
        for (var n =0;n < 10; n++){

            if (!obj.find("li[data-sort='"+sort+"'] input[type='text']").hasClass("check")) {
                obj.find("li[data-sort='"+sort+"'] input[type='text']").val($("#tool_ys_input").val());
                obj.find("li[data-sort='"+sort+"'] input[type='text']").addClass("check");
            } else {
                obj.find("li[data-sort='"+sort+"'] input[type='text']").val("");
                obj.find("li[data-sort='"+sort+"'] input[type='text']").removeClass("check");
            }
            sort++;
        }
    });

    obj.find("div[class='triangle-right']").unbind("click").click(function () {
        var sort = $(this).attr("data-index") ;
        sort = parseInt(sort);
        for (var n =0;n < 10; n++){

            if (!obj.find("li[data-sort='"+sort+"'] input[type='text']").hasClass("check")) {
                obj.find("li[data-sort='"+sort+"'] input[type='text']").val($("#tool_ys_input").val());
                obj.find("li[data-sort='"+sort+"'] input[type='text']").addClass("check");
            } else {
                obj.find("li[data-sort='"+sort+"'] input[type='text']").val("");
                obj.find("li[data-sort='"+sort+"'] input[type='text']").removeClass("check");
            }
            sort += 10;
        }
    });


    //快捷下注金额
    $("#tool_ys_wrap input[type='text']").focus(function () {
        $(this).val("");
    });
    $("#tool_ys_wrap input[type='text']").keyup(function () {
        G.clearNoNum($(this));
        //$(this).val($(this).val().replace(/[^0-9]/g, ''));
        /*if ($(this).attr("id") == "tool_ys_input") {
        $("#gameBox input.check").val($(this).val()); //改变下注金额盘
        }*/
    });
    $("#tool_ys_wrap span a").unbind("click").click(function () {
        var val = $(this).html();
        var mycheck = $("#gameBox input.check");
        $("#tool_ys_input").val(val);
        mycheck.each(function () {
            if ($(this).val() == "") {
                $(this).val(val);
            }
        });
    });
    $("#tool_ys_wrap em b").unbind("click").click(function () {
        var ary = [];
        $("#tool_ys_wrap span a").each(function (i) {
            ary[i] = $(this).html();
        });
        $("#tool_ys_wrap em strong input[type='text']").each(function (i) {
            $(this).val(ary[i]);
        });
        $("#tool_ys_wrap em strong").css("display", "block");
    });
    $("#tool_ys_wrap em strong input[type='button']").unbind("click").click(function () {
        var ary = [];
        $("#tool_ys_wrap em strong input[type='text']").each(function (i) {
            ary[i] = $(this).val();
        });
        $("#tool_ys_wrap span a").each(function (i) {
            $(this).html(ary[i]);
        });
        $("#tool_ys_wrap em strong").css("display", "none");
    });
}

function selectDSDX(obj,dataIndex) {
    var dataAction =$("#numNavList li.active a").attr("data-action");
    var gameIndex = G.query("gameIndex","?" + dataAction);

    var dsdx;
    var title;
    if (gameIndex == 3){
        dsdx = [[1,3,5,7,9],[0,2,4,6,8],[5,6,7,8,9],[0,1,2,3,4]];
        title = ["第一球","第二球","第三球","第四球","第五球"];
    }else {
        dsdx = [[1,3,5,7,9],[2,4,6,8,10],[6,7,8,9,10],[1,2,3,4,5]];
        title = ["冠军","亚军","第三名","第四名","第五名","第六名","第七名","第八名","第九名","第十名"];
    }

    var sortArr = [];

    $(".dsdx").find("a[data-index='"+dataIndex+"']").each(function () {

        var index = -1;
        if ($(this).attr("class") == "kxhotbtn"){
            if ($(this).html() == "单") index = 0;
            else if ($(this).html() == "双") index = 1;
            else if ($(this).html() == "大") index = 2;
            else if ($(this).html() == "小") index = 3;

            if (index >= 0){
                for (var n =0 ; n < dsdx[index].length; n++){
                    sortArr.push(dsdx[index][n]);
                }
            }
        }
    });

    var sortStr = "," + sortArr.join(",") + ",";
    obj.find("li[data-title='"+ title[dataIndex]+"']").each(function () {
        var name = $(this).attr("data-name");
        if (sortStr.indexOf("," + name + ",") != -1){
            if (! $(this).find("input").hasClass("check")){
                $(this).find("input").addClass("check");
                if ($(this).find("input").val() == "") $(this).find("input").val($("#tool_ys_input").val());
            }
        }else {
            $(this).find("input").removeClass("check").val("");
        }

    });




}

function selectDW(obj,t) {

    var type = G.query("type", "?" + $("#subNavList a.selected").attr("data-action"));

    obj.find("input[type='text']").removeClass("check");

    var one = [],two = [];
    $("#fix_1").find("a[class='kxhotbtn']").each(function () {
        one.push(parseInt($(this).attr("name")))

    });
    $("#fix_2").find("a[class='kxhotbtn']").each(function () {
        two.push(parseInt($(this).attr("name")))
    });

    var dsdx = [[1,3,5,7,9],[0,2,4,6,8],[5,6,7,8,9],[0,1,2,3,4]];
    var sortArr = [];
    for (var i = 0; i < one.length;i++){
        for (var k = 0; k < two.length;k++){
            if (one[i] <= 9 && two[k] <= 9){
                sortArr.push(one[i] * 10 + two[k]);
            }else if (one[i] <= 9 && two[k] > 9){
                for (var j = 0;j < dsdx[two[k]-10].length;j++){
                    sortArr.push(one[i] * 10 + dsdx[two[k]-10][j]);
                }


            }else if (one[i] > 9 && two[k] <= 9){
                for (var j = 0;j < dsdx[one[i]-10].length;j++){
                    sortArr.push(dsdx[one[i]-10][j] * 10 + two[k]);
                }
            }else {
                for (var j = 0; j <  dsdx[one[i]-10].length;j++){
                    for (var p = 0; p <  dsdx[two[k]-10].length;p++){
                        sortArr.push(dsdx[one[i]-10][j] * 10 + dsdx[two[k]-10][p]);
                    }
                }
            }
        }
    }

    //合分
    var  hefen = [
        [0,19,28,37,46,55,64,73,82,91],
        [1,10,29,38,47,56,65,74,83,92],
        [2,11,20,39,48,57,66,75,84,93],
        [3,12,21,30,49,58,67,76,85,94],
        [4,22,31,13,40,59,68,77,86,95],
        [5,14,41,23,32,50,69,78,87,96],
        [6,15,51,24,42,33,60,79,88,97],
        [7,16,61,25,52,34,43,70,89,98],
        [8,17,71,26,62,35,53,44,80,99],
        [9,18,81,27,72,36,63,45,54,90]
    ];


    $("#fn-hf").find("a[class='kxhotbtn']").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name >= 0 && name <= 9){
            for (var i = 0; i < hefen[name].length; i++){
                sortArr.push(hefen[name][i]);
            }
        }else {
            for (var i = 0; i < dsdx[name - 10].length; i++){
                for (var k = 0; k < hefen[i].length;k++){
                    sortArr.push(hefen[dsdx[name-10][i]][k]);
                }

            }
        }
    });

    //输入定位
    var ipdw_1 = $("#ipdw_1").val();
    var ipdw_2 = $("#ipdw_2").val();
    for (var i = 0;i < ipdw_1.length ; i++){
        for (var k = 0;k < ipdw_2.length ; k++){
            if (parseInt(ipdw_1[i]) >= 0 && parseInt(ipdw_2[k]) >= 0){
                sortArr.push(parseInt(ipdw_1[i]) * 10 + parseInt(ipdw_2[k]))
            }
        }
    }

    var startTypes = [108,208,308,408,508,608,708,808,908,1008];

    var sortArr2 = [];
    for (var i = 0; i < sortArr.length;i++){
        sortArr2.push((sortArr[i] + startTypes[type-9]));
        // console.log(sortArr[i]);
        // if (!obj.find("li[data-sort='"+(sortArr[i] + startTypes[type-9])+"'] input").hasClass("check")){
        //     obj.find("li[data-sort='"+(sortArr[i] + startTypes[type-9])+"'] input").addClass("check").val($("#tool_ys_input").val());
        //
        // }
    }

    var sortStr = "," + sortArr2.join(",") + ",";
    obj.find("li").each(function () {
        var sort = $(this).attr("data-sort");
        if (sortStr.indexOf(("," + sort + ",")) != -1){
            if (! $(this).find("input").hasClass("check")){
                $(this).find("input").addClass("check");
                if ($(this).find("input").val() == "") $(this).find("input").val($("#tool_ys_input").val());
            }
        }else {
            $(this).find("input").removeClass("check").val("");
        }
    });


}

function enachRadioPoint(myobj, max) {
    var count = 0;
    $("#gameBox li a.radioPoint").each(function () {
        count++;
    });
    if (count > max) {
        myobj.removeClass("radioPoint");
        G.alert({ content: "组合最高可选" + max + "个号码！", ok: function () { return true; } });
    }
}
function myWarp(msg) {
    var maxPayout = parseInt(__sysinfo.data.maxPayout);
    var odds = parseFloat(msg.odds);
    var sort = msg.sort;
    var title = msg.n1 + "【" + msg.n2 + "】";
    var warp = "<div class='myLayerBox' id='myWarp' data-sort='" + sort + "'>";
    warp += "<p>赔率：<em name='odds_pl'>" + odds + "</em>下注金额：<input name='uPI_M' class='input onlyNum' type='text' maxlength='5'></p>";
    warp += "<p>可赢金额：<em name='valueOdds' class='blue'>0</em></p>";
    warp += "<p>最高派彩：<i>" + maxPayout + "</i></p>";
    warp += "</div>";
    if (G.DecimalSign(odds)) {
        var content = warp, _submit, data_stop = true;
        G.alert({ content: warp, title: title, obj: msg.obj,
            initialize: function () {
                $("#myWarp input[name='uPI_M']").focus();
                $("#myWarp input[name='uPI_M']").keyup(function () {
                    $(this).val($(this).val().replace(/[^0-9]/g, ''));
                    var m = parseInt($(this).val());
                    m = m * odds - m;
                    m = m > maxPayout ? maxPayout : m;
                    if (G.DecimalSign(m)) {
                        $("#myWarp em[name='valueOdds']").html(G.forDight(m, 1));
                    }
                });
            },
            ok: function () {
                var objM = $("#myWarp input[name='uPI_M']:enabled");
                if (objM.val() == "") {
                    G.myTips({ content: "下注金额不能为空!", obj: objM, myclick: true });
                    objM.focus();
                    return false;
                } else if (!G.NumberSign(objM.val()) || parseInt(objM.val()) < 1) {
                    G.myTips({ content: "下注金额不能小于单注最小下注额度：1", obj: objM, myclick: true });
                    objM.focus();
                    return false;
                } else if (data_stop) {
                    data_stop = false;
                    var opNum = $("#NowJq").html();
                    var type = 1;
                    var data = [ sort + ":" + objM.val()];
                    objM.val("").attr("disabled", "disabled");
                    var data_action = $("#game_box_title li.active a").attr("data-action");
                    var betType = G.query("type","?" + data_action);
                    if (betType == 2) betType = 1;
                    else betType = 2;
                    dataSubmit({ gameIndex: msg.gameIndex,betType:betType, number: opNum, sortAry: data.join(",") }, false);
                    return true;
                }
            },
            cancel: function () { }
        });
    }
}
function gameHxSubmit(data_type) {
    var data_min = parseInt($("#gameTitle li.active").attr("data-min"));
    var data_max = parseInt($("#gameTitle li.active").attr("data-max"));
    var sort = $("#gameTitle li.active").attr("data-mysort");
    var dataAry = [], dataName = [];
    var cycle;
    if (data_type == 4) {
        cycle = data_max;
        var a, b, index;
        var odds = $("#gameTitle li.active h4").html();
        $("#gameBox li span.in a.radioPoint").each(function () {
            dataName.push($(this).parents("li").attr("data-name"));
            index = parseInt($(this).parents("li").attr("data-sort"));
            index % 2 == 0 ? a = true : b = true;
        });

        if ((!a || !b) && dataName.length == 6) {
            G.alert({ content: "6肖勾选排列不允許 “全单” 或 “全双” 组合！", ok: function () { return true; } });
            return false;
        }
        if (dataName.length == data_max) {
            var n1 = $("#gameBox legend").html();
            var money = $("#tool_ys_input").val();
            dataAry.push(sort);
            dataAry.push(n1);
            dataAry.push(dataName);
            dataAry.push(odds);
        }
    } else if (data_type == 16 || data_type == 22 || data_type == 29 || data_type == 12) {
        cycle = data_min;
        var odds = $("#gameTitle li.active h4").html();
        $("#gameBox li span.in a.radioPoint").each(function () {
            dataName.push($(this).parents("li").attr("data-name"));
        });

        dataName.sort(function (a, b) {
            var _a = a, _b = b;
            return parseInt(_a) - parseInt(_b);
        });

        if (dataName.length >= data_min && dataName.length <= data_max) {
            var n1 = $("#gameBox legend").html();
            var money = $("#tool_ys_input").val();
            dataAry.push(sort);
            dataAry.push(n1);
            dataAry.push(dataName);
            dataAry.push(odds);
        } else {
            G.alert({ content: "组合最高可选 " + data_min + "~" + data_max + " 个号码", ok: function () { return true; } });
            return false;
        }
    }
    if (dataAry && dataAry.length > 0) {
        var data_stop = true;
        var DuplexObj = G.DuplexSum(cycle, dataAry[2]);
        var orderWrap = "<div class='lmSubmitWrap' id='lmSubmitWrap'>";
        orderWrap += "<div class='lsw_top'><p>下注号码明细</p><p class='myNos'>" + dataAry[2].join("、") + "</p></div>";
        orderWrap += "<div id='wtWrapLm'></div>";
        orderWrap += "<div>您共选择了<span>" + dataAry[2].length + "</span>个号码 “復式” 共分为<span>" + DuplexObj.count + "</span>组</div>";
        orderWrap += "<div><em>" + dataAry[1] + " </em>";
        if (dataAry[3]) {
            orderWrap += "@<strong id='lmPl'>" + dataAry[3] + "</strong> ";
        }
        orderWrap += "单注金额：<input id='odds_lm_pl' class='input onlyNum' type='text' maxlength='7'></div>";
        orderWrap += "<div>总金额：<span id='sumCount'>0</span></div>";
        orderWrap += "</div>";
        G.alert({ content: orderWrap, title: "确认下单",
            initialize: function () {
                $("#lmSubmitWrap #odds_lm_pl").focus();
                $("#lmSubmitWrap #odds_lm_pl").keyup(function () {
                    $(this).val($(this).val().replace(/[^0-9]/g, ''));
                    var sumCount = parseInt($(this).val()) * parseInt(DuplexObj.count) || 0;
                    $("#sumCount").html(sumCount);
                });
            },
            ok: function () {
                if (data_stop) {
                    data_stop = false;
                    var objM = $("#lmSubmitWrap #odds_lm_pl:enabled");
                    if (objM.val() == "") {
                        G.myTips({ content: "下注金额不能为空!", obj: objM, myclick: true });
                        objM.focus();
                        return false;
                    } else if (!G.NumberSign(objM.val()) || parseInt(objM.val()) < 1) {
                        G.myTips({ content: "下注金额不能小于单注最小下注额度：1", obj: objM, myclick: true });
                        objM.focus();
                        return false;
                    } else {
                        var gameIndex = $("#menuText").attr("data-index");
                        var opNum = $("#NowJq").html();
                        var mydata = [];
                        var myCursor = encodeURIComponent(dataAry[2].join("、"));
                        for (var i = 0; i < DuplexObj.list.length; i++) {
                            mydata.push( DuplexObj.list[i] + ":" + objM.val());
                        }
                        $("#gameBox li span.in a.radioSim").removeClass("radioPoint");
                        objM.val("").attr("disabled", "disabled");
                        dataSubmit({ sort: dataAry[0], gameIndex: gameIndex, number: opNum, myCursor: myCursor, sortAry: mydata.join("|") }, "DownEntryLm");
                        return true;
                    }
                }
            },
            cancel: function () { }
        });
    }
}
function gameSubmit() {
    var obj = $("#gameBox");
    var odds, money, n1, n2, sort, dataAry = [];
    var data_type = $("#game_box_title li.active").attr("data-type");

    var data_action = $("#game_box_title li.active a").attr("data-action");
    var data_number = $("#NowJq").html();
    var gameIndexStr = $("#menuText").find("span").html();
    $("#gameSubmit").focus();
    obj.find("li").each(function () {
        if ($(this).attr("data-sort") && G.DecimalSign($(this).find("span.in input[type='text']").val()) && G.DecimalSign($(this).find("span.p a.oddsEvent").html())) {
            sort = $(this).attr("data-sort");
            n1 = $(this).attr("data-title");
            n2 = $(this).attr("data-name");
            odds = $(this).find("span.p a.oddsEvent").html();
            money = $(this).find("span.in input[type='text']").val();
            dataAry.push(sort + ":" + n1 + ":" + n2 + ":" + odds + ":" + money + ":" + gameIndexStr + ":" + data_number);
        }
    });
    if (dataAry && dataAry.length > 0) {
        dataAry.sort(function (a, b) {
            var _a = a.split(":")[0], _b = b.split(":")[0];
            return parseInt(_a) - parseInt(_b);
        });
        var k, count = [0, 0];
        var orderWrap = "";
        orderWrap += "<table class='order' style='width:100%'><thead><tr><th width='150'>注单明细</th><th width='120'>赔率</th><th width='80'>下注金额</th><th width='60'>操作</th><th width='60' class='cursor'>打印</th></tr></thead>";
        orderWrap += "<tbody>";
        for (var i = 0; i < dataAry.length; i++) {
            k = dataAry[i].split(":");
            orderWrap += "<tr data-sort='" + k[0] + "' data-ary='" + dataAry[i] + "'>";
            orderWrap += "<td width='150'>" + k[1] + "【" + k[2] + "】</td>";
            orderWrap += "<td width='120'><div class='plShow'>" + k[3] + "</div></td>";
            orderWrap += "<td width='80'><input class='input onlyNum orderLayerInput' value='" + k[4] + "' type='text'></td>";
            orderWrap += "<td width='60'><a class='deleteOrder deleteIcon' mysort='" + k[0] + "' title='删除' href='javascript:void(0)'></a></td>";
            orderWrap += "<td width='60'><input type='checkbox' name='print' /></td>";
            orderWrap += "</tr>";
            count[0]++;
            count[1] += parseFloat(k[4]);
        }
        orderWrap += "</tbody>";
        orderWrap += "<tfoot class='zjWrap'><tr><th colspan='5'>";
        orderWrap += "总注：<span id='zj'>" + count[0] + "</span> 笔&nbsp;&nbsp;&nbsp;&nbsp;合计金额：<span id='zjm' class='blue'>" + count[1] + "</span>";
        orderWrap += "</th></tr></tfoot>";
        orderWrap += "</table>";
        var content = G.overflowDiv({ id: "orderWrap", content: orderWrap });
        var data_stop = true;
        G.alert({ content: content, title: "确认下单", width: 450,
            initialize: function () {
                var _myeach = function (stop) {
                    var mycount = [0, 0];
                    $("#orderWrap input[type='text']").each(function () {
                        if (G.DecimalSign($(this).val())) {
                            mycount[0]++;
                            mycount[1] += parseFloat($(this).val());
                        }
                    });
                    if (mycount[0] == 0 && stop) {
                        $("#myWarpr").remove();
                        $("#mymask").remove();
                        return false;
                    } else {
                        $("#zj").html(mycount[0]);
                        $("#zjm").html(mycount[1]);
                    }
                };

                $("#orderWrap thead th.cursor").unbind("click").click(function () {
                    if (!$(this).attr("print")) {
                        $("#orderWrap tbody tr input[name='print']").attr("checked", "checked");
                        $(this).attr("print", "1");
                    } else {
                        $("#orderWrap tbody tr input[name='print']").attr("checked", false);
                        $(this).removeAttr("print");
                    }
                });

                $("#orderWrap input[type='text']").keyup(function () {
                    //$(this).val($(this).val().replace(/[^0-9]/g, ''));
                    G.clearNoNum($(this));
                    _myeach(false);
                });
                $("#orderWrap a.deleteOrder").unbind("click").click(function () {
                    $(this).parents("tr[data-sort='" + $(this).attr("mysort") + "']").remove();
                    _myeach(true);
                });
            },
            ok: function () {
                var dataAry = [];
                var printAry = [];
                var objM;
                $("#orderWrap tbody tr").each(function () {
                    if ($(this).attr("data-sort")) {
                        objM = $(this).find("input[type='text']:enabled");
                        if (objM.val() == "") {
                            dataAry = [];
                            G.myTips({ content: "下注金额不能为空!", obj: objM, myclick: true });
                            objM.focus();
                            return false;
                        } else if (!G.DecimalSign(objM.val()) || parseFloat(objM.val()) <= 0) {
                            dataAry = [];
                            G.myTips({ content: "下注金额不能小于单注最小下注额度：1", obj: objM, myclick: true });
                            objM.focus();
                            return false;
                        } else {
                            dataAry.push( $(this).attr("data-sort") + ":" + objM.val());
                            if ($(this).find("input[name='print']").attr("checked")) {
                                printAry.push($(this).attr("data-ary"));
                            }
                        }
                    }
                });
                if (dataAry.length > 0 && data_stop) {
                    data_stop = false;
                    // var gameIndex = G.query("gameIndex", "?" + msg.data_action);
                    var type = G.query("type", "?" + data_action);
                    var gameIndex = $("#menuText").attr("data-index");
                    var opNum = $("#NowJq").html();
                    dataAry.sort(function (a, b) {
                        var _a = a.split(":")[1], _b = b.split(":")[1];
                        return parseInt(_b) - parseInt(_a);
                    });
                    $("#orderWrap tbody tr input[type='text']").val("").attr("disabled", "disabled");
                    var betType = type;
                    if (betType == 2) betType = 1;
                    else betType = 2;
                    dataSubmit({ gameIndex: gameIndex,betType:betType, number: opNum, sortAry: dataAry.join(",") }, false, null, printAry);
                    return true;
                }
                return false;
            },
            cancel: function () { }
        });
    }
}
function dataSubmit(data, myurl, objthis, printAry) {
    $("#gameBox input[type='text']").removeClass("check").val("");
    $("#gameBox a[class='kxhotbtn']").each(function () {
        $(this).attr("class","kxbtn");
    });
    $("#ipdw_1").val("");
    $("#ipdw_2").val("");


    var url = myurl || "DownEntry";
    var mydata = [];
    for (var i in data) {
        mydata.push(i + "=" + data[i]);
    }
    var data_action = [url, mydata.join("&")];
    G.mask();
    G.ajax(data_action.join("&"), function (json) {

        if (json.result != 1){
            G.maskClose();
            G.alert({ content: json.result, ok: function () { return true; } });
            return;
        }

        $("#txtnumbers").html("");
        $("#kxnumbers").html("");


        G.maskClose();
        newGameData(json, printAry);

        // setTimeout(dataSubmit(data,myurl,objthis,printAry),1000);

    }, function () { G.maskClose(); });
}


function newGameData(msg, printAry) {
    if (msg.usableCredit) {
        $("#usableCreditSpan").html(msg.usableCredit);
    }

    if (msg.credit) {
        $("#creditSpan").html(msg.credit);
    }

    if (msg.oddsList) {
        for (var i in msg.oddsList) {
            $("#gameBox li[data-sort='" + i + "'] span.p a.oddsEvent").html(msg.oddsList[i]);
            if (msg.bianseList && msg.bianseList[i])
                $("#gameBox li[data-sort='" + i + "'] span.p a.oddsEvent").attr("style","color: blue");

        }
    }
    if (msg.putResult) {
        var result = [], on;
        for (var i = 0; i < msg.putResult.length; i++) {
            on = i % 2 == 0 ? "on" : "";
            result.push("<li class='" + on + "'>" + msg.putResult[i] + "</li>");
        }
        if (result.length > 0) {
            $("#putResult").html(result.join(""));
        }
    }
    container(printAry);
}
function container(printAry) {
    var myDiv = "<div id='tip_container' class='container tip_container' style='margin-left:-55px; margin-top:55px;display:block'><div id='tip' class='success mtip'><i class='micon'></i><span id='tsc'>下注成功！</span><i id='mclose' class='mclose'></i></div></div>";
    $("#tip_container").remove();
    $("body").append(myDiv);
    setTimeout(function () {
        $("#tip_container").remove();
        if (printAry && printAry.length > 0) {
            var ary = [], key;
            for (var i = 0; i < printAry.length; i++) {
                key = printAry[i].split(":");
                ary.push(encodeURI("【" + key[5] + "】<br />【第" + key[6] + "期】<br />" + key[1] + "【" + key[2] + "】 @ <strong class=\"red\"> " + key[3] + "</strong><br />下注金额：<strong class=\"blue\">" + key[4] + "</strong>"));
            }
            myPrint(null, ary.join("êêê"));
        }
    }, 500);
    $(".rightBox div.left li").removeClass("active");//.removeAttr("style");
    $(".rightBox div.right ul").removeClass("active");
    $(".rightBox div.left li[name='putResult']").addClass("active");
    $(".rightBox div.right #putResult").addClass("active");
}
function myPrint(obj, ary) {
    var p = ary == undefined ? encodeURI($(obj).parent("p").find("label").html()) : ary;
    var content = "<iframe class='lineMain' style='width:280px;height:320px;' scrolling='auto' frameborder='0' src='/Member/Print.htm?data=" + p + "'></iframe>";
    G.alert({ title: "账单打印", content: content, ok: function () { return true; } });
}