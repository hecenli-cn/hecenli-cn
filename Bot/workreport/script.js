var rem
var fanhui = document.getElementById("bot");
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer pat_a6Zq7KjncOsslmynj9XjCrcAwJk9fNVxeq7mELmTSVUU75bzQQDuQ9rieBmopDWl");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Accept", "*/*");
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
function sendchat(){
  var subject = document.getElementById("subject").value;
  var user = document.getElementById("user").value
  document.getElementById("bot").innerHTML='<span>正在努力生成~~~大约需要1分钟</span>'
  var formdata = new FormData();
  formdata.append("bot_id", "7393883371065065512");
  formdata.append("user", user);
  formdata.append("query", subject);
  formdata.append("stream", "false");

  var requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: formdata,
     redirect: 'follow'
  };

  fetch("https://api.coze.cn/open_api/v2/chat", requestOptions)
     .then(response => response.text())
     .then(result => document.getElementById("bot").innerHTML=`<h1>message字段中为生成内容（Markdown格式,\n为换行）</h1><span>${result}</span>`)
     .catch(error => console.log('error', error));
}



