function getOS() {
  var uA = navigator.userAgent || navigator.vendor || window.opera;
  if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';

  var i, os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry'];
  for (i = 0; i < os.length; i++) if (new RegExp(os[i],'i').test(uA)) return os[i];
}
let columns = document.getElementById('columns'); //页面上的容器
  //创建容器
  let buttons = document.createElement("div");
  buttons.className = "buttons";
  buttons.id = "button1";
  columns.appendChild(buttons);

  let button = document.createElement("button");
  button.className = "button trial";
  button.innerHTML = "开发版";
  button.addEventListener("click", function () {
    if(getOS() == 'iOS'){
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if(isSafari){
        window.location.href = "itms-apps://apps.apple.com/app/id1630323035";
      }
      else{
        alert("请使用Safari浏览器打开当前页面");
      }
    }
    else{
      window.location.href = "http://dcyy.tpddns.cn:82/build/apk/Dev.apk";
    }
  });
  buttons.appendChild(button);

  let button2 = document.createElement("button");
  document.createElement("button");
  button2.className = "button learn-more smoothscroll";
  button2.innerHTML = "更新日志";
  button2.addEventListener("click", function () {
    window.location.href = "http://192.168.0.100:82/build/apk/Dev.txt"
  });
  buttons.appendChild(button2);

  //创建容器
  buttons = document.createElement("div");
  buttons.className = "buttons";
  buttons.id = "button1";
  columns.appendChild(buttons);

  button = document.createElement("button");
  button.className = "button trial";
  button.innerHTML = "正式版";
  button.addEventListener("click", function () {
    alert("Comming soon");
  });
  buttons.appendChild(button);

  button2 = document.createElement("button");
  document.createElement("button");
  button2.className = "button learn-more smoothscroll";
  button2.innerHTML = "更新日志";
  button2.addEventListener("click", function () {
    alert("Comming soon");
  });
  buttons.appendChild(button2);


