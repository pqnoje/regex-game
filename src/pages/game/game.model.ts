export class Game{
	private inputExpressions: string[]
	private isValid: boolean

	constructor(){ 
		this.inputExpressions = []
		this.isValid = false
	} 

	public getInputExpressions = () => this.inputExpressions

	public setValidity = (isValid) => {
		this.isValid = isValid
	}

	public getValidity = () => this.isValid
}