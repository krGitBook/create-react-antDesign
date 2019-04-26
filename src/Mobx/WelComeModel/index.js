import mobx, {
	observable,
	action,
} from 'mobx';

//全局store
let State = observable({
	name: 'dd',
	age:10
});

//action
State.submitVisit = action(function(params,callback) {

	this.name = "ppp";
	this.age=19
});

export default State;
