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
      window.location.href = "itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/HelloPanthea/HelloPanthea.github.io/main/download.plist";
    }
    else{
      window.location.href = "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBaHp5MV9EblhIT1ZpS1J6ZDB3emwyeGZxME1ZSXc_ZT1XYnVPQ0k.apk";
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


