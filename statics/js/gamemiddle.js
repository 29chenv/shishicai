function GameMiddle(msg) {

    $("#mainIframe").find("div[class='gameLeft']").attr("style","");
    $("#mainIframe").find("div[class='game_wrap']").attr("style","");
    $("#mainIframe").find("div[class='game_item_warp']").attr("style","");
    $("#gameBoxTool").attr("style","");

    var gameIndex = msg.gameIndex;
    var type = msg.type;
    if (type == 19) {
        fastbet(msg);
        return;
    }
    var oddsList = msg.data.oddsList;
    var bianseList = msg.data.bianseList;
    var num, sort, str, sortIndex, disabled = "", data_type = [];
    var _dx = function (index) { switch (index) { case 1: return "一"; case 2: return "二"; case 3: return "三"; case 4: return "四"; case 5: return "五"; case 6: return "六"; case 7: return "七"; case 8: return "八"; } };
    var htmlData = [];
    var pad = "";
    if (gameIndex == 3 && type >= 9 && type <= 18) {
        var selects = [];
        for (var i = 9; i <= 18; i++){

            if (i == type) selects.push("selected");
            else selects.push("");
        }

        htmlData.push("<div id='subNavList' class='game_box_tool2 base-clear'>");
        htmlData.push("&nbsp;&nbsp;<a href='javascript:void(0)' class='"+selects[0]+"' data-action='gamedata&amp;gameIndex=3&amp;type=9' >口口XX</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[1]+"' data-action='gamedata&amp;gameIndex=3&amp;type=10' >口X口X</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[2]+"' data-action='gamedata&amp;gameIndex=3&amp;type=11' >口XX口</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[4]+"' data-action='gamedata&amp;gameIndex=3&amp;type=13' >X口口X</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[5]+"' data-action='gamedata&amp;gameIndex=3&amp;type=14' >X口X口</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[7]+"' data-action='gamedata&amp;gameIndex=3&amp;type=16' >XX口口</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[3]+"' data-action='gamedata&amp;gameIndex=3&amp;type=12' >口XXX口</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[6]+"' data-action='gamedata&amp;gameIndex=3&amp;type=15' >X口XX口</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[8]+"' data-action='gamedata&amp;gameIndex=3&amp;type=17' >XX口X口</a> | ");
        htmlData.push("<a href='javascript:void(0)' class='"+selects[9]+"' data-action='gamedata&amp;gameIndex=3&amp;type=18' >XXX口口</a>");
        htmlData.push("</div>");
        pad = "style='padding-top: 30px;padding-left: 1px'";
    }

    htmlData.push("<div class='game_ball_wrap game_item_wrap base-clear' " + pad + ">");



    if (gameIndex == 3 || gameIndex == 15) { //SSC
        if (type == 2) {
            for (var i = 0; i < 5; i++) {
                if (i > 0)
                    sortIndex = i * 14;
                else
                    sortIndex = 0;
                htmlData.push("<div class='game_box col_1 gameBox base-clear'>");
                htmlData.push("<div class='game_con'>");
                htmlData.push("<fieldset>");
                htmlData.push("<legend>第" + _dx((i + 1)) + "球</legend>");
                htmlData.push("<ul>");
                for (var n = 1; n <= 10; n++) {
                    sort = n + sortIndex;
                    disabled = G.DecimalSign(oddsList[sort]) ? "" : "disabled='disabled'";
                    var bianse = bianseList[sort] == "1" ? "style='color:blue;'" : "";
                    htmlData.push("<li data-sort='" + sort + "' data-title='" + _sscnum1(sort) + "' data-name='" + _sscnum2(sort) + "'>");
                    htmlData.push("<span class='name'><i class='SSCNo_" + (n - 1) + "'></i></span>");
                    htmlData.push("<span class='p'><a class='oddsEvent' "+bianse+" title='点击下注' href='javascript:;'>" + oddsList[sort] + "</a></span>");
                    htmlData.push("<span class='in'><input class='input onlyNum orderInput' type='text' " + disabled + " maxlength='7'></span>");
                    htmlData.push("</li>");
                }

                htmlData.push("</ul>");
                htmlData.push("<div class='dsdx' style='width: 168px;text-align: center;display: inline-block;margin-top: 5px'>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' href=\"javascript:void(0)\">单</a>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">双</a> ");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">大</a>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">小</a> ");
                htmlData.push("</div>");
                htmlData.push("</fieldset>");
                htmlData.push("</div>");
                htmlData.push("</div>");
            }
        }  else if (type >= 9){

            var titiles = [["万","千"],["万","百"],["万","十"],["万","个"],["千","百"],["千","十"],["千","个"],["百","十"],["百","个"],["十","个"]];

            var start = 108 + (type - 9) * 100;

            for (var i = 0; i <=  9; i++) {
                sort = i * 10 + start;

                htmlData.push("<div class='game_box col_1 base-clear'>");
                htmlData.push("<div data-index='"+sort+"' class='triangle-topleft'></div>");
                if (i == 0 ){
                    htmlData.push("<div style='float: left;margin-left: -8px'>");
                    htmlData.push("<div style='height: 32px;position: relative;text-align: center'><div data-index='"+sort+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+1)+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+2)+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+3)+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+4)+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+5)+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+6)+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+7)+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+8)+"' class='triangle-right'></div></div>");
                    htmlData.push("<div style='height: 31px;position: relative;text-align: center'><div data-index='"+(sort+9)+"' class='triangle-right'></div></div>");

                    htmlData.push("</div>");
                }

                htmlData.push("<div class='game_con' style='width: 174px'>");
                htmlData.push("<fieldset>");
                // htmlData.push("<legend>二字定</legend>");
                htmlData.push("<ul>");


                for (var k= 0; k <= 9;k++) {
                    var sort2 = sort +  k;
                    var bianse = bianseList[sort2] == "1" ? "style='color:blue;'" : "";
                    disabled = G.DecimalSign(oddsList[sort2]) ? "" : "disabled='disabled'";
                    htmlData.push("<li data-sort='" + sort2 + "' data-title='" + _sscnum1(sort2) + "' data-name='" + getDwNameByType(sort2) + "'>");
                    htmlData.push("<span class='name bf_12' style='width: 33px'>" + getDwNameByType(sort2) + "</span>");
                    htmlData.push("<span class='p'><a class='oddsEvent' "+bianse+" title='点击下注'>" + oddsList[sort2] + "</a></span>");
                    htmlData.push("<span class='in'><input class='input onlyNum orderInput' type='text' " + disabled + " maxlength='7'></span>");
                    htmlData.push("</li>");
                }

                htmlData.push("</ul>");
                htmlData.push("</fieldset>");
                htmlData.push("</div>");
                htmlData.push("</div>");
            }

            htmlData.push("<table class=\"t_dw\" id=\"bd_fix\"> " +
                "<tbody>" +
                "<tr> " +
                "<td width=\"100%\"> " +
                "<table class=\"t_dw\"> " +
                "<tbody>" +
                "<tr> " +
                "<td rowspan=\"2\" style='text-align: center' width=\"50\">定位置</td> " +
                "<td class='fn-fix' id='fix_1' style='padding-left: 5px'> " + titiles[type - 9][0] + " " +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"0\">0</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"1\">1</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"2\">2</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"3\">3</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"4\">4</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"5\">5</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"6\">6</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"7\">7</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"8\">8</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"9\">9</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"10\">单</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"11\">双</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"12\">大</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"13\">小</a> " +
                "</td> " +
                "<td rowspan=\"2\" style='text-align: center' width=\"40\">合分</td> " +
                "<td rowspan=\"2\" class=\"fn-hf\" id='fn-hf'> " +
                "<div style='margin-left: 5px'> " +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"0\">0</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"1\">1</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"2\">2</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"3\">3</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"4\">4</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"10\">单</a>" +
                "</div> " +
                "<div style='margin-left: 5px'> " +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"5\">5</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"6\">6</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"7\">7</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"8\">8</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"9\">9</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"11\">双</a>" +
                "</div> " +
                "</td> " +
                "<td><span style='margin-left: 5px'>"+titiles[type - 9][0]+"位</span> " +
                "<input id='ipdw_1' type=\"number\"  index=\"1\" >" +
                "</td> " +
                "</tr> " +
                "<tr> " +
                "<td class='fn-fix' id='fix_2' style='padding-left: 5px'> " + titiles[type - 9][1] + " " +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"0\">0</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"1\">1</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"2\">2</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"3\">3</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"4\">4</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"5\">5</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"6\">6</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"7\">7</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"8\">8</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"9\">9</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"10\">单</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"11\">双</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"12\">大</a>" +
                "<a class=\"kxbtn\" style='margin-left: 2px' name=\"13\">小</a> " +
                "</td> " +
                "<td><span style='margin-left: 5px'>"+titiles[type - 9][1]+"位</span> " +
                "<input id='ipdw_2' type=\"number\" index=\"2\" >" +
                "</td>" +
                " </tr> " +
                "</tbody>" +
                "</table>" +
                " </td>" +
                " </tr>  </tbody></table>");


        }
    }
    else if (gameIndex == 4 || gameIndex == 8) { //PK10
        var _dpk = function (index) { switch (index) { case 1: return "冠军"; case 2: return "亚军"; case 3: return "第三名"; case 4: return "第四名"; case 5: return "第五名"; case 6: return "第六名"; case 7: return "第七名"; case 8: return "第八名"; case 9: return "第九名"; case 10: return "第十名"; } };
        if (type == 2) {
            for (var i = 0; i < 10; i++) {
                if (i > 0)
                    sortIndex = i * 16;
                else
                    sortIndex = 0;
                htmlData.push("<div class='game_box col_1 gameBox base-clear'>");
                htmlData.push("<div class='game_con'>");
                htmlData.push("<fieldset>");
                htmlData.push("<legend>" + _dpk((i + 1)) + "</legend>");
                htmlData.push("<ul>");
                for (var n = 22; n <= 31; n++) {
                    sort = n + sortIndex;
                    disabled = G.DecimalSign(oddsList[sort]) ? "" : "disabled='disabled'";
                    htmlData.push("<li data-sort='" + sort + "' data-title='" + _pknum1(sort) + "' data-name='" + _pknum2(sort) + "'>");
                    htmlData.push("<span class='name'><i class='PKNo_" + (n - 21) + "'></i></span>");
                    htmlData.push("<span class='p'><a class='oddsEvent' title='点击下注' href='javascript:;'>" + oddsList[sort] + "</a></span>");
                    htmlData.push("<span class='in'><input class='input onlyNum orderInput' type='text' " + disabled + " maxlength='7'></span>");
                    htmlData.push("</li>");
                }
                htmlData.push("</ul>");
                htmlData.push("</fieldset>");
                htmlData.push("</div>");
                htmlData.push("</div>");
            }
        } else if (type == 3) {
            htmlData.push("<div class='game_box col_5 gameBox base-clear'>");
            htmlData.push("<div class='game_con'>");
            htmlData.push("<fieldset>");
            htmlData.push("<legend>冠、亞軍和</legend>");
            htmlData.push("<ul>");
            for (var n = 1; n <= 17; n++) {
                sort = n;
                disabled = G.DecimalSign(oddsList[sort]) ? "" : "disabled='disabled'";
                htmlData.push("<li data-sort='" + sort + "' data-title='" + _pknum1(sort) + "' data-name='" + _pknum2(sort) + "'>");
                htmlData.push("<span class='name bf_14'>" + _pknum2(sort) + "</span>");
                htmlData.push("<span class='p'><a class='oddsEvent' title='点击下注' href='javascript:;'>" + oddsList[sort] + "</a></span>");
                htmlData.push("<span class='in'><input class='input onlyNum orderInput' type='text' " + disabled + " maxlength='7'></span>");
                htmlData.push("</li>");
            }
            htmlData.push("</ul>");
            htmlData.push("</fieldset>");
            htmlData.push("</div>");
            htmlData.push("</div>");

            htmlData.push("<div class='game_box base-clear'>");
            htmlData.push("<div class='game_con'>");
            htmlData.push("<fieldset>");
            htmlData.push("<legend>單雙、大小</legend>");
            htmlData.push("<ul>");
            for (var n = 18; n <= 21; n++) {
                sort = n;
                disabled = G.DecimalSign(oddsList[sort]) ? "" : "disabled='disabled'";
                htmlData.push("<li data-sort='" + sort + "' data-title='" + _pknum1(sort) + "' data-name='" + _pknum2(sort) + "'>");
                htmlData.push("<span class='name'>" + _pknum1(sort) + _pknum2(sort) + "</span>");
                htmlData.push("<span class='p'><a class='oddsEvent' title='点击下注' href='javascript:;'>" + oddsList[sort] + "</a></span>");
                htmlData.push("<span class='in'><input class='input onlyNum orderInput' type='text' " + disabled + " maxlength='7'></span>");
                htmlData.push("</li>");
            }
            htmlData.push("</ul>");
            htmlData.push("</fieldset>");
            htmlData.push("</div>");
            htmlData.push("</div>");


        } else if (type == 4) {

            for (var i = 0; i < 5; i++) {
                if (i > 0)
                    sortIndex = i * 16;
                else
                    sortIndex = 0;
                htmlData.push("<div class='game_box col_1 gameBox base-clear'>");
                htmlData.push("<div class='game_con'>");
                htmlData.push("<fieldset>");
                htmlData.push("<legend>" + _dpk((i + 1)) + "</legend>");
                htmlData.push("<ul>");
                for (var n = 22; n <= 31; n++) {
                    sort = n + sortIndex;
                    disabled = G.DecimalSign(oddsList[sort]) ? "" : "disabled='disabled'";
                    htmlData.push("<li data-sort='" + sort + "' data-title='" + _pknum1(sort) + "' data-name='" + _pknum2(sort) + "'>");
                    htmlData.push("<span class='name'><i class='PKNo_" + (n - 21) + "'></i></span>");
                    htmlData.push("<span class='p'><a class='oddsEvent' title='点击下注' href='javascript:;'>" + oddsList[sort] + "</a></span>");
                    htmlData.push("<span class='in'><input class='input onlyNum orderInput' type='text' " + disabled + " maxlength='7'></span>");
                    htmlData.push("</li>");
                }
                for (var n = 0; n < 2;n++){
                    disabled = G.DecimalSign(oddsList[sort + 5 + n]) ? "" : "disabled='disabled'";
                    htmlData.push("<li data-sort='" + (sort + 5 + n) + "' data-title='" + _pknum1(sort + 5 + n) + "' data-name='" + _pknum2(sort + 5 + n) + "'>");
                    htmlData.push("<span class='name'>"+_pknum2(sort + 5 + n)+"</span>");
                    htmlData.push("<span class='p'><a class='oddsEvent' title='点击下注' href='javascript:;'>" + oddsList[sort + 5 + n] + "</a></span>");
                    htmlData.push("<span class='in'><input class='input onlyNum orderInput' type='text' " + disabled + " maxlength='7'></span>");
                    htmlData.push("</li>");
                }


                htmlData.push("</ul>");
                htmlData.push("<div class='dsdx' style='width: 168px;text-align: center;display: inline-block;margin-top: 5px'>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' href=\"javascript:void(0)\">单</a>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">双</a> ");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">大</a>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">小</a> ");
                htmlData.push("</div>");
                htmlData.push("</fieldset>");
                htmlData.push("</div>");
                htmlData.push("</div>");
            }
        } else if (type == 5) {
            for (var i = 5; i < 10; i++) {
                if (i > 0)
                    sortIndex = i * 16;
                else
                    sortIndex = 0;
                htmlData.push("<div class='game_box col_1 gameBox base-clear'>");
                htmlData.push("<div class='game_con'>");
                htmlData.push("<fieldset>");
                htmlData.push("<legend>" + _dpk((i + 1)) + "</legend>");
                htmlData.push("<ul>");
                for (var n = 22; n <= 31; n++) {
                    sort = n + sortIndex;
                    disabled = G.DecimalSign(oddsList[sort]) ? "" : "disabled='disabled'";
                    htmlData.push("<li data-sort='" + sort + "' data-title='" + _pknum1(sort) + "' data-name='" + _pknum2(sort) + "'>");
                    htmlData.push("<span class='name'><i class='PKNo_" + (n - 21) + "'></i></span>");
                    htmlData.push("<span class='p'><a class='oddsEvent' title='点击下注' href='javascript:;'>" + oddsList[sort] + "</a></span>");
                    htmlData.push("<span class='in'><input class='input onlyNum orderInput' type='text' " + disabled + " maxlength='7'></span>");
                    htmlData.push("</li>");
                }
                htmlData.push("</ul>");
                htmlData.push("<div class='dsdx' style='width: 168px;text-align: center;display: inline-block;margin-top: 5px'>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' href=\"javascript:void(0)\">单</a>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">双</a> ");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">大</a>");
                htmlData.push("<a data-index='"+ i +"' class='kxbtn' style='margin-left: 5px' href=\"javascript:void(0)\">小</a> ");
                htmlData.push("</div>");
                htmlData.push("</fieldset>");
                htmlData.push("</div>");
                htmlData.push("</div>");
            }
        }
    }


    htmlData.push("</div>"); //game_ball_wrap end
    game_loading_wrap(false);
    $("#gameBox").html(htmlData.join(""));

    var gameBoxTool = "<div class=\"tool_left\">" +
        "<div id=\"tool_ys_wrap\" class=\"t_left\">" +
        "<label for=\"tool_ys_input\">快捷下注金额：</label><input id=\"tool_ys_input\" class=\"input onlyNum\" maxlength='5' type=\"text\"><i id=\"close\" style=\"display: none;\">x</i>\n" +
        "<span><a href=\"javascript:void(0)\">50</a> <a href=\"javascript:void(0)\">100</a> <a href=\"javascript:void(0)\">200</a> <a href=\"javascript:void(0)\">500</a> <a href=\"javascript:void(0)\">1000</a></span>\n" +
        "<em><b>+</b>" +
        "<strong>\n" +
        "<input class=\"input onlyNum\" type=\"text\">" +
        "<input class=\"input onlyNum\" type=\"text\">" +
        "<input class=\"input onlyNum\" type=\"text\">" +
        "<input class=\"input onlyNum\" type=\"text\">" +
        "<input class=\"input onlyNum\" type=\"text\">" +
        "<div class=\"base-clear\"></div>" +
        "<input class=\"btn\" type=\"button\" value=\"确定\">" +
        "</strong>" +
        "</em>" +
        "</div>" +
        "</div>" +
        "<div class=\"t_right\">" +
        "<input id=\"clearBtn\" class=\"btn grayBtn\" type=\"button\" value=\"重填\">" +
        "<input id=\"gameSubmit\" class=\"btn hotBtn disSubmit\" type=\"button\" value=\"提交\">" +
        "</div>";

    $("#gameBoxTool").html(gameBoxTool);

    bindGameFun(); //注冊相關函數，單筆下注，多筆下注，重置，提交下注
    gameBoxTitleClick();
    gameTitleClick();

    $("#subNavList a[data-action]").unbind("click").click(function () {
        S.loadingWrap = true;
        $("#result2").remove();
        var data_action = $(this).attr("data-action");
        middleBind({ data_action: data_action });
    });


}

function fastbet(msg) {
    $("#mainIframe").find("div[class='gameLeft']").attr("style","");
    $("#mainIframe").find("div[class='game_wrap']").attr("style","");
    $("#mainIframe").find("div[class='game_item_warp']").attr("style","");
    $("#gameBoxTool").attr("style","");


    var gameIndex = msg.gameIndex;
    var betList = msg.data.betList;
    var len = betList.length;
    var htmlData = ["<div class='t_1'> <div class='history_wrap'>"];
    htmlData.push("<table >");
    htmlData.push("<thead><th width='10%'>彩种</th><th width='20%'>注单编号</th><th width='10%'>号码</th><th width='9%'>赔率</th><th width='9%'>金额</th><th width='9%'>回水</th><th width='9%'>状态</th ><th width='10%'>全选<input id='quanxian' type='checkbox'><input id='tuima' type='button' value='退码'></th></thead>");
    htmlData.push("<tbody id='betList'>");
    htmlData.push(betListHtml(betList));
    htmlData.push("</tbody>");
    htmlData.push("</table>");
    htmlData.push("</div></div>");
    game_loading_wrap(false);
    $("#gameBox").html(htmlData.join(""));

    var gameBoxTool = "<div class=\"tool_left\"><div id=\"tool_ys_wrap\" class=\"t_left\">" +
        "<label for=\"tool_hm_input\">号码：</label><input id=\"tool_hm_input\" placeholder='任字符=X' class=\"input\" maxlength='5' type=\"text\">" +
        "&nbsp;&nbsp;&nbsp;&nbsp;<label for=\"tool_ys_input\">下注金额：</label><input id=\"tool_ys_input\" class=\"input onlyNum\" maxlength='5' type=\"text\">" +
        "&nbsp;&nbsp;<input id=\"fastSubmit\" class=\"btn hotBtn disSubmit\" type=\"button\" value=\"提交\">" +
        "&nbsp;&nbsp;<label id='oddsmoney'></label>" +
        "</div></div>";
    $("#gameBoxTool").html(gameBoxTool);

    //快捷下注金额
    // $("#tool_ys_input").focus(function () {
    //     $(this).val("");
    // });
    $("#tool_ys_input").keyup(function () {
        // $(this).val($(this).val().replace(/[^0-9]/g, ''));
        G.clearNoNum($(this));
    });

    $("#tool_hm_input").keyup(function () {
        $(this).val($(this).val().replace(/[^0-9]/g, 'X'));
        if ($(this).val().length == 5){

            var num = $(this).val();

            if (num.replace(/\D/g, '').length > 0  && num.replace(/\D/g, '').length < 5){
                $("#tool_ys_input").focus();
                G.ajax("kuaida_odds&data=" + num,function (json) {
                    $("#oddsmoney").html("<span>&nbsp;赔率：</span><span style='color: #0b8fff;font-weight: bold'>"+ json.numinfo.split(":")[0] +"</span>" + "&nbsp;&nbsp;&nbsp;&nbsp;<span>可下：</span><span style='color: red;font-weight: bold'>"+ json.numinfo.split(":")[1] +"</span>");
                });
            }else {
                G.myTips({content:"输入号码有误",obj:$(this)});
                $(this).val("");
            }
        }else {
            $("#oddsmoney").html("");
        }
    });

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
            G.mask();
            G.ajax("tuima&data=" + idAry.join(",") + "&gameIndex=" + gameIndex, function (json) {
                G.maskClose();
                if (json.result == 1) {
                    $("#betList").html(betListHtml(json.betList));
                } else {
                    G.alert({ content: json.result, ok: function () { return true; } });
                }
            }, function () { G.maskClose(); });
        }
    });



    $("#fastSubmit").unbind("click").click(function () {

        var data_number = $("#NowJq").html();
        var money = $("#tool_ys_input").val();
        if (money == "" || money <= 0) {
            return;
        }

        var num = $("#tool_hm_input").val();
        var type = getDWTypeByName(num);
        console.log(13);
        if (type == 0) return;
        G.mask();
        //下注的时候判断余额 chenwei
        // G.ajax("DownEntry&gameIndex=3&sortAry=" + type + ":" + money + "&number=" + data_number + "&fast=true&betType=3", function (json) {
        var json = $.parseJSON('{"result":"余额不足"}');
            if (json.result != 1){
                G.maskClose();
                G.alert({ content: json.result, ok: function () { return true; } });
                return;
            }else {
                $("#tool_hm_input").val("");

                $("#betList").html(betListHtml(json.betList));
            }

            G.maskClose();
        // }, function () { G.maskClose(); });
    });
}

function betListHtml(betList) {
    var html = [];
    var len = betList.length;
    for (var i = 0; i < 10; i++){
        html.push("<tr>");

        if (i < len) {
            var state = betList[len - 1 - i][6] == 1 ? "成功" : "退码";
            var check = betList[len - 1 - i][7] == 1 ? "<input data-id='"+betList[len - 1 - i][8]+"' type='checkbox'>" : "--";

            var bg =  betList[len - 1 - i][6] == 1 ? "": "style='background: #FFC184'";
            bg = bg == "" ? (betList[len - 1 - i][9] == 1 ? "style='background: #FFFFB9'" : "") : bg;

            html.push("<td "+bg+" >"+betList[len - 1 - i][0]+"</td>");
            html.push("<td "+bg+">"+betList[len - 1 - i][1]+"</td>");
            html.push("<td "+bg+">"+betList[len - 1 - i][2]+"</td>");
            html.push("<td "+bg+">"+betList[len - 1 - i][3]+"</td>");
            html.push("<td "+bg+">"+betList[len - 1 - i][4]+"</td>");
            html.push("<td "+bg+">"+betList[len - 1 - i][5]+"</td>");
            html.push("<td "+bg+">"+state+"</td>");
            html.push("<td "+bg+">"+check+"</td>");
        }else {
            html.push("<td >--</td>");
            html.push("<td>--</td>");
            html.push("<td>--</td>");
            html.push("<td>--</td>");
            html.push("<td>--</td>");
            html.push("<td>--</td>");
            html.push("<td>--</td>");
            html.push("<td>--</td>");
        }

        html.push("</tr>");
    }

    return html.join("");
}

//快选
function kuaixian(category) {

    $("#mainIframe").find("div[class='gameLeft']").attr("style","width: 700px");
    $("#mainIframe").find("div[class='game_wrap']").attr("style","width: 700px");
    $("#mainIframe").find("div[class='game_item_warp']").attr("style","width: 700px");
    $("#gameBoxTool").attr("style","width: 678px;min-width: 678px");

    game_loading_wrap(false);
    kxcontent(category);
    var htmlData = ["<div  class='t_1' style='max-height: 500px;min-height: 370px'> <span id='kxlog' style='display: none'></span> <div id='kxnumbers' class='history_wrap' style='max-height: 500px;min-height: 370px'>"];

    htmlData.push("</div></div>");
    $("#gameBox").html(htmlData.join(""));

    var gameBoxTool = "<div class='tool_left'>" +
        "<div id='tool_ys_wrap' class='t_left'>" +
        "<label for='tool_ys_input'>下注金额：</label><input id='tool_ys_input' class='input onlyNum' maxlength='5' type='text'>" +
        "&nbsp;&nbsp;<input id='kxSubmit' class='btn hotBtn disSubmit' type='button' value='提交'>" +
        " &nbsp;&nbsp;笔数：<span id='zbishu' style='color: #ff0000'></span>" +
        " &nbsp;&nbsp;金额：<span id='zmoney' style='color: #ff0000'></span>" +
        "</div></div>";
    $("#gameBoxTool").html(gameBoxTool);

    $("#tool_ys_input").keyup(function () {
        //$(this).val($(this).val().replace(/[^0-9]/g, ''));
        G.clearNoNum($(this));
        var bishu = $("#zbishu").html();
        if (bishu.length > 0 && $(this).val().length > 0){
            $("#zmoney").html(parseInt(bishu) * parseFloat($(this).val()));
        }else {
            $("#zmoney").html("");
        }

    });

    $("#kxSubmit").unbind("click").click(function () {
        var money =  $("#tool_ys_input").val();
        if (money.length == 0 || parseFloat(money) <= 0){
            return;
        }

        var numberArr = [];
        $("#kxnumbers").find("td").each(function () {
            var number = $(this).html();
            var type = getDWTypeByName(number);
            if (type > 0)numberArr.push( type + ":" + money);
        });

        if (numberArr.length == 0){
            return;
        }

        if (numberArr.length > 10000){
            G.alert({ content: "单笔最大只能下注10000注", ok: function () { return true; } });
            return;
        }

        var gameIndex = $("#menuText").attr("data-index");
        var opNum = $("#NowJq").html();
        numberArr.sort(function (a, b) {
            var _a = a.split(":")[0], _b = b.split(":")[0];
            return parseInt(_b) - parseInt(_a);
        });
        var printAry = [];

        if ($("#tool_ys_input").val().length == 0) return;

        $("#tool_ys_input").val("");

        dataSubmit({ gameIndex: gameIndex,betType:4, data:$("#kxlog").html(),number: opNum, sortAry: numberArr.join(",") }, false, null, printAry);


    });

    $('#tool_ys_input').bind('keypress',function(event){//监听sim卡回车事件
        if(event.keyCode == "13")
        {
            var money =  $("#tool_ys_input").val();
            if (money.length == 0 || parseFloat(money) <= 0){
                return;
            }

            var numberArr = [];
            $("#kxnumbers").find("td").each(function () {
                var number = $(this).html();
                var type = getDWTypeByName(number);
                if (type > 0)numberArr.push( type + ":" + money);
            });

            if (numberArr.length == 0){
                return;
            }

            if (numberArr.length > 10000){
                G.alert({ content: "单笔最大只能下注10000注", ok: function () { return true; } });
                return;
            }

            var gameIndex = $("#menuText").attr("data-index");
            var opNum = $("#NowJq").html();
            numberArr.sort(function (a, b) {
                var _a = a.split(":")[0], _b = b.split(":")[0];
                return parseInt(_b) - parseInt(_a);
            });
            var printAry = [];

            if ($("#tool_ys_input").val().length == 0) return;

            $("#tool_ys_input").val("");

            dataSubmit({ gameIndex: gameIndex,betType:4, data:$("#kxlog").html(),number: opNum, sortAry: numberArr.join(",") }, false, null, printAry);

        }
    });

}

function kxcontent(dataAction) {

    var active = [ dataAction == 2 ? "active" : "" ,dataAction == 3 ? "active" : "",dataAction == 4 ? "active" : ""];
    var rightBox =
        "<div  class='game_box_title t_1' style='width: 600px;background: white'>" +
        "<ul class='base-clear' id='kuaixianList'>" +
        "<li class='subBtn "+active[0]+"'><a href='javascript:void(0)' data-action='2'>二字定</a></li>" +
        "<li class='subBtn "+active[1]+"'><a href='javascript:void(0)' data-action='3'>三字定</a></li>" +
        "<li class='subBtn "+active[2]+"'><a href='javascript:void(0)' data-action='4'>四字定</a></li>" +
        "</ul>" +
        "<div id='kx_content' class='history_wrap'>" +
        "</div>" +
        "</div>";
    $("#rightBox").html(rightBox);



    var wz = dataAction == 2 ? "二" : dataAction == 3 ? "三" : "四";

    var htmlData = ["<table>"];

    htmlData.push("<tbody>");

    htmlData.push("<tr class='position-filter' >" +
        " <td  colspan='2' > " +
        "<strong class='red2'>定位置</strong> <label><input type='checkbox' positiontype='0' positionfilter='1' >除</label> <label><input type='checkbox' positiontype='0' positionfilter='0'  checked='checked'>取</label> </td> " +
        "<td  colspan='3' >" +
        " <strong class='red2'>配数全转</strong> <label><input positiontype='1' positionfilter='1' type='checkbox' >除</label> <label><input positiontype='1' positionfilter='0' type='checkbox' >取</label> </td> </tr>");

    htmlData.push("<tr><td colspan='5'>");
    if (dataAction == 2)htmlData.push(" <input name='dw5zi' type='checkbox'> 五位二定 ");
    else if (dataAction == 3 )htmlData.push(" <input name='dw5zi' type='checkbox'> 五位三定 ");
    else {
        htmlData.push(" <input name='dw5zi' data-index='5' type='checkbox' checked> 一五四定 ");
        htmlData.push(" <input name='dw5zi' data-index='4' type='checkbox'> 二五四定 ");
        htmlData.push(" <input name='dw5zi' data-index='3' type='checkbox'> 三五四定 ");
        htmlData.push(" <input name='dw5zi' data-index='2' type='checkbox'> 四五四定 ");
        htmlData.push(" <input name='dw5zi' data-index='1' type='checkbox'> 五五四定 ");

    }
    htmlData.push("</tr></td>");
    //定位
    htmlData.push("<tr class='fixed-input'>");
    htmlData.push("<td width='20%'>千</td>");
    htmlData.push("<td width='20%'>百</td>");
    htmlData.push("<td width='20%'>十</td>");
    htmlData.push("<td width='20%'>个</td>");
    htmlData.push("<td width='20%'>尾</td>");
    htmlData.push("</tr>");
    htmlData.push("<tr class='fixed-input'>");
    htmlData.push("<td><input name='wan' autocomplete='off' class='input input2'  type='text'></td>");
    htmlData.push("<td><input name='qian' autocomplete='off' class='input input2' type='text'></td>");
    htmlData.push("<td><input name='bai' autocomplete='off' class='input input2'  type='text'></td>");
    htmlData.push("<td><input name='shi' autocomplete='off' class='input input2'  type='text'></td>");
    htmlData.push("<td><input name='ge' autocomplete='off' class='input input2'  type='text'></td>");
    htmlData.push("</tr>");


    //配
    htmlData.push("<tr class='match-input' style='display: none'>");
    htmlData.push("<td colspan='5'>");
    htmlData.push(" <input name='pei1' autocomplete='off' class='input input2'  type='text'> 配 <input name='pei2' autocomplete='off' class='input input2'  type='text'>");

    if (dataAction >= 3) htmlData.push(" 配 <input name='pei3' autocomplete='off' class='input input2'  type='text'>");
    if (dataAction == 4) htmlData.push(" 配 <input name='pei4' autocomplete='off' class='input input2'  type='text'>");
    htmlData.push("</td>");
    htmlData.push("</tr>");

    htmlData.push("<tr class='hefen-filter'> <td colspan='5'> <strong class='red2'>合</strong>&nbsp;&nbsp; <strong class='red2'>分</strong> <label><input type='checkbox' hefentype='1'>除</label> <label><input type='checkbox' hefentype='0'  checked='checked'>取</label> </td> </tr>");
    htmlData.push("<tr>");
    htmlData.push("<td class='hefen-filter-item'> 1. <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <br> <input type='text' class='input input2'  maxlength='10'> </td>");
    htmlData.push("<td class='hefen-filter-item'> 2. <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <br> <input type='text' class='input input2'  maxlength='10'> </td>");
    htmlData.push("<td class='hefen-filter-item'> 3. <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <br> <input type='text' class='input input2'  maxlength='10'> </td>");
    htmlData.push("<td class='hefen-filter-item'> 4. <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <br> <input type='text' class='input input2'  maxlength='10'> </td>");
    htmlData.push("<td class='hefen-filter-item'> 5. <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <input type='checkbox'> <br> <input type='text' class='input input2'  maxlength='10'> </td>");
    htmlData.push("</tr>");



    var colspan = 5;
    if (dataAction == 4) colspan = 2;
    //不定位合分
    htmlData.push("<tr>");
    htmlData.push("<td class='budinghe-filter' style='text-align: left' colspan='"+colspan+"' ><strong class='red2'>不定位合分</strong> <label><input type='checkbox' budinghetype='2' >两数合</label> ");
    if (dataAction == 3 || dataAction == 4){
        htmlData.push("<label><input type='checkbox' budinghetype='3'  >三数合</label>");
    }
    htmlData.push("&nbsp;&nbsp; <input type='text' class='input input2' maxlength='10'>");
    if (dataAction == 4){
        htmlData.push("<td class='zhi-filter-range' colspan='3'>");
        htmlData.push("<strong class='red2'>值 范 围</strong> 从 ");
        htmlData.push("<input type='text' class='input input2' name='zhifanwei1'  maxlength='10'> 值 至 ");
        htmlData.push("<input type='text' class='input input2' name='zhifanwei2'  maxlength='10'>");

        htmlData.push("</td>");
    }

    htmlData.push("</tr>");

    //全转 上奖 排除 乘号位置
    htmlData.push("<tr>");
    htmlData.push("<td colspan='5' style='text-align: left'>");
    htmlData.push("<strong class='red2'>全转</strong> <input type='text' class='input input2' name='quanzhuan' maxlength=\"10\">");
    htmlData.push("&nbsp;<strong class='red2'>上奖</strong> <input type='text' class='input input2' name='shangjiang' maxlength=\"10\">");
    htmlData.push("&nbsp;<strong class='red2'>排除</strong> <input type='text' class='input input2' name='paichu' maxlength=\"10\">");
    if (dataAction != 4)htmlData.push("&nbsp;<strong class='red2'>乘号位置</strong><input type='checkbox' class='symbol-filter-item' name='0'>&nbsp;<input type='checkbox' class='symbol-filter-item' name='1'>&nbsp;<input type='checkbox' class='symbol-filter-item' name='2'>&nbsp;<input type='checkbox' class='symbol-filter-item' name='3'>&nbsp;<input type='checkbox' class='symbol-filter-item' name='4'>");
    htmlData.push("</td>");
    htmlData.push("</tr>");


    //含 复式
    htmlData.push("<tr>");
    htmlData.push("<td colspan='5' class='contain-filter' style='text-align: left'>");
    htmlData.push("<label><input type='checkbox' containfilter='1' >&nbsp;除</label>");
    htmlData.push("&nbsp;<label><input type='checkbox' containfilter='0' >&nbsp;取</label>");
    htmlData.push(" "+wz+"字定含 <input type='text' class='input input2' name='han' maxlength='10'>");
    htmlData.push(" "+wz+"字定复式 <input type='text' class='input input2' name='fushi' maxlength='10'>");
    htmlData.push("</td>");
    htmlData.push("</tr>");

    //双重
    htmlData.push("<tr>");
    htmlData.push("<td colspan='5' style='text-align: left'>");
    htmlData.push("<label><input type='checkbox' class='repeat-two-words-filter' repeatwordsfilter='1' >&nbsp;除</label>");
    htmlData.push("&nbsp;<label><input type='checkbox' class='repeat-two-words-filter' repeatwordsfilter='0'>&nbsp;取</label>");
    htmlData.push("(<strong class='red2'>双重</strong>)");

    if (dataAction == 4){
        htmlData.push("&nbsp;&nbsp;<label><input type='checkbox' class='repeat-double-words-filter' repeatwordsfilter='1' >&nbsp;除</label>");
        htmlData.push("&nbsp;<label><input type='checkbox' class='repeat-double-words-filter' repeatwordsfilter='0' >&nbsp;取</label>");
        htmlData.push("(<strong class='red2'>双双重</strong>)");
    }

    if (dataAction >= 3){
        htmlData.push("&nbsp;&nbsp;<label><input type='checkbox' class='repeat-three-words-filter' repeatwordsfilter='1'>&nbsp;除</label>");
        htmlData.push("&nbsp;<label><input type='checkbox' class='repeat-three-words-filter' repeatwordsfilter='0'>&nbsp;取</label>");
        htmlData.push("(<strong class='red2'>三重</strong>)");
    }

    if (dataAction == 4){
        htmlData.push("&nbsp;&nbsp;<label><input type='checkbox' class='repeat-four-words-filter' repeatwordsfilter='1'>&nbsp;除</label>");
        htmlData.push("&nbsp;<label><input type='checkbox' class='repeat-four-words-filter' repeatwordsfilter='0'>&nbsp;取</label>");
        htmlData.push("(<strong class='red2'>四重</strong>)");
    }

    htmlData.push("</td>");
    htmlData.push("</tr>");

    //兄弟
    htmlData.push("<tr>");
    htmlData.push("<td colspan='5' style='text-align: left'>");
    htmlData.push("<label><input class='two-brother-filter' brotherfilter='1' type='checkbox' >&nbsp;除</label>");
    htmlData.push("&nbsp;<label><input class='two-brother-filter' brotherfilter='0' type='checkbox' >&nbsp;取</label>");
    htmlData.push("(<strong class='red2'>二兄弟</strong>)");

    if (dataAction >= 3 ){
        htmlData.push("&nbsp;&nbsp;<label><input class='three-brother-filter' brotherfilter='1' type='checkbox' >&nbsp;除</label>");
        htmlData.push("&nbsp;<label><input class='three-brother-filter' brotherfilter='0' type='checkbox' >&nbsp;取</label>");
        htmlData.push("(<strong class='red2'>三兄弟</strong>)");
    }

    if (dataAction == 4){
        htmlData.push("&nbsp;&nbsp;<label><input class='four-brother-filter' brotherfilter='1' type='checkbox' >&nbsp;除</label>");
        htmlData.push("&nbsp;<label><input class='four-brother-filter' brotherfilter='0' type='checkbox' >&nbsp;取</label>");
        htmlData.push("(<strong class='red2'>四兄弟</strong>)");
    }

    htmlData.push("</td>");
    htmlData.push("</tr>");

    //对数
    htmlData.push("<tr>");
    htmlData.push("<td colspan='5' style='text-align: left'>");
    htmlData.push("<label><input class='logarithm-number-filter' logarithmnumberfilter='1' type='checkbox' >&nbsp;除</label>");
    htmlData.push("&nbsp;<label><input class='logarithm-number-filter' logarithmnumberfilter='0' type='checkbox' >&nbsp;取</label>");
    htmlData.push("(<strong class='red2'>对数</strong>)");
    htmlData.push("&nbsp;<input type='text' class='input input2' name='duishu1'  maxlength='2'>");
    htmlData.push("&nbsp;<input type='text' class='input input2' name='duishu2'  maxlength='2'>");
    htmlData.push("&nbsp;<input type='text' class='input input2' name='duishu3'  maxlength='2'>");
    htmlData.push("</td>");
    htmlData.push("</tr>");

    //单双
    htmlData.push("<tr>");
    htmlData.push("<td colspan='5' style='text-align: left'>");
    htmlData.push("<label><input type='checkbox' class='odd-number-filter' oddnumberfilter='1'>&nbsp;除</label>");
    htmlData.push("&nbsp;<label><input type='checkbox' class='odd-number-filter' oddnumberfilter='0'>&nbsp;取</label>");
    htmlData.push("(<strong class='red2'>单</strong>)");
    htmlData.push("&nbsp;<input type='checkbox' class='odd-number-item'>&nbsp;<input type='checkbox' class='odd-number-item'>&nbsp;<input type='checkbox' class='odd-number-item'>&nbsp;<input type='checkbox' class='odd-number-item'>&nbsp;<input type='checkbox' class='odd-number-item'>");

    htmlData.push(" &nbsp;&nbsp;&nbsp;&nbsp;<label><input class='even-number-filter' evennumberfilter='1' type='checkbox' >&nbsp;除</label>");
    htmlData.push("&nbsp;<label><input type='checkbox' class='even-number-filter' evennumberfilter='0'>&nbsp;取</label>");
    htmlData.push("(<strong class='red2'>双</strong>)");
    htmlData.push("&nbsp;<input type='checkbox' class='even-number-item'>&nbsp;<input type='checkbox' class='even-number-item'>&nbsp;<input type='checkbox' class='even-number-item'>&nbsp;<input type='checkbox' class='even-number-item'>&nbsp;<input type='checkbox' class='even-number-item'>");

    htmlData.push("</td>");
    htmlData.push("</tr>");

    htmlData.push("<tr><td colspan='5'>");
    htmlData.push("<input name='create-number' class='btn hotBtn disSubmit' type='button' value='生成'>")
    htmlData.push("&nbsp;&nbsp;<input name='reset-number' class='btn grayBtn' type='button' value='重置'>");
    // htmlData.push("&nbsp;&nbsp;<span id='kxlog' category='"+dataAction+"' style='color: #004eff'>快选日志</span>");
    htmlData.push("</td></tr>");

    htmlData.push("</tbody>");

    htmlData.push("</table>");



    $("#kx_content").html(htmlData.join(""));


    kuaiXuanClick();

}

function kuaiXuanClick() {

    $("#kx_content input[type='text']").keyup(function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    $("#kx_content tr.position-filter input").unbind("change").change(function () {
        var positiontype = $(this).attr("positiontype");
        var positionfilter = $(this).attr("positionfilter");
        $("#kx_content tr.position-filter input").attr("checked",false);
        $(this).attr("checked","checked");

        if (positiontype == 0){
            $("#kx_content tr.fixed-input").attr("style","");
            $("#kx_content tr.match-input").attr("style","display: none");
            $("#kx_content tr.match-input input[type='text']").val('');
        }else {
            $("#kx_content tr.fixed-input").attr("style","display: none");
            $("#kx_content tr.match-input").attr("style","");
            $("#kx_content tr.fixed-input input[type='text']").val('');

        }
    });


    $("#kx_content tr.hefen-filter input").unbind("change").change(function () {
        $("#kx_content tr.hefen-filter input").attr("checked",false);
        $(this).attr("checked","checked");
    });

    $("#kx_content td.budinghe-filter input[type='checkbox']").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content td.budinghe-filter input[type='checkbox']").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    //contain-filter
    $("#kx_content td.contain-filter input[type='checkbox']").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content td.contain-filter input[type='checkbox']").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content  input.repeat-two-words-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.repeat-two-words-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input.repeat-three-words-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.repeat-three-words-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input.repeat-four-words-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.repeat-four-words-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input.repeat-double-words-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.repeat-double-words-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });


    $("#kx_content input.two-brother-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.two-brother-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input.three-brother-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.three-brother-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input.four-brother-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.four-brother-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input.logarithm-number-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.logarithm-number-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input.odd-number-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.odd-number-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input.even-number-filter").unbind("change").change(function () {

        if ($(this).attr("checked") == "checked"){
            $("#kx_content input.even-number-filter").attr("checked",false);
            $(this).attr("checked","checked");
        }
    });


    $("#kuaixianList a[data-action]").unbind("click").click(function () {

        var dataAction = $(this).attr("data-action");

        $("#kuaixianList li").removeClass("active");
        $(this).parent("li").addClass("active");

        kxcontent(dataAction);

    });
    $("#kx_content input[name='reset-number']").unbind("click").click(function () {

        var category = $("#kuaixianList li.active a").attr("data-action");
        kxcontent(category);
    });

    $("#kx_content input[name='dw5zi']").unbind("click").click(function () {

        if ($("#kuaixianList li.active a").attr("data-action") == 4){
            var checks = document.getElementsByName("dw5zi");

            for( var i=0;i<checks.length;i++){
                checks[i].checked=false;
            }
            $(this).attr("checked","checked");
        }
    });

    $("#kx_content input[name='create-number']").unbind("click").click(function () {
        var positiontype = $("#kx_content tr.position-filter input:checked").attr("positiontype");
        var positionfilter = $("#kx_content tr.position-filter input:checked").attr("positionfilter");
        var category = $("#kuaixianList li.active a").attr("data-action");

        //五位
        var dw5zi = 0;
        if (category == 4){
            var obj = $("#kx_content input[name='dw5zi']:checked");
            if (obj) dw5zi = obj.attr("data-index");

        } else dw5zi =  $("#kx_content input[name='dw5zi']").attr("checked") == "checked" ? 1 : 0;

        //日志
        var kxlog = [];
        //生成号码数字
        var createNumberArr = [];
        //是否有输入条件
        var inputCondition = false;
        //全部号码
        var allNumberArr = [];
        //定位置
        if (positiontype == 0){

            var wan = $("#kx_content tr.fixed-input input[name='wan']").val();
            var qian = $("#kx_content tr.fixed-input input[name='qian']").val();
            var bai = $("#kx_content tr.fixed-input input[name='bai']").val();
            var shi = $("#kx_content tr.fixed-input input[name='shi']").val();
            var ge = $("#kx_content tr.fixed-input input[name='ge']").val();

            var posNumArr = [wan,qian,bai,shi,ge];
            //填写号码的位置
            var numPos = [];
            wan.length > 0 ? numPos.push(0) : "";
            qian.length > 0 ? numPos.push(1) : "";
            bai.length > 0 ? numPos.push(2) : "";
            shi.length > 0 ? numPos.push(3) : "";
            ge.length > 0 ? numPos.push(4) : "";

            if (numPos.length > 0) {
                inputCondition = true;
                kxlog.push("1|" + positionfilter + "|" + posNumArr.join(":"));
            }


            if ( category == numPos.length){
                createNumberArr = dwcreatenumber(category,posNumArr,numPos);

                //除
                if (positionfilter == 1){
                    var tmpPosNumArr = ["","","","",""];
                    for (var n = 0; n < numPos.length; n++){
                        tmpPosNumArr[numPos[n]] = "0123456789";
                    }
                    allNumberArr = dwcreatenumber(category,tmpPosNumArr,numPos);
                }
            }else if (numPos.length > 0 && numPos.length < category){
                var numPosArr;
                if (category == 2){
                    if (dw5zi == 0) numPosArr = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
                    else numPosArr = [[0,4],[1,4],[2,4],[3,4]];
                }else if (category == 3){
                    if (dw5zi == 0) numPosArr = [[0,1,2],[0,1,3],[0,2,3],[1,2,3]];
                    else numPosArr = [[0,1,4],[0,2,4],[0,3,4],[1,2,4],[1,3,4],[2,3,4]];
                }else if (category == 4){

                    numPosArr = [[0, 1, 2, 3], [0, 1, 2, 4], [0, 1, 3, 4], [0, 2, 3, 4], [1, 2, 3, 4]];
                    var index = [4,3, 2, 1, 0];
                    numPosArr = [numPosArr[index[dw5zi-1]]];
                }

                for (var i = 0; i < numPosArr.length; i++){
                    tmpPosNumArr = posNumArr;
                    var posArr = numPosArr[i];

                    var c = false;
                    for (var n = 0; n < numPos.length;n++){
                        if (posArr.indexOf(numPos[n]) == -1) {
                            c = true;
                            break;
                        }
                    }
                    if (c) continue;

                    var tmpPosNumArr2 = ["","","","",""];
                    for (var n = 0; n < posArr.length;n++){
                        if (tmpPosNumArr[posArr[n]].length == 0) tmpPosNumArr[posArr[n]] = "0123456789";

                        if (positionfilter == 1){
                            tmpPosNumArr2[posArr[n]] = "0123456789";
                        }
                    }

                    createNumberArr = createNumberArr.concat(dwcreatenumber(category, tmpPosNumArr, posArr));
                    if (positionfilter == 1)allNumberArr = allNumberArr.concat(dwcreatenumber(category,tmpPosNumArr2,posArr));
                }
            }

        }else { //配数
            var peiNumArr = [];
            var peiNumArr2 = [];
            for (var i = 1; i <= category;i++){
                var psn = $("#kx_content tr.match-input input[name='pei"+i+"']").val();
                if (psn.length > 0) {
                    inputCondition = true;
                    peiNumArr2.push(psn);
                }
                peiNumArr.push(psn.length == 0 ? "0123456789" : psn);
            }

            if (inputCondition) {
                if (positionfilter == 1)allNumberArr = getNumbersByCategory(category,dw5zi);
                createNumberArr = peishuquanzhuan(category,peiNumArr,dw5zi,false);

                kxlog.push("2|" + positionfilter + "|" + peiNumArr2.join(":"));

            }
        }

        if (positionfilter == 1){
            var newNumberArr = [];
            for (var n = 0; n < allNumberArr.length; n++){
                if (createNumberArr.indexOf(allNumberArr[n]) == -1) newNumberArr.push(allNumberArr[n]);
            }
            createNumberArr = newNumberArr;
        }

        //全转
        var quanzhaun = $("#kx_content input[name='quanzhuan']").val();
        if (quanzhaun.length > 0){
            tmpNumArr = [];
            if ( quanzhaun.length >= category){

                var quanzhaunArr = [];
                for (var i = 0; i < category; i++){
                    quanzhaunArr.push(quanzhaun);
                }
                tmpNumArr = peishuquanzhuan(category,quanzhaunArr,dw5zi,true);

            }
            if (createNumberArr.length == 0 && inputCondition){
                createNumberArr = [];
            }else if (createNumberArr.length == 0) createNumberArr = tmpNumArr;
            else {
                var tmpNumArr2 = [];
                for (var i = 0; i < tmpNumArr.length; i++){
                    if (createNumberArr.indexOf(tmpNumArr[i]) != -1){
                        tmpNumArr2.push(tmpNumArr[i]);
                    }
                }
                createNumberArr = tmpNumArr2;
            }
            inputCondition = true;
            kxlog.push("3|" + quanzhaun);

        }

        //上将
        var shangjiang = $("#kx_content input[name='shangjiang']").val();
        if (shangjiang.length > 0){
            allNumberArr = getNumbersByCategory(category,dw5zi);
            var tmpNumArr = [];
            for (var n = 0; n < allNumberArr.length; n++){
                var number = allNumberArr[n];
                var pos = [];
                for (var n2 = 0;n2 < number.length; n2++){
                    for (var n3 = 0; n3 < shangjiang.length; n3++){
                        if (number[n2] == shangjiang[n3] && pos.indexOf(n3) == -1){
                            pos.push(n3);
                            break;
                        }
                    }

                }
                pos = pos.uniquelize();

                if (pos.length == shangjiang.length || pos.length == category) tmpNumArr.push(number);
            }

            if (!inputCondition && quanzhaun.length == 0){
                createNumberArr = tmpNumArr;
            }else if (createNumberArr.length > 0){
                if (tmpNumArr.length == 0) createNumberArr = [];
                else createNumberArr = Array.intersect(createNumberArr,tmpNumArr);
            }

            inputCondition = true;
            kxlog.push("4|" + shangjiang);

        }


        //值范围
        if (category == 4){
            var zhifanwei1 = $("#kx_content td.zhi-filter-range input[name='zhifanwei1']").val();
            var zhifanwei2 = $("#kx_content td.zhi-filter-range input[name='zhifanwei2']").val();
            if (zhifanwei1.length > 0 && zhifanwei2.length > 0){
                tmpNumArr = [];


                if (!inputCondition && quanzhaun.length == 0 && shangjiang.length == 0){
                    allNumberArr = getNumbersByCategory(category,dw5zi);
                    for (var i = 0; i< allNumberArr.length; i++){
                        var number = allNumberArr[i];
                        number = number.replace(/X/g,'');
                        var he = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]) + parseInt(number[3]);
                        if ( he >= parseInt(zhifanwei1) && he <= parseInt(zhifanwei2) ) tmpNumArr.push(allNumberArr[i]);
                    }
                    createNumberArr = tmpNumArr;
                }else if (createNumberArr.length > 0){
                    for (var i = 0; i< createNumberArr.length; i++){
                        var number = createNumberArr[i];
                        number = number.replace(/X/g,'');
                        var he = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]) + parseInt(number[3]);
                        if ( he >= parseInt(zhifanwei1) && he <= parseInt(zhifanwei2) ) tmpNumArr.push(createNumberArr[i]);
                    }
                    createNumberArr = tmpNumArr;
                }

                inputCondition = true;
                kxlog.push("5|" + zhifanwei1 + "~" + zhifanwei2);

            }
        }


        //合分
        var hefentype = $("#kx_content tr.hefen-filter input:checked").attr("hefentype");

        var hefenInfo = [];
        $("#kx_content td.hefen-filter-item").each(function () {
            var hf = $(this).find("input[type='text']").val();
            if (hf == "") return true;
            var i = 0;
            var pos = [];
            $(this).find("input[type='checkbox']").each(function () {
                if ( $(this).attr("checked")){
                    pos.push(i);
                }
                i++;
            });

            if (pos.length > 0){
                hefenInfo.push(pos.join(":") + "-" + hf);
            }
        });
        var tmpNumArr = [];
        if (hefenInfo.length > 0){

            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            for (var i = 0; i < createNumberArr.length; i++){
                var count = 0;
                for (var n = 0; n < hefenInfo.length; n++){

                    var hf =  hefenInfo[n].split("-")[1];
                    var hfpos = hefenInfo[n].split("-")[0].split(":");
                    var hf2 = 0;
                    for (var n2 = 0; n2 < hfpos.length; n2++){
                        if (createNumberArr[i][hfpos[n2]] == "X"){
                            hf2 = -1;
                            break;
                        }
                        hf2 += parseInt(createNumberArr[i][hfpos[n2]]);
                    }
                    if (hf2 < 0) continue;

                    for (var n3 = 0; n3 < hf.length; n3++){
                        if (  hf2 % 10 == hf[n3]) {
                            count++;
                            break;
                        }
                    }
                }
                if (count == hefenInfo.length && hefentype == 0|| count != hefenInfo.length  && hefentype == 1) tmpNumArr.push(createNumberArr[i]);

            }
            createNumberArr = tmpNumArr;
            inputCondition = true;
            kxlog.push("6|" + hefentype + "|" + hefenInfo.join(";"));

        }

        //不定位合分
        var budinghetype = $("#kx_content td.budinghe-filter input[type=checkbox]:checked").attr("budinghetype");
        var budinghe = $("#kx_content td.budinghe-filter input[type='text']").val();

        if ((budinghetype == 2 || budinghetype == 3 ) && budinghe.length > 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);

            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length; i++){
                var number = createNumberArr[i];
                number = number.replace("/X/g","");
                var ext = false;
                for (var n = 0; n < number.length; n++){
                    for (var n2 = n + 1; n2 < number.length; n2++){
                        if (budinghetype == 2 ){
                            var value = (parseInt(number[n]) + parseInt(number[n2])) % 10;
                            if (budinghe.indexOf(value) != -1){tmpNumArr.push(createNumberArr[i]);ext = true;break;}
                        }else {
                            for (var n3 = n2 + 1; n3 < number.length; n3++){
                                var value = (parseInt(number[n]) + parseInt(number[n2]) + parseInt(number[n3])) % 10;
                                if (budinghe.indexOf(value) != -1){tmpNumArr.push(createNumberArr[i]);ext = true; break;}

                            }
                        }
                        if (ext) break;

                    }
                    if (ext) break;
                }
            }

            createNumberArr = tmpNumArr;
            inputCondition = true;
            kxlog.push("7|" + budinghetype + "|" + budinghe);

        }

        //排除
        var paichu = $("#kx_content input[name='paichu']").val();
        if (paichu.length > 0){

            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++) {
                var number = createNumberArr[i];

                var b = false;
                for (var n = 0; n < paichu.length; n++) {
                    if (number.indexOf(paichu[n]) != -1) {
                        b = true;
                        break
                    }
                }
                if (!b) tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            inputCondition = true;
            kxlog.push("8|" + paichu);

        }

        //乘号位置
        var chhaoArr = [];
        $("#kx_content input.symbol-filter-item:checked").each(function () {
            chhaoArr.push($(this).attr("name"));
        });
        if (chhaoArr.length > 0 && category != 4){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++) {
                var number = createNumberArr[i];
                b = true;
                for (var n = 0; n < chhaoArr.length; n++) {
                    if (number[chhaoArr[n]] != "X") {
                        b = false;
                        break
                    }
                }
                if (b) tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            inputCondition = true;
            kxlog.push("9|" + chhaoArr.join(":"));

        }
        //含数复数
        var containfilter = $("#kx_content td.contain-filter input[type='checkbox']:checked").attr("containfilter");
        var han = $("#kx_content td.contain-filter input[name='han']").val();
        var fushi = $("#kx_content td.contain-filter input[name='fushi']").val();
        if (containfilter >= 0 && han.length > 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++) {
                var number = createNumberArr[i];
                b = false;
                for (var n = 0; n < han.length; n++) {
                    if (number.indexOf(han[n]) != -1) {
                        b = true;
                        break
                    }
                }
                if (containfilter == 0 && b) tmpNumArr.push(number);
                else if (containfilter == 1 && !b) tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            inputCondition = true;
            kxlog.push("10|" + containfilter + "|" + han);

        }

        if (containfilter >= 0 && fushi.length > 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++) {
                var number = createNumberArr[i];
                b = true;
                for (var n = 0; n < number.length; n++) {
                    if (number[n] != 'X' && fushi.indexOf(number[n]) == -1) {
                        b = false;
                        break
                    }
                }
                if (containfilter == 0 && b) tmpNumArr.push(number);
                else if (containfilter == 1 && !b) tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            inputCondition = true;
            kxlog.push("11|" + containfilter + "|" + fushi);

        }

        //重
        var chongname = ["two","three","four","double"];
        var len = category < 4 ? category -1 : category;
        var chongArr = [];
        for (var n = 0; n < len; n++){
            var repeatwordsfilter = $("#kx_content  input[class='repeat-"+ chongname[n] +"-words-filter']:checked").attr("repeatwordsfilter");
            if (repeatwordsfilter >= 0){
                chongArr.push(n + ":" + repeatwordsfilter);
            }
        }
        if (chongArr.length > 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            inputCondition =  true;
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++) {
                var number = createNumberArr[i];
                var b = true;

                for (var n = 0; n < chongArr.length; n++){
                    var chcondition = chongArr[n];

                    var index = parseInt(chcondition.split(":")[0]);
                    var qu = parseInt(chcondition.split(":")[1]);
                    var count = chong(number);

                    //双重
                    if (index == 0 && qu == 0 && count < 2) b = false;
                    if (index == 0 && qu == 1 && count >= 2) b = false;
                    if (index == 0 && qu >= 0 && !b) break;

                    //三重
                    if (category >= 3) {

                        if (index == 1 && qu == 0 && !(count >= 3 && count <= 4)) b = false;
                        if (index == 1 && qu == 1 && (count >= 3 && count <= 4)) b = false;
                        if (index == 1 && qu >= 0 && !b) break;

                    }

                    if (category == 4) {

                        //双双重
                        if (index == 3 && qu == 0 && !(count >= 4 && count <= 5)) b = false;
                        if (index == 3 && qu == 1 && (count >= 4 && count <= 5)) b = false;
                        if (index == 3 && qu >= 0 && !b) break;

                        //四重
                        if (index == 2 && qu == 0 && !(count == 4)) b = false;
                        if (index == 2 && qu == 1 && (count == 4)) b = false;
                        if (index == 2 && qu >= 0 && !b) break;
                    }
                }

                if (b)tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            kxlog.push("12|" + chongArr.join("|"));

        }

        //对数
        var logarithmnumberfilter = $("#kx_content input[class='logarithm-number-filter']:checked").attr("logarithmnumberfilter");
        var duishuiArr = [];
        for (var n = 1; n <= 3;n++){
            var ds = $("#kx_content input[name='duishu"+n+"'] ").val();
            if (ds.length == 2 && (ds[0] - ds[1] == 5 || (ds[0] - ds[1] == -5))){
                duishuiArr.push(ds);
            }else if (ds.length > 0 ){
                G.myTips({ content: "请输入差值为5的数", obj: $("#kx_content input[name='duishu"+n+"'] "), myclick: true });
                return;
            }
        }
        if (logarithmnumberfilter >= 0 && duishuiArr.length > 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            inputCondition = true;
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++){
                number = createNumberArr[i];
                b = false;
                for (var n = 0; n < duishuiArr.length; n++){
                    if (number.indexOf(duishuiArr[n][0]) != -1 && number.indexOf(duishuiArr[n][1]) != -1){
                        b = true;
                        break;
                    }
                }

                if (logarithmnumberfilter == 1) b = !b;

                if (b)tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            kxlog.push("13|" + logarithmnumberfilter +"|" + duishuiArr.join(":"));

        } else if (logarithmnumberfilter >= 0 && duishuiArr.length == 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            inputCondition = true;
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++){
                number = createNumberArr[i];
                number = number.replace(/X/g,'');
                b = false;
                for (var n = 0; n < number.length-1; n++){
                    for (var n2 = n +1; n2 < number.length;n2++ )
                        if (number[n] - number[n2] == 5 || number[n] - number[n2] == -5){
                            b = true;
                            break;
                        }
                }


                if (logarithmnumberfilter == 1) b = !b;

                if (b)tmpNumArr.push(createNumberArr[i]);
            }
            createNumberArr = tmpNumArr;
            kxlog.push("13|" + logarithmnumberfilter + "| ");

        }


        var brotherClass = ["two","three","four"];
        var brotherArr = [];
        for (var n = 0; n < category - 1; n++){
            var brotherfilter = $("#kx_content input[class='"+ brotherClass[n] +"-brother-filter']:checked").attr("brotherfilter");
            if (brotherfilter >= 0){
                brotherArr.push(n + ":" + brotherfilter);
            }
        }
        if (brotherArr.length > 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            inputCondition = true;

            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++) {
                var number = createNumberArr[i];
                var b = true;
                for (var k = 0; k < brotherArr.length; k++){

                    var index = brotherArr[k].split(":")[0];
                    var qu = brotherArr[k].split(":")[1];

                    if (index == 0 && qu == 0 && brother(number) < 2 ) b = false;
                    if (index == 0 && qu == 1 && brother(number) >= 2) b = false;

                    if (index == 1 && qu == 0 && brother(number) < 3) b = false;
                    if (index == 1 && qu == 1 && brother(number) >= 3) b = false;

                    if (index == 2 && qu == 0 && brother(number) != 4) b = false;
                    if (index == 2 && qu == 1 && brother(number) == 4) b = false;

                    if (!b) break;
                }
                if (b) tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            kxlog.push("14|" + brotherArr.join("|"));

        }

        var oddnumberfilter =  $("#kx_content input[class='odd-number-filter']:checked").attr("oddnumberfilter");
        var evennumberfilter = $("#kx_content input[class='even-number-filter']:checked").attr("evennumberfilter");
        var oddnumberArr = [];
        var evennumberArr = [];

        var depos = 0;
        $("#kx_content input[class='odd-number-item']").each(function () {
            if ($(this).attr("checked")) oddnumberArr.push(depos);
            depos++;
        });

        if (oddnumberfilter >= 0 && oddnumberArr.length > 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            inputCondition = true;
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++){
                var number = createNumberArr[i];
                var b = true;
                for (var n = 0; n < oddnumberArr.length; n++){
                    if (number[oddnumberArr[n]] == "X" || parseInt(number[oddnumberArr[n]]) % 2 == 0) {
                        b = false;
                        break;
                    }
                }

                if (oddnumberfilter == 1) b = !b;
                if (b) tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            kxlog.push("15|" + oddnumberfilter + "|" + oddnumberArr.join("|"));

        }

        depos = 0;
        $("#kx_content input[class='even-number-item']").each(function () {
            if ($(this).attr("checked")) evennumberArr.push(depos);
            depos++;
        });

        if (evennumberfilter >= 0 && evennumberArr.length > 0){
            if (!inputCondition) createNumberArr = getNumbersByCategory(category,dw5zi);
            inputCondition = true;
            tmpNumArr = [];
            for (var i = 0; i < createNumberArr.length;i++){
                var number = createNumberArr[i];
                var b = true;
                for (var n = 0; n < evennumberArr.length; n++){
                    if (number[evennumberArr[n]] == "X" || parseInt(number[evennumberArr[n]]) % 2 != 0) {
                        b = false;
                        break;
                    }
                }

                if (evennumberfilter == 1) b = !b;
                if (b) tmpNumArr.push(number);
            }
            createNumberArr = tmpNumArr;
            kxlog.push("16|" + evennumberfilter + "|" + evennumberArr.join("|"));

        }

        if (!inputCondition){
            G.alert({ content: "请选择或填写条件生成！。", ok: function () { return true; } });
            return;
        }

        //kxnumbers
        if (createNumberArr.length == 0){
            $("#kxnumbers").html("没有这样的号码");
        }else {
            createNumberArr = createNumberArr.sort();
            var row = parseInt(createNumberArr.length / 10);
            if (createNumberArr.length % 10 > 0) row += 1;
            var htmlData = [];
            htmlData.push("<table >");
            htmlData.push("<tbody >");


            for (var n = 0; n < row; n++){
                htmlData.push("<tr>");
                for (var n2 = 0; n2 < 10;n2++){
                    if (n * 10 + n2 < createNumberArr.length){
                        var num = createNumberArr[n * 10 + n2];
                        htmlData.push("<td >"+ (num[4] == 'X' ? num.substring(0,num.lastIndexOf('X')) : num) +"</td>");
                    }else {
                        htmlData.push("<td >--</td>");
                    }
                }
                htmlData.push("</tr>");
            }

            htmlData.push("</tbody>");
            htmlData.push("</table>");
            $("#kxnumbers").html(htmlData.join(""));
            $("#kxlog").html(category + "," + dw5zi +","+kxlog.join(","));
            $("#zbishu").html(createNumberArr.length);
            if ($("#tool_ys_input").val().length  > 0){
                $("#zmoney").html(parseFloat($("#tool_ys_input").val()) * createNumberArr.length)
            }else {
                $("#zmoney").html("");
            }
        }



    });
}

function initkx(category,data) {
    kuaixian(category);


    var dataArr = data.split(",");
    if (category <= 3 && parseInt(dataArr[1]) == 1){

        $("#kx_content input[name='dw5zi']").attr("checked","checked");
    }else {
        $("#kx_content input[name='dw5zi']").attr("checked",false);

        $("#kx_content input[name='dw5zi'][data-index='"+dataArr[1]+"']").attr("checked","checked");
    }

    for(var i = 2; i < dataArr.length;i++){

        var str = dataArr[i];
        var strArr = str.split("|");
        //定位
        if(parseInt(strArr[0]) == 1){
            if (parseInt(strArr[1]) == 1){
                $("#kx_content tr.position-filter input[positiontype='0'][positionfilter='1']").attr("checked","checked");
                $("#kx_content tr.position-filter input[positiontype='0'][positionfilter='0']").attr("checked","");
            }else {
                $("#kx_content tr.position-filter input[positiontype='0'][positionfilter='0']").attr("checked","checked");
                $("#kx_content tr.position-filter input[positiontype='0'][positionfilter='1']").attr("checked","");
            }

            var posNumArr = strArr[2].split(":")
            $("#kx_content tr.fixed-input input[name='wan']").val(posNumArr[0]);
            $("#kx_content tr.fixed-input input[name='qian']").val(posNumArr[1]);
            $("#kx_content tr.fixed-input input[name='bai']").val(posNumArr[2]);
            $("#kx_content tr.fixed-input input[name='shi']").val(posNumArr[3]);
            $("#kx_content tr.fixed-input input[name='ge']").val(posNumArr[4]);

            $("#kx_content tr.fixed-input").attr("style","");
            $("#kx_content tr.match-input").attr("style","display: none");
            $("#kx_content tr.match-input input[type='text']").val('');


        }//配数
        else if (parseInt(strArr[0]) == 2){
            $("#kx_content tr.position-filter input[positiontype='0']").attr("checked",false);

            if (parseInt(strArr[1]) == 1){
                $("#kx_content tr.position-filter input[positiontype='1'][positionfilter='1']").attr("checked","checked");
                $("#kx_content tr.position-filter input[positiontype='1'][positionfilter='0']").attr("checked",false);
            }else {
                $("#kx_content tr.position-filter input[positiontype='1'][positionfilter='0']").attr("checked","checked");
                $("#kx_content tr.position-filter input[positiontype='1'][positionfilter='1']").attr("checked",false);
            }



            var peiNumArr = strArr[2].split(":");
            for (var n = 1; n <= category;n++){
                $("#kx_content tr.match-input input[name='pei"+n+"']").val(peiNumArr[n-1]);
            }

            $("#kx_content tr.fixed-input").attr("style","display: none");
            $("#kx_content tr.match-input").attr("style","");
            $("#kx_content tr.fixed-input input[type='text']").val('');

        }
        //全转
        else if (parseInt(strArr[0]) == 3){
            $("#kx_content input[name='quanzhuan']").val(strArr[1]);
        }
        //上奖
        else if (parseInt(strArr[0]) == 4){
            $("#kx_content input[name='shangjiang']").val(strArr[1]);
        }
        //值范围
        else if (parseInt(strArr[0]) == 5){
            $("#kx_content td.zhi-filter-range input[name='zhifanwei1']").val(strArr[1].split("~")[0]);
            $("#kx_content td.zhi-filter-range input[name='zhifanwei2']").val(strArr[1].split("~")[1]);
        }
        //合分
        else if (parseInt(strArr[0]) == 6){
            if (parseInt(strArr[1]) == 1){
                $("#kx_content tr.hefen-filter input[hefentype='1']").attr("checked","checked");
                $("#kx_content tr.hefen-filter input[hefentype='0']").attr("checked",false);
            }else {
                $("#kx_content tr.hefen-filter input[hefentype='1']").attr("checked",false);
                $("#kx_content tr.hefen-filter input[hefentype='0']").attr("checked","checked");
            }

            var hefeninfo = strArr[2].split(";");
            var n = 0;
            $("#kx_content td.hefen-filter-item").each(function () {
                if (hefeninfo[n]){
                    var posStr = hefeninfo[n].split("-")[0];
                    var pos = posStr.split(":");
                    $(this).find("input[type='text']").val(hefeninfo[n].split("-")[1]);

                    for (var n2 = 0; n2 < pos.length; n2++){
                        $(this).find("input[type='checkbox']").eq(parseInt(pos[n2])).attr("checked","checked");
                    }
                }

                n++;
            });
        }
        //不定位合分
        else if (parseInt(strArr[0]) == 7){
            $("#kx_content td.budinghe-filter input[budinghetype='"+strArr[1]+"']").attr("checked","checked");
            $("#kx_content td.budinghe-filter input[type='text']").val(strArr[2]);
        }
        //排除
        else if (parseInt(strArr[0]) == 8){
            $("#kx_content input[name='paichu']").val(strArr[1]);
        }
        //乘号位置
        else if (parseInt(strArr[0]) == 9){
            var chhaoArr = strArr[1].split(":");
            for (var n = 0; n < chhaoArr.length; n++){
                $("#kx_content input.symbol-filter-item [name='"+chhaoArr[n]+"']").attr("checked","checked");
            }
        }
        //含数复数
        else if (parseInt(strArr[0]) == 10){
            $("#kx_content td.contain-filter input[containfilter='"+strArr[1]+"']").attr("checked","checked");
            $("#kx_content td.contain-filter input[name='han']").val(strArr[2]);
        }
        else if (parseInt(strArr[0]) == 11){
            $("#kx_content td.contain-filter input[containfilter='"+strArr[1]+"']").attr("checked","checked");
            $("#kx_content td.contain-filter input[name='fushi']").val(strArr[2]);
        }
        //重
        else if (parseInt(strArr[0]) == 12){
            var chongname = ["two","three","four","double"];
            for (var n = 1; n < strArr.length; n++){
                console.log(strArr[n]);
                $("#kx_content input[class='repeat-"+ chongname[parseInt(strArr[n].split(":")[0])] +"-words-filter'][repeatwordsfilter='"+strArr[n].split(":")[1]+"']").attr("checked","checked");

            }
        }
        //对数
        else if (parseInt(strArr[0]) == 13){
            $("#kx_content input[class='logarithm-number-filter'][logarithmnumberfilter='"+strArr[1]+"']").attr("checked","checked");

            var duishuiArr = strArr[2].split(":");
            for (var n = 1; n <= duishuiArr.length;n++) {
                $("#kx_content input[name='duishu" + n + "'] ").val(duishuiArr[n-1]);
            }
        }
        //兄弟
        else if (parseInt(strArr[0]) == 14){
            var brotherClass = ["two","three","four"];
            for (var n = 1; n < strArr.length; n++){
                $("#kx_content input[class='"+ brotherClass[parseInt(strArr[n].split(":")[0])] +"-brother-filter'][brotherfilter='"+strArr[n].split(":")[1]+"']").attr("checked","checked");
            }
        }
        //单双
        else if (parseInt(strArr[0]) == 15){
            $("#kx_content input[class='odd-number-filter'][oddnumberfilter='"+strArr[1]+"']").attr("checked","checked");

            for (var n = 2; n < strArr.length; n++){
                $("#kx_content").find("input[class='odd-number-item']").eq(parseInt(strArr[n])).attr("checked","checked");
            }
        }
        else if (parseInt(strArr[0]) == 16){
            $("#kx_content input[class='even-number-filter'][evennumberfilter='"+strArr[1]+"']").attr("checked","checked");

            for (var n = 2; n < strArr.length; n++){
                $("#kx_content").find("input[class='even-number-item']").eq(parseInt(strArr[n])).attr("checked","checked");
            }
        }

    }

    $("#kx_content input[name='create-number']").click();
}

//快译
function kuaiyi() {
    $("#mainIframe").find("div[class='gameLeft']").attr("style","width: 700px");
    $("#mainIframe").find("div[class='game_wrap']").attr("style","width: 700px");
    $("#mainIframe").find("div[class='game_item_warp']").attr("style","width: 700px");
    $("#gameBoxTool").attr("style","width: 678px;min-width: 678px");

    game_loading_wrap(false);
    kycontent();
    var htmlData = ["<div  class='t_1' style='max-height: 500px;min-height: 370px'> <div id='kxnumbers' class='history_wrap' style='max-height: 500px;min-height: 370px'>"];

    htmlData.push("</div></div>");
    $("#gameBox").html(htmlData.join(""));

    var gameBoxTool = "<div class='tool_left'>" +
        "<div id='tool_ys_wrap' class='t_left'>" +
        "<label for='tool_ys_input'>下注金额：</label><input id='tool_ys_input' class='input onlyNum' maxlength='5' type='text'>" +
        "&nbsp;&nbsp;<input id='kySubmit' class='btn hotBtn disSubmit' type='button' value='提交'>" +
        " &nbsp;&nbsp;笔数：<span id='zbishu' style='color: #ff0000'></span>" +
        " &nbsp;&nbsp;金额：<span id='zmoney' style='color: #ff0000'></span>" +
        "</div></div>";
    $("#gameBoxTool").html(gameBoxTool);

    $("#tool_ys_input").keyup(function () {
        //$(this).val($(this).val().replace(/[^0-9]/g, ''));
        G.clearNoNum($(this));
        var bishu = $("#zbishu").html();
        if (bishu.length > 0 && $(this).val().length > 0){
            $("#zmoney").html(parseInt(bishu) * parseFloat($(this).val()));
        }else {
            $("#zmoney").html("");
        }

    });

    $("#kySubmit").unbind("click").click(function () {
        var money =  $("#tool_ys_input").val();
        if (money.length == 0 && parseFloat(money) <= 0){
            return;
        }

        var numberArr = [];
        $("#kxnumbers").find("td").each(function () {
            var number = $(this).html();
            var type = getDWTypeByName(number);
            if (type > 0)numberArr.push( type + ":" + money);
        });

        if (numberArr.length == 0){
            return;
        }

        if (numberArr.length > 10000){
            G.alert({ content: "单笔最大只能下注10000注", ok: function () { return true; } });
            return;
        }

        var gameIndex = $("#menuText").attr("data-index");
        var opNum = $("#NowJq").html();
        numberArr.sort(function (a, b) {
            var _a = a.split(":")[0], _b = b.split(":")[0];
            return parseInt(_b) - parseInt(_a);
        });
        var printAry = [];

        $("#tool_ys_input").val("");

        dataSubmit({ gameIndex: gameIndex,betType:1, number: opNum, sortAry: numberArr.join(",") }, false, null, printAry);


    });
}

function kycontent() {

    var rightBox =
        "<div  class=' t_1' style='width: 600px;background: white'>" +

        "<div class='history_wrap'>" +
        "<div style='border:1px #ccc solid;padding:5px;margin: 5px'> " +
        "<textarea rows='12' style='box-sizing: border-box;text-align:left;resize:none;width:100%;border:none;' maxlength='2000' name='kuaiyi' id='textarea'></textarea> " +
        "</div>"+
        "<div style='margin: 5px'>" +
        "<div>重要提示:</div>" +
        "<ol > " +
        "<li>1、本公司推出“快译”是为了方便客户进行投注，为了避免给自己带来不必要的损失，敬请各位客户务必检仔细查确认后再下注！<font color=\"Red\">公司一切以下注明细为准</font>，如有不便，希望各位会员谅解！</li> " +
        "<li>2、<a target=\"_blank\" href=\"http://k1.cq718718.xyz/Htmls/kyguize.html\" style=\"text-decoration:underline;\"><font color=\"Red\">快译规则说明</font></a></li> " +
        "<li>3、每条规则中会去掉重复的号码</li> " +
        "</ol>"+
        "</div>"+
        "</div>" +
        "</div>";
    $("#rightBox").html(rightBox);

}

//txt导入
function txtdaoru() {
    $("#mainIframe").find("div[class='gameLeft']").attr("style","width: 900px");
    $("#mainIframe").find("div[class='game_wrap']").attr("style","width: 900px");
    $("#mainIframe").find("div[class='game_item_warp']").attr("style","width: 900px");
    $("#gameBoxTool").attr("style","width: 878px;min-width: 878px");
    $("#rightBox").html("");
    game_loading_wrap(false);
    var htmlData = ["<div  class='t_1' style='max-height: 500px;min-height: 370px'> <div id='txtnumbers' class='history_wrap' style='max-height: 500px;min-height: 370px'>"];
    htmlData.push("<div> <strong>&nbsp;&nbsp;格式A：</strong>号码，号码，号码&nbsp;&nbsp;&nbsp;&nbsp;<strong>格式B：</strong>号码=金额，号码=金额，号码=金额 <span class=\"red\">(逗号也可以用空格代表)</span>&nbsp;&nbsp;&nbsp;&nbsp;</div><br>");
    htmlData.push("<div>&nbsp;&nbsp;说明：由于各会员使用的（txt文件）的格式不一样，如果不符合网站上要求的格式，有可能导入到网站（没有下注之前）的号码内容和自己（txt文件）里号码内容不一致，操作时请认真检查，如果出现内容不一致，请不要下注。 </div>");
    htmlData.push("</div></div>");
    $("#gameBox").html(htmlData.join(""));

    var gameBoxTool = "<div class='tool_left'>" +
        "<div id='tool_ys_wrap' class='t_left'>" +
        "<label for='tool_ys_input'>下注金额：</label><input id='tool_ys_input' class='input onlyNum' maxlength='5' type='text'>" +
        "&nbsp;&nbsp;<input id='text'  type='file'>" +
        "&nbsp;&nbsp;<input id='kySubmit'  class='btn hotBtn disSubmit' type='button' value='提交'>" +
        " &nbsp;&nbsp;笔数：<span id='zbishu' style='color: #ff0000'></span>" +
        " &nbsp;&nbsp;金额：<span id='zmoney' style='color: #ff0000'></span>" +
        "</div></div>";
    $("#gameBoxTool").html(gameBoxTool);

    $("#tool_ys_input").keyup(function () {
        //$(this).val($(this).val().replace(/[^0-9]/g, ''));
        G.clearNoNum($(this));
        var bishu = $("#zbishu").html();
        if (bishu.length > 0 && $(this).val().length > 0){
            $("#zmoney").html(parseInt(bishu) * parseFloat($(this).val()));
        }else {
            $("#zmoney").html("");
        }

    });
    var numberArr =[];
    $("#text").change(function () {
        numberArr = uploadfile()
    });

    $("#kySubmit").unbind("click").click(function () {
        //var numberArr = uploadNumArr;

        if (numberArr.length == 0 || $("#txtnumbers").html() == ""){
            return;
        }

        if ($("#tool_ys_input").attr("disabled") == undefined){
            var money =  $("#tool_ys_input").val();
            if (money.length == 0 && parseFloat(money) < 0.1){
                return;
            }

            var temp = [];
            for (var n = 0; n < numberArr.length; n++){
                temp.push(numberArr[n].split(":")[0] + ":" + money)
            }
            numberArr = temp;
        }

        if (numberArr.length > 10000){
            G.alert({ content: "单笔最大只能下注10000注", ok: function () { return true; } });
            return;
        }

        var gameIndex = $("#menuText").attr("data-index");
        var opNum = $("#NowJq").html();
        numberArr.sort(function (a, b) {
            var _a = a.split(":")[0], _b = b.split(":")[0];
            return parseInt(_b) - parseInt(_a);
        });
        var printAry = [];

        $("#tool_ys_input").val("");

        dataSubmit({ gameIndex: gameIndex,betType:5, number: opNum, sortAry: numberArr.join(",") }, false, null, printAry);


    });
}
function uploadfile(){

    var numberList = [];
    var typeList = [];

    var file = $("#text")[0].files[0];
//       指定上传文件为txt格式
    if(file.name.split(".")[file.name.split(".").length - 1] != "txt"){
        alert("请上传格式为TXT的文件。")
    }else{


        var reader = new FileReader();
        reader.readAsText(file,"UTF-8");
        reader.onload = function(evt){
            var data = evt.target.result;
            data = data.replace(/\n/g,' ');
            data = data.replace(/\r\n/g,' ');
            data = data.replace(/,/g,' ');
            data = data.replace(/，/g,' ');
            data = data.replace(/\s+/g,' ');
            console.log(data);

            var dataAry = data.split(' ');

            var htmldata = [];
            var hasMoney = false;
            htmldata.push("<table><thead>");
            if (data.indexOf("=") != -1){
                for (var i = 0 ; i < 12; i++){
                    if (i % 2 == 0) htmldata.push("<td>号码</td>");
                    else htmldata.push("<td>金额</td>");
                }
                hasMoney = true;
            }else {
                for (var i = 0 ; i < 12; i++){
                    htmldata.push("<td>号码</td>");
                }
            }

            htmldata.push("</thead><tbody>");
            var i = 0,totalmoney = 0;
            for (var n = 0; n < dataAry.length; n++){
                var number = dataAry[n].split("=")[0];
                var money = 0;
                if (dataAry[n].split("=").length >= 2){
                    money = dataAry[n].split("=")[1];
                }
                var type = getDWTypeByName(number);
                if (type == 0 || typeList.indexOf(type) != -1) continue;

                if (i == 0){
                    htmldata.push("<tr>");
                }else if (hasMoney){
                    if (i % 6 == 0){
                        htmldata.push("</tr><tr>");
                    }
                }else {
                    if (i % 12 == 0){
                        htmldata.push("</tr><tr>");
                    }
                }
                htmldata.push("<td>"+number+"</td>");
                if (hasMoney) money = money == 0 ? 1 : money;
                if (hasMoney) htmldata.push("<td>"+ (money == 0 ? "--" : money )+"</td>");
                i++;
                numberList.push(type + ":" + money);
                typeList.push(type);
                totalmoney = floatAdd(totalmoney,parseFloat(money));
            }
            htmldata.push("</tr></tbody></table>");
            $("#txtnumbers").html(htmldata.join(""));
            $("#zbishu").html(i);
            $("#zmoney").html(totalmoney);
            if (totalmoney > 0) $("#tool_ys_input").attr('disabled',true);
            else $("#tool_ys_input").attr('disabled',false);
        }
    }
    return numberList;
}
