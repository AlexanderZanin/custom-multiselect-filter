export const indexOfSelected = (selectedCategory, option) => selectedCategory.selected.indexOf(option);

export const filterBy = function(filteringArray, prop, searchMatch) {
    return filteringArray.filter((obj) => {
      if (!obj[prop]) return;
      const itemName = obj[prop].toLowerCase();

      return itemName.indexOf(searchMatch) > -1;
    });
};
