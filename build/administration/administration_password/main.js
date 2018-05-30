/* administration_password 9.3.0 2018-03-26T16:24:17+00:00 796b68a031b1+ (release/9.3.0) tip */
angular.module("c8y.parts.password",[]).config(["c8yNavigatorProvider","c8yViewsProvider","gettext",function(t,a,n){"use strict";t.addNavigation({parent:n("Settings"),name:n("Password"),path:"password",icon:"shield",priority:2e3}),a.when("/password",{templateUrl:"administration_password/views/index.html"})}]),angular.module("c8y.parts.password").controller("passwordCtrl",["$scope","c8yTitle","c8ySettings","$q","c8yAlert","gettext",function(t,a,n,i,e,s){"use strict";function l(){a.changeTitle({title:s("Password")})}function r(a){var n=a.key,i=n.replace(/\./g,"_"),e=JSON.parse(a.value);t[i]=a,t[i].value=e,n==="system."+m&&e&&(t.validityLimitEnforced=f=!0,t.limit_validity={value:e})}function d(t){return n.detail({category:v,key:t}).then(function(t){return t.data}).then(r)}function o(t){return n.getSystemOption({category:v,key:t}).then(function(t){return t.data}).then(function(t){r(_.assign({},t,{key:"system."+t.key}))})}function c(a){return i.all([f?i.when():n.updateOption(t.limit_validity),n.updateOption(t.strength_validity)]).then(function(){f||d(y),d(g),o(h),e.success(s("Password settings updated successfully!")),a.$setPristine()})}function u(t){p(isNaN(t)||parseInt(t,10)<0?t=t.slice(0,-1):t),t.length||p(0)}function p(a){t.limit_validity.value=parseInt(a)}var v="password",y="limit.validity",m="limit.validity",g="strength.validity",h="enforce.strength",f=!1;t.update=c,t.validateDays=u,t.validityLimitEnforced=f,l(),d(y).then(o(m)),d(g),o(h)}]),function(){"use strict";function t(t){var a;a='<div data-ng-controller="passwordCtrl" class="row">\n  <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">\n    <form class="card" name="passwordValidForm" data-ng-submit="update()" novalidate>\n      <div class="card-header">\n        <h4 class="card-title" translate>Password expiration</h4>\n      </div>\n      <hr>\n      <div class="card-block">\n        <div class="row">\n          <div class="col-sm-6">\n            <div class="form-group">\n              <label>{{\'Limit validity for\' | translate}}:</label>\n              <div class="input-group">\n                <input type="text" class="form-control text-right" maxlength="6" ng-model="limit_validity.value" ng-change="validateDays(limit_validity.value)" ng-disabled="validityLimitEnforced">\n                <span class="input-group-addon" translate>days</span>\n              </div>\n              <p class="help-block">{{\'default 0 = unlimited validity\' | translate}}</p>\n            </div>\n          </div>\n        </div>\n        <label class="c8y-checkbox">\n          <input type="checkbox" ng-model="strength_validity.value" ng-checked="system_enforce_strength.value || strength_validity.value" ng-disabled="system_enforce_strength.value">\n          <span></span>\n          <translate>Enforce that all passwords are "strong" (green)</translate>\n        </label>\n      </div>\n\n      <div class="card-footer">\n        <button type="submit" class="btn btn-primary" ng-disabled="passwordValidForm.$invalid || passwordValidForm.$pristine" translate>Save</button>\n      </div>\n    </form>\n    <c8y-tfa-settings></c8y-tfa-settings>\n  </div>\n</div>\n',t.put("administration_password/views/index.html",a),t.put("/apps/administration/password/views/index.html",a)}angular.module("c8y.parts.password").run(["$templateCache",t])}();