/* core_deviceSelector 9.3.0 2018-03-26T16:25:09+00:00 796b68a031b1+ (release/9.3.0) tip */
angular.module("c8y.deviceSelector",[]),angular.module("c8y.deviceSelector").directive("c8yDeviceSelector",function(){"use strict";return{restrict:"E",templateUrl:"core_deviceSelector/views/deviceSelector.html",controller:"deviceSelectorCtrl",scope:{selectedDevices:"=",disabledDevices:"="}}}),function(){"use strict";function e(e,t,n,c){function i(){l(null,p)}function l(t,c){e.searchDone=!1,e.searchProgress=!0,e.devices.length=0;var i=t&&t.text||"";p=c=c||p,g=c;var l=i?n.searchIncludingChildDevices({text:i,pageSize:c}):n.list({pageSize:c});l.then(o).then(r).finally(function(){e.searchDone=!0,e.searchProgress=!1})}function r(n){return g-=n.length,e.paging.next&&g>0?e.paging.next().then(o).then(r):t.when()}function o(t){var n=_.uniqBy((e.selectedDevices||[]).concat(e.devices||[]).concat(t),"id");return e.devices=n,e.paging=t.paging,n}function s(){g=p,e.paging.loading=!0,e.paging.next().then(o).then(r).finally(function(){e.paging.loading=!1})}function a(){e.devices.length=0,e.selectedDevices.length=0,e.searchDone=!1,e.searchProgress=!1,e.searchData=e.searchData||{},e.searchData.text="",i()}function d(t,n){n||u(),_.forEach(t,function(t){v(t)||e.selectedDevices.push(t),d(t.children,!0)})}function u(){e.selectedDevices.splice(0,e.selectedDevices.length)}function v(t){return _.find(e.disabledDevices,function(e){return e.id===t.id})}function h(t){t.keyCode===f&&l(e.searchData)}var p=5;e.devices=[],e.selectedDevices=[];var g,f=13;e.placeholder=c("Device's name or value of any device's property"),e.search=l,e.loadNext=s,e.clearSearch=a,e.selectAll=d,e.deselectAll=u,e.checkEnter=h,i()}angular.module("c8y.deviceSelector").controller("deviceSelectorCtrl",["$scope","$q","c8yDevices","gettext",e])}(),angular.module("c8y.deviceSelector").directive("c8yDeviceSelectorList",["$compile",function(e){"use strict";return{restrict:"E",replace:!0,scope:{selectedDevices:"=",disabledDevices:"=",device:"="},templateUrl:"core_deviceSelector/views/deviceSelectorList.html",controller:"deviceSelectorListCtrl",compile:function(t,n){var c,i=t.contents().remove();return function(t,n,l){c||(c=e(i)),c(t,function(e,t){n.append(e)})}}}}]),angular.module("c8y.deviceSelector").controller("deviceSelectorListCtrl",["$scope","$q","c8yDevices","gettext","gettextCatalog",function(e,t,n,c,i){"use strict";function l(e){return e.childAssets.references.length+e.childDevices.references.length}function r(e){return e&&!!_.find(p,function(t){return t.id==e.id})}function o(e){r(e)?a(e):s(e)}function s(e){var t=_.find(p,function(t){return t.id==e.id});t||p.push(e)}function a(e){_.remove(p,function(t){return t.id==e.id})}function d(e){l(e)>0&&(e.children?e.children=null:u(e))}function u(e){return e.__loading=!0,t.all([n.childAssets(e),n.childDevices(e)]).then(function(t){delete e.__loading,e.children=[],e.children.push(t[0]),e.children.push(t[1]),e.children=_.flattenDeep(e.children)})}function v(t){return _.find(e.disabledDevices,function(e){return e.id==t.id})}function h(e){var t=e.name||i.getString("Device {{id}}",e);return t}var p=e.selectedDevices;e.collapseExpandChildren=d,e.getChildrenCount=l,e.isSelected=r,e.onDeviceSelect=o,e.isDisabled=v,e.getDeviceTitle=h}]),function(){"use strict";angular.module("c8y.deviceSelector").directive("c8yDeviceSelectorComboDevices",function(){return{restrict:"A",link:function(e,t){function n(){return e.idPath&&!!e.idPath[i]&&e.idPath[i]===e.child.id&&e.selectedChildDevice.id!==e.child.id}function c(){e.child.openChildren=n(),e.child.openChildren&&e.toggleChildren(e,e.child)}e.__el=t;var i=e.depth||0;e.$evalAsync(function(){return e.propagateToggle.value&&c()})}}}).directive("c8yDeviceSelectorCombo",["$compile",function(e){var t='<div ng-include="\'core_deviceSelector/views/deviceSelectorCombo.html\'" ng-controller="DeviceSelectorComboCtrl"><div>';return{restrict:"EA",scope:{parent:"=?",selectedChildDevice:"=?",selectedChildDeviceId:"=?",contextPaths:"=?",onSelect:"&",groupsSelectable:"=?",idPath:"=?",emptySelectionAvailable:"&?",emptySelectionIcon:"&?",emptySelectionLabel:"&?",readOnly:"<",readOnlyInfo:"&?"},templateUrl:"core_deviceSelector/views/deviceSelectorCombo.html",controller:"DeviceSelectorComboCtrl",link:{post:function(n){var c=e(t);n.top=!0,n.toggleChildren=function(e,t){var c=e.target&&angular.element(e.target).scope(),i=c||e,l=c?$(e.target):e.__el;return i.propagateToggle={value:!c},n._toggleChildren(l,i,t)},n._toggleChildren=function(e,t,n){var i=e.is("i")?e.parents(".deviceRow").first():e,l=t.$new();if(t.openChildren=!t.openChildren,l.openChildren=!1,l.propagateToggle=t.propagateToggle,l.parent=n,l.depth=_.isNumber(t.depth)?t.depth+1:1,l.children=[],l.top=!1,t.openChildren)c(l,function(e){i.append(e)});else{var r=i.children().last(),o=angular.element(r[0]).scope();o.$destroy(),r.remove()}}}}}}])}(),function(){"use strict";function e(e,t,n,c,i,l,r){function o(n,i){if(n&&(!i||!n.id||n.id!==i)){var r=_.isObjectLike(n)?t.when(n):l.detail(n).then(c.getResData);r.then(function(t){return m(t),e.parentDevice=t,e.top&&(e.root=O=t,e.selectedChildDevice||!t.isDevice&&!e.groupsSelectable||(e.selectedChildDevice=t)),t}).then(f).then(y).then(s)}}function s(t){e.loading=!1;var n=(e.children||[]).concat(t);e.children=_.uniqBy(n,"id")}function a(t){e.propagateToggle.value=!1,_.remove(e.children,function(e){return!C(e)}),e.loading=!0,e.searchData.lastText=t,l.list({text:r(t),withParents:!0}).then(d)}function d(e){return t.when(e).then(u).then(y).then(s)}function u(e){var t=v(e);return _.filter(e,function(e){return e&&(C(e)||e.c8y_IsDevice||g(e)||h(e,t))})}function v(e){return _(e).map(_.property("childDevices.references")).flatten().map(_.property("managedObject.id")).uniq().value()}function h(e,t){return p(e)&&!_.includes(t,e.id)}function p(e){return _.get(e,"deviceParents.references.length")}function g(e){return!!e.c8y_IsDeviceGroup}function f(e){return i[g(e)?"childAssets":"childDevices"](e)}function m(e){var t=!g(e),n=t?"childDevices":"childAssets";return e.isDevice=t,e.__children=e[n]&&e[n].references||[],e}function y(t){return _.map(t,function(t){return m(t),C(t)&&S(t),e.parent&&(t.openChildren=!1,Array.isArray(e.parent.idPath)?(t.idPath=_.cloneDeep(e.parent.idPath),t.idPath.push(e.parent.id)):t.idPath=[e.parent.id]),t})}function D(t){if(t&&t.id){e.$parent.propagateToggle?e.propagateToggle=e.$parent.propagateToggle:e.propagateToggle={value:!0};var n=t.idPath?t.idPath[0]:t.id;e.idPath=t.idPath,e.selectedChildDeviceId=t.id,e.children||!e.top||e.parent||l.list({ids:n}).then(d)}}function S(t,n){var c=["id","type","name"],i=n?[b(c,t)]:[];(n||e).$emit("selectDevice",i,c,t)}function b(e,t){return _.reduce(e,function(e,n){return e[n]=_.get(t,[n]),e},{})}function C(t){return t&&e.selectedChildDevice&&e.selectedChildDevice.id===t.id}function x(e){return C(e)}function w(){return!e.selectedChildDevice}function k(e){return e||r("Root Device")}function $(){S(O)}function P(){return x(O)||e.selectedChildDevice&&(O&&O.id)===e.selectedChildDevice.id}function I(t){e.select(t,e)}function A(t,n,c,i){var l=e.top?_.reduce(c,function(e,t){return e[t]="_root",e},{}):b(c,e.parentDevice);if(n.push(l),e.top){var r=n.reverse(),o=_.reduce(r[0],function(e,t,n){return e["path_"+n]=_.map(r,n).join("/"),e},{});t.stopPropagation(),e.selectedChildDevice=i,e.contextPaths=o,e.onSelect({selDevice:i,contextPaths:o})}}function R(){return e.loading?"circle-o-notch":"search"}function T(t){t.keyCode===L&&a(e.searchData.text)}function E(){e.$watch("parent",o),e.$watch("selectedChildDevice",D),e.$on("selectDevice",A)}var O;e.placeholder=r("Device's name or value of any device's property"),e.selectRoot=e.selectRoot||$,e.isSelectedRoot=e.isSelectedRoot||P,e.select=e.select||S,e.clickSelect=I,e.isSelected=e.isSelected||x,e.isSelectedById=e.isSelectedById||C,e.isSelectionEmpty=e.isSelectionEmpty||w,e.search=a,e.searchData={},e.propagateToggle={},e.icon=R,e.checkEnter=T,e.getRootName=k,e.emptySelectionAvailable=_.result(e,"emptySelectionAvailable")||!1,e.emptySelectionIcon=_.result(e,"emptySelectionIcon")||"",e.emptySelectionLabel=_.result(e,"emptySelectionLabel")||r("None"),e.readOnlyInfoText=_.result(e,"readOnlyInfo")||r("Selection change is disabled."),E();var L=13}e.$inject=["$scope","$q","$timeout","c8yBase","c8yDevices","c8yInventory","gettext"],angular.module("c8y.deviceSelector").controller("DeviceSelectorComboCtrl",e)}(),function(){"use strict";function e(e){var t;t='\n<!-- this must be ng-form because it\'s used inside a widget config, so it will be inside another form -->\n\n<ng-form name="searchForm">\n  <div class="input-group input-group-search">\n    <input type="search" class="form-control" placeholder="{{placeholder | translate}}" ng-model="searchData.text" ng-keyup="checkEnter($event)">\n    <span class="input-group-addon">\n      <i c8y-icon="search" ng-click="search(searchData)"></i>\n      <i c8y-icon="times" class="text-muted" ng-show="searchData.text.length > 0" ng-click="clearSearch()"></i>\n    </span>\n  </div>\n</ng-form>\n\n\n<div class="alert alert-info" translate ng-show="!searchDone && !searchProgress">\n  Use the input field above to search for devices.\n</div>\n\n\n<div ng-show="searchProgress" class="top-m-xs">\n  <c8y-rectangle-spinner message="\'Searching devices…\' | translate"></c8y-rectangle-spinner>\n</div>\n\n\n<div ng-show="searchDone">\n\n  <div class="alert alert-warning top-m" ng-show="devices.length === 0" translate>\n    No results found.\n  </div>\n\n  <a class="btn btn-link" style="padding-left:0" ng-click="selectAll(devices)" ng-show="devices.length">{{\'Select all\' | translate}}</a>\n  <a class="btn btn-link" ng-click="deselectAll()" ng-show="devices.length">{{\'Deselect all\' | translate}}</a>\n  <div class="modal-inner-scroll" style="max-height: calc(100vh - 320px)">\n    <ul class="list-group">\n      <c8y-device-selector-list ng-repeat="device in devices" selected-devices="selectedDevices" disabled-devices="disabledDevices" device="device"></c8y-device-selector-list>\n    </ul>\n    <div class="card-block">\n      <c8y-load-more hide-page-size="true"></c8y-load-more>\n    </div>\n  </div>\n\n</div>\n',e.put("core_deviceSelector/views/deviceSelector.html",t),e.put("/apps/core/deviceSelector/views/deviceSelector.html",t),t='<div class="deviceSelectorCombo">\n  <div ng-show="top && !parent" class="bottom-m">\n    <div name="searchForm">\n      <div class="input-group input-group-search">\n        <input type="search" class="form-control" placeholder="{{placeholder | translate}}" ng-model="searchData.text" ng-keyup="checkEnter($event)">\n        <span class="input-group-addon">\n            <button class="btn btn-clean text-primary" ng-click="search(searchData.text)" ng-disabled="loading">\n              <i c8y-icon="{{icon()}}" ng-class="{\'fa-spin\': loading}"></i>\n            </button>\n          </span>\n      </div>\n    </div>\n\n    <div class="alert alert-warning no-results top-m-sm" ng-show="!parent && children.length == 0 && !loading">\n      <translate>No assets or devices found for \'{{searchData.lastText}}\'</translate>\n    </div>\n  </div>\n\n  <div ng-show="top && parent" class="parent">\n    <div class="alert alert-info" ng-show="readOnly">\n      {{readOnlyInfoText}}\n    </div>\n    <button ng-disabled="readOnly" class="btn-clean btn" title="{{getRootName(root.name)}}" ng-click="(root.isDevice || groupsSelectable) && selectRoot()" ng-class="{\'selectedDevice\': isSelectedRoot()}">\n        <i c8y-icon="c8y-group-open" ng-show="!root.isDevice" class="text-muted"></i>\n        <i c8y-icon="check" ng-show="root.isDevice" ng-class="{\'text-success\': !readOnly && isSelectedRoot(), \'text-muted\': readOnly || !isSelectedRoot()}"></i>\n        {{getRootName(root.name)}}\n      </button>\n  </div>\n\n  <div class="device-list" ng-class="{noContext: top && !parent}">\n    <div class="device deviceRow text-truncate" ng-if="top && emptySelectionAvailable">\n      <button ng-disabled="readOnly" class="btn btn-clean" ng-click="clickSelect()" ng-class="{\'selectedDevice\': isSelectionEmpty()}" title="{{emptySelectionLabel | translate}}">\n          <i ng-show="emptySelectionIcon" c8y-icon="{{emptySelectionIcon}}" ng-class="{\'text-success\': isSelectionEmpty(), \'text-muted\': !isSelectionEmpty()}">\n          </i>\n          {{emptySelectionLabel | translate}}\n        </button>\n    </div>\n    <div class="device deviceRow text-truncate" ng-repeat="child in children" c8y-device-selector-combo-devices>\n      <div class="deviceContainer">\n        <button ng-disabled="readOnly" class="btn btn-clean text-primary expandBtn" ng-show="child.__children.length" ng-click="toggleChildren($event, child)" style="margin-left: -20px">\n            <i c8y-icon="plus-square" ng-hide="openChildren"></i>\n            <i c8y-icon="minus-square" ng-show="openChildren"></i>\n          </button>\n        <button ng-disabled="readOnly" class="btn-clean btn-clean" ng-click="groupsSelectable ? clickSelect(child) : child.isDevice && clickSelect(child)" ng-class="{\'selectedDevice\': isSelected(child)}" title="{{child.name}}">\n          <i c8y-icon="c8y-group" ng-show="!child.isDevice" ng-class="{\'text-success\': isSelected(child), \'text-muted\': !isSelected(child), \'c8y-icon-group-open\': openChildren}"></i>\n          <i c8y-icon="check" class="text-success" ng-show="child.isDevice && isSelected(child)"></i>\n          <i c8y-icon="exchange" class="text-muted" ng-show="child.isDevice && !isSelected(child)"></i>\n          {{child.name}}\n          </button>\n      </div>\n    </div>\n  </div>\n</div>',e.put("core_deviceSelector/views/deviceSelectorCombo.html",t),e.put("/apps/core/deviceSelector/views/deviceSelectorCombo.html",t),t='<li class="list-group-item text-truncate">\n  <label class="c8y-checkbox checkbox-inline">\n    <input type="checkbox" ng-checked="isSelected(device) || isDisabled(device)" ng-click="onDeviceSelect(device)" ng-disabled="isDisabled(device)"/>\n    <span></span>\n  </label>\n  <span ng-class="{interact: getChildrenCount(device) > 0}" ng-click="collapseExpandChildren(device)">\n    {{ getDeviceTitle(device) }}\n    <small class="text-muted" ng-show="getChildrenCount(device) > 0" translate translate-n="getChildrenCount(device)" translate-plural="({{$count}} children)">(1 child)\n    </small>\n    <i class="fa-spin loadingIndicator" c8y-icon="circle-o-notch" ng-show="device.__loading" style="color:#999"></i>\n  </span>\n  <ul style="list-style-type: none; margin: 0 0 -11px 0; padding: 0">\n    <c8y-device-selector-list ng-repeat="child in device.children | orderBy:\'name\'" selected-devices="selectedDevices" disabled-devices="disabledDevices" device="child"></c8y-device-selector-list>\n  </ul>\n</li>\n',e.put("core_deviceSelector/views/deviceSelectorList.html",t),e.put("/apps/core/deviceSelector/views/deviceSelectorList.html",t)}angular.module("c8y.deviceSelector").run(["$templateCache",e])}();