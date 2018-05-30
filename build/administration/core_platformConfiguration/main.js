/* core_platformConfiguration 9.3.0 2018-03-26T16:25:59+00:00 796b68a031b1+ (release/9.3.0) tip */
!function(){"use strict";function t(t){t.init()}t.$inject=["c8yPlatformConfigurationUiProvider"],angular.module("c8y.platformConfiguration",[]).config(t)}(),function(){"use strict";function t(t,e,i){function n(){a(),r()}function a(){t.when("/"+s.path,s.view)}function r(){e.addNavigation({name:i("Configuration"),parent:i("Settings"),path:s.path,icon:s.icon,showIfPermissions:{anyRole:s.requiresAnyRole},showIf:s.showIf})}function o(t,e,i,n,a){function r(){return t.when({type:"object",properties:{"system.password.enforce.strength":{title:a.getString('Enforce "green" passwords for all users'),type:"boolean"},"system.password.limit.validity":{title:a.getString("Password validity limit (days)"),description:a.getString("Leave empty to use value from tenant options"),type:"number",minimum:0,maximum:999999},"system.password.history.size":{title:a.getString("Password history size"),type:"number",minimum:0,"x-schema-form":{placeholder:a.getString("e.g.: 10")}},"system.password.green.min-length":{title:a.getString('Minimal length of "green" password'),description:a.getString("Leave empty to skip this constraint"),type:"number",minimum:0},"default.tenant.applications":{title:a.getString("Default applications for new tenants"),description:a.getString("Comma-separated list of application names"),type:"string","x-schema-form":{placeholder:a.getString("e.g.: administration,devicemanagement,cockpit")}},"email.protocol":{title:a.getString("Protocol"),type:"string",enum:["smtp"],"x-schema-form":{titleMap:[{value:"smtp",name:"SMTP"}]}},"email.host":{title:a.getString("Host"),type:"string","x-schema-form":{placeholder:a.getString("e.g.: localhost")}},"email.port":{title:a.getString("Port"),type:"number",minimum:1,maximum:65535,"x-schema-form":{placeholder:a.getString("e.g.: 25")}},"email.username":{title:a.getString("Username"),type:"string"},"email.password":{title:a.getString("Password"),type:"string","x-schema-form":{type:"password"}},"email.from":{title:a.getString("Sender address"),type:"string","x-schema-form":{type:"email"}},"passwordReset.sendNotificationToUnknownEmails":{title:a.getString("Send notifications to unknown e-mail addresses"),type:"boolean"},"passwordReset.email.subject":{title:a.getString("E-mail subject"),description:a.getString("Subject used for all password reset related e-mails"),type:"string"},"passwordReset.token.email.template":{title:a.getString("Password reset e-mail template (when address is known)"),description:a.getString("Placeholders: {host}, {tenant-domain}, {token}. Whole link to reset password can be e.g.: {host}/apps/devicemanagement/index.html?token={token}"),type:"string","x-schema-form":{type:"textarea"}},"passwordReset.user.not.found.email.template":{title:a.getString("Password reset e-mail template (when address is not known)"),type:"string","x-schema-form":{type:"textarea"}},"passwordReset.success.email.template":{title:a.getString("Password change confirmation e-mail template"),description:a.getString("Placeholders: {host}, {tenant-domain}"),type:"string","x-schema-form":{type:"textarea"}},"passwordReset.invite.template":{title:a.getString("Invitation e-mail template"),description:a.getString("Placeholders: {host}, {tenant-domain}, {token}. Whole link to setup password can be e.g.: {host}/apps/devicemanagement/index.html?token={token}"),type:"string","x-schema-form":{type:"textarea"}},"export.data.mail.subject":{title:a.getString("E-mail subject"),description:a.getString("Placeholders: {host}, {binaryId}. Whole link to result file is: {host}/inventory/binaries/{binaryId}"),type:"string"},"export.data.mail.text":{title:a.getString("E-mail template"),description:a.getString("Placeholders: {host}, {binaryId}. Whole link to result file is: {host}/inventory/binaries/{binaryId}"),type:"string","x-schema-form":{type:"textarea"}},"export.data.mail.text.userunauthorized":{title:a.getString("User unauthorized error message"),description:a.getString("Placeholders: {user}, {exportApi}"),type:"string"},"two-factor-authentication.token.sms.template":{title:a.getString("Verification token SMS template"),description:a.getString("Placeholder: {token} - generated token"),type:"string","x-schema-form":{placeholder:a.getString("e.g.: Verification code: {token}")}},"system.support.url":{title:a.getString("Url"),type:"string",description:a.getString('Possible values: url string, "false" (hides the link), leave empty to use default')},"storageLimit.warning.email.subject":{title:a.getString("Warning e-mail subject"),description:a.getString("E-mail sent one day before data removal is performed"),type:"string"},"storageLimit.warning.email.template":{title:a.getString("Warning e-mail template"),description:a.getString("E-mail sent one day before data removal is performed. Placeholders: {tenant}, {size} - storage usage in %"),type:"string","x-schema-form":{type:"textarea"}},"storageLimit.process.email.subject":{title:a.getString("Limit exceeded e-mail subject"),description:a.getString("E-mail sent after over-limit data has been removed"),type:"string"},"storageLimit.process.email.template":{title:a.getString("Limit exceeded e-mail template"),description:a.getString("E-mail sent after over-limit data has been removed. Placeholders: {tenant}, {size} - storage usage in %"),type:"string","x-schema-form":{type:"textarea"}},"tenantSuspend.mail.sendtosuspended":{title:a.getString("Send e-mail to suspended tenant's administrator"),type:"boolean"},"tenantSuspend.mail.additional.address":{title:a.getString("Tenant suspended e-mail additional receiver"),type:"string","x-schema-form":{type:"email"}},"tenantSuspend.mail.subject":{title:a.getString("Tenant suspended e-mail subject"),description:a.getString("Placeholder: {tenant} - suspended tenant's id"),type:"string"},"tenantSuspend.mail.text":{title:a.getString("Tenant suspended e-mail template"),description:a.getString("Placeholder: {tenant} - suspended tenant's id"),type:"string","x-schema-form":{type:"textarea"}},"system.support-user.enabled":{title:a.getString("Enable support user"),description:a.getString("Possible values: true, false, date until user should remain enabled"),type:"string","x-schema-form":{placeholder:a.getString("e.g.: {{expireDate}}",{expireDate:moment().add(1,"day").format(e.dateFullFormat)})}}}})}function o(e){var i=e?[]:v;return _.forEach(v,function(t){_.includes(e,t.id)&&i.push(t)}),t.when(_.map(i,s))}function s(t){var e={type:"section"};return _.assign(e,t),e.items=_.map(e.items,function(t){return{key:[t]}}),e.title=a.getString(e.title),e}function m(){return n.hasAnyRole(["ROLE_OPTION_MANAGEMENT_ADMIN"]).then(function(t){return{formDefaults:{readonly:!t}}})}function p(){var e=r(),n=i.list({category:l});return t.all({schema:e,options:n}).then(function(t){return _.transform(t.options,function(e,n){var a=n.key;e[a]=i.parseOptionRawValue(n.value);var r=_.get(t.schema,["properties",a,"type"]);"string"===r&&(e[a]=e[a].toString())},{})})}function g(t,e){var i=u(t,e);return c(i)}function u(t,e){return _(t).map(function(t,i){var n,a=_.get(e,[i]),r=t;return _.isEqual(a,r)||(n={key:i,oldValue:a,newValue:r}),n}).filter().value()}function c(e){return _.reduce(e,function(e,n){var a=_.constant(t.when()),r=_.isNull(n.newValue),o=""===n.newValue;return r||o?_.isUndefined(n.oldValue)||(a=i.deleteOption):a=i.updateOption,e.then(_.partial(a,{category:l,key:n.key,value:n.newValue}))},t.when())}return{getSchema:r,getForm:o,getSchemaFormOptions:m,getConfiguration:p,saveConfiguration:g}}o.$inject=["$q","c8yBase","c8ySettings","c8yPermissions","gettextCatalog"];var s={path:"configuration",icon:"sliders",view:{template:"<c8y-platform-configuration-form></c8y-platform-configuration-form>"},requiresAnyRole:["ROLE_OPTION_MANAGEMENT_READ"],showIf:["c8yTenant",function(t){return t.isCurrentUserTopTenant()}]},l="configuration",m={title:i("Applications"),id:"applicationsOptions",items:["default.tenant.applications"]},p={title:i("Passwords"),id:"passwordsOptions",items:["system.password.enforce.strength","system.password.limit.validity","system.password.history.size","system.password.green.min-length"]},g={title:i("Two-factor authentication"),id:"twoFactorAuthenticationOptions",items:["two-factor-authentication.token.sms.template"]},u={title:i("Support link"),id:"supportLinkOptions",items:["system.support.url"]},c={title:i("Password reset"),id:"passwordResetOptions",items:["passwordReset.sendNotificationToUnknownEmails","passwordReset.token.email.template","passwordReset.user.not.found.email.template","passwordReset.email.subject","passwordReset.success.email.template","passwordReset.invite.template"]},d={title:i("Support user"),id:"supportUserOptions",items:["system.support-user.enabled"]},f={title:i("E-mail server"),id:"emailServerOptions",items:["email.protocol","email.host","email.port","email.username","email.password","email.from"]},h={title:i("Data export"),id:"dataExportOptions",items:["export.data.mail.subject","export.data.mail.text","export.data.mail.text.userunauthorized"]},y={title:i("Storage limit"),id:"storageLimitOptions",items:["storageLimit.warning.email.subject","storageLimit.warning.email.template","storageLimit.process.email.subject","storageLimit.process.email.template"]},S={title:i("Suspending tenants"),id:"suspendingTenantsOptions",items:["tenantSuspend.mail.sendtosuspended","tenantSuspend.mail.additional.address","tenantSuspend.mail.subject","tenantSuspend.mail.text"]},v=[m,p,g,u,c,d,f,h,y,S];return{$get:o,init:n,hookViews:a}}t.$inject=["c8yViewsProvider","c8yNavigatorProvider","gettext"],angular.module("c8y.platformConfiguration").provider("c8yPlatformConfigurationUi",t)}(),function(){"use strict";function t(t,e,i,n,a){function r(){return o()}function o(){return e.all({schema:i.getSchema(),form:i.getForm(g.optionsGroups),options:i.getSchemaFormOptions(),configuration:i.getConfiguration()}).then(function(t){p=_.cloneDeep(t.configuration),_.assign(g,t)})}function s(){var e=_.get(g,"options.formDefaults.readonly"),i=_.get(t,"platformConfigurationForm.$invalid");return!e&&!i}function l(){return i.saveConfiguration(g.configuration,p).then(o).then(_.partial(n.success,a("Configuration saved successfully!")))}function m(){return o().then(_.partial(n.success,a("Configuration reloaded!")))}var p,g=this;_.assign(g,{$onInit:r,canSave:s,save:l,cancel:m})}t.$inject=["$scope","$q","c8yPlatformConfigurationUi","c8yAlert","gettext"],angular.module("c8y.platformConfiguration").component("c8yPlatformConfigurationForm",{templateUrl:"core_platformConfiguration/platformConfigurationForm.html",bindings:{optionsGroups:"<"},controller:t,controllerAs:"vm"})}(),function(){"use strict";function t(t){var e;e='<c8y-ui-title-set title="\'Configuration\' | translate"></c8y-ui-title-set>\n<div class="card">\n  <div class="card-block">\n    <form name="platformConfigurationForm" novalidate>\n      <c8y-schema-form schema="vm.schema" form="vm.form" model="vm.configuration" options="vm.options">\n      </c8y-schema-form>\n    </form>\n  </div>\n\n  <div class="page-footer text-center">\n    <c8y-ui-button-footer changed="platformConfigurationForm.$dirty">\n      <button class="btn btn-primary" type="button" ng-click="vm.save()" ng-disabled="!vm.canSave() || !platformConfigurationForm.$dirty" translate>\n        Save configuration\n      </button>\n    </c8y-ui-button-footer>\n  </div>\n</div>\n',t.put("core_platformConfiguration/platformConfigurationForm.html",e),t.put("/apps/core/platformConfiguration/platformConfigurationForm.html",e)}angular.module("c8y.platformConfiguration").run(["$templateCache",t])}();