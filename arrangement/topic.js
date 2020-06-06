let topicsArray=[
    "台北 The Wall",
    "台北 The Wall",
    "台北 Pipe",
    "台北 小地方",
    "台北 光復南",
    "台北 Relvoler"
];

let startDate = new Date();

//函數建立
function setMonthAndDay(startMonth, startDay)
{
     //一次設定好月分與日期
     startDate.setMonth(startMonth - 1,startDay);
     //時間先忽略,設為0
     startDate.setHours(0);
     startDate.setMinutes(0);
     startDate.setSeconds(0);
}

//函數呼叫

//$("#datepicker1").datepicker();改成現在日期
//setMonthAndDay(3,7);//自己設定時間