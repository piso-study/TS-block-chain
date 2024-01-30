// 객체의 모양을 알려주기 위해 존재하다.
interface User {
	name: string;
}
interface User {
	firstName: string;
}
interface User {
	lastName: string;
}

const nico: User = {
	name: 'ss',
	lastName: 'ss',
	firstName: 'ss',
};

function Reacps() {
	abstract class User {
		constructor(protected firstName: string, protected lastName: string) {}

		abstract sayHi(name: string): string;
		abstract fullName(): string;
	}

	class Player extends User {
		fullName() {
			return `${this.firstName} ${this.lastName}`;
		}

		sayHi(name: string) {
			return `Hello ${name}. My name is ${this.fullName()}.`;
		}
	}
}

function implementsInterface() {
	// 인터페이스는 추상화보다 가벼워 User는 new 없이 Player는 많이 만들겠어
	interface User {
		firstName: string;
		lastName: string;
		sayHi(name: string): string;
		fullName(): string;
	}
	class Player implements User {
		constructor(public firstName: string, public lastName: string) {}
		fullName() {
			return `${this.firstName} ${this.lastName}`;
		}

		sayHi(name: string) {
			return `Hello ${name}. My name is ${this.fullName()}.`;
		}
	}
}

function typeAndInterface() {
	// type VS interface

	type Player = {
		name: string;
	};
	type PlayerPlus = Player & {
		age: number;
	};

	const p1: Player = {
		name: 'nico',
	};

	// type VS interface

	interface Player2 {
		name: string;
	}
	interface Player2 {
		age: number;
	}

	const p2: Player2 = {
		name: 'nico',
		age: 11,
	};
}
