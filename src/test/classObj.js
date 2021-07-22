const fullNameMaxLength = 10;
export class Employee {
  _fullName = '';
  fullName() {
    return this._fullName;
  }
  fullNameMaxLength() {
    return fullNameMaxLength;
  }
  setFullName(newName) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error('fullName has a max length of ' + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}
