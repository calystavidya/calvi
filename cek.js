  var id_nama = document.getElementById("nama");
  var id_nilai = document.getElementById("nilai");
  var id_tamp = document.getElementById("tampilan");
  
  function kirim(){
    id_tamp.innerText = id_nama.value +", "+ id_nilai.value; 
  }