et pars = function(version,channel,keyField){
    this._version = version;
    this._channel = channel;
    this._keyField = keyField;
    this.getVersion = function(){
      return this._version;
    }
    this.getChannel = function(){
      return this._channel;
    }
    this.getkeyField = function(){
      return this._keyField;
    }
    this.setVersion = function(version){
       this._version=version;
    }
    this.setChannel = function(channel){
       this._channel=channel;
    }
    this.setkeyField = function(keyField){
       this._keyField=keyField;
    }
    this.getKeyFields = function(objectArr){
        let arrayList = new Array();
        for(let i=0;i<objectArr.length;i++){
          arrayList.push(objectArr[i][channel]);
        }
      return arrayList;
    }
  }
  
  let MetadataParser = new pars(1,'channel','A');
  MetadataParser.setkeyField('B');
  console.log(MetadataParser.getkeyField());
  let objectArray = new Array();
  objectArray.push({channel:'A'});
  objectArray.push({channel:'B'});
  objectArray.push({channel:'C'});
  console.log(MetadataParser.getKeyFields(objectArray));
