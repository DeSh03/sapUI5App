sap.ui.define(["sap/ui/core/format/NumberFormat"], function () {
	"use strict";

	return {

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
		},
			 /**
	      * Formats an address to a static google maps image
	      * @public
	      * @param {string} sBuilding the building number
	      * @param {string} sStreet the street
	      * @param {string} sZIP the postal code
	      * @param {string} sCity the city
	      * @returns {string} sValue a google maps URL that can be bound to an image
	      */
	    formatMapUrl: function(sBuilding, sStreet, sZIP, sCity) {
	      return "/GoogleMaps/staticmap?zoom=16&size=400x400&markers="
	        + jQuery.sap.encodeURL(sBuilding +" "+ sStreet + ", " + sZIP +  " " + sCity ) + "&key=AIzaSyDM35Lu2OXI3pF9VhO4v9_NDEFUiq-3oFI";
	    }
	};
});