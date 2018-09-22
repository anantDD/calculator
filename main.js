const $1 = $('#1');
const $2 = $('#2');
const $3 = $('#3');
const $4 = $('#4');
const $5 = $('#5');
const $6 = $('#6');
const $7 = $('#7');
const $8 = $('#8');
const $9 = $('#9');
const $0 = $('#0');

const $p = $('#plus');
const $m = $('#minus');
const $d = $('#divis');
const $x = $('#mult');

const $dot = $('#dot');
const $eq = $('#equalto');
const $ac = $('#ac');
const $ce = $('#ce');

const $dis = $('#display');
const $his = $('#history');

const numArray =['1','2','3','4','5','6','7','8','9','0'];
const opArray = ['/', 'x', '+', '-'];
var ceUsed = false;


                  
var result=[];
var pc='';
var cc='';

//AC
$ac.on('click',function(){
cc='';
$dis.html('0');
$his.html('0');
  result =[];
pc='';
ceUsed=false;
});

//NUMBERS

  $1.on('click',function(){
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id; 
});
 
  $2.on('click',function(){
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
  });

  $3.on('click',function(){
    
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
  });

  $4.on('click',function(){
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
  });

  $5.on('click',function(){
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
  });

  $6.on('click',function(){
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
  });

  $7.on('click',function(){  
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
  });

  $8.on('click',function(){
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
  });

  $9.on('click',function(){
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
  });

  $0.on('click',function(){
    if(numArray.includes(pc)){
    cc=this.id;
    numberWork(this.id,cc,pc);
    pc=this.id;
    }
  });

$dot.on('click',function(){
  cc = this.id;
  let text= $dis.text();    //CHECKING FOR PREVIOUS DOTS. IF PRESENT DOES NOTHING. 
  if(text==='' || text==='0' || opArray.includes(pc) || pc==='='){// AFTER EQUALTO OR OPERATOR APPENDS A 0 BEFORE THE DOT.
    $dis.html('0.');
    result.push('0.');
    $his.html(result);
    pc=this.id;
  }else if(!text.includes('.')){
    numberWork('.',cc,pc);
  pc = this.id;
  }else{
  
  }
 // console.log(cc,pc,text);
});

//OPERATORS
 
$x.on('click',function(){
  cc='x';
 opWork(cc,pc);
  pc='x';
});

$p.on('click',function(){
  cc='+';
 opWork(cc,pc);
  pc='+';
});

$m.on('click',function(){
  cc='-';
 opWork(cc,pc);
  pc='-';
});

$d.on('click',function(){
  cc='/';
 opWork(cc,pc);
  pc='/';
});

$x.on('click',function(){
  cc='x';
 opWork(cc,pc);
  pc='x';
});

//EQUALTO
$eq.on('click',function(){
  
  if(numArray.includes(pc)){
    cc='=';
    //$his.html(calculation());
    $dis.html(calculation());
    $his.html(result.join('') + '=' + calculation());
    pc='=';
  }
});

//CE
$ce.on('click',function(){
  let lastOp = findIndexOfLastOperator();
  $dis.html(lastOp);
  if(cc!=='ce'){        //IF SOMETHINGELSE WAS USED AFTER PRESSING CE. SO CE IS NOT DIRECTLY PRESSED TWICE AND THEREFORE EVERTHYING IS NOTREMOVED.
    ceUsed=false;
  }
  if(pc==='='){
    result=[];
  cc='';
    pc='';
    $dis.html('0');
    $his.html('0');
    ceUsed = false;
  }else if(opArray.includes(pc)){
           result = result.slice(0,lastOp);
  pc=result[lastOp];
  $dis.html('0');
  $his.html(result);
    //ceUsed=true;
    
           }
  else if(lastOp && ceUsed===false){
    result = result.slice(0,lastOp+1);
  pc=result[lastOp];
  $dis.html('0');
  $his.html(result);
    ceUsed=true;
    cc='ce';
  }else {
    result=[];
  cc='';
    pc='';
    $dis.html('0');
    $his.html('0');
    ceUsed = false;
  }
});

//SOME USEFULE FUNCTIONS 

function numberWork(num,cc,pc){
result.push(num);
if(pc===''){
  $dis.html(num);
  $his.html(result);
}
else if(numArray.includes(pc)){
  $dis.append(num);
  $his.html(result);
}
else if(pc=='dot'){
  $dis.append(num);
  $his.html(result);
}
else if(opArray.includes(pc)){
  //result =[];
  $dis.html(num);
  $his.html(result);
}else if(pc=='='){
  result=[];
  $dis.html(num);
  $his.html(result);
}
}
function printResult(){
  return result.join('');
}
function opWork(cc,pc){
  if(numArray.includes(pc)){
    $dis.html(cc);
    result.push(cc);
    $his.html(result);
  }else if(pc==='='){
    let a= calculation().toString().split();
    result=[];
    result=a.concat(result);
    $dis.html(cc);
    result.push(cc)
  }
}
function calculation(){
  var newArr = [];
  var opArr = [];
  var j = 0;
  var q = 0;
  for (let i = 0; i < result.length; i++) {
	  if (result[i] === 'x' || result[i] === '/' || result[i] === '-' || result[i] === '+') {
      opArr.push(result[i]);
      newArr.push(result.slice(q, i).join(''));
      q = i + 1;
    }
  }
newArr.push(result.slice(q).join(''));
  newArr = newArr.map(function(num){return parseFloat(num);})
  function getTotal(total,number, index){
	let op = opArr[index-1];
  let num = parseFloat(number);
  
  if(op == '+'){
  	return total + num;
  }else if (op =='x'){
  	return total * num;
  }else if (op =='/'){
  	return total/num;
  }else if (op == '-'){
  	return total - num;
  }else {
  return num;
  }
}

  var final=Math.round(newArr.reduce(getTotal)*1000)/1000;
  return final;
}

function findIndexOfLastOperator(){
  var index;
  $dis.html('asdfkjadfsjkf');
  for (let i = 0; i < result.length; i++) {
	  if (result[i] === 'x' || result[i] === '/' || result[i] === '-' || result[i] === '+') {
      index = i;
    }
  }
   if(index){
  return index;}
}