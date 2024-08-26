//your JS code here. If required.
const student = {
	name:"Sushil",
}
Object.prototype.getkeys= function() {
	return Object.keys(this);
};
const myObj = student.getkeys();
console.log(myObj);
