var getDBData = $.import("sap.plc.trainning.I320629", "testlib").myResult;
var getnewDBData = $.import("sap.plc.trainning.I320629", "testlib").newResult;

/*$.response.setBody(getDBData());
$.response.contentType = "text/plain"; */

$.response.setBody(getnewDBData());
$.response.contentType = "text/plain"; 
