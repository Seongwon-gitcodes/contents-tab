console.log('app');
console.log(popularContents);
console.log(viewContents);
console.log(recentContents);

const $listContent = document.getElementById('contents');

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

}