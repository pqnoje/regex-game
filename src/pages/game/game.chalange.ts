export class Chalange{
	private expressions: string[]

	constructor(expressions: string[]){
		this.expressions = expressions
	}

	public getChalangeRegularExpressions = () => {
		return this.expressions.map(e => {
			return new RegExp(e.replace(/\//g, ""))
		})
	}

	public static checkRegularExpressions = (inputExpressions, regularExpressionsX, regularExpressionsY) => {
		return inputExpressions.some((expression, i) => {
			return regularExpressionsX[i].test(expression) && regularExpressionsY[i].test(expression)
		})
	}

	public getExpressions = () => this.expressions
}