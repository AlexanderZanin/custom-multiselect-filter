export const indexOfSelected = (selectedCategory, option) => selectedCategory.selected.indexOf(option);

export const filterBy = function(filteringArray, prop, searchMatch) {
    return filteringArray.filter((obj) => {
      const itemName = obj[prop].toLowerCase();

      return itemName.indexOf(searchMatch) > -1;
    });
};
