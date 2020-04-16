/**
 * Tugas kalian adalah membantu perekrutan tentara bayaran oleh perusahaan Umbrella Corp. 
 * Perusahaan ini menginginkan tentara-tentara yang memenuhi standar perekrutan mereka yang tinggi.
 * 
 * Function mercRecruiter menerima input berupa object yang merepresentasikan seorang tentara bayaran.
 * Function ini akan mengevaluasi apakah seorang tentara bayaran layak direkrut oleh Umbrella Corp. atau tidak.
 * Function ini menghasilkan output berupa objek yang berisi nama dan status kelulusan dari tentara bayaran tersebut.
 *
 * Format object yang merepresentasikan tentara
 * {
 *  name: '' (String berisi nama tentara tersebut),
 *  age : (Number umur tentara tersebut),
 *  skills: [] (Array berisi skills yang dimiliki tentara tersebut),
 *  weapons: [] (Array berisi senjata-senjata yang dimiliki tentara tersebut)
 * }
 * 
 * Tiap ciri-ciri (name,....,weapons) dari para tentara memiliki bobot nilai masing-masing.
 * Jika nilai ciri-ciri tentara tersebut 60 atau keatas. Maka tentara bayaran tersebut akan di hire oleh Umbrella Corp.
 * Berikut ini adalah bobot poin-poin ciri-ciri:
 * 1. Jika nama tentara tersebut mengandung unsur '.' (Contoh: 'D.' , 'A.' ,'M.' ), maka tentara ini akan mendapatkan 20 poin
 * 2. Untuk umur tidak berpengaruh kepada penilaian
 * 3. Jika tentara memiliki skill 'assassin', 'sabotage', atau 'rambo'. Maka dia akan mendapatkan 10 poin untuk masing-masing skill tersebut
 * 4. Jika tentara memiliki senjata 'great sword', 'katana', 'missile', dan 'sniper' maka dia akan mendapatkan 20 poin untuk masing-masing senjata tersebut.
 *
 * Jika nilai dapat mencapai 60, maka tentara tersebut 'Passed'. Jika tidak, maka dia 'Failed'.
 *
 * Berikut ini format output: {name: 'Nama Tentara', status: 'Failed/Passed }
 * 
 * Contoh:
 *
 * INPUT: {name: 'Drago', age: 15, skills: ['espionage', 'rambo'], weapons: ['knife', 'great sword', 'katana']}
 * OUTPUT: { name: 'Drago', status: 'Failed' }
 *
 *
 * Rules and Conditions:
 * 1. Asumsikan semua input pada test-case mengikuti batasan format object yang sudah dijelaskan diatas
 * 2. Dilarang menggunakan built-in function, kecuali:
 *     - .push()
 *     - .toUpperCase() dan .toLowerCase()
 *     - Built-in for Math
 *     - Built-in Informative (isNaN(), isArray(), isInteger)
 *     - Built-in function yang mengubah type data ( string --> number / number --> string )
 */

function mercRecruiter(mercenary) {
	//Implementasikan function ini
	
	var pointunsur = 0;
	var skill =['assassin', 'sabotage', 'rambo']
	var poinskills = 0;
	var weapon = ['great sword', 'katana', 'missile', 'sniper']
	var poinweapons = 0;
	var pointot = 0;
	var obj = {}
	
	
	

	for (var key in mercenary['name']){
		//console.log(mercenary['name'].length-1)
		
	
		

		if(mercenary['name'][key] == '.'){
			pointunsur+= 20
			
			
			}
      }
	  // console.log('poin1 ' + pointunsur)	
	//console.log(mercenary['name'])
	//console.log(newName)

	for (var j in mercenary['skills']){
		//console.log(mercenary['skills'][j])
		
		for(var a=0; a<skill.length; a++){
               
          if(mercenary['skills'][j] == skill[a]){
			  poinskills += 10
			  
			  
		  }

		}

	}
	//console.log(poinskills)

		for (var h in mercenary['weapons']){
			//console.log(mercenary['skills'][j])
			
			for(var c=0; c<weapon.length; c++){
				   
			  if(mercenary['weapons'][h] == weapon[c]){
				  poinweapons+=20
				  
				  
				  //pointot += (poinweapons * 20)
			  }
	
			}
		}
		
	//console.log(poinweapons)	
     pointot = poinweapons + poinskills + pointunsur
	   mercenary['points'] = pointot

	 if(mercenary['points'] < 60){
		 obj['name'] = mercenary['name']
		 obj['status'] = 'Failed'
		 }else{
		 
		 obj['name'] = mercenary['name']
		 obj['status'] = 'Passed'
			
		 }
	//console.log(mercenary)
	//console.log(poinweapons)
  //	console.log(mercenary)
	 
	return obj
	
}

//Test Cases
console.log(
	mercRecruiter({
		name: "Drago",
		age: 15,
		skills: ["espionage", "rambo"],
		weapons: ["knife", "great sword", "katana"]
	})
); //{ name: 'Drago', status: 'Failed' }

console.log(
	mercRecruiter({
		name: "D. Luffy",
		age: 30,
		skills: ["assassin"],
		weapons: ["gun", "knife"]
	})
) //{ name: 'D. Luffy', status: 'Failed' }

console.log(
	mercRecruiter({
		name: "Revan",
		age: 25,
		skills: ["jedi", 'sabotage', 'rambo'],
		weapons: ["lightsaber", "sniper", 'missile']
	})
) //{ name: 'Revan', status: 'Passed' }

console.log(
	mercRecruiter({
		name: "C. Redfield",
		age: 25,
		skills: ["jedi", 'sabotage', 'rambo'],
		weapons: ["lightsaber", "sniper", 'missile']
	})
) //{ name: 'C. Redfield', status: 'Passed' }