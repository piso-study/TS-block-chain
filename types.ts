/**
 * 타입을 명시할 수 있다.
 * 굳이 명시하여 할 필요가 있을까?
 * 변수에 할당되는 값으로 타입을 유추했듯이
 * TS에서 Types by Inference 타입추론으로 가능하기에
 * 값을 타입에 맞게 의미있게 넣어주자.
 */

function typesInference() {
	// 동일한 타입으로 TS에서 타입추론하기에 직관적인 ByInfer가 더 낫지 않을까?
	let numByWrite: number = 100;
	let numByInfer = 100;

	let numArrByWrite: number[] = [100, 200, 300];
	let numArrByInfer = [100, 200, 300];
}

/**
 * object 프로퍼티가 존재할 수도 안할수도 있는 경우
 * ?로 선택적(optional) 프로퍼티임을 명시할 수 있다.
 *
 * 이러한 optioanl 프로퍼티 조건문 이용시 TIP 실행문
 */
function optionalProperties() {
	const player: { name: string; age?: number } = {
		name: 'nico',
	};

	// player.age가 undefined 인 falsy한 값이라면 && 연산자에서 false를 반환
	if (player.age && player.age < 10) {
		console.log(player.age);
	}
}

/**
 * 타입 여러 번 반복되니
 * type 키워드 == type alias
 */
function declareType() {
	type Player = {
		name: string;
		age?: number;
	};

	const pl1: Player = {
		name: 'player 1',
	};
	const pl2: Player = {
		name: 'player 2',
		age: 2,
	};

	console.log(pl1, pl2);
}

/**
 * argument 함수의 매개변수
 * return 타입
 * 지정 가능합니다.
 */
function returnAndArgument() {
	type Player = {
		name: string;
		age?: number;
	};

	function playerMaker(name: string): Player {
		return {
			name: name,
		};
	}

	const pl3 = playerMaker('player 3');
	pl3.age = 3;
}

// readonly 속성이 있음 TS로 immutuable 하게 만들 수 있다.
type Player = {
	readonly name: string;
	age?: number;
};

const playerMaker = (name: string): Player => ({ name });
const pl4 = playerMaker('player 4');

console.log(pl4.name);

//Tuple의 정의
const player1: [string, number, boolean] = ['name', 12, true];
// tuple + readonly
const player2: readonly [string, number, boolean] = ['name', 12, true];
