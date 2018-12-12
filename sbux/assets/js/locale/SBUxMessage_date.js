(function() {
    SBUxG.DEF.LANG_DATEPICKER = {
        ko : {
            // DATEPICKER
            DATEPICKER_SYSTEM_FORMAT : 'yyyymmdd',
            DATEPICKER_MONTH_SYSTEM_FORMAT : 'yyyymm',
            DATEPICKER_YEAR_SYSTEM_FORMAT : 'yyyy',
            DATEPICKER_INPUTMASK: undefined,
            DATEPICKER_DAY_TITLE: 'yyyy년 mm월',
            DATEPICKER_MONTH_TITLE: 'yyyy년',
            DATEPICKER_FORMAT: 'yyyy/mm/dd',
            DATEPICKER_MONTH_FORMAT: 'yyyy/mm',
            DATEPICKER_UNMASK_FORMAT: 'yyyymmdd',
            DATEPICKER_UNMASK_MONTH_FORMAT : 'yyyymm',
            DATEPICKER_UNMASK_YEAR_FORMAT : 'yyyy',
            DATEPICKER_YEAR_FORMAT: 'yyyy',
            DATEPICKER_CURRENT_TEXT: '금일',
            DATEPICKER_CURRENT_MONTH_TEXT: '금월',
            DATEPICKER_CURRENT_YEAR_TEXT: '금년',
            DATEPICKER_CLEAR_TEXT: '지움',
            DATEPICKER_CLOSE_TEXT: '닫기',
            DATEPICKER_OUTOF_RANGE: '입력범위가 벗어났습니다.',
            DATEPICKER_MIN_DATE: '최소',
            DATEPICKER_MAX_DATE: '최대'
        },
        en : {
            // DATEPICKER
            DATEPICKER_SYSTEM_FORMAT : 'yyyymmdd',
            DATEPICKER_MONTH_SYSTEM_FORMAT : 'yyyymm',
            DATEPICKER_YEAR_SYSTEM_FORMAT : 'yyyy',
            DATEPICKER_INPUTMASK: 'undefined',
            DATEPICKER_DAY_TITLE: 'mmm yyyy',
            DATEPICKER_MONTH_TITLE: 'yyyy',
            DATEPICKER_FORMAT: 'mmm dd yyyy',
            DATEPICKER_MONTH_FORMAT: 'mmm yyyy',
            DATEPICKER_YEAR_FORMAT: 'yyyy',
            DATEPICKER_UNMASK_FORMAT: 'yyyymmdd',
            DATEPICKER_UNMASK_MONTH_FORMAT : 'yyyymm',
            DATEPICKER_UNMASK_YEAR_FORMAT : 'yyyy',
            DATEPICKER_CURRENT_TEXT: 'Today',
            DATEPICKER_CURRENT_MONTH_TEXT: 'This Month',
            DATEPICKER_CURRENT_YEAR_TEXT: 'This Year',
            DATEPICKER_CLEAR_TEXT: 'Clear',
            DATEPICKER_CLOSE_TEXT: 'Close',
            DATEPICKER_OUTOF_RANGE: 'The input range is out of range.',
            DATEPICKER_MIN_DATE: 'Min Date',
            DATEPICKER_MAX_DATE: 'Max Date'
        },
        ja : {
            // DATEPICKER
            DATEPICKER_SYSTEM_FORMAT : 'yyyymmdd',
            DATEPICKER_MONTH_SYSTEM_FORMAT : 'yyyymm',
            DATEPICKER_YEAR_SYSTEM_FORMAT : 'yyyy',
            DATEPICKER_INPUTMASK: undefined,
            DATEPICKER_DAY_TITLE: 'yyyy年 mm月',
            DATEPICKER_MONTH_TITLE: 'yyyy年',
            DATEPICKER_FORMAT: 'yyyy/mm/dd',
            DATEPICKER_MONTH_FORMAT: 'yyyy/mm',
            DATEPICKER_YEAR_FORMAT: 'yyyy',
            DATEPICKER_UNMASK_FORMAT: 'yyyymmdd',
            DATEPICKER_UNMASK_MONTH_FORMAT : 'yyyymm',
            DATEPICKER_UNMASK_YEAR_FORMAT  : 'yyyy',
            DATEPICKER_CURRENT_TEXT: '今日',
            DATEPICKER_CURRENT_MONTH_TEXT: '今月',
            DATEPICKER_CURRENT_YEAR_TEXT: '今年',
            DATEPICKER_CLEAR_TEXT: 'クリア',
            DATEPICKER_CLOSE_TEXT: '閉じる',
            DATEPICKER_OUTOF_RANGE: '入力範囲が範囲外です。',
            DATEPICKER_MIN_DATE: '分の日付',
            DATEPICKER_MAX_DATE: '最大の日付'
        },
        zh : {
            // DATEPICKER
            DATEPICKER_SYSTEM_FORMAT : 'yyyymmdd',
            DATEPICKER_MONTH_SYSTEM_FORMAT : 'yyyymm',
            DATEPICKER_YEAR_SYSTEM_FORMAT : 'yyyy',
            DATEPICKER_INPUTMASK: undefined,
            DATEPICKER_DAY_TITLE: 'yyyy年 mm月',
            DATEPICKER_MONTH_TITLE: 'yyyy年',
            DATEPICKER_FORMAT: 'yyyy/mm/dd',
            DATEPICKER_MONTH_FORMAT: 'yyyy/mm',
            DATEPICKER_YEAR_FORMAT: 'yyyy',
            DATEPICKER_UNMASK_FORMAT: 'yyyymmdd',
            DATEPICKER_UNMASK_MONTH_FORMAT : 'yyyymm',
            DATEPICKER_UNMASK_YEAR_FORMAT  : 'yyyy',
            DATEPICKER_CURRENT_TEXT: '今天',
            DATEPICKER_CURRENT_MONTH_TEXT: '本月',
            DATEPICKER_CURRENT_YEAR_TEXT: '今年',
            DATEPICKER_CLEAR_TEXT: '清',
            DATEPICKER_CLOSE_TEXT: '关闭',
            DATEPICKER_OUTOF_RANGE: '输入范围超出范围。',
            DATEPICKER_MIN_DATE: '分钟日期',
            DATEPICKER_MAX_DATE: '最大日期'
        }
    };

    SBUxG.FC.momentKorea = function() {
        SBUxG.moment.defineLocale('ko', {
            months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
            monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
            weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
            weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
            weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
            longDateFormat : {
                LT : 'A h:mm',
                LTS : 'A h:mm:ss',
                L : 'YYYY.MM.DD.',
                LL : 'YYYY년 MMMM D일',
                LLL : 'YYYY년 MMMM D일 A h:mm',
                LLLL : 'YYYY년 MMMM D일 dddd A h:mm',
                l : 'YYYY.MM.DD.',
                ll : 'YYYY년 MMMM D일',
                lll : 'YYYY년 MMMM D일 A h:mm',
                llll : 'YYYY년 MMMM D일 dddd A h:mm',
            },
            calendar : {
                sameDay : '오늘 LT',
                nextDay : '내일 LT',
                nextWeek : 'dddd LT',
                lastDay : '어제 LT',
                lastWeek : '지난주 dddd LT',
                sameElse : 'L',
            },
            relativeTime : {
                future : '%s 후',
                past : '%s 전',
                s : '몇 초',
                ss : '%d초',
                m : '1분',
                mm : '%d분',
                h : '한 시간',
                hh : '%d시간',
                d : '하루',
                dd : '%d일',
                M : '한 달',
                MM : '%d달',
                y : '일 년',
                yy : '%d년',
            },
            dayOfMonthOrdinalParse : /\d{1,2}(일|월|주)/,
            // tslint:disable-next-line:variable-name
            ordinal(number, period) {
                switch (period) {
                    case 'd':
                    case 'D':
                    case 'DDD':
                        return `${number}일`;
                    case 'M':
                        return `${number}월`;
                    case 'w':
                    case 'W':
                        return `${number}주`;
                    default:
                        return number;
                }
            },
            meridiemParse : /오전|오후/,
            isPM(token) {
                return token === '오후';
            },
            meridiem(hour, minute, isUpper) {
                return hour < 12 ? '오전' : '오후';
            },
        });
    };

    SBUxG.FC.momentJapan = function() {
        SBUxG.moment.defineLocale('ja', {
            months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
            weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
            weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
            longDateFormat : {
                LT : 'HH:mm',
                LTS : 'HH:mm:ss',
                L : 'YYYY/MM/DD',
                LL : 'YYYY年M月D日',
                LLL : 'YYYY年M月D日 HH:mm',
                LLLL : 'YYYY年M月D日 dddd HH:mm',
                l : 'YYYY/MM/DD',
                ll : 'YYYY年M月D日',
                lll : 'YYYY年M月D日 HH:mm',
                llll : 'YYYY年M月D日(ddd) HH:mm',
            },
            meridiemParse: /午前|午後/i,
            isPM(input) {
                return input === '午後';
            },
            meridiem(hour, minute, isLower) {
                if (hour < 12) {
                    return '午前';
                } else {
                    return '午後';
                }
            },
            calendar : {
                sameDay : '[今日] LT',
                nextDay : '[明日] LT',
                nextWeek(now) {
                    if (now.week() < this.week()) {
                        return '[来週]dddd LT';
                    } else {
                        return 'dddd LT';
                    }
                },
                lastDay : '[昨日] LT',
                lastWeek(now) {
                    if (this.week() < now.week()) {
                        return '[先週]dddd LT';
                    } else {
                        return 'dddd LT';
                    }
                },
                sameElse : 'L',
            },
            dayOfMonthOrdinalParse : /\d{1,2}日/,
            // tslint:disable-next-line:variable-name
            ordinal(number, period) {
                switch (period) {
                    case 'd':
                    case 'D':
                    case 'DDD':
                        return `${number}日`;
                    default:
                        return number;
                }
            },
            relativeTime : {
                future : '%s後',
                past : '%s前',
                s : '数秒',
                ss : '%d秒',
                m : '1分',
                mm : '%d分',
                h : '1時間',
                hh : '%d時間',
                d : '1日',
                dd : '%d日',
                M : '1ヶ月',
                MM : '%dヶ月',
                y : '1年',
                yy : '%d年',
            },
        });
    };

    SBUxG.FC.momentChina = function() {
        SBUxG.moment.defineLocale('zh-cn', {
            months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
            monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
            weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
            weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
            weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
            longDateFormat : {
                LT : 'HH:mm',
                LTS : 'HH:mm:ss',
                L : 'YYYY/MM/DD',
                LL : 'YYYY年M月D日',
                LLL : 'YYYY年M月D日Ah点mm分',
                LLLL : 'YYYY年M月D日ddddAh点mm分',
                l : 'YYYY/M/D',
                ll : 'YYYY年M月D日',
                lll : 'YYYY年M月D日 HH:mm',
                llll : 'YYYY年M月D日dddd HH:mm',
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour(hour, meridiem) {
                if (hour === 12) {
                    hour = 0;
                }
                // tslint:disable-next-line:prefer-switch
                if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                    return hour;
                } else if (meridiem === '下午' || meridiem === '晚上') {
                    return hour + 12;
                } else {
                    // '中午'
                    return hour >= 11 ? hour : hour + 12;
                }
            },
            meridiem(hour, minute, isLower) {
                const hm = hour * 100 + minute;
                if (hm < 600) {
                    return '凌晨';
                } else if (hm < 900) {
                    return '早上';
                } else if (hm < 1130) {
                    return '上午';
                } else if (hm < 1230) {
                    return '中午';
                } else if (hm < 1800) {
                    return '下午';
                } else {
                    return '晚上';
                }
            },
            calendar : {
                sameDay : '[今天]LT',
                nextDay : '[明天]LT',
                nextWeek : '[下]ddddLT',
                lastDay : '[昨天]LT',
                lastWeek : '[上]ddddLT',
                sameElse : 'L',
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            // tslint:disable-next-line:variable-name
            ordinal(number, period) {
                switch (period) {
                    case 'd':
                    case 'D':
                    case 'DDD':
                        return `${number}日`;
                    case 'M':
                        return `${number}月`;
                    case 'w':
                    case 'W':
                        return `${number}周`;
                    default:
                        return number;
                }
            },
            relativeTime : {
                future : '%s内',
                past : '%s前',
                s : '几秒',
                ss : '%d 秒',
                m : '1 分钟',
                mm : '%d 分钟',
                h : '1 小时',
                hh : '%d 小时',
                d : '1 天',
                dd : '%d 天',
                M : '1 个月',
                MM : '%d 个月',
                y : '1 年',
                yy : '%d 年',
            },
            week : {
                // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
                dow : 1, // Monday is the first day of the week.
                doy : 4, // The week that contains Jan 4th is the first week of the year.
            },
        });
    };

}());