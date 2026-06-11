let ms = 0, interval = null, running = false;

    function pad(n) {
      return String(n).padStart(2, '0');
    }

    function update() {
      ms++;
      let total = ms;
      let h = Math.floor(total / 360000); total %= 360000;
      let m = Math.floor(total / 6000);   total %= 6000;
      let s = Math.floor(total / 100);
      let c = total % 100;
      document.getElementById('display').innerHTML =
        pad(h) + ':' + pad(m) + ':' + pad(s) +
        '<span class="ms">.' + pad(c) + '</span>';
    }

    function startTimer() {
      if (running) return;
      running = true;
      interval = setInterval(update, 10);
    }

    function pauseTimer() {
      if (!running) return;
      clearInterval(interval);
      running = false;
    }

    function restartTimer() {
      clearInterval(interval);
      running = false;
      ms = 0;
      document.getElementById('display').innerHTML =
        '00:00:00<span class="ms">.00</span>';
    }