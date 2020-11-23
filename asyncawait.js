function myintro(){
    let intro= {fname:'Nabin',
    lname:'Lama', 
    address:'Manamaiju',
    age:23}
    return intro;
}

async function getintro(){
	try{
		var intro= await myintro();
		console.log(intro);

	}
	catch(e){
		console.log("Error is :", e)

	}
}
getintro();
