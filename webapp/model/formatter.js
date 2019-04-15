sap.ui.define(["sap/ui/core/format/NumberFormat"], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		
		grossAmountChecker : function (sValue){
			if (sValue > 10000){
				return "Error";
			}
			else {return "None";}
			
		},
		
		dotToComaChanger : function (sValue) {
			var oFormatOptions = {
				maxFractionDigits: 2,
				decimalSeparator: ","
			};
			var oFloatFormat = sap.ui.core.format.NumberFormat.getFloatInstance(oFormatOptions);
			return oFloatFormat.format(sValue);
		}
	};
});