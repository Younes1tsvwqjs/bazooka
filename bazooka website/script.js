
let cart=JSON.parse(localStorage.getItem('bzcart')||'[]');
function save(){localStorage.setItem('bzcart',JSON.stringify(cart));count()}
function count(){document.querySelectorAll('.count').forEach(x=>x.textContent=cart.length)}
function add(n,p){cart.push({name:n,price:p});save();msg('تمت إضافة '+n+' إلى السلة 🛒')}
function msg(t){let x=document.getElementById('toast');if(!x)return;x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2200)}
function openCart(){let m=document.getElementById('modal');if(!m)return;let l=document.getElementById('list');if(!cart.length)l.innerHTML='<div style="text-align:center;padding:30px;color:#8999ad">السلة فارغة 🎮</div>';else{l.innerHTML=cart.map((x,i)=>'<div class="item"><span>'+x.name+'</span><b>'+x.price.toLocaleString('ar-EG')+' ج.م <button onclick="removeItem('+i+')" style="background:none;border:0;color:#f55">✕</button></b></div>').join('');let t=cart.reduce((a,x)=>a+x.price,0);l.innerHTML+='<h3>الإجمالي: <span class="price">'+t.toLocaleString('ar-EG')+' ج.م</span></h3><button class="primary" style="width:100%" onclick="msg(\'تم تجهيز الطلب — نسخة تجريبية ✨\');closeCart()">إتمام الطلب</button>'}m.classList.add('open')}
function closeCart(){document.getElementById('modal')?.classList.remove('open')}
function removeItem(i){cart.splice(i,1);save();openCart()}
function reveal(){let io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e))}
document.addEventListener('DOMContentLoaded',()=>{count();reveal()})
