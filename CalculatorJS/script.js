const x = document.getElementById('x');
    const y = document.getElementById('y');
    const result = document.getElementById('result');

    function update() {
      const xv = Number(x.value || 0);
      const yv = Number(y.value || 0);
      result.textContent = xv + yv;
    }

    x.addEventListener('input', update);
    y.addEventListener('input', update);
    update();
  