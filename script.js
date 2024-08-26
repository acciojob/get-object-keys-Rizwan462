//your JS code here. If required.
let student = {
	name:"Sushil",
}
Object.prototype.getkeys= function() {
	return Object.keys(this);
};
console.log(student.getkeys());
