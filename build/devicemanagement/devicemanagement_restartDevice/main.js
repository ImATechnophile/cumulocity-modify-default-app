/* devicemanagement_restartDevice 9.3.0 2018-03-26T16:25:08+00:00 796b68a031b1+ (release/9.3.0) tip */
!function(){"use strict";function e(e,t,r){var c=r("Restart device");t.addUrlAction({path:"/device/:deviceId/*",text:c,priority:-1e3,actionBar:!0,showIf:["$routeParams","c8yBase","c8yInventory","c8yDevices",function(e,t,r,c){return r.detail(e.deviceId).then(function(e){var r=t.getResData(e);return c.supportsOperation(r,"c8y_Restart")})}],action:["$routeParams","c8yAlert","c8yDeviceControl","gettextCatalog",function(e,t,r,i){return r.create({deviceId:e.deviceId,description:c,c8y_Restart:{}}).then(function(){t.success(i.getString('Created operation: "{{description | translate}}"!',{description:c}))})}]})}angular.module("c8y.restartDevice",[]).config(["c8yViewsProvider","c8yActionsProvider","gettext",e])}(),function(){"use strict";function e(e){}angular.module("c8y.restartDevice").run(["$templateCache",e])}();