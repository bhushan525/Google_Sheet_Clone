const tHeadRow=document.getElementById('table-heading-row');
const tBody=document.getElementById('table-body');

//ADDING FUNCTIONAL BUTTTONS
const bold=document.getElementById('bold-button');
const italic=document.getElementById('italic-button');
const underline=document.getElementById('underline-button');
const left=document.getElementById('left-align');
const center=document.getElementById('center-align');
const right=document.getElementById('right-align');
const fontSizeDropdown=document.getElementById('font-size');
const fontFamilyDropdown=document.getElementById('font-family');
const bgcolor=document.getElementById('bg-color');
const textcolor=document.getElementById('text-color');
const cutButton=document.getElementById('cut');
const copyButton=document.getElementById('copy');
const pasteButton=document.getElementById('paste');
let cutCell={};

//ROWS AND COLUMNS IN CELL
const cols=26;
const rows=100;
//to get currentcell
let currentCell;
for(let col=0;col<cols;col++){
   let th=document.createElement('th');
  th.innerText=String.fromCharCode(col+65);
    tHeadRow.append(th);
}
for(let row=1;row<=rows;row++){
let tr=document.createElement('tr');
let th=document.createElement('th');
th.innerText=row;
tr.append(th);
//need to append lot of td's here(26)
for(let col=0;col<cols;col++){
    let td=document.createElement('td');
    //to make every cell editable
    td.setAttribute('contenteditable','true');
  //to diffenenciate betn cells we need to pass id's
  //uniqye row and unique column(A1,B1 etc)
    td.setAttribute('id',`${ String.fromCharCode(col+65)}${row}`);

    //to add focus event on cell
    td.addEventListener('focus',(event)=>onfocus(event));

    //adding cell in a row
    tr.append(td);
   
}
tBody.append(tr)
}

function onfocus(event){
   //event needs to be passed in function while calling
  // console.log(event.target);
   currentCell=event.target;
   document.getElementById('current-cell').innerText=currentCell.id;

}
//To make text bold after click
bold.addEventListener('click',(event)=>{
  
  if(currentCell.style.fontWeight==='bold'){
    currentCell.style.fontWeight='normal';
    bold.style.backgroundColor='white';
  }
  
 else {
  currentCell.style.fontWeight='bold';
  bold.style.backgroundColor='yellow';
 }
})

//To make text italic after click
italic.addEventListener('click',(event)=>{
 
  if(currentCell.style.fontStyle==='italic'){
    currentCell.style.fontStyle='normal';
    italic.style.backgroundColor='white';
  }
  
 else {
  currentCell.style.fontStyle='italic';
  italic.style.backgroundColor='yellow';
 }
})

//To make undeline under text after click
underline.addEventListener('click',(event)=>{
  
  if(currentCell.style.textDecoration==='underline'){
    currentCell.style.textDecoration='none';
    bold.style.backgroundColor='transparent';
  }
  
 else {
  currentCell.style.textDecoration='underline';
  bold.style.backgroundColor='yellow';
 }
})

//To align text left after click
left.addEventListener('click',(event)=>{
  currentCell.style.textAlign='left';
 })

 //To align text center after click
 center.addEventListener('click',(event)=>{
  currentCell.style.textAlign='center';
 })

 //To align text to right after click
right.addEventListener('click',(event)=>{
 currentCell.style.textAlign='right';
})

//dropdown to adjust size 
fontSizeDropdown.addEventListener('change',(event)=>{
  currentCell.style.fontSize=fontSizeDropdown.value;
})

//dropdown to adjust font family
fontFamilyDropdown.addEventListener('change',(event)=>{
  currentCell.style.fontFamily=fontFamilyDropdown.value;
})

//change bgcolor of the cell
bgcolor.addEventListener('input',()=>{
  currentCell.style.backgroundColor=bgcolor.value;
})

//change textcolor of the cell
textcolor.addEventListener('input',()=>{
  currentCell.style.color=textcolor.value;
})


let lastPressedButton;
//cut Button
cutButton.addEventListener('click',()=>{
  cutCell={
    style:currentCell.style.cssText,
    text:currentCell.innerText
  }
  currentCell.innerText='';
  currentCell.style=null;
  lastPressedButton='cutButton';
})

//copy button
copyButton.addEventListener('click',()=>{
  cutCell={
    style:currentCell.style.cssText,
    text:currentCell.innerText
  }
  // currentCell.innerText='';
  // currentCell.style=null;
  lastPressedButton='copyButton';
})

//paste button
pasteButton.addEventListener('click',()=>{
  currentCell.innerText=cutCell.text;
 currentCell.style.cssText=cutCell.style;
 if(lastPressedButton==='cutButton'){
  cutCell={};
 }
})


