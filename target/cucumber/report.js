$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16541967700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "驗證登入成功",
  "description": "",
  "id": "login;驗證登入成功",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "我開啟登入頁",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "我在帳號輸入 \"evan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "我在密碼輸入 \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "我點擊登入",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Result 會顯示:\"登入成功\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScenario.i_open_the_application()"
});
formatter.result({
  "duration": 538211500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "evan",
      "offset": 8
    }
  ],
  "location": "LoginScenario.i_type_on_loginId(String)"
});
formatter.result({
  "duration": 771615700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 8
    }
  ],
  "location": "LoginScenario.i_type_on_password(String)"
});
formatter.result({
  "duration": 626519900,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenario.i_tap_login()"
});
formatter.result({
  "duration": 624357700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "登入成功",
      "offset": 12
    }
  ],
  "location": "LoginScenario.i_validate_result(String)"
});
formatter.result({
  "duration": 553490500,
  "status": "passed"
});
formatter.after({
  "duration": 897428100,
  "status": "passed"
});
formatter.before({
  "duration": 12184083700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "驗證登入失敗",
  "description": "",
  "id": "login;驗證登入失敗",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "我開啟登入頁",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "我在帳號輸入 \"evan\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "我在密碼輸入 \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "我點擊登入",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Result 會顯示:\"登入失敗\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScenario.i_open_the_application()"
});
formatter.result({
  "duration": 37324000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "evan",
      "offset": 8
    }
  ],
  "location": "LoginScenario.i_type_on_loginId(String)"
});
formatter.result({
  "duration": 715509600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 8
    }
  ],
  "location": "LoginScenario.i_type_on_password(String)"
});
formatter.result({
  "duration": 1097470100,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenario.i_tap_login()"
});
formatter.result({
  "duration": 644966900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "登入失敗",
      "offset": 12
    }
  ],
  "location": "LoginScenario.i_validate_result(String)"
});
formatter.result({
  "duration": 546219700,
  "status": "passed"
});
formatter.after({
  "duration": 940644600,
  "status": "passed"
});
});