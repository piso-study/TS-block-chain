/**
 * Call Signatures
 * 어떻게 호출해야하는지 알려주는 것.
 * 마우스 호버시 보이는 것.
 */
function callSignatures() {
	// 원래 표현
	function add1(a: number, b: number) {
		return a + b;
	}
	const add2 = (a: number, b: number) => a + b;
	const add3 = (a: number, b: number) => a + b;

	// 분리가 가능해진다.
	type Add = (a: number, b: number) => number;
	const add: Add = (a, b) => a + b;
}

/**
 * Overloading
 * 함수가 여러개의 call signature를 가질 때 오버로딩이 발생한다.
 */
function overLoading() {
	type Add = {
		(a: number, b: number): number;
		(a: number, b: string): number;
	};

	const add: Add = (a, b) => {
		if (typeof b === 'string') return a;
		return a + b;
	};
	/**
	 * Router.push({* path:"/home"})
	 * "/home"
	 */
}
