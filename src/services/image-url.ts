const getCroppedImageUrl = (url: string) => {
  //this API support cropping the image via the URL by adding 'crop' to the URL itself with dimensions
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
};

export default getCroppedImageUrl;
