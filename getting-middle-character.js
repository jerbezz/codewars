function getMiddle(s)
{
  let splitArray = s.split("")
  if (splitArray.length % 2 !== 0) {
    return splitArray[(splitArray.length - 1) / 2] 
  } else {
    let newString = []
    return (splitArray[(splitArray.length / 2) - 1] + splitArray[splitArray.length / 2]) 
  }
}