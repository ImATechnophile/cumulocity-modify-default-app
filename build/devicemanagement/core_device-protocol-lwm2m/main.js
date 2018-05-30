/* core_device-protocol-lwm2m 9.3.0 2018-03-26T16:25:02+00:00 796b68a031b1+ (release/9.3.0) tip */
!function(){"use strict";function t(t,e){t.initUi(),e.initUi()}t.$inject=["c8yLwm2mProvider","c8yLwm2mPostOperationsUiProvider"],angular.module("c8y.lwm2m",["c8y.deviceProtocols"]).config(t)}(),function(){"use strict";function t(t,n,o){function a(t){_.assign(this,t)}function s(){n.register(l),o.when(r.path,r)}function i(e,n,o,a,s){function i(){return a.head(M+"health",{silentError:!0}).then(_.constant(!0),_.constant(!1))}function l(){return l._cached||(l._cached=i()),l._cached}function c(){return["c8yLwm2mUploadStep","c8yLwm2mEditStep"]}function m(){return a.get(x).then(e.getResData)}function d(t){var o=e.getId(t);return n.detail(o).then(e.getResData)}function u(t){var e=v(t);return r.path.replace(/:id$/,e)}function p(t){var e=v(t);return n.remove(e)}function v(t){return _.get(t,"id")}function g(t){return s.upload({url:x+"/ddf",method:"POST",headers:{Accept:"application/json"},file:t,fileName:t.name.replace(/\s+/g,"_")})}function f(t,e){var n=x+"/"+t+"/add";return a.put(n,e)}function b(){var t={url:M+"postRegistrationOptions",method:"GET",silentError:!0};return a(t).then(e.getResData)}function h(t){var e={url:M+"postRegistrationOptions",method:"PUT",data:{commands:t}};return a(e)}function w(){return O||(O=a.get(M+"mappingActions/resourceactions").then(e.getResData).then(y)),O}function y(t){return _.reduce(t,function(t,e){var n=e.name,o=e.args,a=_.get(o,"length")?o.map(function(t){return n+":"+t}):[n];return t.concat(a)},[])}var M=e.url("service/lwm2m-agent/"),x=M+"objectResourceMappings",j={minPeriod:t("The minimum period attribute indicates the minimum time in seconds the LWM2M client MUST wait between two notifications."),maxPeriod:t("The maximum period attribute indicates the maximum time in seconds the LWM2M client MAY wait between two notifications."),greaterThan:t("This greater than attribute defines a threshold high value."),lessThan:t("This less than attribute defines a threshold low value."),step:t("This step attribute defines a minimum change value between two notifications.")},O=void 0;return{flow:c,list:m,detail:d,detailPath:u,upload:g,remove:p,getName:o.getName,updateMapping:f,getPostRegistrationOptions:b,setPostRegistrationOptions:h,helpTexts:j,isServiceAvailable:i,showIf:l,listRowInfoComponent:"c8yDeviceProtocolRowCountResources",getCustomActions:w}}a.$inject=["$routeParams"],i.$inject=["c8yBase","c8yInventory","c8yObjectMappings","$http","$upload"];var l={service:e,id:"lwm2m",name:t("LWM2M")},r={path:"/deviceprotocols/"+l.id+"/:id",template:'<c8y-lwm2m-detail id="vm.id"></c8y-lwm2m-detail>',controllerAs:"vm",controller:a};return{initUi:s,$get:i}}t.$inject=["gettext","c8yDeviceProtocolUiProvider","c8yViewsProvider"];var e="c8yLwm2m";angular.module("c8y.lwm2m").provider(e,t)}(),function(){"use strict";function t(t,e,n,o,a){function s(e){i(!0),p.progress=0,p._progress=_.fill(Array(e.length),0);var n=_.map(e,l);return t.all(n).then(c,m).then(d,d)}function i(t){p.inProgress=t,u.wizardCtrl.setAllowUserInteraction(!t)}function l(t,e){return o.upload(t.file).progress(function(t){r(t,e)}).then(n.getResData)}function r(t,e){var n=p._progress;n[e]=10+t.loaded/t.total*90,p.progress=_.sum(n)/n.length}function c(t){var n=t.length,o=n>1?"c8yLwm2mSuccessStep":"c8yLwm2mEditStep";p.progress=100,u.wizardCtrl.data.uploadedResources=t,e(_.partial(u.wizardCtrl.goTo,o))}function m(t){var e=t.data,n=u.wizardCtrl,o=n.data;o.errorMsg=_.get(e,"message")||a("Parsing the DDF file resulted in an internal error"),o.backStep=n.getCurrentStep().stepId,n.goTo("error")}function d(){i(!1)}var u=this,p={inProgress:!1,progress:0,label:null};_.assign(u,{upload:s,processingStatus:p})}t.$inject=["$q","$timeout","c8yBase","c8yLwm2m","gettext"],angular.module("c8y.lwm2m").component("c8yLwm2mUploadStep",{templateUrl:"core_device-protocol-lwm2m/lwm2mUploadStep.html",require:{wizardCtrl:"^c8yWizardStep"},controllerAs:"vm",controller:t})}(),function(){"use strict";function t(t,e,n){function o(){return l().then(d.wizardCtrl.dismiss)}function a(){return l().then(_.partial(d.wizardCtrl.goTo,"c8yLwm2mUploadStep"))}function s(){var t=r().length,e=1===t?n.detailPath(i()):null;d.wizardCtrl.close({path:e})}function i(){return _.first(r())}function l(){var t=_.map(r(),n.remove);return e.all(t).then(c)}function r(){return _.get(d,"wizardCtrl.data.uploadedResources")}function c(){d.wizardCtrl.uploadedResources=void 0}function m(){var t=r(),e=_.first(t),n=_.get(e,"c8y_objectmapping_ObjectMapping.objectModel");d.resources=t,d.model=_.pick(n,["name","description"])}var d=this;_.assign(d,{cancel:o,back:a,finish:s}),t.$watch(r,m)}t.$inject=["$scope","$q","c8yLwm2m"],angular.module("c8y.lwm2m").component("c8yLwm2mEditStep",{templateUrl:"core_device-protocol-lwm2m/lwm2mEditStep.html",controllerAs:"vm",controller:t,require:{wizardCtrl:"^c8yWizardStep"}})}(),function(){"use strict";function t(t,e){function n(t){t.id&&o()}function o(){t.detail(d.id).then(a),t.getCustomActions().then(s)}function a(e){d.object=e,d.title=t.getName(e)}function s(t){d.customActions=t}function i(e){return t.updateMapping(d.object.id,e).then(o)}function l(){return e.getMappings(d.object)}function r(){return e.getMainObject(d.object)}function c(){return e.getResources(d.object)}function m(t){return _.get(l(),t)}var d=this;_.assign(d,{$onChanges:n,updateMapping:i,getMappings:l,getResources:c,getMainObject:r,getMappingForResource:m})}t.$inject=["c8yLwm2m","c8yObjectMappings"],angular.module("c8y.lwm2m").component("c8yLwm2mDetail",{templateUrl:"core_device-protocol-lwm2m/lwm2mDetail.html",controller:t,controllerAs:"vm",bindings:{id:"<"}})}(),function(){"use strict";function t(t){function e(){n()}function n(){t.getCustomActions().then(function(t){l.customActions=t})}function o(t){t.serverMapping&&s()}function a(){l.isDetailOpen=!l.isDetailOpen}function s(){l.mapping=_.cloneDeep(l.serverMapping)||{}}function i(){var t={},e=l.resource.id;t[e]=_.assign({resourceID:e},l.mapping),l.onUpdate({mapping:t}).then(a)}var l=this;_.assign(l,{$onChanges:o,toggleDetail:a,helpTexts:t.helpTexts,save:i,$onInit:e})}t.$inject=["c8yLwm2m"],angular.module("c8y.lwm2m").component("c8yLwm2mResource",{templateUrl:"core_device-protocol-lwm2m/lwm2mResource.html",controllerAs:"vm",controller:t,bindings:{resource:"<",serverMapping:"<mapping",onUpdate:"&"}})}(),function(){"use strict";function t(t,e,n,o){function a(){i(),e.changeTitle({title:n("LWM2M post-operations")}),r.aceEditorOptions={useWrapMode:!0,showGutter:!0,onLoad:s},r.EXAMPLE_COMMANDS=[{command:"discover",resource:"<objectId>"},{command:"read",resource:"<objectId>/<objectInstanceId>/<resourceId>"},{command:"write",resource:"<objectId>/<objectInstanceId>/<resourceId> <applicationType>"},{command:"execute",resource:"<objectId>/<objectInstanceId>/<resourceId>"},{command:"observe",resource:"<objectId>/<objectInstanceId>/<resourceId>"},{command:"writeattr",resource:"<objectId>/<objectInstanceId>/<resourceId> greater=<value>"}]}function s(t){var e=t;e.$blockScrolling=1/0}function i(){t.getPostRegistrationOptions().then(function(t){r.postRegistrationOptions=t})}function l(e){t.setPostRegistrationOptions(e).then(function(){return o.success(n("Post-operations are successfully saved."))}).catch(function(){return o.danger(n("There was an error processing the post-operations."))})}var r=this;_.assign(r,{$onInit:a,setPostRegistrationOptions:l})}t.$inject=["c8yLwm2m","c8yTitle","gettext","c8yAlert"],angular.module("c8y.lwm2m").component("c8yLwm2mPostOperations",{templateUrl:"core_device-protocol-lwm2m/postOperations/lwm2mPostOperations.html",controller:t,controllerAs:"vm"})}(),function(){"use strict";function t(t,e,n){function o(){a(),s()}function a(){e.when("/"+i,r)}function s(){n.addNavigation(l)}var i="postoperations",l={parent:t("Device types"),name:t("LWM2M post-operations"),path:i,icon:"terminal",showIf:["c8yLwm2m",function(t){return t.showIf()}]},r={template:"<c8y-lwm2m-post-operations></c8y-lwm2m-post-operations>"};return{$get:function(){},initUi:o}}t.$inject=["gettext","c8yViewsProvider","c8yNavigatorProvider"],angular.module("c8y.lwm2m").provider("c8yLwm2mPostOperationsUi",t)}(),function(){"use strict";function t(t){var e;e='<c8y-ui-title-set title="vm.title"></c8y-ui-title-set>\n<c8y-device-protocol-breadcrumb></c8y-device-protocol-breadcrumb>\n\n<div class="row">\n  <div class="col-lg-12 col-lg-max">\n    <div class="card" style="margin-bottom:5px">\n      <div class="card-block">\n        <div class="row">\n          <div class="col-md-7">\n\n            <form class="form form-read-only">\n              <div class="form-control-group">\n                <label class="small" translate>Description</label>\n                <textarea class="form-control" ng-model="vm.getMainObject().description"></textarea>\n              </div>\n            </form>\n\n            <small class="text-muted" ng-hide="1">\n              <a href=""><i c8y-icon="pencil"></i> {{\'Edit\' | translate}}</a>\n            </small>\n          </div>\n\n          <div class="col-md-5">\n            <dl class="dl-horizontal" style="margin-bottom:0">\n              <dt><label class="small" translate>Id</label></dt>\n              <dd style="font-size:1.5em">{{vm.getMainObject().id}}</dd>\n              <dt><label class="small" translate>Date created</label></dt>\n              <dd>{{vm.object.creationTime | absoluteDate}}</dd>\n              <dt><label class="small" translate>Last update</label></dt>\n              <dd>{{vm.object.lastUpdated | absoluteDate}}</dd>\n            </dl>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="card">\n      <div class="card-header"><h4 translate>Resources</h4></div>\n        <div class="list-group">\n\n          <c8y-lwm2m-resource ng-repeat="(resourceId, resource) in vm.getResources()" resource="resource" mapping="vm.getMappingForResource(resourceId)" on-update="vm.updateMapping(mapping)">\n          </c8y-lwm2m-resource>\n\n      </div>\n    </div>\n  </div>\n</div>\n',t.put("core_device-protocol-lwm2m/lwm2mDetail.html",e),t.put("/apps/core/device-protocol-lwm2m/lwm2mDetail.html",e),e='<div class="bg-gray-white">\n    <div class="c8y-wizard-body">\n\n      <div class="alert alert-success" translate>\n        Processing successful\n      </div>\n\n      <form class="form" ng-show="vm.resources.length === 1">\n          <div class="form-group">\n          <label translate>Name</label>\n          <input class="form-control" ng-model="vm.model.name" disabled="disabled">\n        </div>\n        <div class="form-group">\n          <label translate>Description</label>\n          <textarea style="height:150px" class="form-control" ng-model="vm.model.description" disabled="disabled"></textarea>\n        </div>\n      </form>\n\n    </div>\n\n    <div class="c8y-wizard-footer flex-row">\n      <div class="flex-row">\n        <button style="flex:1;min-width:0" class="btn btn-default" ng-click="vm.back()" translate>Back</button>\n        <button style="flex:1;min-width:0" class="btn btn-default" ng-click="vm.cancel()" translate>Cancel</button>\n        <button style="flex:1;min-width:0" class="btn btn-primary" ng-click="vm.finish()" translate>Continue</button>\n      </div>\n    </div>\n  </div>\n',t.put("core_device-protocol-lwm2m/lwm2mEditStep.html",e),t.put("/apps/core/device-protocol-lwm2m/lwm2mEditStep.html",e),e='<div class="list-group-item collapsible" ng-class="{\'expanded\': vm.isDetailOpen}">\n  <div class="flex-row" ng-click="vm.toggleDetail()">\n    <div class="list-item-actions">\n      <button type="button" title="{{\'Expand\' | translate}}" class="collapse-btn" ng-class="{active: vm.isDetailOpen}">\n        <i c8y-icon="chevron-down"></i>\n      </button>\n    </div>\n\n    <div class="list-item-icon">\n      <i c8y-icon="c8y-data-points"></i>\n    </div>\n\n    <div class="list-item-body" style="margin-right: 20px">\n      <div class="row flex-row">\n        <div class="col-xs-7">\n          <small class="text-muted">{{vm.resource.id}}</small>\n          {{vm.resource.name}}\n        </div>\n        <div class="col-xs-5">\n          <div class="list-functionalities">\n            <label class="small hidden-xs" translate>Functionalities</label>&nbsp;\n            <c8y-object-mapping-status-icons mapping="vm.serverMapping"></c8y-object-mapping-status-icons>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class="detail" uib-collapse="!vm.isDetailOpen">\n    <div class="row top-m">\n      <div class="col-md-8 text-pre-wrap bottom-m" ng-show="vm.resource.description"><small>{{vm.resource.description}}</small></div>\n      <div class="col-md-8 text-muted" ng-hide="vm.resource.description"><small><em translate>No description available</em></small></div>\n      <div class="col-md-4">\n        <dl class="dl-horizontal" style="margin-bottom:0">\n          <dt><label class="small" translate>Range</label></dt>\n          <dd><small>{{vm.resource.rangeEnumeration || \'--\'}}</small></dd>\n          <dt><label class="small" translate>Mandatory</label></dt>\n          <dd ng-show="vm.resource.mandatory" translate><small>Yes</small></dd>\n          <dd ng-hide="vm.resource.mandatory" translate><small>No</small></dd>\n          <dt><label class="small" translate>Operations</label></dt>\n          <dd><small>{{vm.resource.operations}}</small></dd>\n          <dt><label class="small" translate>Type</label></dt>\n          <dd><small>{{vm.resource.dataType}}</small></dd>\n          <dt><label class="small" translate>Units</label></dt>\n          <dd><small>{{vm.resource.units || \'--\'}}</small></dd>\n          <dt><label class="small" translate>Instance type</label></dt>\n          <dd ng-hide="vm.resource.multiple" translate><small>Single</small></dd>\n          <dd ng-show="vm.resource.multiple" translate><small>Multiple</small></dd>\n        </dl>\n      </div>\n    </div>\n    <form class="form" name="mappingForm">\n\n      <c8y-object-mapping mapping="vm.mapping" auto-observe-params="true" custom-actions="vm.customActions">\n      </c8y-object-mapping>\n      <button class="btn btn-default top-m bottom-m" style="min-width: 100px" ng-click="vm.toggleDetail()" translate>\n        Cancel\n      </button>\n      <button class="btn btn-primary top-m bottom-m" style="min-width: 100px" ng-click="vm.save()" ng-disabled="mappingForm.$invalid || mappingForm.$pristine" translate>\n        Save\n      </button>\n    </form>\n\n  </div>\n\n</div>\n',t.put("core_device-protocol-lwm2m/lwm2mResource.html",e),t.put("/apps/core/device-protocol-lwm2m/lwm2mResource.html",e),e='<div>\n  <div class="c8y-wizard-body">\n\n    <p class="text-center">\n      <span translate>Start by uploading a DDF or XML file</span>\n    </p>\n\n    <file-picker files="vm.files" multiple="false" required="true" ng-disabled="vm.processingStatus.inProgress" display-drop-zone="true" processing-status="vm.processingStatus" on-file-selected="vm.upload(vm.files)">\n    </file-picker>\n  </div>\n\n  <div class="c8y-wizard-footer">\n    <button class="btn btn-default" ng-click="vm.wizardCtrl.goToIndex(0)" translate>Back</button>\n    <button class="btn btn-default" ng-click="vm.wizardCtrl.dismiss()" translate>Cancel</button>\n  </div>\n</div>\n',t.put("core_device-protocol-lwm2m/lwm2mUploadStep.html",e),t.put("/apps/core/device-protocol-lwm2m/lwm2mUploadStep.html",e),e='<div class="row">\n  <div class="col-md-8">\n    <div class="card">\n      <div class="card-header">\n        <h4 class="card-title">\n          {{\'Commands\' | translate}}\n        </h4>\n      </div>\n      <hr>\n      <form name="optionsForm" novalidate>\n        <div ui-ace="vm.aceEditorOptions" ng-model="vm.postRegistrationOptions.commands" class="form-control" style="height:500px" required>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="col-md-4">\n    <p translate>On the left, you can enter a set of LWM2M shell commands. Each of these commands is sent to every LWM2M device that has successfully registered.</p>\n    <!-- ToDo: agree on texts\n    <p translate >You may use the following syntax for specifying post-registration actions:</p>\n    <pre style="white-space: normal;" class="bg-gray-dark">\n      <ul class="list-unstyled">\n        <li ng-repeat="c in vm.EXAMPLE_COMMANDS" style="margin-top: 15px">\n          <span class="text-danger">{{c.command}}</span>\n          <span class="text-gray-white">{{c.resource}}</span>\n        </li>\n        </li>\n      </ul>\n    </pre>\n    -->\n  </div>\n</div>\n<div class="text-center page-footer">\n  <c8y-ui-button-footer changed="optionsForm.$dirty">\n    <button type="submit" class="btn btn-primary" ng-click="vm.setPostRegistrationOptions(vm.postRegistrationOptions.commands)" ng-disabled="optionsForm.$invalid" translate>\n      Save\n    </button>\n  </c8y-ui-button-footer>\n</div>\n',t.put("core_device-protocol-lwm2m/postOperations/lwm2mPostOperations.html",e),t.put("/apps/core/device-protocol-lwm2m/postOperations/lwm2mPostOperations.html",e)}angular.module("c8y.lwm2m").run(["$templateCache",t])}();