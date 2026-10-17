function send(f,ok,err){
  var a=f.getAttribute('action')||'';
  if(!a||a.indexOf('YOUR_')>-1){ok.hidden=false;f.reset();return}
  if(a.indexOf('sibforms.com')>-1){fetch(a,{method:'POST',body:new FormData(f),mode:'no-cors'}).then(function(){ok.hidden=false;err.hidden=true;f.reset()}).catch(function(){err.textContent='Something went wrong. Please try again.';err.hidden=false});return}
  fetch(a,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}})
    .then(function(r){if(r.ok){ok.hidden=false;err.hidden=true;f.reset()}else{throw 0}})
    .catch(function(){err.textContent='Something went wrong. Email [[EMAIL]] instead.';err.hidden=false});
}
(function(){
  var btn=document.getElementById('menuBtn'),panel=document.getElementById('mobileNav');
  function set(open){btn.setAttribute('aria-expanded',open?'true':'false');btn.setAttribute('aria-label',open?'Close menu':'Open menu');panel.hidden=!open}
  btn.addEventListener('click',function(){set(panel.hidden)});
  panel.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden){set(false);btn.focus()}});
  window.addEventListener('resize',function(){if(window.innerWidth>900&&!panel.hidden)set(false)});
})();

(function(){
  var f=document.getElementById('contactForm'); if(!f) return;
  var err=document.getElementById('cf-err'), ok=document.getElementById('cf-ok');
  f.addEventListener('input',function(){err.hidden=true});
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var n=f.elements.name.value.trim(), m=f.elements.message.value.trim(), em=f.elements.email.value.trim();
    if(!n||!m||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){err.hidden=false;ok.hidden=true;return}
    send(f,ok,err);
  });
})();

(function(){
  var f=document.getElementById('bookForm'); if(!f) return;
  var err=document.getElementById('bf-err'), ok=document.getElementById('bf-ok');
  f.addEventListener('input',function(){err.hidden=true});
  f.addEventListener('submit',function(e){e.preventDefault();var v=(f.elements.EMAIL||f.elements.email).value.trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){err.hidden=false;ok.hidden=true;return}
    send(f,ok,err);});
})();
