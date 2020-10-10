import { io } from "socket.io-client";

// 1秒ごとに現在の時間をプリントするコマンド
const command = 'test';
const socket = io('http://localhost');//接続先のサーバを指定

console.log(command);

socket.on('connect', () => {
  socket.on('annaunce', (date) => {
    const li = document.createElement("li");
    const jsonBody = document.createTextNode(date);
    $events.appendChild(li).appendChild(jsonBody);
    });
});

