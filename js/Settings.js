'use strict';

var ko = require('knockout');

module.exports = {
	ServerModuleName: '%ModuleName%',
	HashModuleName: 'openpgp',
	
	enableOpenPgp: ko.observable(true),
	
	init: function (oAppDataSection) {
		if (oAppDataSection)
		{
			this.enableOpenPgp(!!oAppDataSection.EnableModule);
		}
	},
	
	update: function (bEnableOpenPgp) {
		this.enableOpenPgp(bEnableOpenPgp);
	}
};