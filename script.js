//your JS code here. If required.
const res = document.getElementById("output");

const promises = [
	new Promise((resolve) =>{
	const time = Math.floor(Math.random() *3 +1) * 1000;
	setTimeOut(() => resolve ({ name:"promise 1", time: time/1000}), 1000);
	}),
	new Promise((resolve) =>{
	const time = Math.floor(Math.random() *3 +1) * 1000;
	setTimeOut(() => resolve ({ name:"promise 2", time: time/1000}), 1000);
	}),
	new Promise((resolve) =>{
	const time = Math.floor(Math.random() *3 +1) * 1000;
	setTimeOut(() => resolve ({ name:"promise 3", time: time/1000}), 1000);
	})
];

async function callfn(){
	await Promise.all(promises).then((result)=>{
		res.innerHTML=``;
		reult.forEach((item)=>{
			res.innerHTML +=`
   <tr>
   <td>$(item.name)</td>
   <td>$(item.time)</td>
   </tr>
   `;
	});
	}).catch((err)=>{
		console.log(err);
	});
}

callfn();