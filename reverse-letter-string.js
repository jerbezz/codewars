function reverseWords(str) {
  
    const strings = str.split(' ')
    const temp = strings.map((item, i)=> {
     const rev = item.split('').reverse()
    return rev.join('')
    })
    return temp.join(" ")
  
  }