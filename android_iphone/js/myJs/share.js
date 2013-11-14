uexDevice.cbGetInfo=function (opCode,dataType,data){
            var device = eval('('+data+')');
            
            var cpuFrequency=device.cpu;
            if(isDefine(cpuFrequency)){
                console.log('CPU信息：' + cpuFrequency);
            }

            var osVersion=device.os;
            if(isDefine(osVersion)){
                console.log('系统版本信息：' + osVersion);
            }
            var manufacturer=device.manufacturer;
            if(isDefine(manufacturer)){
                console.log('厂商信息：' + manufacturer);
            }

            var keyboard= device.keyboard;
            if(isDefine(keyboard)){
                console.log('是否支持键盘：' + keyboard);//1：支持；0：不支持
            }

            var bluetooth=device.blueTooth;
            if(isDefine(bluetooth)){
                console.log('是否支持蓝牙：' + bluetooth);//1：支持；0：不支持
            }

            var wifi=device.wifi;
            if(isDefine(wifi)){
                console.log('是否支持WIFI：' + wifi);//1：支持；0：不支持
            }
            var camera=device.camera;
            if(isDefine(camera)){
                console.log('是否支持摄像头：' + camera);//1：支持；0：不支持
            }

            var gps=device.gps;
            if(isDefine(gps)){
                console.log('是否支持GPS：' + gps);//1：支持；0：不支持
            }
            var gprs=device.gprs;
            if(isDefine(gprs)){
                console.log('是否支持GPRS：' + gprs);//1：支持；0：不支持
            }

            var touch=device.touch;
            if(isDefine(touch)){
                console.log('是否支持触屏：' + touch);//1：支持；0：不支持
            }

            var imei=device.imei;
            if(isDefine(imei)){
                console.log('IMEI号：' + imei);
            }
            var deviceToken = device.deviceToken;
            if(isDefine(deviceToken)){
                //没有时返回空字符串。Android的deviceToken是softToken。
                //带推送证书的ios证书打包的ios安装包可获取
                console.log('deviceToken值：' + deviceToken);
            }else{
                console.log('未获得deviceToken值')
            }
            var deviceType=device.deviceType ;
            if(isDefine(deviceType)){//isAndroid = (/android/gi).test(navigator.appVersion)
                if(deviceType==0){
                    //也可用此法判断var isIphone = (/iphone/gi).test(navigator.appVersion)&&!(/iPod/gi).test(navigator.appVersion)
                    console.log('设备类型：IPhone');
                 }else if(deviceType==1){
                    //isIpad = (/ipad/gi).test(navigator.appVersion)
                    console.log('设备类型：IPad'); 
                }else if(deviceType==2){
                    //isIPodTouch = (/iPod/gi).test(navigator.appVersion),
                    console.log('设备类型：IPodTouch');
                }
            }
			
            var connectStatus=device.connectStatus;
            if(isDefine(connectStatus)){
                if(connectStatus==-1){
                    console.log('网络状态：网络不可用');
                }else if(connectStatus==0){
                    console.log('网络状态：WIFI网络'); 
                }else if(connectStatus==1){
                    console.log('网络状态：3G网络'); 
                }else if(connectStatus==2){
                    console.log('网络状态：2G网络');
                }
            }
            var restDiskSize = device.restDiskSize;
            if(isDefine(restDiskSize)){
                console.log('磁盘剩余空间：'+restDiskSize+'B');//单位Byte
            }
            var operatorName=device.mobileOperatorName;
            if(isDefine(operatorName)){
                console.log('移动网络运营商：'+operatorName);
            }else{
                console.log('为获取到移动网络运营商');//ipod、ipad wifi版
            }

            var macAddress=device.macAddress;
            if(isDefine(macAddress)){
                console.log('mac地址：'+macAddress);//当前设备的WIFI mac地址
            }

            var model=device.model;
            if(isDefine(model)){
                console.log('硬件型号：'+model);
            }
        }

