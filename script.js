document.getElementById("interact-btn").addEventListener("click", function() {
    const messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";
    messageBox.innerText = "안녕! 나는 귀여운 동물 친구야. 함께 자연을 탐험하자!";
});

document.getElementById("character").addEventListener("click", function() {
    const messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";
    messageBox.innerText = "나는 여기서 자원을 모은 후 마을을 꾸밀 거야!";
});
