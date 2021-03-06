module.exports={
	BlobList: BlobList,
};

function BlobList(){
	var nextBlobID=1000;
	var blobs=[];
	this.test="Blob Test";

	this.clearAll=function(){
		blobs=[];
	};

	this.updateBlob=function(id, x, y, vel, ttl, maxX){
		//console.log("update blob "+id+" with x:"+x);
		var b=this.findBlob(id);
		if(b) {
			b.updateVals(x,y, vel, ttl);
			b.update(maxX);
		}
		//return blob data structured as an array
		if(!b) return [];
		return [b.getPos()];
	};

	this.findBlob=function(id){
		return blobs.find(function(blob){
			return blob.getID()===id;
		});
	};

	this.newBlob=function(x,y, dev){
		var b=new Blob(x,y, dev);
		blobs.push(b);
		return [b.getPos()];
	};

	this.run=function(maxX){
		for(var i=blobs.length-1; i>=0; i--){
			if(!blobs[i].update(maxX)) blobs.splice(i,1);
		}
	};

	this.getBlobs=function(){
		var blobData=[];
		blobs.forEach(function(blob){
			blobData.push(blob.getPos());
		});
		return blobData;
	};

	this.blobsByNarrative=function(minBlobs, maxBlobs, ringLengthPixels){
		console.log("!!!! set blobs according to narrative");
		//in here take the value of minBlobs and maxBlobs
		//add or remove blobs as needed to comply
		if(blobs.length<minBlobs){
			for(var i=blobs.length; i<minBlobs; i++){
				console.log("creating new narrative blob for dev 55555");
				blobs.push(new Blob(Math.random()*ringLengthPixels, Math.random()*100, 55555));
			}
		}
		if(blobs.length>maxBlobs){
			blobs.splice(maxBlobs, blobs.length-maxBlobs);
		}
	};


	/**********************************************
		Constructor for Blob object
	***********************************************/
	function Blob(x, y, devid){
		var ttl=1000;
		var vel={};
		var id=nextBlobID++;
		// console.log("New Blob ${id} from ${devid} at ${x}, ${y}");
		console.log("New Blob "+id+" from "+devid+" at "+x+", "+y);

		this.updateVals=function(ux,uy, uVel, uTTL){
			x=ux;
			y=uy;
			vel=uVel;
			ttl=uTTL;
		};

		this.getID=function(){
			return id;
		};

		this.update=function(maxX){
			//ttl--;
			if(x>=maxX) {
				x-=maxX;
				console.log("x wrapped back to start");
			} else if(x<0){
				x+=maxX;
				console.log("x wrapped back to end");
			} else {
				// console.log("x is within limits");
			}
			return ttl>0;
		};

		this.getPos=function(){
			return {x:x, y:y, id:id, vel: vel, ttl:ttl};
		};
	}

}


