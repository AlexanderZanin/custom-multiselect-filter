export const indexOfSelected = (selectedCategory, option) => selectedCategory.selected.indexOf(option);

export const filterBy = function(filteringArray, prop, searchMatch) {
    return filteringArray.filter((item) => {

      const itemName = item[prop] ? item[prop] : item;

      return itemName.toLowerCase().indexOf(searchMatch) > -1;
    });
};
