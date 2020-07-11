        document.getElementById('getJSON').addEventListener('click', displayJSON);



        function displayJSON(){
            let text="<h2>Surah Al-Baqarah: 1-5</h2><p>";

            fetch('http://api.alquran.cloud/v1/surah/2?offset=0&limit=5')
            .then((res) => res.json())
            .then(function(data){
                for(var i=0;i<data.data.ayahs.length;i++){
                    text = `${text}<b>ayat</b> ${data.data.ayahs[i].numberInSurah}: ${data.data.ayahs[i].text}<br/><br/>` 
                              
                }
                text = `${text}</p></br><p>Catatan: Ayat pertama menghasilkan data yang salah (data dari API), akan tetapi tetap ditampilkan untuk keperluan pembelajaran</p></br>oleh Naufal Izza (16519516), IF'19`
                document.getElementById('jsonOutput').innerHTML = text
            })
            .catch((err) => console.log('error!'))
        }