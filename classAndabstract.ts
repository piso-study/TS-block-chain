function normalclass() {
	class Player {
		constructor(private firstName: string, private lastName: string, public nickname: string) {}
	}

	const nico = new Player('nico', 'las', '니꼬');
	nico.nickname;
}

function abstractClss() {
	abstract class User {
		constructor(private firstName: string, private lastName: string, public nickname: string) {}
	}

	class Player extends User {}

	const nico = new Player('nico', 'las', '니꼬');
	nico.nickname;
}

function methodInClass() {
	abstract class User {
		constructor(private firstName: string, private lastName: string, public nickname: string) {}

		getFullName() {
			return `${this.firstName} ${this.lastName}`;
		}
	}

	class Player extends User {}

	const nico = new Player('nico', 'las', '니꼬');
	nico.nickname;
	nico.getFullName();
}

function abstractMethodClass() {
	abstract class User {
		constructor(private firstName: string, private lastName: string, public nickname: string) {}

		abstract getNickName(): void;

		getFullName() {
			return `${this.firstName} ${this.lastName}`;
		}
	}

	class Player extends User {
		getNickName() {
			console.log(this.nickname);
		}
	}

	const nico = new Player('nico', 'las', '니꼬');
	nico.nickname;
	nico.getFullName();
}
function reacpOfclassAbstract() {
	type Words = {
		[key: string]: string;
	};

	class Dict {
		private words: Words;
		constructor() {
			this.words = {};
		}
		add(word: Word) {
			if (this.words[word.term] === undefined) {
				this.words[word.term] = word.def;
			}
		}

		def(term: string) {
			return this.words[term];
		}
	}

	class Word {
		constructor(public term: string, public def: string) {}
	}

	const kimchi = new Word('kimchi', '한국의 음식');
	const dict = new Dict();
	dict.add(kimchi);
	dict.def('kimchi');
}
