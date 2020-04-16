/*
 * ==========
 * Kapal Noah 
 * ==========
 * 
 * Ketika Noah sedang memasukkan seluruh binatang yang ada ke dalam kapalnya (disebut sebagai Noah's Ark), dia mendapatkan sebuah masalah. 
 * Dia memasukkan binatang-binatang tersebut dalam bentuk array of objects. Para binatang tidak terurut sehingga sulit untuk menempatkan mereka di dalam 
 * kapalnya.
 * Untuk itu, Noah mendapatkan sebuah ide untuk mengelompokkan mereka ke dalam oject dengan key huruf depan dari masing-masing binatang tersebut dan valuenya berupa
 * array berisi binatang yang huruf depannya sesuai dengan key tersebut. Hal ini dikarenakan masing-masing object yang merepresentasikan binatang bisa memiliki isi property yang berbeda-beda.
 * Cara ini akan mempermudah Noah untuk memasukkan binatang ke dalam kapal karena binatang-binatang tersebut sudah dikelompokkan berdasarkan alfabet.
 * 
 * Beginilah contoh output yang diharapkan:
 *  {
 *     a: [], b: [], ...
 *   }
 * PERHATIAN: Urutan key alfabet di dalam object tidak harus terurut, lihatlah contoh jawaban test-case
 * 
 * Rules:
 * Dilarang menggunakan built-in function, kecuali:
 * - .push()
 * - .toUpperCase() dan .toLowerCase()
 * - Built-in for Math
 * - Built-in Informative (isNaN(), isArray(), isInteger)
 * - Built-in function yang mengubah type data ( string --> number / number --> string )
 * 
 */

function groupArk(animals) {
	//Implementasikan function ini
	var hurufDepan = [];
	var temp = [];
	var newAnimals = [];
	
//mengambil huruf depan

		for(var i in animals){
		  hurufDepan.push(animals[i]['nama'][0])
		  newAnimals.push(animals[i])  
		}
//console.log(newAnimals)		
//membuang nilai ganda pada hurufDepan
		for(var j =0; j<hurufDepan.length; j++){
			var flag = true
				for(var k=0; k<temp.length; k++){
					if(hurufDepan[j] == temp[k]){
						flag = false
					}
				}
            if(flag== true){
				temp.push(hurufDepan[j]);
				}
		}

//mengubah animals menjadi array baru
var obj = {}
var arr1 = []
var res = []
    
		for(var a=0; a<temp.length; a++){
			for(var b =0; b<newAnimals.length; b++){
				 if(temp[a] == newAnimals[b]['nama'][0]){
				   arr1.push(newAnimals[b])
                   
				        
				}
			}

			//for(var c=0 ; c<arr1.length; c++){
				//console.log(arr1)
				res.push(arr1)
				arr1 = []

			   obj[temp[a]] = res[a]
				

			//}	
			
			
		}
		//console.log(obj)
	//console.log(arr1)
	return obj
}


console.log(groupArk([
	{ nama: 'ayam', spesies: '', kelamin: 'jantan' },
	{ nama: 'gajah', spesies: 'mammalia', umur: 20 },
	{ nama: 'anoa', umur: 10 },
	{ nama: 'lalat' },
	{ nama: 'laron', kelas: 'insecta' },
	{ nama: 'zebra', spesies: 'mammalia' }
]))
/**
 {
 a: [
   { nama: 'ayam', spesies: '', kelamin: 'jantan' },
   { nama: 'anoa', umur: 10 }
 ],
 g: [ { nama: 'gajah', spesies: 'mammalia', umur: 20 } ],
 l: [ { nama: 'lalat' }, { nama: 'laron', kelas: 'insecta' } ],
 z: [ { nama: 'zebra', spesies: 'mammalia' } ]
}
*/

console.log(groupArk([
	{ nama: 'ayam', species: '', kelamin: 'jantan' },
	{ nama: 'gajah', species: 'mammalia', umur: 20 },
	{ nama: 'anoa', umur: 10 },
	{ nama: 'lalat' },
	{ nama: 'laron', kelas: 'insecta' },
	{ nama: 'zebra', kelas: 'mammalia' },
	{ nama: 'gurita', jenis: 'cephalopoda' },
	{ nama: 'penyu belimbing', umur: 50 },
	{ nama: 'kura-kura', spesies: 'tetsudae' },
	{ nama: 'kuda', jenis: 'mammalia' }
]))

/**
 {
 a: [
   { nama: 'ayam', species: '', kelamin: 'jantan' },
   { nama: 'anoa', umur: 10 }
 ],
 g: [
   { nama: 'gajah', species: 'mammalia', umur: 20 },
   { nama: 'gurita', jenis: 'cephalopoda' }
 ],
 l: [ { nama: 'lalat' }, { nama: 'laron', kelas: 'insecta' } ],
 z: [ { nama: 'zebra', kelas: 'mammalia' } ],
 p: [ { nama: 'penyu belimbing', umur: 50 } ],
 k: [
   { nama: 'kura-kura', spesies: 'tetsudae' },
   { nama: 'kuda', jenis: 'mammalia' }
 ]
}
*
*/