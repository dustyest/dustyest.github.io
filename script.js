
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('watching').textContent = data.watching;
    document.getElementById('playing').textContent = data.playing;
    document.getElementById('social').textContent = data.social;
    document.getElementById('customStatus').textContent = data.status;
    document.getElementById('timestamp').textContent = data.timestamp;

    const statusDot = document.getElementById('status-dot');
    statusDot.textContent = "● " + data.presence;
    statusDot.className = 'status ' + (data.presence.toLowerCase() === "online" ? "online" : "offline");
  });
