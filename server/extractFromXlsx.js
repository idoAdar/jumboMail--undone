const xlsx = require('xlsx');
const workbook = xlsx.readFile('brands.xlsx');

exports.readXlsx = () => {
    const content = workbook.Sheets['Sheet1'];
    const data = xlsx.utils.sheet_to_json(content);
    return data;
}