// 캐릭터와 배경의 초기 위치
let character = document.getElementById("character");
let container = document.getElementById("game-container");

let characterX = 50; // 캐릭터의 초기 X 좌표 (화면의 중앙)
let characterY = 50; // 캐릭터의 초기 Y 좌표 (화면의 하단)

const moveSpeed = 5; // 이동 속도

// 키 입력을 감지하여 캐릭터 이동
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "w": // 위로 이동
            characterY -= moveSpeed;
            break;
        case "a": // 왼쪽으로 이동
            characterX -= moveSpeed;
            break;
        case "s": // 아래로 이동
            characterY += moveSpeed;
            break;
        case "d": // 오른쪽으로 이동
            characterX += moveSpeed;
            break;
    }

    // 이동 후 캐릭터의 위치 업데이트
    updateCharacterPosition();
});

// 캐릭터의 위치를 업데이트하는 함수
function updateCharacterPosition() {
    // 화면을 벗어나지 않도록 제한
    characterX = Math.max(0, Math.min(characterX, container.offsetWidth - character.offsetWidth));
    characterY = Math.max(0, Math.min(characterY, container.offsetHeight - character.offsetHeight));

    // 캐릭터의 스타일에 새로운 위치 적용
    character.style.left = characterX + "px";
    character.style.top = characterY + "px";
}

// 상호작용 버튼 클릭 시 메시지 표시
document.getElementById("interact-btn").addEventListener("click", function() {
    const messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";
    messageBox.innerText = "안녕! 나는 귀여운 동물 친구야. 함께 자연을 탐험하자!";
});

// 캐릭터 클릭 시 메시지 표시
character.addEventListener("click", function() {
    const messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";
    messageBox.innerText = "나는 여기서 자원을 모은 후 마을을 꾸밀 거야!";
});
