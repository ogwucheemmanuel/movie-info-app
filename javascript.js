function sqrt() {
    document.getElementById("ro").innerHTML = Math.sqrt(val);
  }

  function c(val) {
    document.getElementById("ro").value = val;
  }

  function v(val) {
    document.getElementById("ro").value += val;
  }

  function e() {
    try {
      c(eval(document.getElementById("ro").value))
    } catch (e) {
      c('Error')
    }
  }