const photoSlideShow = {                      
    photoList: ['pic1', 'pic2', 'pic3', 'pic4'], //An array called photoList that contains the names of the photos as strings
    currentPhotoIndex: 0, //An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
  
    //A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
    nextPhoto: function() {
      if (this.currentPhotoIndex < this.photoList.length - 1) {
        this.currentPhotoIndex++;
        console.log(this.photoList[this.currentPhotoIndex]);
      } else {
        console.log("End of slideshow");
      }
    },
  //A prevPhoto() function that does the same thing, but backwards.
    prevPhoto: function() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
        console.log(this.photoList[this.currentPhotoIndex]);
      } else {
        console.log("Start of slideshow");
      }
    },
//A function getCurrentPhoto() that returns the current photo from the list.
    getCurrentPhoto: function() {
      return this.photoList[this.currentPhotoIndex];
    }
  };
  
  photoSlideShow.nextPhoto();
  photoSlideShow.prevPhoto();
  photoSlideShow.prevPhoto();
  photoSlideShow.prevPhoto();