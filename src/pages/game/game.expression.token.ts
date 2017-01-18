export class Token{
  private tokens
  
  constructor(){
    this.tokens = {
      characters: ['A', 'B', 'C', '1', '2', '3'],
      qualifiers: ['?', '*', '+', '{1}'],
      metaSequences: ['.', '\\s', '\\S', '\\d', '\\D', '\\w', '\\W']
    }
  }

  public getTokens = () => this.tokens
}