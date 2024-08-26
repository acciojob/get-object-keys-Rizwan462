//your JS code here. If required.

Object.prototype.getKeys= function() {
	return Object.keys(this);
};

const student = {
	name:"Sushil",
}
console.log(student.getKeys());

