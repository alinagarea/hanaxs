function myResult() {
	try {
		var connection = $.hdb.getConnection();
		var query = 'select * from "SAP_PLC"."sap.plc.trainning.I320629::I320629.t_company_I320629" ';

		var rs = connection.executeQuery(query);

		var result = "";
		for (var row in rs) {
			result += `ID=${rs[row].COMPANY_ID} Value=${rs[row].COMPANY_NAME} Descr = ${rs[row].COMPANY_DESCRIPTION}\n`;
		}
		connection.close();
	} catch (e) {
		result = e.toString();
	}

    return result;
} 

function newResult() {
    try {
        var newConnection = $.hdb.getConnection();
        
        var myProc = newConnection.loadProcedure("SAP_PLC", "sap.plc.trainning.I320629::getCompany_I320629");
        var nouResult =  myProc(':|').toString();
        nouResult = newConnection.toString();
        newConnection.close();
	} catch (e) {
		nouResult = e.toString();
    }
    /*nouResult = newConnection.toString() */
    return nouResult;
}
