function mostrarInfo(){
  document.getElementById("panel").classList.add("active");
}

function cerrarInfo(){
  document.getElementById("panel").classList.remove("active");
}
document.getElementById('search').addEventListener('input', function(e) {
  if (this.value.length > 0) {
    this.setAttribute('valid', '');
  } else {
    this.removeAttribute('valid');
  }
});
  document.querySelectorAll('model-viewer').forEach((modelViewer) => {
  modelViewer.addEventListener('load', () => {
    modelViewer.classList.add('loaded');
  });
});

document.querySelectorAll('.card').forEach((card) => {
  const viewer = card.querySelector('model-viewer');
  card.addEventListener('mouseenter', () => {
    viewer.setAttribute('camera-orbit', '90deg -42deg 50m');
  });
  card.addEventListener('mouseleave', () => {
    viewer.setAttribute('camera-orbit', '64deg 25deg 64m');
  });
});