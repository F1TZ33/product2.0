
(function(){
  const input = document.getElementById('navSearch');
  if(!input) return;
  const norm = s => (s||'').toLowerCase().trim();
  input.addEventListener('input', () => {
    const q = norm(input.value);
    document.querySelectorAll('.nav-group').forEach(d => {
      const text = norm(d.innerText);
      const show = q === '' || text.includes(q);
      d.style.display = show ? '' : 'none';
      if(q && show) d.open = true;
      if(!q) d.open = false;
    });
  });
})();
