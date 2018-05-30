/* core_softwareList 9.3.0 2018-03-26T16:26:17+00:00 796b68a031b1+ (release/9.3.0) tip */
angular.module("c8y.parts.softwareList",[]).config(["c8yNavigatorProvider","$routeProvider","gettext",function(n,e,t){n.addNavigation({parent:t("Management"),name:t("Software repository"),priority:1e3,path:"software",icon:"c8y-tools"}),e.when("/software",{templateUrl:"core_softwareList/views/index.html"})}]),function(){"use strict";function n(n,e,t,a,i,o,r,l,s,c){function d(){o.changeTitle({title:s("Software repository")})}function u(e){n.softwares&&!n.refreshLoading||(D.softwares=n.softwares=[]),n.paging=e.paging,e.forEach(function(e){n.softwares.push(e)})}function p(n){return _.assign({type:N},n||{})}function g(n){var e=p(n);return t.list(e).then(u)}function f(){n.paging.loading=!0,n.paging.next().then(u).finally(function(){n.paging.loading=!1})}function m(){n.refreshLoading=!0,n.paging.refresh().then(u).finally(function(){n.refreshLoading=!1})}function w(n){return q.indexOf(n)}function v(n){return w(n)>-1}function y(n){v(n)?q.splice(w(n),1):(q.push(n),n.edited={name:n.name,version:n.version})}function b(e){a({title:s("Confirm delete?"),size:"sm",labels:{ok:s("Delete"),cancel:s("Cancel")},body:c.getString('Do you really want to remove software "{{name}}"?',{name:e.name}),status:"danger"}).then(angular.bind(t,t.remove,e)).then(angular.bind(i,i.removeFromList,n.softwares,e)).then(function(){r.success(s("Software successfully removed."))})}function h(a){return a.type=N,_.merge(a,a.edited),e.when(a).then(_.partialRight(t.addGlobalFlag,!0)).then(x).then(S).then(F).then(t.save).then(function(){r.success(s("Software successfully added.")),m(),$("body").trigger("click"),n.newSw=null})}function x(n){var t=l.getIdFromUrl(n.selectedFile.url),a=t?l.setGlobalFlag(t,!0):e.when();return a.then(_.constant(n))}function S(n){return n.url=n.selectedFile.url,delete n.selectedFile,n}function F(n){return _.unset(n,"edited"),n}function k(){D.newSw=n.newSw={type:N}}function L(){D.newSw=n.newSw=null}function C(n){n?k():L()}var D=this,N="c8y_Software",q=[];n.loadNext=f,n.refresh=m,n.toggle=y,n.isOpen=v,n.onClickDelete=b,n.save=h,n.add=k,n.cancelAdd=L,n.toggled=C,g(),d()}n.$inject=["$scope","$q","c8yInventory","c8yModal","c8yBase","c8yTitle","c8yAlert","c8yBinary","gettext","gettextCatalog"],angular.module("c8y.parts.softwareList").controller("softwareListCtrl",n)}(),function(){"use strict";function n(n){var e;e='<div ng-controller="softwareListCtrl as vm">\n\n  <c8y-ui-action-bar-set>\n    <li action-bar-position="left" class="navbar-form" ng-show="vm.softwares.length > 0">\n      <div class="input-group input-group-search">\n        <input type="search" class="form-control" placeholder="{{\'Filter\' | translate}}&hellip;" ng-model="vm.searchString"/>\n        <span class="input-group-addon">\n        <i c8y-icon="search" ng-show="vm.searchString.length === 0 || !vm.searchString "></i>\n        <i c8y-icon="times" class="text-muted" ng-show="vm.searchString.length > 0" ng-click="vm.searchString = \'\'"></i>\n      </span>\n      </div>\n    </li>\n\n    <div class="dropdown" uib-dropdown auto-close="outsideClick" is-open="false" on-toggle="toggled(open)">\n      <button class="dropdown-toggle c8y-dropdown" uib-dropdown-toggle aria-haspopup="true" aria-expanded="false">\n      <span><i c8y-icon="plus-circle"></i> <translate>Add software</translate></span>\n    </button>\n      <ul class="dropdown-menu dropdown-menu-right" uib-dropdown-menu>\n        <li class="dropdown-form">\n          <form role="form" name="newSoftware" novalidate>\n            <div class="form-group">\n              <label translate>Name</label>\n              <input type="text" class="form-control" ng-model="vm.newSw.name" required>\n            </div>\n            <div class="form-group">\n              <label translate>Version</label>\n              <input type="text" class="form-control" ng-model="vm.newSw.version">\n            </div>\n            <div class="form-group">\n              <label translate>File</label>\n              <c8y-binary-input initial-url="vm.newSw.url" set-global="true" output-file="vm.newSw.selectedFile" allow-free-url-input="true" file-required="true"></c8y-binary-input>\n            </div>\n            <button class="btn btn-primary btn-block" ng-click="save(vm.newSw)" ng-disabled="newSoftware.$invalid" translate>Save</button>\n          </form>\n        </li>\n      </ul>\n    </div>\n\n    <c8y-refresh-btn></c8y-refresh-btn>\n\n  </c8y-ui-action-bar-set>\n\n\n  <div class="c8y-empty-state text-center" ng-show="softwares.length === 0">\n    <h1 class="c8y-icon c8y-icon-tools c8y-icon-duocolor"></h1>\n    <h3 translate>No software to display.</h3>\n    <p translate>Add software using the button on the toolbar.</p>\n  </div>\n\n  <div class="card-group interact-grid">\n    <div class="col-xs-12 col-sm-6 col-md-3" ng-repeat="sw in softwares | filter:vm.searchString | orderBy:[\'name\',\'version\']">\n      <div class="card-flip-container" ng-class="{\'flipping\': isFlipped}">\n        <div class="card-flip" ng-class="{\'flipped\': isFlipped}">\n\n          <div class="card card-front">\n\n            <div class="card-actions">\n              <span class="dropdown settings" is-open="isopen" uib-dropdown>\n              <button type="button" class="dropdown-toggle c8y-dropdown" uib-dropdown-toggle aria-haspopup="true" aria-expanded="false">\n                <i c8y-icon="ellipsis-v"></i>\n              </button>\n              <ul class="dropdown-menu dropdown-menu-right" uib-dropdown-menu>\n                <li>\n                  <button type="button" ng-click="onClickDelete(sw)">\n                    <i c8y-icon="trash"></i> {{\'Delete software\' | translate}}\n                  </button>\n                </li>\n              </ul>\n            </span>\n            </div>\n            <div class="card-block text-center flex-col flex-center" style="min-height: 260px">\n              <div class="dot bg-complementary" style="margin: 0 0 10px 0"><i c8y-icon="c8y-tools"></i></div>\n              <h4 class="text-truncate bottom-m-sm" style="max-width: 100%" title="{{sw.name}}">{{sw.name}}</h4>\n              <small translate class="text-muted">Version</small>\n              <p>{{sw.version}}</p>\n            </div>\n\n            <div class="card-actions-group" style="position:static">\n              <button class="btn-flip" ng-click="isFlipped = !isFlipped; toggle(sw)">\n              <i c8y-icon="reply"></i> {{\'Details\' | translate}}\n            </button>\n            </div>\n          </div>\n          <!-- /.card-front -->\n\n          <div class="card card-back bg-gray-lighter" aria-expanded="false" aria-hidden="true">\n            <div class="card-inner-scroll" style="height: calc(100% - 40px)">\n              <form name="softwareForm" role="form" ng-if="isFlipped" class="card-block">\n                <div class="form-group form-group-sm">\n                  <label translate class="small control-label">Name</label>\n                  <input type="text" class="form-control" ng-model="sw.edited.name" required>\n                </div>\n                <div class="form-group form-group-sm">\n                  <label translate class="small control-label">Version</label>\n                  <input type="text" class="form-control" ng-model="sw.edited.version">\n                </div>\n                <div class="form-group form-group-sm">\n                  <label class="control-label small" translate>File</label>\n                  <c8y-binary-input initial-url="sw.url" set-global="true" output-file="sw.selectedFile" allow-free-url-input="true" file-required="true" c8y-check-dirty="sw.selectedFile.name"></c8y-binary-input>\n                </div>\n                <button class="btn btn-primary btn-sm btn-block" ng-click="save(sw)" ng-disabled="softwareForm.$invalid || softwareForm.$pristine" translate>Save</button>\n              </form>\n            </div>\n\n            <div class="card-actions-group">\n              <button type="button" class="btn-flip" ng-click="isFlipped = !isFlipped; toggle(sw)">\n              <i c8y-icon="reply"></i> {{\'Back\' | translate}}\n            </button>\n            </div>\n          </div>\n          <!-- /.card-back -->\n        </div>\n      </div>\n      <!-- /.card-flip-container -->\n\n    </div>\n    <c8y-load-more></c8y-load-more>\n  </div>\n\n</div>',n.put("core_softwareList/views/index.html",e),n.put("/apps/core/softwareList/views/index.html",e)}angular.module("c8y.parts.softwareList").run(["$templateCache",n])}();