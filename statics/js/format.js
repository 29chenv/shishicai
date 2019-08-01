//12生肖排列
function animalsSort(animalsIndex) {
    var index = animalsIndex - 1;
    var num = [];
    num.push("1,13,25,37,49");
    num.push("12,24,36,48");
    num.push("11,23,35,47");
    num.push("10,22,34,46");
    num.push("9,21,33,45");
    num.push("8,20,32,44");
    num.push("7,19,31,43");
    num.push("6,18,30,42");
    num.push("5,17,29,41");
    num.push("4,16,28,40");
    num.push("3,15,27,39");
    num.push("2,14,26,38");
    for (var i = 0; i < 12; i++) {
        __sysinfo.animalsAry[index + 1] = num[i];
        index++;
        index = index > 11 ? 0 : index;
    }
    __sysinfo.animalsAry[13] = "1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45,46"; //红波
    __sysinfo.animalsAry[14] = "1,7,13,19,23,29,35,45"; //红单
    __sysinfo.animalsAry[15] = "2,8,12,18,24,30,34,40,46"; //红双
    __sysinfo.animalsAry[16] = "29,30,34,35,40,45,46"; //红大
    __sysinfo.animalsAry[17] = "1,2,7,8,12,13,18,19,23,24"; //红小
    __sysinfo.animalsAry[18] = "29,35,45"; //大单
    __sysinfo.animalsAry[19] = "30,34,40,46"; //大双
    __sysinfo.animalsAry[20] = "1,7,13,19,23"; //小单
    __sysinfo.animalsAry[21] = "2,8,12,18,24"; //小双
    __sysinfo.animalsAry[22] = "3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48"; //蓝波
    __sysinfo.animalsAry[23] = "3,9,15,25,31,37,41,47"; //蓝单
    __sysinfo.animalsAry[24] = "4,10,14,20,26,36,42,48"; //蓝双
    __sysinfo.animalsAry[25] = "25,26,31,36,37,41,42,47,48"; //蓝大
    __sysinfo.animalsAry[26] = "3,4,9,10,14,15,20"; //蓝小
    __sysinfo.animalsAry[27] = "25,31,37,41,47"; //大单
    __sysinfo.animalsAry[28] = "26,36,42,48"; //大双
    __sysinfo.animalsAry[29] = "3,9,15"; //小单
    __sysinfo.animalsAry[30] = "4,10,14,20"; //小双
    __sysinfo.animalsAry[31] = "5,6,11,16,17,21,22,27,28,32,33,38,39,43,44,49"; //绿波
    __sysinfo.animalsAry[32] = "5,11,17,21,27,33,39,43,49"; //绿单
    __sysinfo.animalsAry[33] = "6,16,22,28,32,38,44"; //绿双
    __sysinfo.animalsAry[34] = "27,28,32,33,38,39,43,44,49"; //绿大
    __sysinfo.animalsAry[35] = "5,6,11,16,17,21,22"; //绿小
    __sysinfo.animalsAry[36] = "27,33,39,43,49"; //大单
    __sysinfo.animalsAry[37] = "28,32,38,44"; //大双
    __sysinfo.animalsAry[38] = "5,11,17,21"; //小单
    __sysinfo.animalsAry[39] = "6,16,22"; //小双
    __sysinfo.animalsAry[40] = "115,124,133"; //红蓝绿波
    __sysinfo.animalsAry[41] = "116,125,134"; //单
    __sysinfo.animalsAry[42] = "117,126,135"; //双
    __sysinfo.animalsAry[43] = "118,127,136"; //大
    __sysinfo.animalsAry[44] = "119,128,137"; //小
    __sysinfo.animalsAry[45] = "120,129,138"; //大单
    __sysinfo.animalsAry[46] = "121,130,139"; //大双
    __sysinfo.animalsAry[47] = "122,131,140"; //小单
    __sysinfo.animalsAry[48] = "123,132,141"; //小双
    __sysinfo.animalsAry[49] = "1,2,3,4,5,6,7,8,9"; //0头
    __sysinfo.animalsAry[50] = "10,11,12,13,14,15,16,17,18,19"; //1头
    __sysinfo.animalsAry[51] = "20,21,22,23,24,25,26,27,28,29"; //2头
    __sysinfo.animalsAry[52] = "30,31,32,33,34,35,36,37,38,39"; //3头
    __sysinfo.animalsAry[53] = "40,41,42,43,44,45,46,47,48,49"; //4头
    __sysinfo.animalsAry[54] = "10,20,30,40"; //0尾
    __sysinfo.animalsAry[55] = "1,11,21,31,41"; //1尾
    __sysinfo.animalsAry[56] = "2,12,22,32,42"; //2尾
    __sysinfo.animalsAry[57] = "3,13,23,33,43"; //3尾
    __sysinfo.animalsAry[58] = "4,14,24,34,44"; //4尾
    __sysinfo.animalsAry[59] = "5,15,25,35,45"; //5尾
    __sysinfo.animalsAry[60] = "6,16,26,36,46"; //6尾
    __sysinfo.animalsAry[61] = "7,17,27,37,47"; //7尾
    __sysinfo.animalsAry[62] = "8,18,28,38,48"; //8尾
    __sysinfo.animalsAry[63] = "9,19,29,39,49"; //9尾
}

function FormatTs(gameIndex, SortID) {
    var str = "";
    switch (gameIndex) {
        case 1: str = FormatTsHK(SortID); break;
        case 2: str = FormatTsKLC(SortID); break;
        case 15:
        case 3: str = FormatTsSSC(SortID); break;
        case 4:
        case 8: str = FormatTsPK(SortID); break;
        case 5: str = FormatTsKS(SortID); break;
        case 6: str = FormatTsKLB(SortID); break;
        case 7: str = FormatTsNC(SortID); break;
        case 10: str = FormatTsGX(SortID); break;
        //case 13: str = FormatTsQXC(SortID); break;
        case 13: str = FormatTsGXKS(SortID); break;
        case 14: str = FormatTsPKJS(SortID); break;
    }
    return str;
}

/// <summary>
/// 格式化彩种
/// </summary>
/// <returns></returns>
function FormatDetailsType(DetailsType) {
    var str = "";
    switch (DetailsType) {
        case 1: str = "香港樂透(HK)"; break;
        case 2: str = "廣東快樂十分"; break;
        case 3: str = "河内5分彩"; break;
        case 15: str = "极速時時彩"; break;
        case 4: str = "北京赛车(PK10)"; break;
        case 14: str = "极速賽車"; break;
        case 5: str = "江蘇骰寶(快3)"; break;
        case 6: str = "北京快樂8"; break;
        case 7: str = "重慶幸運農場"; break;
        case 10: str = "廣西快樂十分"; break;
        case 13: str = "體彩七星彩"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（六合彩）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsHK(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "特碼A"; break;
        case 2: str = "特碼B"; break;
        case 3: str = "特碼單雙"; break;
        case 4: str = "特碼大小"; break;
        case 5: str = "特碼合單雙"; break;
        case 6: str = "特碼合大小"; break;
        case 7: str = "特碼尾大小"; break;
        case 8: str = "特碼大單雙"; break;
        case 9: str = "特碼小單雙"; break;
        case 10: str = "特碼家禽野獸"; break;
        case 11: str = "特碼生肖"; break;
        case 12: str = "特碼2肖"; break;
        case 13: str = "特碼3肖"; break;
        case 14: str = "特碼4肖"; break;
        case 15: str = "特碼5肖"; break;
        case 16: str = "特碼6肖"; break;
        case 17: str = "特碼色波"; break;
        case 18: str = "特碼半波"; break;
        case 19: str = "特碼半半波"; break;
        case 20: str = "特碼頭數"; break;
        case 21: str = "特碼尾數"; break;
        case 22: str = "特碼五行"; break;
        case 23: str = "正碼特1-6"; break;
        case 24: str = "正碼1-6單雙"; break;
        case 25: str = "正碼1-6大小"; break;
        case 26: str = "正碼1-6合單雙"; break;
        case 27: str = "正碼1-6色波"; break;
        case 28: str = "正碼A"; break;
        case 29: str = "正碼B"; break;
        case 30: str = "總和單雙"; break;
        case 31: str = "總和大小"; break;
        case 32: str = "平特一肖"; break;
        case 33: str = "平特尾數"; break;
        case 34: str = "正肖"; break;
        case 35: str = "七色波-色波"; break;
        case 36: str = "七色波-和局"; break;
        case 37: str = "總肖2-7"; break;
        case 38: str = "總肖單雙"; break;
        case 39: str = "二全中"; break;
        case 40: str = "三全中"; break;
        case 41: str = "三中二"; break;
        case 42: str = "二中特"; break;
        case 43: str = "特串"; break;
        case 44: str = "四全中"; break;
        case 45: str = "二連肖"; break;
        case 46: str = "三連肖"; break;
        case 47: str = "四連肖"; break;
        case 48: str = "五連肖"; break;
        case 49: str = "二連尾"; break;
        case 50: str = "三連尾"; break;
        case 51: str = "四連尾"; break;
        case 52: str = "五不中"; break;
        case 53: str = "六不中"; break;
        case 54: str = "七不中"; break;
        case 55: str = "八不中"; break;
        case 56: str = "九不中"; break;
        case 57: str = "十不中"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（廣東快樂十分）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsKLC(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "1-8單碼"; break;
        case 2: str = "1-8兩面"; break;
        case 3: str = "1-8方位"; break;
        case 4: str = "1-8中發白"; break;
        case 5: str = "1-4龍虎"; break;
        case 6: str = "正碼"; break;
        case 7: str = "總和兩面"; break;
        case 8: str = "任選二"; break;
        case 9: str = "選二連直"; break;
        case 10: str = "選二連組"; break;
        case 11: str = "任選三"; break;
        case 12: str = "選三前組"; break;
        case 13: str = "任選四"; break;
        case 14: str = "任選五"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（重慶時時彩）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsSSC(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "1-5單碼"; break;
        case 2: str = "兩面"; break;
        case 3: str = "龍虎"; break;
        case 4: str = "和"; break;
        case 5: str = "豹子"; break;
        case 6: str = "順子"; break;
        case 7: str = "對子"; break;
        case 8: str = "半順"; break;
        case 9: str = "雜六"; break;
        case 10: str = "牛牛1-9"; break;
        case 11: str = "無牛"; break;
        case 12: str = "牛單雙"; break;
        case 13: str = "牛大小"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（北京賽車PK10）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsPK(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "1-10單碼"; break;
        case 2: str = "1-10兩面"; break;
        case 3: str = "1-5龍虎"; break;
        case 4: str = "冠亞和大小"; break;
        case 5: str = "冠亞和單雙"; break;
        case 6: str = "冠亞和"; break;
    }
    return str;
}


/// <summary>
/// 格式化退水盘，索引转换字符串（极速賽車）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsPKJS(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "1-10单码"; break;
        case 2: str = "1-10两面"; break;
        case 3: str = "1-5龙虎"; break;
        case 4: str = "冠亚和大小"; break;
        case 5: str = "冠亚和单双"; break;
        case 6: str = "冠亚和"; break;
    }
    return str;
}


/// <summary>
/// 格式化退水盘，索引转换字符串（江蘇快3）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsKS(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "大小"; break;
        case 2: str = "三軍"; break;
        case 3: str = "圍骰"; break;
        case 4: str = "全骰"; break;
        case 5: str = "點數"; break;
        case 6: str = "長牌"; break;
        case 7: str = "短牌"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（北京快樂8）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsKLB(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "正碼"; break;
        case 2: str = "總和大小"; break;
        case 3: str = "總和單雙"; break;
        case 4: str = "總和和局"; break;
        case 5: str = "總和過關"; break;
        case 6: str = "前後和"; break;
        case 7: str = "單雙和"; break;
        case 8: str = "五行"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（幸運農場）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsNC(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "1-8單碼"; break;
        case 2: str = "1-8兩面"; break;
        case 3: str = "1-8東南西北"; break;
        case 4: str = "1-8中發白"; break;
        case 5: str = "1-4龍虎"; break;
        case 6: str = "正碼"; break;
        case 7: str = "總和兩面"; break;
        case 8: str = "任選二"; break;
        case 9: str = "選二連直"; break;
        case 10: str = "選二連組"; break;
        case 11: str = "任選三"; break;
        case 12: str = "選三前組"; break;
        case 13: str = "任選四"; break;
        case 14: str = "任選五"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（广西快乐十分）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsGX(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "1-5單碼"; break;
        case 2: str = "1-5兩面"; break;
        case 3: str = "1-5福祿壽喜"; break;
        case 4: str = "1-5色波"; break;
        case 5: str = "正碼"; break;
        case 6: str = "總和、龍虎"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（七星彩）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsQXC(sortId) {
    var str = "";
    switch (sortId) {
        case 1: str = "一字"; break;
        case 2: str = "二字"; break;
        case 3: str = "三字"; break;
        case 4: str = "四字"; break;
        case 5: str = "一定位"; break;
        case 6: str = "二定位"; break;
        case 7: str = "三定位"; break;
        case 8: str = "四定位"; break;
        case 9: str = "一定位單雙"; break;
        case 10: str = "一定位大小"; break;
        case 11: str = "二定位單雙"; break;
        case 12: str = "二定位大小"; break;
    }
    return str;
}

/// <summary>
/// 格式化退水盘，索引转换字符串（广西快3）
/// </summary>
/// <param name="sortId"></param>
/// <returns></returns>
function FormatTsGXKS(sortId) {

    var str = "";
    switch (sortId) {
        case 1: str = "大小"; break;
        case 2: str = "三軍"; break;
        case 3: str = "圍骰"; break;
        case 4: str = "全骰"; break;
        case 5: str = "點數"; break;
        case 6: str = "長牌"; break;
        case 7: str = "短牌"; break;
    }
    return str;

}

/*HK匹配*/
function _num1(sortId) {
    var Details1 = "";
    if (sortId >= 50 && sortId <= 65)
        Details1 = "特碼";
    else if (sortId >= 1 && sortId <= 49)
        Details1 = "特碼A";
    else if (sortId >= 66 && sortId <= 114)
        Details1 = "特碼B";
    else if (sortId >= 115 && sortId <= 141)
        Details1 = "特碼色波";
    else if (sortId >= 142 && sortId <= 153)
        Details1 = "特碼生肖";
    else if (sortId == 154)
        Details1 = "6肖";
    else if (sortId == 676)
        Details1 = "5肖";
    else if (sortId == 677)
        Details1 = "4肖";
    else if (sortId == 678)
        Details1 = "3肖";
    else if (sortId == 679)
        Details1 = "2肖";
    else if (sortId >= 155 && sortId <= 159)
        Details1 = "特碼頭數";
    else if (sortId >= 160 && sortId <= 169)
        Details1 = "特碼尾數";
    else if (sortId >= 170 && sortId <= 218)
        Details1 = "正碼A";
    else if (sortId >= 219 && sortId <= 222)
        Details1 = "總和";
    else if (sortId >= 223 && sortId <= 271) {
        Details1 = "正一特";
    }
    else if (sortId >= 281 && sortId <= 329) {
        Details1 = "正二特";
    }
    else if (sortId >= 339 && sortId <= 387) {
        Details1 = "正三特";
    }
    else if (sortId >= 397 && sortId <= 445) {
        Details1 = "正四特";
    }
    else if (sortId >= 455 && sortId <= 503) {
        Details1 = "正五特";
    }
    else if (sortId >= 513 && sortId <= 561) {
        Details1 = "正六特";
    }
    else if (sortId >= 272 && sortId <= 280) {
        Details1 = "正一";
    }
    else if (sortId >= 330 && sortId <= 338) {
        Details1 = "正二";
    }
    else if (sortId >= 388 && sortId <= 396) {
        Details1 = "正三";
    }
    else if (sortId >= 446 && sortId <= 454) {
        Details1 = "正四";
    }
    else if (sortId >= 504 && sortId <= 512) {
        Details1 = "正五";
    }
    else if (sortId >= 562 && sortId <= 570) {
        Details1 = "正六";
    }
    else if (sortId >= 571 && sortId <= 582) {
        Details1 = "平特一肖";
    }
    else if (sortId >= 583 && sortId <= 592) {
        Details1 = "平特尾數";
    }
    else if (sortId >= 593 && sortId <= 604) {
        Details1 = "正肖";
    }
    else if (sortId >= 605 && sortId <= 608) {
        Details1 = "七色波";
    }
    else if (sortId >= 610 && sortId <= 621) {
        Details1 = "二連肖";
    }
    else if (sortId >= 622 && sortId <= 633) {
        Details1 = "三連肖";
    }
    else if (sortId >= 634 && sortId <= 645) {
        Details1 = "四連肖";
    }
    else if (sortId >= 1187 && sortId <= 1198) {
        Details1 = "五連肖";
    }
    else if (sortId >= 646 && sortId <= 655) {
        Details1 = "二連尾";
    }
    else if (sortId >= 656 && sortId <= 665) {
        Details1 = "三連尾";
    }
    else if (sortId >= 666 && sortId <= 675) {
        Details1 = "四連尾";
    }
    else if (sortId >= 1199 && sortId <= 1208) {
        Details1 = "五連尾";
    }
    else if (sortId >= 684 && sortId <= 732)
        Details1 = "五不中";
    else if (sortId >= 1199 && sortId <= 1247)
        Details1 = "六不中";
    else if (sortId >= 1248 && sortId <= 1296)
        Details1 = "七不中";
    else if (sortId >= 1297 && sortId <= 1345)
        Details1 = "八不中";
    else if (sortId >= 1346 && sortId <= 1394)
        Details1 = "九不中";
    else if (sortId >= 1395 && sortId <= 1443)
        Details1 = "十不中";
    else if (sortId >= 733 && sortId <= 740)
        Details1 = "總肖";
    else if (sortId >= 741 && sortId <= 745)
        Details1 = "五行";
    else if (sortId >= 746 && sortId <= 794)
        Details1 = "二全中";
    else if (sortId >= 795 && sortId <= 843)
        Details1 = "三全中";
    else if (sortId >= 844 && sortId <= 941)
        Details1 = "三中二";
    else if (sortId >= 942 && sortId <= 1039)
        Details1 = "二中特";
    else if (sortId >= 1040 && sortId <= 1088)
        Details1 = "特串";
    else if (sortId >= 1089 && sortId <= 1137)
        Details1 = "四全中";
    else if (sortId >= 1138 && sortId <= 1186)
        Details1 = "正碼B";
    return Details1;
}
function _num2(sortId) {
    var str = "-1";
    if (sortId >= 1 && sortId <= 49)//1-49号码(特碼A)
    {
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 66 && sortId <= 114)//1-49号码(特碼B)
    {
        sortId = sortId - 65;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 170 && sortId <= 218)//正碼A
    {
        sortId = sortId - 169;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 223 && sortId <= 271)//正1特
    {
        sortId = sortId - 222;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 281 && sortId <= 329)//正2特
    {
        sortId = sortId - 280;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 339 && sortId <= 387)//正3特
    {
        sortId = sortId - 338;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 397 && sortId <= 445)//正4特
    {
        sortId = sortId - 396;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 455 && sortId <= 503)//正5特
    {
        sortId = sortId - 454;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 513 && sortId <= 561)//正6特
    {
        sortId = sortId - 512;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 684 && sortId <= 732) //5不中
    {
        sortId = sortId - 683;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 1199 && sortId <= 1247) //6不中
    {
        sortId = sortId - 1198;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 1248 && sortId <= 1296) //7不中
    {
        sortId = sortId - 1247;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 1297 && sortId <= 1345) //8不中
    {
        sortId = sortId - 1296;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 1346 && sortId <= 1394) //9不中
    {
        sortId = sortId - 1345;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 1395 && sortId <= 1443) //10不中
    {
        sortId = sortId - 1394;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 1138 && sortId <= 1186)//正碼B
    {
        sortId = sortId - 1137;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 746 && sortId <= 794)//2全中
    {
        sortId = sortId - 745;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 795 && sortId <= 843)//3全中
    {
        sortId = sortId - 794;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 844 && sortId <= 892)//3中2
    {
        sortId = sortId - 843;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 942 && sortId <= 990)//2中特
    {
        sortId = sortId - 941;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 1040 && sortId <= 1088)//特串
    {
        sortId = sortId - 1039;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 1089 && sortId <= 1137)//4全中
    {
        sortId = sortId - 1088;
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else {
        switch (sortId) {
            case 50: str = "單"; break;
            case 51: str = "雙"; break;
            case 52: str = "大"; break;
            case 53: str = "小"; break;
            case 54: str = "合單"; break;
            case 55: str = "合雙"; break;
            case 56: str = "合大"; break;
            case 57: str = "合小"; break;
            case 58: str = "尾大"; break;
            case 59: str = "尾小"; break;
            case 60: str = "大單"; break;
            case 61: str = "大雙"; break;
            case 62: str = "小單"; break;
            case 63: str = "小雙"; break;
            case 64: str = "家禽"; break;
            case 65: str = "野獸"; break;
            case 115: str = "紅波"; break;
            case 116: str = "紅單"; break;
            case 117: str = "紅雙"; break;
            case 118: str = "紅大"; break;
            case 119: str = "紅小"; break;
            case 120: str = "紅大單"; break;
            case 121: str = "紅大雙"; break;
            case 122: str = "紅小單"; break;
            case 123: str = "紅小雙"; break;
            case 124: str = "藍波"; break;
            case 125: str = "藍單"; break;
            case 126: str = "藍雙"; break;
            case 127: str = "藍大"; break;
            case 128: str = "藍小"; break;
            case 129: str = "藍大單"; break;
            case 130: str = "藍大雙"; break;
            case 131: str = "藍小單"; break;
            case 132: str = "藍小雙"; break;
            case 133: str = "綠波"; break;
            case 134: str = "綠單"; break;
            case 135: str = "綠雙"; break;
            case 136: str = "綠大"; break;
            case 137: str = "綠小"; break;
            case 138: str = "綠大單"; break;
            case 139: str = "綠大雙"; break;
            case 140: str = "綠小單"; break;
            case 141: str = "綠小雙"; break;
            case 142: str = "鼠"; break;
            case 143: str = "牛"; break;
            case 144: str = "虎"; break;
            case 145: str = "兔"; break;
            case 146: str = "龍"; break;
            case 147: str = "蛇"; break;
            case 148: str = "馬"; break;
            case 149: str = "羊"; break;
            case 150: str = "猴"; break;
            case 151: str = "雞"; break;
            case 152: str = "狗"; break;
            case 153: str = "猪"; break;
            case 155: str = "0頭"; break;
            case 156: str = "1頭"; break;
            case 157: str = "2頭"; break;
            case 158: str = "3頭"; break;
            case 159: str = "4頭"; break;
            case 160: str = "0尾"; break;
            case 161: str = "1尾"; break;
            case 162: str = "2尾"; break;
            case 163: str = "3尾"; break;
            case 164: str = "4尾"; break;
            case 165: str = "5尾"; break;
            case 166: str = "6尾"; break;
            case 167: str = "7尾"; break;
            case 168: str = "8尾"; break;
            case 169: str = "9尾"; break;
            case 219: str = "單"; break;
            case 220: str = "雙"; break;
            case 221: str = "大"; break;
            case 222: str = "小"; break;
            case 272:
            case 330:
            case 388:
            case 446:
            case 504:
            case 562: str = "單"; break;
            case 273:
            case 331:
            case 389:
            case 447:
            case 505:
            case 563: str = "雙"; break;
            case 274:
            case 332:
            case 390:
            case 448:
            case 506:
            case 564: str = "大"; break;
            case 275:
            case 333:
            case 391:
            case 449:
            case 507:
            case 565: str = "小"; break;
            case 276:
            case 334:
            case 392:
            case 450:
            case 508:
            case 566: str = "合單"; break;
            case 277:
            case 335:
            case 393:
            case 451:
            case 509:
            case 567: str = "合雙"; break;
            case 278:
            case 336:
            case 394:
            case 452:
            case 510:
            case 568: str = "紅波"; break;
            case 279:
            case 337:
            case 395:
            case 453:
            case 511:
            case 569: str = "藍波"; break;
            case 280:
            case 338:
            case 396:
            case 454:
            case 512:
            case 570: str = "綠波"; break;
            case 571: str = "鼠"; break;
            case 572: str = "牛"; break;
            case 573: str = "虎"; break;
            case 574: str = "兔"; break;
            case 575: str = "龍"; break;
            case 576: str = "蛇"; break;
            case 577: str = "馬"; break;
            case 578: str = "羊"; break;
            case 579: str = "猴"; break;
            case 580: str = "雞"; break;
            case 581: str = "狗"; break;
            case 582: str = "猪"; break;
            case 583: str = "0尾"; break;
            case 584: str = "1尾"; break;
            case 585: str = "2尾"; break;
            case 586: str = "3尾"; break;
            case 587: str = "4尾"; break;
            case 588: str = "5尾"; break;
            case 589: str = "6尾"; break;
            case 590: str = "7尾"; break;
            case 591: str = "8尾"; break;
            case 592: str = "9尾"; break;
            case 593: str = "鼠"; break;
            case 594: str = "牛"; break;
            case 595: str = "虎"; break;
            case 596: str = "兔"; break;
            case 597: str = "龍"; break;
            case 598: str = "蛇"; break;
            case 599: str = "馬"; break;
            case 600: str = "羊"; break;
            case 601: str = "猴"; break;
            case 602: str = "雞"; break;
            case 603: str = "狗"; break;
            case 604: str = "猪"; break;
            case 605: str = "紅波"; break;
            case 606: str = "藍波"; break;
            case 607: str = "綠波"; break;
            case 608: str = "和局"; break;
            case 610:
            case 622:
            case 1187:
            case 634: str = "鼠"; break;
            case 611:
            case 623:
            case 1188:
            case 635: str = "牛"; break;
            case 612:
            case 624:
            case 1189:
            case 636: str = "虎"; break;
            case 613:
            case 625:
            case 1190:
            case 637: str = "兔"; break;
            case 614:
            case 626:
            case 1191:
            case 638: str = "龍"; break;
            case 615:
            case 627:
            case 1192:
            case 639: str = "蛇"; break;
            case 616:
            case 628:
            case 1193:
            case 640: str = "馬"; break;
            case 617:
            case 629:
            case 1194:
            case 641: str = "羊"; break;
            case 618:
            case 630:
            case 1195:
            case 642: str = "猴"; break;
            case 619:
            case 631:
            case 1196:
            case 643: str = "雞"; break;
            case 620:
            case 632:
            case 1197:
            case 644: str = "狗"; break;
            case 621:
            case 633:
            case 1198:
            case 645: str = "猪"; break;
            case 646:
            case 656:
            case 666: str = "0"; break;
            case 647:
            case 657:
            case 667: str = "1"; break;
            case 648:
            case 658:
            case 668: str = "2"; break;
            case 649:
            case 659:
            case 669: str = "3"; break;
            case 650:
            case 660:
            case 670: str = "4"; break;
            case 651:
            case 661:
            case 671: str = "5"; break;
            case 652:
            case 662:
            case 672: str = "6"; break;
            case 653:
            case 663:
            case 673: str = "7"; break;
            case 654:
            case 664:
            case 674: str = "8"; break;
            case 655:
            case 665:
            case 675: str = "9"; break;
            case 733: str = "2肖"; break;
            case 734: str = "3肖"; break;
            case 735: str = "4肖"; break;
            case 736: str = "5肖"; break;
            case 737: str = "6肖"; break;
            case 738: str = "7肖"; break;
            case 739: str = "單"; break;
            case 740: str = "雙"; break;
            case 741: str = "金"; break;
            case 742: str = "木"; break;
            case 743: str = "水"; break;
            case 744: str = "火"; break;
            case 745: str = "土"; break;
        }
    }
    return str;
}

/*KLC匹配*/
function _klcnum1(sortId) {
    var str = "";
    if (sortId >= 1 && sortId <= 37) {
        str = "第一球";
    }
    else if (sortId >= 38 && sortId <= 74) {
        str = "第二球";
    }
    else if (sortId >= 75 && sortId <= 111) {
        str = "第三球";
    }
    else if (sortId >= 112 && sortId <= 148) {
        str = "第四球";
    }
    else if (sortId >= 149 && sortId <= 185) {
        str = "第五球";
    }
    else if (sortId >= 186 && sortId <= 222) {
        str = "第六球";
    }
    else if (sortId >= 223 && sortId <= 259) {
        str = "第七球";
    }
    else if (sortId >= 260 && sortId <= 296) {
        str = "第八球";
    }
    else if (sortId >= 297 && sortId <= 316) {
        str = "正碼";
    }
    else if (sortId >= 317 && sortId <= 322) {
        str = "總和";
    }
    else if (sortId == 323) {
        str = "任選二";
    }
    else if (sortId == 324) {
        str = "選二連直";
    }
    else if (sortId == 325) {
        str = "選二連組";
    }
    else if (sortId == 326) {
        str = "任選三";
    }
    else if (sortId == 327) {
        str = "選三前組";
    }
    else if (sortId == 328) {
        str = "任選四";
    }
    else if (sortId == 329) {
        str = "任選五";
    }
    return str;
}
function _klcnum2(sortId) {
    var str = "-1", index;
    if (sortId >= 1 && sortId <= 20) {
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 38 && sortId <= 57) {
        index = sortId - 37;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 75 && sortId <= 94) {
        index = sortId - 74;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 112 && sortId <= 131) {
        index = sortId - 111;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 149 && sortId <= 168) {
        index = sortId - 148;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 186 && sortId <= 205) {
        index = sortId - 185;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 223 && sortId <= 242) {
        index = sortId - 222;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 260 && sortId <= 279) {
        index = sortId - 259;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 297 && sortId <= 316) //正碼
    {
        index = sortId - 296;
        str = index < 10 ? "0" + index : index;
    }
    else {
        switch (sortId) {
            case 21:
            case 58:
            case 95:
            case 132:
            case 169:
            case 206:
            case 243:
            case 280:
            case 317: str = "單"; break;
            case 22:
            case 59:
            case 96:
            case 133:
            case 170:
            case 207:
            case 244:
            case 281:
            case 318: str = "雙"; break;
            case 23:
            case 60:
            case 97:
            case 134:
            case 171:
            case 208:
            case 245:
            case 282:
            case 319: str = "大"; break;
            case 24:
            case 61:
            case 98:
            case 135:
            case 172:
            case 209:
            case 246:
            case 283:
            case 320: str = "小"; break;
            case 25:
            case 62:
            case 99:
            case 136:
            case 173:
            case 210:
            case 247:
            case 284: str = "合單"; break;
            case 26:
            case 63:
            case 100:
            case 137:
            case 174:
            case 211:
            case 248:
            case 285: str = "合雙"; break;
            case 27:
            case 64:
            case 101:
            case 138:
            case 175:
            case 212:
            case 249:
            case 286:
            case 321: str = "尾大"; break;
            case 28:
            case 65:
            case 102:
            case 139:
            case 176:
            case 213:
            case 250:
            case 287:
            case 322: str = "尾小"; break;
            case 29:
            case 66:
            case 103:
            case 140:
            case 177:
            case 214:
            case 251:
            case 288: str = "東"; break;
            case 30:
            case 67:
            case 104:
            case 141:
            case 178:
            case 215:
            case 252:
            case 289: str = "南"; break;
            case 31:
            case 68:
            case 105:
            case 142:
            case 179:
            case 216:
            case 253:
            case 290: str = "西"; break;
            case 32:
            case 69:
            case 106:
            case 143:
            case 180:
            case 217:
            case 254:
            case 291: str = "北"; break;
            case 33:
            case 70:
            case 107:
            case 144:
            case 181:
            case 218:
            case 255:
            case 292: str = "中"; break;
            case 34:
            case 71:
            case 108:
            case 145:
            case 182:
            case 219:
            case 256:
            case 293: str = "發"; break;
            case 35:
            case 72:
            case 109:
            case 146:
            case 183:
            case 220:
            case 257:
            case 294: str = "白"; break;
            case 36:
            case 73:
            case 110:
            case 147:
            case 184:
            case 221:
            case 258:
            case 295: str = "龍"; break;
            case 37:
            case 74:
            case 111:
            case 148:
            case 185:
            case 222:
            case 259:
            case 296: str = "虎"; break;
            case 323: str = "任選二"; break;
            case 324: str = "選二連直"; break;
            case 325: str = "選二連組"; break;
            case 326: str = "任選三"; break;
            case 327: str = "選三前組"; break;
            case 328: str = "任選四"; break;
            case 329: str = "任選五"; break;
        }
    }
    return str;
}

/*SSC匹配*/
function _sscnum1(sortId) {
    var str;
    if (sortId >= 1 && sortId <= 14) {
        str = "第一球";
    }
    else if (sortId >= 15 && sortId <= 28) {
        str = "第二球";
    }
    else if (sortId >= 29 && sortId <= 42) {
        str = "第三球";
    }
    else if (sortId >= 43 && sortId <= 56) {
        str = "第四球";
    }
    else if (sortId >= 57 && sortId <= 70) {
        str = "第五球";
    }
    else if (sortId >= 71 && sortId <= 74) {
        str = "總和";
    }
    else if (sortId >= 75 && sortId <= 77) {
        str = "";
    }
    else if (sortId >= 78 && sortId <= 82) {
        str = "前三";
    }
    else if (sortId >= 83 && sortId <= 87) {
        str = "中三";
    }
    else if (sortId >= 88 && sortId <= 92) {
        str = "后三";
    }
    else if (sortId >= 93 && sortId <= 107) {
        str = "";
    }else if (sortId >= 108 && sortId <= 207){
        str = "万千XXX";
    }else if (sortId >= 208 && sortId <= 307){
        str = "万X百XX";
    }else if (sortId >= 308 && sortId <= 407){
        str = "万XX十X";
    }else if (sortId >= 408 && sortId <= 507){
        str = "万XXX个";
    }else if (sortId >= 508 && sortId <= 607){
        str = "X千百XX";
    }else if (sortId >= 608 && sortId <= 707){
        str = "X千X十X";
    }else if (sortId >= 708 && sortId <= 807){
        str = "X千XX个";
    }else if (sortId >= 808 && sortId <= 907){
        str = "XX百十X";
    }else if (sortId >= 908 && sortId <= 1007){
        str = "XX百X个";
    }else if (sortId >= 1008 && sortId <= 1107){
        str = "XXX十个";
    }

    else if (sortId >= 1108 && sortId <= 2107){
        str = "万千百XX";
    }else if (sortId >= 2108 && sortId <= 3107){
        str = "万千X十X";
    }else if (sortId >= 3108 && sortId <= 4107){
        str = "万千XX个";
    }else if (sortId >= 4108 && sortId <= 5107){
        str = "万X百十X";
    }else if (sortId >= 5108 && sortId <= 6107){
        str = "万X百X个";
    }else if (sortId >= 6108 && sortId <= 7107){
        str = "万XX十个";
    }else if (sortId >= 7108 && sortId <= 8107){
        str = "X千百十X";
    }else if (sortId >= 8108 && sortId <= 9107){
        str = "X千百X个";
    }else if (sortId >= 9108 && sortId <= 10107){
        str = "X千X十个";
    }else if (sortId >= 10108 && sortId <= 11107){
        str = "XX百十个";
    }

    else if (sortId >= 11108 && sortId <= 21107){
        str = "万千百十X";
    }else if (sortId >= 21108 && sortId <= 31107){
        str = "万千百X个";
    }else if (sortId >= 31108 && sortId <= 41107){
        str = "万千X十个";
    }else if (sortId >= 41108 && sortId <= 51107){
        str = "万X百十个";
    }else if (sortId >= 51108 && sortId <= 61107){
        str = "X千百十个";
    }

    return str;
}
function _sscnum2(sortId) {
    sortId = parseInt(sortId);
    var str = "-1";
    if (sortId >= 1 && sortId <= 10) {
        str = sortId - 1;
    } else if (sortId >= 15 && sortId <= 24) {
        str = sortId - 15;
    } else if (sortId >= 29 && sortId <= 38) {
        str = sortId - 29;
    } else if (sortId >= 43 && sortId <= 52) {
        str = sortId - 43;
    } else if (sortId >= 57 && sortId <= 66) {
        str = sortId - 57;
    } else {
        switch (sortId) {
            case 11:
            case 25:
            case 39:
            case 53:
            case 67:
            case 71: str = "單"; break;
            case 12:
            case 26:
            case 40:
            case 54:
            case 68:
            case 72: str = "雙"; break;
            case 13:
            case 27:
            case 41:
            case 55:
            case 69:
            case 73: str = "大"; break;
            case 14:
            case 28:
            case 42:
            case 56:
            case 70:
            case 74: str = "小"; break;
            case 75: str = "龍"; break;
            case 76: str = "虎"; break;
            case 77: str = "和"; break;
            case 78:
            case 83:
            case 88: str = "豹子"; break;
            case 79:
            case 84:
            case 89: str = "順子"; break;
            case 80:
            case 85:
            case 90: str = "對子"; break;
            case 81:
            case 86:
            case 91: str = "半順"; break;
            case 82:
            case 87:
            case 92: str = "雜六"; break;
            case 93: str = "牛一"; break;
            case 94: str = "牛二"; break;
            case 95: str = "牛三"; break;
            case 96: str = "牛四"; break;
            case 97: str = "牛五"; break;
            case 98: str = "牛六"; break;
            case 99: str = "牛七"; break;
            case 100: str = "牛八"; break;
            case 101: str = "牛九"; break;
            case 102: str = "牛牛"; break;
            case 103: str = "無牛"; break;
            case 104: str = "牛單"; break;
            case 105: str = "牛雙"; break;
            case 106: str = "牛大"; break;
            case 107: str = "牛小"; break;
        }
    }
    return str;
}



/*PK匹配*/
function _pknum1(sortId) {
    var str;
    if (sortId >= 1 && sortId <= 17) {
        str = "冠亚和";
    }
    else if (sortId >= 18 && sortId <= 21) {
        str = "冠亚";
    }
    else if (sortId >= 22 && sortId <= 37) {
        str = "冠军";
    }
    else if (sortId >= 38 && sortId <= 53) {
        str = "亚军";
    }
    else if (sortId >= 54 && sortId <= 69) {
        str = "第三名";
    }
    else if (sortId >= 70 && sortId <= 85) {
        str = "第四名";
    }
    else if (sortId >= 86 && sortId <= 101) {
        str = "第五名";
    }
    else if (sortId >= 102 && sortId <= 117) {
        str = "第六名";
    }
    else if (sortId >= 118 && sortId <= 133) {
        str = "第七名";
    }
    else if (sortId >= 134 && sortId <= 149) {
        str = "第八名";
    }
    else if (sortId >= 150 && sortId <= 165) {
        str = "第九名";
    }
    else if (sortId >= 166 && sortId <= 181) {
        str = "第十名";
    }
    return str;
}
function _pknum2(sortId) {
    sortId = parseInt(sortId);
    var str = "-1";
    if (sortId >= 1 && sortId <= 17) {
        str = sortId + 2;
    } else if (sortId >= 22 && sortId <= 31) {
        str = sortId - 21;
    } else if (sortId >= 38 && sortId <= 47) {
        str = sortId - 37;
    } else if (sortId >= 54 && sortId <= 63) {
        str = sortId - 53;
    } else if (sortId >= 70 && sortId <= 79) {
        str = sortId - 69;
    } else if (sortId >= 86 && sortId <= 95) {
        str = sortId - 85;
    } else if (sortId >= 102 && sortId <= 111) {
        str = sortId - 101;
    } else if (sortId >= 118 && sortId <= 127) {
        str = sortId - 117;
    } else if (sortId >= 134 && sortId <= 143) {
        str = sortId - 133;
    } else if (sortId >= 150 && sortId <= 159) {
        str = sortId - 149;
    } else if (sortId >= 166 && sortId <= 175) {
        str = sortId - 165;
    } else {
        switch (sortId) {
            case 18:
            case 32:
            case 48:
            case 64:
            case 80:
            case 96:
            case 112:
            case 128:
            case 144:
            case 160:
            case 176:
                str = "单"; break;
            case 19:
            case 33:
            case 49:
            case 65:
            case 81:
            case 97:
            case 113:
            case 129:
            case 145:
            case 161:
            case 177:
                str = "双"; break;
            case 20:
            case 34:
            case 50:
            case 66:
            case 82:
            case 98:
            case 114:
            case 130:
            case 146:
            case 162:
            case 178:
                str = "大"; break;
            case 21:
            case 35:
            case 51:
            case 67:
            case 83:
            case 99:
            case 115:
            case 131:
            case 147:
            case 163:
            case 179:
                str = "小"; break;
            case 36:
            case 52:
            case 68:
            case 84:
            case 100:
                str = "龙"; break;
            case 37:
            case 53:
            case 69:
            case 85:
            case 101:
                str = "虎"; break;
        }
    }
    return str;
}
/*KS匹配*/
function _ksnum1(sortId) {
    var str;
    if (sortId >= 1 && sortId <= 2) {
        str = "大小";
    }
    else if (sortId >= 3 && sortId <= 8) {
        str = "三軍";
    }
    else if (sortId >= 9 && sortId <= 14) {
        str = "圍骰";
    }
    else if (sortId == 15) {
        str = ""; //全骰
    }
    else if (sortId >= 16 && sortId <= 29) {
        str = "點數";
    }
    else if (sortId >= 30 && sortId <= 44) {
        str = "長牌";
    }
    else if (sortId >= 45 && sortId <= 50) {
        str = "短牌";
    }
    return str;
}
function _ksnum2(sortId) {
    sortId = parseInt(sortId);
    var str = "-1";
    if (sortId >= 3 && sortId <= 8) {
        str = sortId - 2;
    } else if (sortId >= 16 && sortId <= 29) {
        str = (sortId - 12) + "點";
    } else {
        switch (sortId) {
            case 1: str = "大"; break;
            case 2: str = "小"; break;
            case 9: str = "111"; break;
            case 10: str = "222"; break;
            case 11: str = "333"; break;
            case 12: str = "444"; break;
            case 13: str = "555"; break;
            case 14: str = "666"; break;
            case 15: str = "全骰"; break;
            case 30: str = "12"; break;
            case 31: str = "13"; break;
            case 32: str = "14"; break;
            case 33: str = "15"; break;
            case 34: str = "16"; break;
            case 35: str = "23"; break;
            case 36: str = "24"; break;
            case 37: str = "25"; break;
            case 38: str = "26"; break;
            case 39: str = "34"; break;
            case 40: str = "35"; break;
            case 41: str = "36"; break;
            case 42: str = "45"; break;
            case 43: str = "46"; break;
            case 44: str = "56"; break;
            case 45: str = "11"; break;
            case 46: str = "22"; break;
            case 47: str = "33"; break;
            case 48: str = "44"; break;
            case 49: str = "55"; break;
            case 50: str = "66"; break;
        }
    }
    return str;
}
/*KLB匹配*/
function _klbnum1(sortId) {
    var str;
    if (sortId >= 1 && sortId <= 80) {
        str = "正碼";
    }
    else if (sortId >= 81 && sortId <= 89) {
        str = "總和";
    }
    else if (sortId >= 90 && sortId <= 92) {
        str = "前后和";
    }
    else if (sortId >= 93 && sortId <= 95) {
        str = "單雙和";
    }
    else if (sortId >= 96 && sortId <= 100) {
        str = "五行";
    }
    return str;
}
function _klbnum2(sortId) {
    sortId = parseInt(sortId);
    var str = "-1";
    if (sortId >= 1 && sortId <= 80) {
        str = sortId;
    } else {
        switch (sortId) {
            case 81: str = "單"; break;
            case 82: str = "雙"; break;
            case 83: str = "大"; break;
            case 84: str = "小"; break;
            case 85: str = "810"; break; //和
            case 86: str = "大單"; break;
            case 87: str = "大雙"; break;
            case 88: str = "小單"; break;
            case 89: str = "小雙"; break;
            case 90: str = "前(多)"; break;
            case 91: str = "后(多)"; break;
            case 92: str = "前后(和)"; break;
            case 93: str = "單(多)"; break;
            case 94: str = "雙(多)"; break;
            case 95: str = "單雙(和)"; break;
            case 96: str = "金"; break;
            case 97: str = "木"; break;
            case 98: str = "水"; break;
            case 99: str = "火"; break;
            case 100: str = "土"; break;
        }
    }
    return str;
}
/*GX匹配*/
function _gxnum1(sortId) {
    var str;
    if (sortId >= 1 && sortId <= 36) {
        str = "第一球";
    }
    else if (sortId >= 37 && sortId <= 72) {
        str = "第二球";
    }
    else if (sortId >= 73 && sortId <= 108) {
        str = "第三球";
    }
    else if (sortId >= 109 && sortId <= 144) {
        str = "第四球";
    }
    else if (sortId >= 145 && sortId <= 180) {
        str = "第五球";
    }
    else if (sortId >= 181 && sortId <= 201) {
        str = "正碼";
    }
    else if (sortId >= 202 && sortId <= 207) {
        str = "總和";
    }
    else if (sortId >= 208 && sortId <= 209) {
        str = "龍虎";
    }
    return str;
}
function _gxnum2(sortId) {
    var str = "-1", index;
    if (sortId >= 1 && sortId <= 21) {
        str = sortId < 10 ? "0" + sortId : sortId;
    }
    else if (sortId >= 37 && sortId <= 57) {
        index = sortId - 36;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 73 && sortId <= 93) {
        index = sortId - 72;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 109 && sortId <= 129) {
        index = sortId - 108;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 145 && sortId <= 165) {
        index = sortId - 144;
        str = index < 10 ? "0" + index : index;
    }
    else if (sortId >= 181 && sortId <= 201) //正碼
    {
        index = sortId - 180;
        str = index < 10 ? "0" + index : index;
    }
    else {
        switch (sortId) {
            case 22:
            case 58:
            case 94:
            case 130:
            case 166:
            case 202: str = "單"; break;
            case 23:
            case 59:
            case 95:
            case 131:
            case 167:
            case 203: str = "雙"; break;
            case 24:
            case 60:
            case 96:
            case 132:
            case 168:
            case 204: str = "大"; break;
            case 25:
            case 61:
            case 97:
            case 133:
            case 169:
            case 205: str = "小"; break;
            case 26:
            case 62:
            case 98:
            case 134:
            case 170: str = "合單"; break;
            case 27:
            case 63:
            case 99:
            case 135:
            case 171: str = "合雙"; break;
            case 28:
            case 64:
            case 100:
            case 136:
            case 172:
            case 206: str = "尾大"; break;
            case 29:
            case 65:
            case 101:
            case 137:
            case 173:
            case 207: str = "尾小"; break;
            case 30:
            case 66:
            case 102:
            case 138:
            case 174: str = "福"; break;
            case 31:
            case 67:
            case 103:
            case 139:
            case 175: str = "祿"; break;
            case 32:
            case 68:
            case 104:
            case 140:
            case 176: str = "壽"; break;
            case 33:
            case 69:
            case 105:
            case 141:
            case 177: str = "喜"; break;
            case 34:
            case 70:
            case 106:
            case 142:
            case 178: str = "紅波"; break;
            case 35:
            case 71:
            case 107:
            case 143:
            case 179: str = "藍波"; break;
            case 36:
            case 72:
            case 108:
            case 144:
            case 180: str = "綠波"; break;
            case 208: str = "龍"; break;
            case 209: str = "虎"; break;
        }
    }
    return str;
}

function htmlAll(width) {
    var html = [];
    var _width = width || 100;
    html.push("<div style='float:right;width:" + _width + "%;'>");
    html.push("<table class='middle-table'><thead><tr><th class='txt-left' colspan='2'>&nbsp;總額:<span id='count-bt' class='green'>0</span></th></tr></thead>");
    html.push("<tbody id='count-ary' class='bc'>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='1' my-type='1' sort-tb='0'>特碼A:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='8' my-type='8' sort-tb='9'>正碼A:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='1' my-type='2' sort-tb='1'>特碼B:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='8' my-type='88' sort-tb='10'>正碼B:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='1' my-type='3' sort-tb='2'>特碼:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='16' my-type='16' sort-tb='24'>一肖:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='4' my-type='4' sort-tb='3'>色波:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='16' my-type='16' sort-tb='25'>尾數:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='5' my-type='4' sort-tb='4'>特肖:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='17' my-type='17' sort-tb='26'>正肖:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='6' my-type='6' sort-tb='5'>合肖:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='17' my-type='17' sort-tb='27'>七色波:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='27' my-type='4' sort-tb='6'>五行:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='26' my-type='17' sort-tb='28'>總肖:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='7' my-type='4' sort-tb='7'>頭數:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='18' my-type='18' sort-tb='29'>不中:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='7' my-type='4' sort-tb='8'>尾數:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='19' my-type='19' sort-tb='30'>二連肖:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='10' sort-tb='12'>正一特:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='19' my-type='19' sort-tb='31'>三連肖:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='11' sort-tb='13'>正二特:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='19' my-type='19' sort-tb='32'>四連肖:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='12' sort-tb='14'>正三特:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='19' my-type='19' sort-tb='33'>五連肖:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='13' sort-tb='15'>正四特:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='22' my-type='22' sort-tb='34'>二連尾:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='14' sort-tb='16'>正五特:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='22' my-type='22' sort-tb='35'>三連尾:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='15' sort-tb='17'>正六特:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='22' my-type='22' sort-tb='36'>四連尾:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='10' sort-tb='18'>正一:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='28' my-type='28' sort-tb='37'>二全中:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='11' sort-tb='19'>正二:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='28' my-type='29' sort-tb='38'>三全中:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='12' sort-tb='20'>正三:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='28' my-type='30' sort-tb='39'>三中二:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='13' sort-tb='21'>正四:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='28' my-type='31' sort-tb='40'>二中特:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='14' sort-tb='22'>正五:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='28' my-type='32' sort-tb='41'>特串:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='10' my-type='15' sort-tb='23'>正六:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left cursor' index='28' my-type='33' sort-tb='42'>四全中:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='w50 txt-left txt-paddin-left cursor' index='8' my-type='808' sort-tb='11'>總和:<span class='green'>0</span></td><td class='w50 txt-left txt-paddin-left'></td></tr>");
    html.push("</tbody>");
    html.push("</table>");
    html.push("</div>");
    return {
        tongji: html.join(""),
        ksph: "<div style='float:right;width:30.2%;'><div style='float:left;width:54%;'><table class='middle-table'><thead><tr><th colspan='4'>虧損額負值排列</th></tr></thead><tbody id='fz-sort'></tbody></table></div>",
        zttj: "<div style='float:left;width:99%;' id='total_tongji'><p>總投註額：<b class='green'>0</b></p><p>最高虧損：<b class='red'>0</b></p><p>最高盈利：<b>0</b></p></div>",
        ksbh: "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center;' id='foot'><tfoot><tr><td style='padding-top:5px;'><span class='text-btn' onclick='numBuHuo()'>快速補貨</span></td></tr></tfoot></table>"
    };
}

function klchtmlAll(msg) {
    var html = [];
    html.push("<div style='float:left;width:50%;'>");
    html.push("<table class='middle-table'><thead><tr><th class='txt-left'>&nbsp;總註額:<span id='count-bt' class='green'>0</span></th></tr></thead>");
    html.push("<tbody id='count-ary'>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='1'>第一球 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='2'>第二球 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='3'>第三球 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='4'>第四球 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='5'>第五球 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='6'>第六球 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='7'>第七球 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='8'>第八球 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='9'>正&nbsp;碼&nbsp;&nbsp; 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='9'>總&nbsp;和&nbsp;&nbsp; 總:<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='10'>任&nbsp;選&nbsp;二:&nbsp;&nbsp;<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='10'>選二連直:&nbsp;<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='10'>選二連組:&nbsp;<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='10'>任&nbsp;選&nbsp;三:&nbsp;&nbsp;<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='10'>選三前組:&nbsp;<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='10'>任&nbsp;選四&nbsp;:&nbsp;&nbsp;<span class='green'>0</span></td></tr>");
    html.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='10'>任&nbsp;選&nbsp;五:&nbsp;&nbsp;<span class='green'>0</span></td></tr>");
    html.push("</tbody>");
    html.push("</table>");
    html.push("</div>");

    var pkHtml = [];
    var pklen = msg.pklen || 50;
    pkHtml.push("<div style='float:left;width:" + pklen + "%;'>");
    pkHtml.push("<table class='middle-table'><thead><tr><th class='txt-left'>&nbsp;總註額:<span id='count-bt' class='green'>0</span></th></tr></thead>");
    pkHtml.push("<tbody id='count-ary'>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='1'>冠亞軍和:&nbsp;<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='1'>冠亞兩面:&nbsp;<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='1'>冠&nbsp;軍&nbsp;&nbsp;&nbsp;總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='1'>亞&nbsp;軍&nbsp;&nbsp;&nbsp;總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='2'>第三名 總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='2'>第四名 總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='2'>第五名 總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='2'>第六名 總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='3'>第七名 總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='3'>第八名 總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='3'>第九名 總:<span class='green'>0</span></td></tr>");
    pkHtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='3'>第十名 總:<span class='green'>0</span></td></tr>");
    pkHtml.push("</tbody>");
    pkHtml.push("</table>");
    pkHtml.push("</div>");

    var gxhtml = [];
    gxhtml.push("<div style='float:left;width:50%;'>");
    gxhtml.push("<table class='middle-table'><thead><tr><th class='txt-left'>&nbsp;總註額:<span id='count-bt' class='green'>0</span></th></tr></thead>");
    gxhtml.push("<tbody id='count-ary'>");
    gxhtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='1'>第一球 總:<span class='green'>0</span></td></tr>");
    gxhtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='2'>第二球 總:<span class='green'>0</span></td></tr>");
    gxhtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='3'>第三球 總:<span class='green'>0</span></td></tr>");
    gxhtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='4'>第四球 總:<span class='green'>0</span></td></tr>");
    gxhtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='5'>第五球 總:<span class='green'>0</span></td></tr>");

    gxhtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='6'>正&nbsp;碼&nbsp;&nbsp; 總:<span class='green'>0</span></td></tr>");
    gxhtml.push("<tr><td class='bc txt-left txt-paddin-left cursor' my-type='6'>總和&nbsp;龍虎:<span class='green'>0</span></td></tr>");

    gxhtml.push("</tbody>");
    gxhtml.push("</table>");
    gxhtml.push("</div>");


    var ylhtml = [];
    ylhtml.push("<div style='float:left;width:15%;margin-left:5px;'>");
    ylhtml.push("<table class='middle-table'><thead><tr><th colspan='2'>遺漏</th></tr></thead>");
    ylhtml.push("<tbody id='yl-count'>");
    if (msg.yilou && msg.yilou.length > 0) {
        var num, index;
        for (var i = 0; i < msg.yilou.length; i++) {
            index = i + 1;
            num = index < 10 ? "0" + index : index;
            ylhtml.push("<tr><td class='w50 bold fhs'>" + num + "</td><td class='w50' index='" + index + "'>" + msg.yilou[i] + "</td></tr>");
        }
    }
    ylhtml.push("</tbody>");
    ylhtml.push("</table>");
    ylhtml.push("</div>");

    var clhtml = [];
    var clwidth = msg.clwidth || 33;
    clhtml.push("<div style='float:right;width:" + clwidth + "%;'>");
    clhtml.push("<table class='middle-table'><thead><tr><th colspan='2'>兩面長龍排行</th></tr></thead>");
    clhtml.push("<tbody id='cl-count'>");
    if (msg.clList && msg.clList.length > 0) {
        msg.clList.sort(function (a, b) {
            var _a = a.split(":")[1], _b = b.split(":")[1];
            return parseInt(_b) - parseInt(_a);
        });
        var key;
        for (var i = 0; i < msg.clList.length; i++) {
            key = msg.clList[i].split(":");
            clhtml.push("<tr><td class='bc txt-left txt-paddin-left'>" + key[0] + "</td><td class='fff red'>" + key[1] + "期</td></tr>");
        }
    } else {
        clhtml.push("<tr><td class='fff'>暫無數據</td></tr>");
    }
    clhtml.push("</tbody>");
    clhtml.push("</table>");
    clhtml.push("</div>");

    var kshtml = [];
    var clwidth = msg.clwidth || 33;
    kshtml.push("<div style='float:right;width:" + clwidth + "%;'>");
    kshtml.push("<table class='middle-table'><thead><tr><th colspan='4'>近期開獎結果</th></tr></thead>");
    kshtml.push("<tbody id='cl-count'>");
    if (msg.clListr && msg.clListr.length > 0) {
        var key, num;
        for (var i = 0; i < msg.clListr.length; i++) {
            key = msg.clListr[i].split(":");
            num = key[1].split("|");
            kshtml.push("<tr><td class='bc sw35'>" + key[0] + "期</td><td class='fff red'><i class='KSNo_" + num[0] + "'></i><i class='KSNo_" + num[1] + "'></i><i class='KSNo_" + num[2] + "'></i></td><td class='sw30'>" + key[2] + "</td><td class='sw30'>" + key[3] + "</td></tr>");
        }
    } else {
        kshtml.push("<tr><td class='fff'>暫無數據</td></tr>");
    }
    kshtml.push("</tbody>");
    kshtml.push("</table>");
    kshtml.push("</div>");

    return {
        tongji: html.join(""),
        gxtongji: gxhtml.join(""),
        pktongji: pkHtml.join(""),
        yilou: ylhtml.join(""),
        cl: clhtml.join(""),
        ksNum: kshtml.join(""),
        ksph: "<div style='float:right;width:30.2%;'><div style='float:left;width:66%;'><table class='middle-table'><thead><tr><th colspan='4'>虧損額負值排列</th></tr></thead><tbody id='fz-sort'></tbody></table></div>",
        zttj: "<div style='float:left;width:33.3%;' id='total_tongji'><p>總投註額：<b class='green'>0</b></p><p>最高虧損：<b class='red'>0</b></p><p>最高盈利：<b>0</b></p></div>",
        ksbh: "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center;' id='foot'><tfoot><tr><td style='padding-top:5px;'><span class='text-btn' onclick='numBuHuo()'>快速補貨</span></td></tr></tfoot></table>"
    };
}

function getDwNameByType(type) {
    if (type < 208){//萬千XXX
        type -= 108;
        return Math.floor(type / 10).toString() + (type % 10).toString() + "XX";
    }else if (type < 308){//萬X百XX
        type -= 208;
        return Math.floor(type / 10 ) + "X" + (type % 10 ) + "X";

    }else if (type < 408){//萬XX十X
        type -= 308;
        return Math.floor(type / 10 ) + "XX" + type % 10 ;

    }else if (type < 508){ //萬XXX个
        type -= 408;
        return Math.floor(type / 10 ) + "XXX" + (type % 10 );

    }else if (type < 608){//X千百XX
        type -= 508;
        return  "X" + Math.floor(type / 10 ).toString() + (type % 10 ).toString() + "X";

    }else if (type < 708){//X千X十X
        type -= 608;
        return "X" +Math.floor(type / 10 ) + "X" + (type % 10 ) ;

    }else if (type < 808){//X千XX个
        type -= 708;
        return  "X" + Math.floor(type / 10 ) + "XX" + (type % 10 );

    }else if (type < 908){//XX百十X
        type -= 808;
        return "XX" + Math.floor(type / 10 ).toString() + (type % 10 ) ;

    }else if (type < 1008){// XX百X个
        type -= 908;
        return "XX" + Math.floor(type / 10 )+ "X"  +(type % 10 ) ;

    }else if (type < 1108){//XXX十个
        type -= 1008;
        return "XXX" + Math.floor(type / 10 ).toString() +(type % 10 );

    }
    else if (type < 2108){//万千百XX
        type -= 1108;
        return Math.floor(type / 100 ).toString() + Math.floor(type % 100 / 10 ).toString() + (type % 100 % 10 ) + "X";
    }else if (type < 3108){//万千X十X
        type -= 2108;
        return Math.floor(type / 100 ).toString() + Math.floor(type % 100 / 10 ) + "X" +(type % 100 % 10 ) ;
    }else if (type < 4108){//万千XX个
        type -= 3108;
        return Math.floor(type / 100 ).toString() + Math.floor(type % 100 / 10 ) + "XX" + (type % 100 % 10 );
    }else if (type < 5108){//万X百十X
        type -= 4108;
        return Math.floor(type / 100 ) + "X" + Math.floor(type % 100 / 10 ).toString()  + (type % 100 % 10 ) ;
    }else if (type < 6108){//万X百X个
        type -= 5108;
        return Math.floor(type / 100 ) + "X" + Math.floor(type % 100 / 10 ) + "X" + (type % 100 % 10 );
    }else if (type < 7108){//万XX十个
        type -= 6108;
        return Math.floor(type / 100 ) + "XX" + Math.floor(type % 100 / 10 ).toString() + (type % 100 % 10 );
    }else if (type < 8108){//X千百十X
        type -= 7108;
        return "X" + Math.floor(type / 100 )  + Math.floor(type % 100 / 10 ).toString() + (type % 100 % 10 ) ;
    }else if (type < 9108){//X千百X个
        type -= 8108;
        return "X" + Math.floor(type / 100 ).toString()  + Math.floor(type % 100 / 10 )+ "X" + (type % 100 % 10 ) ;
    }else if (type < 10108){//X千X十个
        type -= 9108;
        return "X" + Math.floor(type / 100 )+ "X"  + Math.floor(type % 100 / 10 ) + (type % 100 % 10 ) ;
    }else if (type < 11108){//XX百十个
        type -= 10108;
        return "XX" + Math.floor(type / 100 )  + Math.floor(type % 100 / 10 ).toString() + (type % 100 % 10 ) ;
    }else if (type < 21108){//万千百十X
        type -= 11108;
        return  Math.floor(type / 1000 )  + Math.floor(type % 1000 / 100 ).toString() + Math.floor(type % 1000 % 100 /10 ).toString() + (type % 1000 % 100 %10 ) ;
    }else if (type < 31108){//万千百X个
        type -= 21108;
        return  Math.floor(type / 1000 )  + Math.floor(type % 1000 / 100 ).toString() +Math.floor(type % 1000 % 100 /10 )+ "X" + (type % 1000 % 100 %10 ) ;

    }else if (type < 41108){//万千X十个
        type -= 31108;
        return  Math.floor(type / 1000 ).toString()  + Math.floor(type % 1000 / 100 ) + "X" + Math.floor(type % 1000 % 100 /10 ).toString() + (type % 1000 % 100 %10 ) ;

    }else if (type < 51108){//万X百十个
        type -= 41108;
        return  Math.floor(type / 1000 ) + "X" + Math.floor(type % 1000 / 100 ) + Math.floor(type % 1000 % 100 /10 ).toString() + (type % 1000 % 100 %10 ) ;

    }else if (type < 61108){//X千百十个
        type -= 51108;
        return   "X" + Math.floor(type / 1000 )  + Math.floor(type % 1000 / 100 ).toString() + Math.floor(type % 1000 % 100 /10 ).toString() + (type % 1000 % 100 %10 );

    }
}

function getDWTypeByName( name){
    name = name.toUpperCase();
    if (name.length == 4) name = name + "X";
    //一字定
    if (name.match("\\dXXXX")){
        return parseInt(name[0]) + 1;
    } else if (name.match("X\\dXXX")){
        return parseInt(name[1])  + 15;
    }else if (name.match("XX\\dXX")){
        return parseInt(name[2]) + 29;
    }else if (name.match("XXX\\dX")){
        return parseInt(name[3]) + 43;
    }else if (name.match("XXXX\\d")){
        return parseInt(name[4]) + 57;
    }
    //二字定
    else if (name.match("\\d{2}XXX")){
        return 108 + parseInt(name[0]) * 10 + parseInt(name[1]);
    }else if (name.match("\\dX\\dXX")){
        return 208 + parseInt(name[0]) * 10 + parseInt(name[2]);
    }else if (name.match("\\dXX\\dX")){
        return 308 + parseInt(name[0]) * 10 +parseInt(name[3]);
    }else if (name.match("\\dXXX\\d")){
        return 408 + parseInt(name[0]) * 10 + parseInt(name[4]);
    }else if (name.match("X\\d{2}XX")){
        return 508 + parseInt(name[1]) * 10 + parseInt(name[2]);
    }else if (name.match("X\\dX\\dX")){
        return 608 + parseInt(name[1]) * 10 + parseInt(name[3]);
    }else if (name.match("X\\dXX\\d")){
        return 708 + parseInt(name[1]) * 10 + parseInt(name[4]);
    }else if (name.match("XX\\d{2}X")){
        return 808 + parseInt(name[2]) * 10 + parseInt(name[3]);
    }else if (name.match("XX\\dX\\d")){
        return 908 + parseInt(name[2]) * 10 + parseInt(name[4]);
    }else if (name.match("XXX\\d\\d")){
        return 1008 + parseInt(name[3]) * 10 + parseInt(name[4]);
    }

    //三字定
    else if (name.match("\\d{3}XX")){
        return 1108 + parseInt(name[0]) * 100 + parseInt(name[1]) * 10 + parseInt(name[2]);
    }else if (name.match("\\d{2}X\\dX")){
        return 2108 + parseInt(name[0]) * 100 + parseInt(name[1]) * 10 + parseInt(name[3]);
    }else if (name.match("\\d{2}XX\\d")){
        return 3108 + parseInt(name[0]) * 100 + parseInt(name[1]) * 10 + parseInt(name[4]);
    }else if (name.match("\\dX\\d{2}X")){
        return 4108 + parseInt(name[0]) * 100 + parseInt(name[2]) * 10 + parseInt(name[3]);
    }else if (name.match("\\dX\\dX\\d")){
        return 5108 + parseInt(name[0]) * 100 + parseInt(name[2]) *10 + parseInt(name[4]);
    }else if (name.match("\\dXX\\d{2}")){
        return 6108 + parseInt(name[0]) * 100 + parseInt(name[3]) * 10 + parseInt(name[4]);
    }else if (name.match("X\\d{3}X")){
        return 7108 + parseInt(name[1]) * 100 + parseInt(name[2]) * 10 + parseInt(name[3]);
    }else if (name.match("X\\d{2}X\\d")){
        return 8108 + parseInt(name[1]) * 100 + parseInt(name[2]) * 10 + parseInt(name[4]);
    }else if (name.match("X\\dX\\d{2}")){
        return 9108 + parseInt(name[1]) * 100 + parseInt(name[3]) * 10 + parseInt(name[4]);
    }else if (name.match("XX\\d{3}")){
        return 10108 + parseInt(name[2]) * 100 + parseInt(name[3]) * 10 + parseInt(name[4]);
    }

    else if (name.match("\\d{4}X")){
        return 11108 + parseInt(name[0]) * 1000 + parseInt(name[1]) * 100 + parseInt(name[2]) *  10 + parseInt(name[3]);
    }else if (name.match("\\d{3}X\\d")){
        return 21108 + parseInt(name[0]) * 1000 + parseInt(name[1]) * 100 + parseInt(name[2]) * 10 + parseInt(name[4]);
    }else if (name.match("\\d{2}X\\d{2}")){
        return 31108 + parseInt(name[0]) * 1000 + parseInt(name[1]) * 100 + parseInt(name[3]) * 10 + parseInt(name[4]);
    }else if (name.match("\\dX\\d{3}")){
        return 41108 + parseInt(name[0]) * 1000 + parseInt(name[2]) * 100 + parseInt(name[3]) * 10 + parseInt(name[4]);
    }else if (name.match("X\\d{4}")){
        return 51108 + parseInt(name[1]) * 1000 + parseInt(name[2]) * 100 + parseInt(name[3]) * 10 + parseInt(name[4]);
    }


    return 0;

}