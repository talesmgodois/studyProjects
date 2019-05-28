var collection = {
    2548: {
      album:"Slippery when wet",
      artist:"Bon Jovi",
      trecks: [
        "let it rock",
        "you give love a bad name"
      ]
    },
    2468: {
      album:"1999",
      artist:"Bon Jovi",
      trecks: [
        "1999",
        "Little Red Corvette"
      ]
    }, 
    1245:{
      artist:"Roberto Palmer",
      tracks:[]
    },
    5439: {
      album: "ABBA GOld"
    }
    
  }
  
  let collectionCopy = JSON.parse(JSON.stringify(collection));
  
  function updateRecords(id, prop, value) {
    if(prop === "tracks" && value !== ""){
      if(collection[id][prop]) {
        collection[id][prop].push(value);
      } else {
        collection[id][prop] = [value];
      }
    } else if(value !== ""){
      collection[id][prop] = value;
    } else{
       delete collection[id][prop];
    }
    return collection;
    
  }
  
  console.log(updateRecords(2548,"album","Loose Goose"));
  console.log(updateRecords(2468,"artist","SUm 21"));
  console.log(updateRecords(1245,"artist","Michael jaclson"));
  console.log(updateRecords(5439,"album","Hotel Calidornia"));