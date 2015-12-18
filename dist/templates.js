angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html ng-app=\"test\">\n\n  <head>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/angular-dialog-service/5.2.11/dialogs.min.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\" />\n    \n    <script src=\"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js\"></script>\n    \n    <script src=\"https://code.angularjs.org/1.3.20/angular.js\"></script>\n    <script src=\"https://code.angularjs.org/1.3.17/angular-sanitize.js\"></script>\n    <script src=\"https://code.angularjs.org/1.3.17/angular-animate.js\"></script>\n    \n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.1/ui-bootstrap.min.js\"></script>\n    <script src=\"//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.14.3.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/angular-dialog-service/5.2.11/dialogs.min.js\"></script>\n    \n    <script src=\"mouth.js\"></script>\n    <script src=\"updateTooth.js\"></script>\n    <script src=\"tooth.js\"></script>\n    <script src=\"toothface.js\"></script>\n    <script src=\"overlay.js\"></script>\n\n    <script src=\"example.js\"></script>\n    \n  </head>\n\n  <body ng-controller=\"TestCtrl\">\n    <h1>Odontograma</h1>\n    <mouth ng-model=\"myMouth\" log=\"log\"></mouth>\n    <h3>Log:</h3>\n    <pre ng-bind-html=\"log | prettify\"></pre>\n    <h3>Mouth:</h3>\n    <pre ng-bind-html=\"myMouth | prettify\"></pre>\n  </body>\n\n</html>\n");
$templateCache.put("mouth.html","<div class=\"mouth\">\n<div class=\"jaw\">\n<tooth ng-model=\"tooth\" conventions=\"conventions\" \n       class=\"opacity quadrant1\"\n       update=\"updateTooth(tooth)\"\n       ng-repeat=\"tooth in mouth.quadrant1 track by tooth.id\">\n</tooth>\n<div class=\"mouthCenter\"></div>\n<tooth ng-model=\"tooth\" conventions=\"conventions\" \n       class=\"opacity quadrant2\"\n       update=\"updateTooth(tooth)\"\n       ng-repeat=\"tooth in mouth.quadrant2 track by tooth.id\">\n</tooth>\n</div>\n<div class=\"jaw\">\n<tooth ng-model=\"tooth\" conventions=\"conventions\" \n       class=\"opacity quadrant3\"\n       update=\"updateTooth(tooth)\"\n       ng-repeat=\"tooth in mouth.quadrant3 track by tooth.id\">\n</tooth>\n<div class=\"mouthCenter\"></div>\n<tooth ng-model=\"tooth\" conventions=\"conventions\" \n       class=\"opacity quadrant4\"\n       update=\"updateTooth(tooth)\"\n       ng-repeat=\"tooth in mouth.quadrant4 track by tooth.id\">\n</tooth>\n</div>\n<update-tooth ng-model=\"currentTooth\"></update-tooth>\n</div>");
$templateCache.put("tooth.html","<div class=\"tooth toothPart cuadrante{{cuadrante}}\" ng-click=\"update(tooth)\">\n  <div class=\"imagePart\">\n    <canvas width=\"45\" height=\"45\" id=\"canvas\" drawing \n    class=\"picture level2\" \n    over=\"tooth.root.over.picture\" \n    fill=\"tooth.root.fill.picture\" \n    base=\"\'http://i.imgur.com/apo4I8a.png\'\"></canvas>\n \n    <canvas width=\"45\" height=\"45\" id=\"canvas\" drawing \n    class=\"picture float-top level3\" \n    over=\"tooth.crown.over.picture\" \n    fill=\"tooth.crown.fill.picture\" \n    base=\"\'http://i.imgur.com/fSb96IV.png\'\"></canvas>\n\n    <div ng-style=\"{\'background-image\':\'url(\'+tooth.complete.over.picture+\')\', \'background-size\': \'100% auto\'}\" \n    class=\"picture float-top level4\"></div>\n  </div>\n  <div class=\"facesPart\">\n    <div toothface class=\"toothface center\" uib-popover=\"Bucal o Vestibular\" popover-trigger=\"mouseenter\" ng-model=\"tooth.faces.buccal\">\n    </div>\n    <div class=\"parent\">\n      <div toothface class=\"toothface distal\" uib-popover=\"Distal\" popover-trigger=\"mouseenter\" ng-model=\"tooth.faces.distal\">\n      </div>\n      <div toothface class=\"toothface oclussal\" uib-popover=\"Oclusal o Incisal\" popover-trigger=\"mouseenter\" ng-model=\"tooth.faces.occlusal\">\n      </div>\n      <div toothface class=\"toothface messial\" uib-popover=\"Mesial\" popover-trigger=\"mouseenter\" ng-model=\"tooth.faces.messial\">\n      </div>\n    </div>\n    <div toothface class=\"toothface center\" uib-popover=\"Lingual o Palatino\" popover-trigger=\"mouseenter\" ng-model=\"tooth.faces.lingual\">\n    </div>\n  </div>\n  <div class=\"numberPart\">{{tooth.id}}</div>\n</div>");
$templateCache.put("toothface.html","<div ng-class=\"[{ active: ngModel.isActive}, ngModel.color]\" \n			class=\"{{ngModel.isActive ? \'active\':\'\'}}\"\n     ng-click=\"toogleActive()\">     \n</div>\n    \n    ");
$templateCache.put("updateTooth.html","<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{labels.title}} {{tooth.id}}</h4></div>\n<div class=\"modal-body\">\n  <ng-form name=\"nameDialog\" novalidate role=\"form\">\n    <div>\n      <div class=\"row\">\n        <div class=\"col-xs-2\">\n          <div class=\"big\" ng-include src=\"\'tooth.html\'\"></div>\n        </div>\n\n        <div class=\"col-xs-9\">\n\n          <label>{{labels.tooth}}</label>\n          <div class=\"form-group\" ng-class=\"{true: \'has-error\'}[nameDialog.comment.$dirty && nameDialog.comment.$invalid]\">\n            <div class=\"btn-group\">\n              <button type=\"button\" ng-repeat=\"convention in conventions.complete.fill track by convention.id\" class=\"btn btn-default\" title=\"{{convention.description}}\" ng-model=\"tooth.complete.fill\" uib-btn-radio=\"convention\" uncheckable ng-disabled=\"disableTooth()\">\n                <img ng-src=\"{{convention.picture}}\" width=20 height=20>\n              </button>\n            </div>\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default\" ng-repeat=\"convention in conventions.complete.over track by convention.id\" title=\"{{convention.description}}\" ng-model=\"tooth.complete.over\" uib-btn-radio=\"convention\" uncheckable ng-disabled=\"disableTooth()\">\n                <img ng-src=\"{{convention.picture}}\" width=20 height=20>\n              </button>\n            </div>\n          </div>\n\n          <label for=\"course\">{{labels.root}}</label>\n          <div class=\"form-group input-group-lg\" ng-class=\"{true: \'has-error\'}[nameDialog.comment.$dirty && nameDialog.comment.$invalid]\">\n            <div class=\"btn-group\">\n\n              <button type=\"button\" class=\"btn btn-default\" ng-repeat=\"convention in conventions.root.fill track by convention.id\" title=\"{{convention.description}}\" ng-model=\"tooth.root.fill\" uib-btn-radio=\"convention\" uncheckable ng-disabled=\"disableToothPart()\">\n                <div class=\'triangle\'>\n                  <img ng-src=\"{{convention.picture}}\" width=20 height=20>\n                </div>\n\n              </button>\n\n            </div>\n            <div class=\"btn-group\">\n\n              <button type=\"button\" class=\"btn btn-default\" ng-repeat=\"convention in conventions.root.over track by convention.id\" title=\"{{convention.description}}\" ng-model=\"tooth.root.over\" uib-btn-radio=\"convention\" uncheckable ng-disabled=\"disableToothPart()\">\n                <img ng-src=\"{{convention.picture}}\" width=20 height=20>\n              </button>\n            </div>\n          </div>\n\n          <label for=\"course\">{{labels.crown}}</label>\n\n          <div class=\"form-group input-group-lg\" ng-class=\"{true: \'has-error\'}[nameDialog.comment.$dirty && nameDialog.comment.$invalid]\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default\" ng-repeat=\"convention in conventions.crown.fill track by convention.id\" title=\"{{convention.description}}\" ng-model=\"tooth.crown.fill\" uib-btn-radio=\"convention\" uncheckable ng-disabled=\"disableToothPart()\">\n                <img class=\"circle\" ng-src=\"{{convention.picture}}\" width=20 height=20>\n              </button>\n            </div>\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default\" ng-repeat=\"convention in conventions.crown.over track by convention.id\" title=\"{{convention.description}}\" ng-model=\"tooth.crown.over\" uib-btn-radio=\"convention\" uncheckable ng-disabled=\"disableToothPart()\">\n                <img class=\"circle\" ng-src=\"{{convention.picture}}\" width=20 height=20>\n              </button>\n            </div>\n          </div>\n\n          <label for=\"course\">{{labels.faces}}</label>\n\n          <div class=\"form-group input-group-lg\" ng-class=\"{true: \'has-error\'}[nameDialog.comment.$dirty && nameDialog.comment.$invalid]\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default\" ng-repeat=\"convention in conventions.face.fill track by convention.id\" title=\"{{convention.description}}\" ng-disabled=\"disableToothPart()\" ng-click=\"setConventionToFaces(convention)\">\n                <img ng-src=\"{{convention.picture}}\" width=20 height=20>\n              </button>\n            </div>\n          </div>\n\n          <div class=\"form-group input-group-lg\" ng-class=\"{true: \'has-error\'}[nameDialog.comment.$dirty && nameDialog.comment.$invalid]\">\n            <label class=\"control-label\" for=\"course\">{{labels.comment}}</label>\n            <textarea id=\"comment\" name=\"comment\" class=\"form-control\" ng-model=\"tooth.comment\"></textarea>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </ng-form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"done()\">Save</button>\n</div>");}]);