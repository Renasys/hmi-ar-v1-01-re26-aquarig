$hmi.addPageInitFunction( "_ProjectPage", function(stage){
var p0_page0=new $hmi.defs.hmiProject({"wgtId":"p0_page0"},"HMI AR-V1-01-RE26 - Aqua Rig",{"aRT":250,"hT":2000,"datalinks":[],"prefix":"p0","projectName":"HMI AR-V1-01-RE26 - Aqua Rig/HMI AR-V1-01-RE26 - Aqua Rig.jpr","maxBandwidth":0,"modernBrowser":true,"connectionMode":null,"webSysIconDelay":0,"timeout":600000,"pollRate":100,"webMemoryAvailable":0,"webMemoryThreshold":0,"optimizations":{"nativeRenderCycle":true,"forceLayers":true},"onAccessDenied":0,"longDateFormat":"MM/DD/YY - hh:mm:ss","shortDateFormat":"DD/MM/YYYY","fieldsStyle":{"decimalSymbol":".","thousandSymbol":","},"webShowRuntimeErrors":false,"bgColorOption":0,"passthru":1,"passthruDelay":200},stage);
var p0_wgt0=new $hmi.defs.hmiMultiLangMgr({"wgtId":"p0_wgt0"},"_MultiLangMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[],"langs":{"L1":{"name":"Lang1","langId":"L1","writtingSystem":"Any","defaultFont":"Roboto","langCode":"en-US"}},"defLang":"L1","curLangId":"L1"},p0_page0,p0_page0),
p0_wgt1=new $hmi.defs.hmiPageMgr({"wgtId":"p0_wgt1"},"_PageMgr",{"map":{"main_p_and_id":"m1_page1","m1_machine":"m2_page2","alarms":"m3_page3","history alarms":"m4_page4","main_p_and_id_old_ffs":"m5_page5","m1_airsystem_config":"d1_page6","m1_highpressurewaterknives_config":"d2_page7","m1_pressureincreasingpump_config":"d3_page8","m1_filtercleaningsm_config":"d4_page9","m1_drummotor_config":"d5_page10","m1_inletpump":"d6_page11","m1_machine_config":"d7_page12","pov111_config":"d8_page13","pov121_config":"d9_page14","pov122_config":"d10_page15","pov123_config":"d11_page16","pt121_config":"d12_page17","external_p_and_id_config":"d13_page18","external_pump_buffertank_config":"d14_page19","maintemplate":"t1_page20","maintemplate_ffs":"t2_page21"},"precached":[],"categories":{"Unified":{"name":"Unified","technology":7,"useragent":"*","minSize":[0,0],"maxSize":[-1,-1],"home":"Main_P_and_ID","pages":["m1_page1","m2_page2","m3_page3","m4_page4","m5_page5"],"dialogs":["d1_page6","d2_page7","d3_page8","d4_page9","d5_page10","d6_page11","d7_page12","d8_page13","d9_page14","d10_page15","d11_page16","d12_page17","d13_page18","d14_page19"],"templates":["t1_page20","t2_page21"],"umpages":["adduser","changepassword","deleteuser","loginpage","loginpage_combo","signaturedialog","switchuserloginpage","switchuserloginpage_combo","usereditor"],"alias":{}}}},p0_page0,p0_page0),
p0_wgt2=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt2"},"_ProjectMLTextMgr",{"texts":{},"curLangId":"L1"},p0_page0,p0_page0),
p0_wgt4=new $hmi.defs.hmiTagMgr({"wgtId":"p0_wgt4"},"_TagMgr",{},p0_page0,p0_page0),
p0_wgt7=new $hmi.defs.hmiTrendMgr({"wgtId":"p0_wgt7"},"_TrendMgr",{},p0_page0,p0_page0),
p0_wgt11=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt11"},"_AlarmMLTextMgr",{},p0_page0,p0_page0),
p0_wgt12=new $hmi.defs.hmiAlarmsMgr({"wgtId":"p0_wgt12"},"_AlarmsMgr",{},p0_page0,p0_page0),
p0_wgt14=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt14"},"_ScheduleMLTextMgr",{"texts":{"0":{"L1":"Every"},"1":{"L1":"Hourly"},"2":{"L1":"Daily"},"3":{"L1":"Weekly"},"4":{"L1":"Monthly"},"5":{"L1":"Yearly"},"6":{"L1":"By Date"},"7":{"L1":"Hi-Res"},"8":{"L1":"Time"},"9":{"L1":"Sunrise+"},"10":{"L1":"Sunrise-"},"11":{"L1":"Sunset+"},"12":{"L1":"Sunset-"},"13":{"L1":"Random10"},"14":{"L1":"Random20"}},"curLangId":"L1"},p0_page0,p0_page0),
p0_wgt15=new $hmi.defs.hmiScheduleMgrWgt({"wgtId":"p0_wgt15"},"_ScheduleMgr",{},p0_page0,p0_page0),
p0_wgt19=new $hmi.defs.hmiRecipeMgr({"wgtId":"p0_wgt19"},"_RecipeMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[":_IdalRecipe>:recipeIOSrc|R/W"]},p0_page0,p0_page0),
p0_wgt20=new $hmi.defs.hmiAuditTrailMgrWgt({"wgtId":"p0_wgt20"},"_AuditTrailMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[],"configFileName":"audittrail.json"},p0_page0,p0_page0),
p0_wgt22=new $hmi.defs.hmiIndexedTagSetMgr({"wgtId":"p0_wgt22"},"_IndexedTagSetMgr",{},p0_page0,p0_page0),
p0_wgt23=new $hmi.defs.hmiDBConnectorMgrWgt({"wgtId":"p0_wgt23"},"_DBConnectorMgr",{"enable":false},p0_page0,p0_page0),
p0_wgt25=new $hmi.defs.hmiUserGroupMgr({"wgtId":"p0_wgt25"},"_UserGroupMgr",{},p0_page0,p0_page0),
p0_wgt30=new $hmi.defs.hmiVariablesWgt({"wgtId":"p0_wgt30"},"_VariablesWgt",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[]},p0_page0,p0_page0),
p0_wgt32=new $hmi.defs.hmiSystemVars({"wgtId":"p0_wgt32"},"_SysPropMgr",{},p0_page0,p0_page0);var p0_wgt19_l0=$hmi.hmiAttach(p0_wgt19,"undefined",{"rw":"rw","attr":"recipeIOSrc","tag":"","srcType":"Recipe","dataSource":"_IdalRecipe","tagIndex":0,"wT":-1},stage);
p0_page0.addModule({"name":"com.hmi.calendarkeypadmodule-:1.2.0","webid":"cw_cwgt0","conf":null,"template": null, "js":function(webWgt){var defs=webWgt.getProject().getWidgetDefinitions();var hmiModuleLoader = webWgt.getProject().getHmiModuleLoader();var State = hmiModuleLoader.import( "State" );var wgt=new defs.hmiIWidget(webWgt);var page=new defs.hmiIPage(webWgt.getProject().getFocusPage());var project=new defs.hmiIProject(webWgt.getProject());page.__eval__=function(a){return eval(a);};
// START USERCODE

var calWgt = wgt.getWidget(wgt.id+".keypad_Value");
var dateTime = wgt.getWidget(wgt.id+".dateShownField");

this.cancelBtn = function()
{
    page.reject();
}

this.okBtn = function()
{
    page.accept();
}

this.leftMonthBtn = function()
{
	/*
    var sec = calWgt.getProperty("dateShown");
    var dateShownDate = new Date(sec*1000);
    dateShownDate.setMonth(dateShownDate.getMonth()-1);
    sec = dateShownDate.getTime()/1000;
    calWgt.setProperty("dateShown",sec);
	*/
	
    calWgt.prevMonth(); //instead of js dang code, use an internal safe Qt method
						//with additional check to date previous 01/01/1970
}

this.rightMonthBtn = function()
{
	/*
    var sec = calWgt.getProperty("dateShown");
    var dateShownDate = new Date(sec*1000);
    dateShownDate.setMonth(dateShownDate.getMonth()+1);
    sec = dateShownDate.getTime()/1000;
    calWgt.setProperty("dateShown",sec);
	*/
	
    calWgt.nextMonth(); //instead of js dang code, use an internal safe Qt method
}// END USERCODE

},"props":null,"tr":null});p0_page0.addModule({"name":"com.hmi.schedulekeypadmodule-:1.1.0","webid":"cw_cwgt1","conf":null,"template": null, "js":function(webWgt){var defs=webWgt.getProject().getWidgetDefinitions();var hmiModuleLoader = webWgt.getProject().getHmiModuleLoader();var State = hmiModuleLoader.import( "State" );var wgt=new defs.hmiIWidget(webWgt);var page=new defs.hmiIPage(webWgt.getProject().getFocusPage());var project=new defs.hmiIProject(webWgt.getProject());page.__eval__=function(a){return eval(a);};
// START USERCODE
/*!
javascript module: schedulekeypadmodule-1.1.0.js
javascript source file path: js\com\hmi\schedulekeypadmodule-1.1.0.js
*/
var TypeLayer = wgt.getWidget(wgt.id+'.TypeLayer');
var ModeLayer = wgt.getWidget(wgt.id+'.ModeLayer');
var DateLayer = wgt.getWidget(wgt.id+'.DateLayer');
var TimeLayer = wgt.getWidget(wgt.id+'.TimeLayer');
var DayLayer = wgt.getWidget(wgt.id+'.DayLayer');
var LocationLayer = wgt.getWidget(wgt.id+'.LocationLayer');
var FrequencyLayer = wgt.getWidget(wgt.id+'.FrequencyLayer');
var ConditionLayer = wgt.getWidget(wgt.id+'.ConditionLayer');
var mgr = project.getWidget("_ScheduleMgr");
var sel = "SelectedSchedule";
var prevLayer = [TypeLayer];
var prevType = 0;
var curType = 0;
var prevMode = 0;
var curMode = 0;
var curMon = 0;
var prevMon = 0;
var curTue = 0;
var prevTue = 0;
var curWed = 0;
var prevWed = 0;
var curThu = 0;
var prevThu = 0;
var curFri = 0;
var prevFri = 0;
var curSat = 0;
var prevSat = 0;
var curSun = 0;
var prevSun = 0;

var prevLocation = 0;
var curLocation = 0;

var prevCondition = "";
var curCondition = "";

var prevY = 0;
var curY = 0;
var prevM = 0;
var curM = 0;
var prevD = 0;
var curD = 0;
var prevH = 0;
var curH = 0;
var prevm = 0;
var curm = 0;
var prevS = 0;
var curS = 0;
var prevms = 0;
var curms = 0;

this.moveLayersInStartPos = function()
{
  TypeLayer.x = 0;
  TypeLayer.y = 0;
  ModeLayer.x = 0;
  ModeLayer.y = 0;
  DateLayer.x = 0;
  DateLayer.y = 0;
  TimeLayer.x = 0;
  TimeLayer.y = 0;
  DayLayer.x = 0;
  DayLayer.y = 0;
  LocationLayer.x = 0;
  LocationLayer.y = 0;
  FrequencyLayer.x = 0;
  FrequencyLayer.y = 0;
  ConditionLayer.x = 0;
  ConditionLayer.y = 0;
};
this.allLayersInvisible = function() {
  TypeLayer.visible = false;
  ModeLayer.visible = false;
  DateLayer.visible = false;
  TimeLayer.visible = false;
  DayLayer.visible = false;
  LocationLayer.visible = false;
  FrequencyLayer.visible = false;
  ConditionLayer.visible = false;
};

this.showTypeLayer = function() {
  this.allLayersInvisible();
  this.showTypeButtons();
  TypeLayer.visible = true;
};

this.showModeLayer = function() {
  this.allLayersInvisible();
  this.showModeButtons();
  ModeLayer.visible = true;
};

this.showDateLayer = function() {
  this.allLayersInvisible();
  var d = new Date();
  if(curType == 8){
    wgt.getWidget(wgt.id+".DateLayer.dateTime1").setProperty("usingFormat","DD/MMM/YYYY");
    if(curY !== "*"){
      d.setFullYear(parseInt(curY, 10));
    }
    if(curM !== "*"){
      d.setMonth(parseInt(curM, 10));
    }
    if(curD !== "*"){
      d.setDate(parseInt(curD, 10));
    }
  }else{
    d.setFullYear(2000);
    if(curType == 7){
      wgt.getWidget(wgt.id+".DateLayer.dateTime1").setProperty("usingFormat","DD/MMM");
      if(curM !== "*"){
        d.setMonth(parseInt(curM, 10));
      }
      if(curD !== "*"){
        d.setDate(parseInt(curD, 10));
      }
    }else{
      d.setMonth(0);
    }
  }

  if(curType == 6){
    wgt.getWidget(wgt.id+".DateLayer.dateTime1").setProperty("usingFormat","DD");
    if(curD !== "*"){
      d.setDate(parseInt(curD, 10));
    }
  }
  if(curType == 2){
    wgt.getWidget(wgt.id+".DateLayer.dateTime2").setProperty("usingFormat","hh:mm:ss");
    if(curH !== "*"){
      d.setHours(parseInt(curH, 10));
    }else{
  		d.setHours(0);
  	}
    if(curm !== "*"){
     	d.setMinutes(parseInt(curm, 10));
  	}else{
  		d.setMinutes(0);
  	}
  	
  	if(curS !== "*"){
     	d.setSeconds(parseInt(curS, 10));
  	}else{ 
  		d.setSeconds(1);
  	}
  	wgt.getWidget(wgt.id+".DateLayer.headLabel1").visible = true;
    wgt.getWidget(wgt.id+".DateLayer.headLabel2").visible = false;
    wgt.getWidget(wgt.id+".DateLayer.dateTime2").visible = true;
    wgt.getWidget(wgt.id+".DateLayer.dateTime1").visible = false;
  }else{
  	wgt.getWidget(wgt.id+".DateLayer.headLabel1").visible = false;
    wgt.getWidget(wgt.id+".DateLayer.headLabel2").visible = true;
    wgt.getWidget(wgt.id+".DateLayer.dateTime2").visible = false;
    wgt.getWidget(wgt.id+".DateLayer.dateTime1").visible = true;
  }
  d.setMilliseconds(0);
  if(curType == 2)
  	wgt.getWidget(wgt.id+".DateLayer.dateTime2").setProperty("value",d.getTime()/1000);
  else
  	wgt.getWidget(wgt.id+".DateLayer.dateTime1").setProperty("value",d.getTime()/1000);
  DateLayer.visible = true;
};

this.showTimeLayer = function() {
  this.allLayersInvisible();
  if(curMode == 1 || curMode == 7 || curMode == 8){
    wgt.getWidget(wgt.id+".TimeLayer.headLabel1").visible = true;
    wgt.getWidget(wgt.id+".TimeLayer.headLabel2").visible = false;
  }else{
    wgt.getWidget(wgt.id+".TimeLayer.headLabel1").visible = false;
    wgt.getWidget(wgt.id+".TimeLayer.headLabel2").visible = true;
  }

  var d = new Date();
  if(curH !== "*"){
    d.setHours(parseInt(curH, 10));
  }

  if(curm !== "*"){
    d.setMinutes(parseInt(curm, 10));
  }

  if(curType == 3){
    wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("disableHour",1);
    d.setHours(0);
  }else{
    wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("disableHour",0);
  }
  if(curMode == 2 || curMode == 3 || curMode == 4 || curMode == 5){
    wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("clockMode",1);
  }else{
    wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("clockMode",0);
  }

  wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").setProperty("timeSelected",d.getTime()/1000);
  TimeLayer.visible = true;
};

this.showDayLayer = function() {
  this.allLayersInvisible();
  this.showDayButtons();
  DayLayer.visible = true;
};

this.showLocationLayer = function() {
  this.allLayersInvisible();
  wgt.getWidget(wgt.id+".LocationLayer.controlList").setProperty("selection",curLocation);
  LocationLayer.visible = true;
};

this.showConditionLayer = function() { 
	this.allLayersInvisible(); 
  wgt.getWidget(wgt.id+".ConditionLayer.controlList").setProperty("value",curCondition);
  ConditionLayer.visible = true; 
};

this.showFrequencyLayer = function() {
  this.allLayersInvisible();
  var value = 100;
  if(curType == 2){
    wgt.getWidget(wgt.id+".FrequencyLayer.msgtext1").setProperty("value",0);
    wgt.getWidget(wgt.id+".FrequencyLayer.field1").setProperty("max",86400);
    value = 0;
    if(curH !== "*"){
      value += (parseInt(curH, 10))*60*60;
    }

    if(curm !== "*"){
      value += parseInt(curm, 10) * 60;
    }
    if(curS !== "*"){
      value += parseInt(curS, 10);
    }
    if(!value) value = 1;
  }else{
    wgt.getWidget(wgt.id+".FrequencyLayer.msgtext1").setProperty("value",1);
    wgt.getWidget(wgt.id+".FrequencyLayer.field1").setProperty("max",10000);
    if(curms)
      value = curms;
  }
  wgt.getWidget(wgt.id+".FrequencyLayer.field1").setProperty("value",value);

  FrequencyLayer.visible = true;
};

this.showprevLayer = function() {
  var layer = prevLayer.pop();
  this.allLayersInvisible();
  if(layer === ModeLayer){
  	this.showModeLayer();
  }
  layer.visible = true;
  if(!prevLayer.length)
    prevLayer.push(layer);
};

this.resetcurValues = function()
{
  curType = prevType;
  curMode = prevMode;
  curMon = prevMon;
  curTue = prevTue;
  curWed = prevWed;
  curThu = prevThu;
  curFri = prevFri;
  curSat = prevSat;
  curSun = prevSun;
  curLocation = prevLocation;
  curY = prevY;
  curM = prevM;
  curD = prevD;
  curH = prevH;
  curm = prevm;
  curS = prevS;
  curms = prevms;
  curCondition = prevCondition;
};

this.updateprevValues = function()
{
  prevType =  mgr.getProperty(sel+".TypeIndex");
  prevMode =  mgr.getProperty(sel+".ModeIndex");
  prevMon =  mgr.getProperty(sel+".Monday");
  prevTue =  mgr.getProperty(sel+".Tuesday");
  prevWed =  mgr.getProperty(sel+".Wednesday");
  prevThu =  mgr.getProperty(sel+".Thursday");
  prevFri =  mgr.getProperty(sel+".Friday");
  prevSat =  mgr.getProperty(sel+".Saturday");
  prevSun =  mgr.getProperty(sel+".Sunday");
  prevY =  mgr.getProperty(sel+".Year");
  prevM =  mgr.getProperty(sel+".Month");
  prevD =  mgr.getProperty(sel+".Day");
  prevH =  mgr.getProperty(sel+".Hour");
  prevm =  mgr.getProperty(sel+".Minute");
  prevS =  mgr.getProperty(sel+".Second");
  prevms = mgr.getProperty(sel+".MilliSec");
  prevCondition = mgr.getProperty(sel+".Condition");

  var strLocations = mgr.getProperty("locations");
  var arrLocations = strLocations.split(";");
  var strSelection = mgr.getProperty(sel+".Location");
  if(strSelection && strSelection.length){
    for (var i = 0; i < arrLocations.length; i++) {
      if(arrLocations[i] === strSelection){
        prevLocation = i;
        break;
      }
    }
  }else{
    for (var i = 0; i < arrLocations.length; i++) {
      if(arrLocations[i] === "Greenwich,UK"){
        prevLocation = i;
        break;
      }
	  if(arrLocations[i] === "London"){
        prevLocation = i;
        break;
      }
    }
  }
};

this.showTypeButtons = function(){
  var typeWgt = wgt.id+".TypeLayer.GridLayout.";
  var val = "ButtonWgt.value";
  wgt.getWidget(typeWgt+"btnEvery").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnHourly").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnDaily").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnWeekly").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnMonthly").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnYearly").setProperty(val, 0);
  wgt.getWidget(typeWgt+"btnDate").setProperty(val, 0);
  if(curType == 2)
    wgt.getWidget(typeWgt+"btnEvery").setProperty(val, 1);
  if(curType == 3)
    wgt.getWidget(typeWgt+"btnHourly").setProperty(val, 1);
  if(curType == 4)
    wgt.getWidget(typeWgt+"btnDaily").setProperty(val, 1);
  if(curType == 5)
    wgt.getWidget(typeWgt+"btnWeekly").setProperty(val, 1);
  if(curType == 6)
    wgt.getWidget(typeWgt+"btnMonthly").setProperty(val,1);
  if(curType == 7)
    wgt.getWidget(typeWgt+"btnYearly").setProperty(val, 1);
  if(curType == 8)
    wgt.getWidget(typeWgt+"btnDate").setProperty(val, 1);
};

this.showModeButtons = function(){
  var modeWgt = wgt.id+".ModeLayer.GridLayout.";
  var val = "ButtonWgt.value";
  wgt.getWidget(modeWgt+"BtnTime").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnSunRise+").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnSunRise-").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnSunSet+").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnSunSet-").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnRandom10").setProperty(val, 0);
  wgt.getWidget(modeWgt+"BtnRandom20").setProperty(val, 0);
  if(curMode == 1)
    wgt.getWidget(modeWgt+"BtnTime").setProperty(val,1);
  if(curMode == 2)
    wgt.getWidget(modeWgt+"BtnSunRise+").setProperty(val, 1);
  if(curMode == 3)
    wgt.getWidget(modeWgt+"BtnSunRise-").setProperty(val, 1);
  if(curMode == 4)
    wgt.getWidget(modeWgt+"BtnSunSet+").setProperty(val, 1);
  if(curMode == 5)
    wgt.getWidget(modeWgt+"BtnSunSet-").setProperty(val, 1);
  if(curMode == 6)
    wgt.getWidget(modeWgt+"BtnRandom10").setProperty(val, 1);
  if(curMode == 7)
    wgt.getWidget(modeWgt+"BtnRandom20").setProperty(val, 1);

};

this.showDayButtons = function()
{
  var dayWgt = wgt.id+".DayLayer.GridLayout.";
  var val = "ButtonWgt.value";
  wgt.getWidget(dayWgt+"BtnMon").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnTue").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnWed").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnThu").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnFri").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnSat").setProperty(val, 0);
  wgt.getWidget(dayWgt+"BtnSun").setProperty(val, 0);
  if(curMon)
    wgt.getWidget(dayWgt+"BtnMon").setProperty(val, 1);
  if(curTue)
    wgt.getWidget(dayWgt+"BtnTue").setProperty(val, 1);
  if(curWed)
    wgt.getWidget(dayWgt+"BtnWed").setProperty(val, 1);
  if(curThu)
    wgt.getWidget(dayWgt+"BtnThu").setProperty(val, 1);
  if(curFri)
    wgt.getWidget(dayWgt+"BtnFri").setProperty(val, 1);
  if(curSat)
    wgt.getWidget(dayWgt+"BtnSat").setProperty(val, 1);
  if(curSun)
    wgt.getWidget(dayWgt+"BtnSun").setProperty(val, 1);

};


this.cancelEdit = function()
{
  mgr.setProperty(sel,"");
  prevType = 0;
  prevLayer = [TypeLayer];
  page.reject();
};
this.initKeypad= function(me, eventInfo)
{
	this.edit(me, eventInfo);
	return false;
};

this.edit = function(me, eventInfo)
{
  prevLayer.push(TypeLayer);
  if(!prevType){
    var listData = wgt.getWidget(wgt.id+".LocationLayer.controlList").getProperty("listData");
    if(!listData){
      var strLocations = mgr.getProperty("locations");
      var arrLocations = strLocations.split(";");
      listData = new Array(arrLocations.length);
      for (var i = 0; i < arrLocations.length; i++) {
        listData[i] = new Array(3);
        listData[i][0] = arrLocations[i];
        listData[i][1] = 0;
        listData[i][2] = 1;
      }
      wgt.getWidget(wgt.id+".LocationLayer.controlList").setProperty("listData",listData);

    }
    listData = wgt.getWidget(wgt.id+".ConditionLayer.controlList").getProperty("listData");
    if(!listData){
      var strConditions = mgr.getProperty("conditionList");
      var arrConditions = strConditions.split(",");
      listData = new Array(arrConditions.length);
      for (var i = 0; i < arrConditions.length; i++) {
        listData[i] = new Array(3);
        listData[i][0] = arrConditions[i];
        listData[i][1] = arrConditions[i];
        listData[i][2] = 1;
      }
      wgt.getWidget(wgt.id+".ConditionLayer.controlList").setProperty("listData",listData);
    }
    this.updateprevValues();
    this.resetcurValues();
  }
  if(curType == 1)
    this.showFrequencyLayer();
  else
    this.showTypeLayer();
};


this.btnCancel = function(me, eventInfo)
{
  this.cancelEdit();
};

this.btnPrev = function(me, eventInfo)
{
  this.showprevLayer();
};

this.nextType = function(me, eventInfo)
{
  prevLayer.push(TypeLayer);
  this.showTypeButtons();
  if(curType == 1)
    this.showFrequencyLayer();
  else if( curType == 4 )
    this.showModeLayer();
  else if( curType == 3 )
    this.showTimeLayer();
  else if( curType == 5 )
    this.showDayLayer();
  else
    this.showDateLayer();
};

this.btnEvery = function(me, eventInfo)
{
  if(curType != 2)
  {
    curH = 0;
    curm = 0;
    curS = 1;
  }
  curType = 2;
  this.nextType(me, eventInfo);
};

this.btnHourly = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 3;
  this.nextType(me, eventInfo);
};

this.btnDaily = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 4;
  this.nextType(me, eventInfo);
};

this.btnWeekly = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 5;
  this.nextType(me, eventInfo);
};

this.btnMonthly = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 6;
  this.nextType(me, eventInfo);
};

this.btnYearly = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 7;
  this.nextType(me, eventInfo);
};

this.btnDate = function(me, eventInfo)
{
  if(curType == 2)
  {
    curH = prevH;
    curm = prevm;
    curS = prevS;
  }
  curType = 8;
  this.nextType(me, eventInfo);
};

this.btnTime = function(me, eventInfo)
{
  curMode = 1;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showTimeLayer();
};
this.btnSunRiseP = function(me, eventInfo)
{
  curMode = 2;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showLocationLayer();

};
this.btnSunRiseM = function(me, eventInfo)
{
  curMode = 3;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showLocationLayer();

};
this.btnSunSetP = function(me, eventInfo)
{
  curMode = 4;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showLocationLayer();

};
this.btnSunSetM = function(me, eventInfo)
{
  curMode = 5;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showLocationLayer();

};
this.btnRandom10 = function(me, eventInfo)
{
  curMode = 6;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showTimeLayer();

};
this.btnRandom20 = function(me, eventInfo)
{
  curMode = 7;
  this.showModeButtons();
  prevLayer.push(ModeLayer);
  this.showTimeLayer();
};

this.nextMode = function(me, eventInfo)
{
  prevLayer.push(ModeLayer);
  if(curMode == 2 || curMode == 3 || curMode == 4 || curMode == 5)
  	this.showLocationLayer();
  else
  this.showTimeLayer();
};

this.btnMon = function(me, eventInfo)
{
  curMon =! curMon;
  this.showDayButtons();
};
this.btnTue = function(me, eventInfo)
{
  curTue =! curTue;
  this.showDayButtons();

};
this.btnWed = function(me, eventInfo)
{
  curWed =! curWed;
  this.showDayButtons();

};
this.btnThu = function(me, eventInfo)
{
  curThu =! curThu;
  this.showDayButtons();

};
this.btnFri = function(me, eventInfo)
{
  curFri =! curFri;
  this.showDayButtons();

};
this.btnSat = function(me, eventInfo)
{
  curSat =! curSat;
  this.showDayButtons();

};
this.btnSun = function(me, eventInfo)
{
  curSun =! curSun;
  this.showDayButtons();

};

this.btnAll = function(me, eventInfo)
{
  if(curMon && curTue && curWed && curThu && curFri && curSat && curSun){
    curMon = 0;
    curTue = 0;
    curWed = 0;
    curThu = 0;
    curFri = 0;
    curSat = 0;
    curSun = 0;
  }else{
    curMon = 1;
    curTue = 1;
    curWed = 1;
    curThu = 1;
    curFri = 1;
    curSat = 1;
    curSun = 1;
  }
  this.showDayButtons();
};

this.nextDay = function(me, eventInfo)
{
  prevLayer.push(DayLayer);
  this.showModeLayer();
};

this.nextLoc = function(me, eventInfo)
{
  prevLayer.push(LocationLayer);
  curLocation = wgt.getWidget(wgt.id+".LocationLayer.controlList").getProperty("selection");
  this.showTimeLayer();
};

this.nextDate = function(me, eventInfo)
{
  var d = new Date(wgt.getWidget(wgt.id+".DateLayer.dateTime1").getProperty("value")*1000);
  if(curType == 2)
  d = new Date(wgt.getWidget(wgt.id+".DateLayer.dateTime2").getProperty("value")*1000);
  curY = d.getFullYear().toString();
  curM = d.getMonth().toString();
  curD = d.getDate().toString();
  if(curType == 2){
  	curS = d.getSeconds().toString();;
    curm = d.getMinutes().toString();;
    curH = d.getHours().toString();;
	}
  if(curType != 8){
    curY = "*";
    if(curType != 7){
      curM = "*";
      if(curType != 6){
      	curD = "*";
    	}
    }
  }
	if(curType == 2){
		prevLayer.push(DateLayer);
    this.showConditionLayer();
	}else{
	  prevLayer.push(DateLayer);
	  this.showModeLayer();
	}
};

this.nextTime = function(me, eventInfo)
{
  var d = new Date(wgt.getWidget(wgt.id+".TimeLayer.timeKeypad").getProperty("timeSelected")*1000);
  curH = d.getHours().toString();
  curm = d.getMinutes().toString();
  curS = 0;
  prevLayer.push(TimeLayer);
  this.showConditionLayer();
};

this.nextFreq = function(me, eventInfo)
{
  var value = wgt.getWidget(wgt.id+".FrequencyLayer.field1").getProperty("value",value);
  curms = value; 
  this.save();
};

this.nextCondition = function(me, eventInfo)
{
  var value = wgt.getWidget(wgt.id+".ConditionLayer.controlList").getProperty("value",value);
  curCondition = value;
  this.save();
};

this.save = function()
{
	if( curType == 3 )
		curMode = 1;
  mgr.setProperty(sel+".TypeIndex",curType);
  mgr.setProperty(sel+".ModeIndex",curMode);
  mgr.setProperty(sel+".Monday",curMon);
  mgr.setProperty(sel+".Tuesday",curTue);
  mgr.setProperty(sel+".Wednesday",curWed);
  mgr.setProperty(sel+".Thursday",curThu);
  mgr.setProperty(sel+".Friday",curFri);
  mgr.setProperty(sel+".Saturday",curSat);
  mgr.setProperty(sel+".Sunday",curSun);
  mgr.setProperty(sel+".Year",curY);
  mgr.setProperty(sel+".Month",curM);
  mgr.setProperty(sel+".Day",curD);
  mgr.setProperty(sel+".Hour",curH);
  mgr.setProperty(sel+".Minute",curm);
  mgr.setProperty(sel+".Second",curS);
  mgr.setProperty(sel+".MilliSec",curms);
  var strLocations = mgr.getProperty("locations");
  var arrLocations = strLocations.split(";");
  mgr.setProperty(sel+".Location",arrLocations[curLocation]);
  mgr.setProperty(sel+".Condition",curCondition);
  mgr.setProperty(sel+".Save",1);
  prevType = 0;
  prevLayer = [TypeLayer];
  page.accept();
};

this.moveLayersInStartPos();// END USERCODE

},"props":null,"tr":null});p0_page0.hideLoading();
p0_page0.execJS();
$hmi.enableRendering();
return p0_page0;})