function counter_fn() {
  var counter = document.getElementById("cntr");
  var count = 0;
  count = parseInt(counter.innerHTML);
  count = count + 1;
  counter.innerHTML = count;
}
window.onload = counter_fn;
