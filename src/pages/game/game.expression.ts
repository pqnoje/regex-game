export class Expression{
	private expression
	constructor(expression: string){
		this.expression = expression
	}
	public getExpression = () => this.expression
}