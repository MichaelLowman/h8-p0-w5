/**
 * First in First Out (FIFO)
 *
 * Pada soal ini kalian diminta untuk membuat sebuah simulasi array yang merepresentasikan suatu queue (antrian).
 * Kalian akan diberikan sebuah array berisi nama-nama pengunjung sebagai input.
 * Dari urutan pengunjung ini, kalian harus membuat sebuah program yang akan mengembalikan orang pertama dalam queue dan sisa dari queue tersebut.
 *
 * Rules:
 * - Dilarang menggunakan built-in selain .push()
 * - Wajib menuliskan PSEUDOCODE!
 */


 /**
  * PSEUDOCODE
  * set panggil array value zero
  * set sisa array value zero
  * 
  * IF arr value is string zero 
  * DISPLAY 'Tidak ada orang dalam antrian'
  * 
  * ELSE
  *  
  * GET ARR indeks 0 value and SET to Panggil  
  *  Begin looping
  *  FOR Set i to 0 ; i less then arr.length; i++
  *  SET flag value with false
  *  FOR set j to 0; j less then panggil.length; j++
  *  IF arr [index i] equal to panggil [index j]
  *  SET Flag to True
  *  END IF
  * 
  *  in FOR i Loop
  *  IF Flag equal to false
  *  GET ARR index i value and SET to sisa
  *  END IF
  * 
  *  RETURN SISA
  *  IF sisa Value is empty
  *  DISPLAY  'antrian berikutnya :' + panggil + 'antrian sudah kosong'
  *  END IF
  * 
  *  DISPLAY 'antrian berikutnya :' + panggil + ' ' + 'sisa antrian :' + sisa
  * 
  * 
  * 
  * 
*/

function fifo(arr) {
	//implementasikan function ini
	var panggil = []
	var sisa = []

	if(arr == ''){
		return('tidak ada orang dalam antrian')
	}else{
		panggil.push(arr[0])

		for(i=0; i<arr.length; i++){
			var flag = false
			for(j=0; j<panggil.length; j++){
				if(arr[i] == panggil[j]){
					flag = true
				}
			}
			
			if(flag == false){
				sisa.push(arr[i])
			}
			  
				
				
			
		}
	   
		
		
	}
	if(sisa == 0){
		return ('orang yang berikutnya dipanggil : ' + panggil + '  ' + 'antrian sudah kosong')
  }
  
	return ('antrian berikutnya :' + panggil + ' ' + 'sisa antrian :' + sisa)

}

console.log(fifo(["rifqy", "ariel", "ran", "sinichi", "rose"])); //Orang yang berikutnya dipanggil: rifqy. Isi sisa antrian:  ariel, ran, sinichi, rose.
console.log(fifo([])); //Tidak ada orang dalam antrian.
console.log(fifo(["rani"])); //Orang yang berikutnya dipanggil: rani. Isi sisa antrian kosong.
console.log(fifo(["ayu", "audrick"])); //Orang yang berikutnya dipanggil: ayu. Isi sisa antrian:  audrick.
