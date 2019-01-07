const hooks = {};

//房源类型
hooks.HomeTypeEnum = {
    DECENTRALIZED: 1,  // 分散式
    CENTRALIZED: 2, // 集中式
};

//房间类型
hooks.RoomTypes = {
    COMMON: 1,
    PUBLIC: 2
};

//设备类型（正常）
hooks.DeviceTypes = {
    GATEWAY: 1,
    LOCK: 2,
    ELEMETER: 3,
    ELECOLLECTOR: 4,
    WATERGATEWAY: 5,
    WATERMETER_COLD: 6,
    WATERMETER_HOT: 7,
    1: '网关',
    2: '门锁',
    3: '电表',
    4: '采集器',
    5: '水表网关',
    6: '冷水表',
    7: '热水表'
};

//工单设备类型设备类型
hooks.DeviceTypes2 = {
    GATEWAY: 1,
    LOCK: 2,
    ELEMETER: 3,
    LOCKWITHOUTCENTER: 4,
    WATERGATEWAY: 5,
    WATERMETER_COLD: 6,
    WATERMETER_HOT: 7,
    1: '网关',
    2: '门锁',
    3: '电表',
    4: '无网关门锁',
    5: '水表网关',
    6: '冷水表',
    7: '热水表',
};

//设备类型 - 前端自定义类型，用于安装设备时
hooks.DeviceTypeIds = {
    GATEWAY: 1,
    GATEWAY_G5: 11,
    LOCK: 2,
    LOCK_NO_GATEWAY: 21,
    ELEMETER: 3,
    ELEMETER_A1Z: 31,
    ELEMETER_A4: 32,
    ELEMETER_AMG: 33,
    ELEMETER_AMW: 34,
    ELEMETER_A1PZ: 35,
    ELEMETER_A4P: 36,
    ELECOLLECTOR: 4,
    WATER_GATEWAY: 5,
    WATERMETER_COLD: 6,
    WATERMETER_HOT: 7,
};

//设备型号
hooks.DeviceModels = {
    A4: 'DSZM-B02',
    A4P: 'DSZM-B04',
    AMG: 'EG-G01',
    AMW: 'EG-W01',
};

//电表类型
hooks.ElemeterTypes = {
    A1: '00',
    A2: '01',
    A3: '02',
    A1Z_IN: '03',
    A1Z_OUT: '04',
    A4_5: '05',
    A4_3: '06',
    AMG1: '07',
    AMW1: '08',
    A1PZ: '09',
    A1P: '10',
    A4P_5: '11',
    A4P_3: '12',
    AT120: '80',
    '00': 'A1',
    '01': 'A2',
    '02': 'A3',
    '03': 'A1Z内置天线',
    '04': 'A1Z外置天线',
    '05': 'A4五孔',
    '06': 'A4三孔',
    '07': 'AMG1',
    '08': 'AMW1',
    '09': 'A1Z Plus',
    '10': 'A1 Plus',
    '11': 'A4 Plus五孔',
    '12': 'A4 Plus三口',
    '80': 'AT120'
};

//判断是否为D2F系列锁
hooks.isLockD2F = function (sn) {
    if (!sn || sn.length < 8) {
        return false;
    }
    var type = sn.substr(6, 2);
    return type == '19';
};

//判断是否为D3、T3系列锁
hooks.isLockD3T3 = function (sn) {
    if (!sn || sn.length < 8) {
        return false;
    }
    var type = sn.substr(6, 2);
    var nums = ['23', '24', '25', '26'];

    return nums.indexOf(type) >= 0;
};

hooks.isAMG1 = function (deviceType, sn) {
    return deviceType == hooks.DeviceTypes.ELEMETER && sn.substr(6, 2) == hooks.ElemeterTypes.AMG1;
};

hooks.isAMW1 = function (deviceType, sn) {
    return deviceType == hooks.DeviceTypes.ELEMETER && sn.substr(6, 2) == hooks.ElemeterTypes.AMW1;
};

//是否为水表网关
hooks.isWaterGateway = function (sn) {
    if (sn.length != 12) {
        return false;
    }

    var text = sn.substring(2, 6);
    if (text == '0000' || text == '0001' || text == '0010') {
        return true;
    }

    return false;
};

//是否为冷水表（兼容14位和10位sn，且兼容无线水表）
hooks.isWatermeterCold = function (sn) {
    if (sn.length === 14 && sn.substr(0, 4) === '0000' && sn[7] === '0') {
        return true;
    }

    if (sn.length === 10 && sn[3] === '0') {
        return true;
    }

    if (sn.length === 8 && sn[2] === '0') {
        return true;
    }

    return false;
};

//是否为冷水表（兼容14位和10位sn，且兼容无线水表）
hooks.isWatermeterHot = function (sn) {
    if (sn.length === 14 && sn.substr(0, 4) === '0000' && sn[7] === '1') {
        return true;
    }

    if (sn.length === 10 && sn[3] === '1') {
        return true;
    }

    if (sn.length === 8 && sn[2] === '1') {
        return true;
    }

    return false;
};

//设备绑定状态
hooks.BindStatus = {
    BINDING: 1,
    SUCCESS: 2,
    TIMEOUT: 3,
    1: '绑定中...',
    2: '绑定成功！',
    3: '绑定超时！',
};

hooks.AppointmentPeriod = {
    1: '全天',
    2: '上午',
    3: '下午'
};

//安装工单状态描述
hooks.TicketInstallState = {
    1: '待派工', // pending
    3: '待上门', // distributed
    4: '待验收', // served
    5: '已验收', // approved
    6: '已关闭' // closed
};

//维修工单状态描述
hooks.TicketRepairState = {
    1: '待派工',
    2: '待上门',
    3: '待验收',
    4: '已验收',
    5: '已评价',
    6: '已关闭',
    7: '未评价',
};

//正则
hooks.RegexEnum = {
    mobile: /^1[13456789]\d{9}$/,
    idcard: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
};

//事件类型
hooks.EventTypes = {
    USER_DATA_REFRESH: 'user_data_refresh', //刷新用户数据

    DEVICE_LIST_REFRESH: 'DEVICE_LIST_REFRESH', //刷新设备列表
    DEVICE_REFRESH: 'device_refresh', //刷新设备

    EDIT_APPOINTMENT_TIME: 'edit_appointment_time',

    ADD_DEVICE_SELECT_DEVICE: 'add_device_select_device', //自定义事件 添加设备选择设备
    ADD_ROOM_SELECT_ROOM: 'add_room_select_room', //自定义事件 添加房间 
    ADD_CONNECT_SELECT_CONNECT: 'add_connect_select_connect', //自定义时间 添加关联设备
    TICKET_LIST_REFRESH: 'ticket_list_refresh', // 更新工单列表
    TICKET_INSTALL_REFRESH: 'ticket_list_refresh',
    TICKET_REPAIR_REFRESH: 'ticket_list_refresh',
    TICKET_COUNT_REFRESH: 'ticket_count_refresh', // 更新工单数量

    ONE_LEVEL_FAULT_REFRESH: 'one_level_fault_refresh',// 自定义时间，一级设备故障监听
    SECOND_LEVEL_FAULT_REFRESH: 'second_level_fault_refresh',//自定义时间，二级设备故障监听
    THIRD_LEVEL_FAULT_REFRESH: 'third_level_fault_refresh',//自定义时间，三级设备故障监听

    SELECT_WIFI: 'select_wifi',//选择wifi
    SELECT_WIFI_ENCRYPT: 'select_wifi_encrypt',//选择wifi加密类型

    //系统事件，不要修改值
    SCROLL_TO_BOTTOM: 'scrolltobottom', //触底刷新
    KEYBACK: 'keyback', //Android返回键
    RESUME: 'resume', //Android返回键
};

export default hooks;