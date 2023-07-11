
const str = 'heLlo riKkei academy';

function capitallize(textConverter) {
    let mystr = textConverter.toLowerCase().split(" ");
    console.log(mystr);
  
    for (let i = 0; i < mystr.length; i++) {
      mystr[i] = mystr[i][0].toUpperCase() + mystr[i].slice(1);
    }
    return mystr.join(" ");
  }
  let a = "this is A tEst";
  let b = "heLlo riKkei academy";


  console.log(capitallize(a));
  console.log(capitallize(b));
  