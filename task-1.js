const categories = document.querySelectorAll(".item")
console.log(`В списке ${categories.length} категории.`)

const categoryNamesRef = document.querySelectorAll("h2")
let categoryNames = []
categoryNamesRef.forEach(name => categoryNames.push(name.innerText))

let categoryItemCount = []
categories.forEach(category => categoryItemCount.push(category.children[1].childElementCount))

let categoriesObject = {}
categoryNames.forEach((category, i) => (categoriesObject[category] = categoryItemCount[i]))

console.table(categoriesObject)
