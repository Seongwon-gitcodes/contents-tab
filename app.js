console.log('app');
console.log(popularContents);
console.log(viewContents);
console.log(recentContents);

const $listContent = document.getElementById('contents');

let jsonData = recentContents;

let count = 10;
let arr = [];

getData(jsonData);

//탭 호출
function callTab(event, tabName) {
    console.log("----------CALLTAB()----------");
    var i, content, tablinks;

    // 기존 컨탠츠 내용 지우기
    content = document.getElementsByClassName("tabContent");
    for (i = 0; i < content.length; i++) {
        while ($listContent.hasChildNodes()) {
            $listContent.removeChild($listContent.firstChild);
        }
        count = 10;
        arr = [];
    }

    // 탭 클래스 속성값 변경
    tablinks = document.getElementsByClassName("tablinks");
    if(event.currentTarget.className.split(".")[1] != "active") {
        event.currentTarget.className += ".active";
    }

    // 호출 데이터 변경
    jsonData = eval(event.currentTarget.getAttribute("id") + "Contents");
    getData(jsonData);
}

// 데이터 불러오기
function getData(dataName) {
    console.log("----------GETDATA()----------")
    const item = JSON.parse(JSON.stringify(dataName));
    for (key in item) {
        const $id = item[key].id;
        if (arr.includes($id)) {
            continue;
        } else {
            arr.push($id);
            const $img = document.createElement('img');
            $img.setAttribute("id", "img");
            $img.height = 200;
            $img.width = 200;
            $img.src = item[key].img;

            const $title = document.createElement('div');
            $title.setAttribute("id", "title");
            $title.innerText = item[key].title;

            const $url = document.createElement('a');
            $url.setAttribute("id", "url");
            $url.href = item[key].url;

            const $cp = document.createElement('div');
            $cp.setAttribute("id", "cp");
            $cp.innerText = item[key].cp;

            const $container = document.createElement('div');
            $container.setAttribute("id","item");

            $url.appendChild($img);
            $url.appendChild($title);
            $url.appendChild($cp);

            $container.appendChild($url);

            $listContent.appendChild($container);
        }


        if ($listContent.childElementCount === count) {
            break;
        }
    }
}