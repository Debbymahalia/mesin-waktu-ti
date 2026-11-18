var eras=[
 {y:"1940–1955",n:"Era tabung vakum",s:"1940-an",
  d:"Komputer pertama berukuran sebesar ruangan, memakai ribuan tabung vakum, boros listrik, dan sering rusak. Program dimasukkan lewat kartu berlubang.",
  t:["Tabung vakum sebagai saklar elektronik","Kartu berlubang (punch card)","Bahasa mesin"],
  w:["ENIAC selesai dibuat tahun 1946","Alan Turing merumuskan konsep mesin komputasi","John von Neumann mengusulkan arsitektur program tersimpan"]},
 {y:"1956–1963",n:"Era transistor",s:"1956",
  d:"Transistor menggantikan tabung vakum. Komputer jadi lebih kecil, lebih cepat, lebih hemat listrik, dan lebih andal. Bahasa pemrograman tingkat tinggi mulai dipakai.",
  t:["Transistor","Memori inti magnetik","FORTRAN dan COBOL"],
  w:["FORTRAN muncul tahun 1957","COBOL muncul tahun 1959","Grace Hopper berperan besar dalam pengembangan COBOL"]},
 {y:"1964–1980",n:"Era sirkuit terpadu",s:"1964",
  d:"Ribuan transistor dipadatkan dalam satu chip. Mainframe dipakai perusahaan besar, lalu mikroprosesor melahirkan komputer pribadi pertama.",
  t:["Sirkuit terpadu (IC)","Mikroprosesor","Sistem operasi UNIX"],
  w:["IBM System/360 diluncurkan tahun 1964","ARPANET menyala tahun 1969","Apple II dirilis tahun 1977"]},
 {y:"1981–1995",n:"Era komputer pribadi",s:"1981",
  d:"Komputer masuk ke rumah dan kantor. Tampilan grafis dengan ikon dan mouse membuat komputer mudah dipakai orang awam, dan World Wide Web mulai lahir.",
  t:["IBM PC dan sistem operasi MS-DOS","Antarmuka grafis (GUI) dan mouse","World Wide Web"],
  w:["IBM PC dirilis tahun 1981","Macintosh dirilis tahun 1984","Tim Berners-Lee menciptakan Web pada 1989–1991","Windows 95 dirilis tahun 1995"]},
 {y:"1996–2009",n:"Era internet",s:"1996",
  d:"Internet jadi bagian hidup sehari-hari: mesin pencari, surel, toko daring, dan media sosial. Ponsel pintar mulai mengubah cara orang mengakses informasi.",
  t:["Mesin pencari dan e-mail","Media sosial dan e-commerce","Ponsel pintar layar sentuh"],
  w:["Google berdiri tahun 1998","Wikipedia diluncurkan tahun 2001","Facebook berdiri tahun 2004","iPhone diperkenalkan tahun 2007"]},
 {y:"2010–kini",n:"Era cloud dan AI",s:"2010",
  d:"Data disimpan dan diolah di cloud, hampir semua orang membawa ponsel pintar, dan kecerdasan buatan mulai membantu menulis, menerjemahkan, dan membuat gambar.",
  t:["Komputasi awan (cloud)","Big data dan machine learning","AI generatif","Internet of Things"],
  w:["Aplikasi ojek daring dan dompet digital tumbuh pesat","Pandemi 2020 mempercepat belajar dan kerja daring","ChatGPT dirilis akhir 2022"]}
];
var era=document.getElementById('era'),sl=document.getElementById('slider'),stops=document.getElementById('stops');
eras.forEach(function(e,i){
  var b=document.createElement('button');b.type='button';b.textContent=e.s;
  b.setAttribute('aria-label','Era '+e.y);
  b.addEventListener('click',function(){sl.value=i;show(i)});
  stops.appendChild(b);
});
function fill(id,arr){document.getElementById(id).innerHTML=arr.map(function(x){return '<li>'+x+'</li>'}).join('')}
function show(i){
  var e=eras[i];
  era.setAttribute('data-e',i);
  document.getElementById('year').textContent=e.y;
  document.getElementById('title').textContent=e.n;
  document.getElementById('desc').textContent=e.d;
  fill('tech',e.t);fill('who',e.w);
  Array.prototype.forEach.call(stops.children,function(b,k){b.setAttribute('aria-pressed',k==i)});
}
sl.addEventListener('input',function(){show(+sl.value)});
show(0);